import React, { useState, useRef } from 'react'
import { FiEdit } from 'react-icons/fi';
import { BsSave } from 'react-icons/bs';

const TodoItems = () => {
    const [edit, setEdit] = useState(false)

    const editMode = () => {
        setEdit(false)
    }

    return (
        <div className='px-4 py-3 flex items-center gap-5 border-2 border-zinc-400 rounded-md'>
            {edit
                ? <input type="text" className='outline-none p-2 focus:ring-1 focus:ring-blue-400 w-full' defaultValue="This is a sample text" />
                :  <p className='text-xl font-semibold'>This is a sample text</p>
            }
            {edit
                ? <button
                    onClick={editMode}
                    className='px-3 py-2 ml-auto bg-green-500 text-white rounded-md'>
                    {/* <BsSave/> */}
                    Save
                </button>

                : <button
                    onClick={() => setEdit(true)}
                    className='px-3 py-2 ml-auto bg-zinc-700 text-white rounded-md'>
                    <FiEdit/>
                </button>
            }
        </div>
    )
}

export default TodoItems