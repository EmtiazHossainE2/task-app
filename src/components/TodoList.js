import React, { useEffect, useRef, useState } from 'react';
import { BASE_API } from '../config';
import TodoItems from './TodoItems';
import { useQuery } from 'react-query';
import Loading from './Loading';

import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('#root');

const TodoList = () => {
    // const [todos,setTodos] = useState([])
    // useEffect(() =>{
    //     fetch(`${BASE_API}/todos`)
    //     .then(res => res.json())
    //     .then(data =>setTodos(data))
    // },[])

    const title = useRef('');
    const date = useRef('');
    const taskRef = useRef('');


    const handleSubmit = event => {
        event.preventDefault()
        const todoInfo = {
            title: title.current.value,
            date: date.current.value,
            task: taskRef.current.value
        }
        console.log(todoInfo);
    }

    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        // subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }

    const { data: todos, isLoading, error, refetch } = useQuery(('todos'), () =>
        fetch(`${BASE_API}/todos`)
            .then(res => res.json())
    )
    if (isLoading) {
        return <Loading />
    }




    return (
        <div className='flex flex-col gap-5 mt-10'>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >   
            <button className='bg-red-500 rounded-lg text-white px-2 py-1' onClick={closeModal}>X</button>
                <div className='mt-5 border-2 shadow-lg p-8 rounded'>
                    <form onSubmit={handleSubmit}>
                        <div className="flex flex-col lg:flex-row justify-between">
                            <input className=' px-4 py-3 border-2 border-zinc-300 w-full outline-none focus:ring-2 focus:ring-blue-400 rounded-lg mb-3 mr-5'
                                type='text'
                                ref={title}
                                required
                                placeholder='Write your task ..'
                            />
                            <input className=' px-4 py-3 border-2 border-zinc-300 w-full outline-none focus:ring-2 focus:ring-blue-400 rounded-lg mb-3'
                                type='date'
                                ref={date}
                                required
                                placeholder='Write your task ..'
                            />
                        </div>
                        <input className=' px-4 py-3 border-2 border-zinc-300 w-full outline-none focus:ring-2 focus:ring-blue-400 rounded-lg mb-3'
                            type='text'
                            ref={taskRef}
                            required
                            placeholder='Write your task ..'
                        />
                        <input type="submit" className='bg-black text-white w-full py-2 rounded-lg cursor-pointer' value="Update" />
                    </form>
                </div>
            </Modal>
            {
                todos.map((todo, index) => <TodoItems
                    key={todo._id}
                    index={index}
                    todo={todo}
                    openModal={openModal}
                >
                </TodoItems>)
            }

        </div>
    );
};

export default TodoList;