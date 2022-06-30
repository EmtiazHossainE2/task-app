import React from 'react';
import { MdOutlineDeleteOutline } from 'react-icons/md';

const CompletedItem =  ({ todo, index }) => {
    const { title, date, task } = todo

    return (
        <div className='px-4 py-3 flex justify-between gap-5 border-2 border-zinc-400 rounded-md'>
            <div className="flex flex-col justify-evenly ">
                <div className="flex gap-x-5">
                    <span className='text-xl font-semibold capitalize'>{index + 1}. {title}</span>
                    <small className=' font-semibold border p-2 rounded-full'>{date}</small>
                </div>
                <p className=' font-semibold'>{task}</p>

            </div>
            <div>
                <button 
                    className='p-1 ml-auto text-3xl border-2 rounded-full text-[#f40404] '>
                    <MdOutlineDeleteOutline />
                </button>
            </div>
        </div>
    )
}


export default CompletedItem;