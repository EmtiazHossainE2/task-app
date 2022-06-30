import React, { useEffect, useState } from 'react';
import { BASE_API } from '../config';
import TodoItems from './TodoItems';
import { useQuery } from 'react-query';
import Loading from './Loading';

const TodoList = () => {
    // const [todos,setTodos] = useState([])
    // useEffect(() =>{
    //     fetch(`${BASE_API}/todos`)
    //     .then(res => res.json())
    //     .then(data =>setTodos(data))
    // },[])

    const { data: todos, isLoading, error, refetch } = useQuery(('todos'), () =>
        fetch(`${BASE_API}/todos`)
            .then(res => res.json())
    )
    if (isLoading) {
        return <Loading />
    }

    return (
        <div className='flex flex-col gap-5 mt-10'>
            {
                todos.map((todo, index) => <TodoItems
                    key={todo._id}
                    index={index}
                    todo={todo}
                >
                </TodoItems>)
            }

        </div>
    );
};

export default TodoList;