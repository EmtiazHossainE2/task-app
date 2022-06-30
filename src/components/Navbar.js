import React, { useState } from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const Navbar = () => {

    const [open, setOpen] = useState(false);

    return (
        <div className='py-5'>
            <div className="container mx-auto flex justify-between px-8">
                <NavLink to='/' className="cursor-pointer text-xl font-bold ">Task App</NavLink>

                <div className="ml-auto md:hidden">
                    <AiOutlineMenu className="text-3xl" onClick={() => setOpen(!open)} />
                </div>
                <div
                    className={`md:ml-auto flex flex-col w-full gap-1 absolute md:static md:flex-row md:w-auto top-20 left-0 px-4 bg-zinc-300 md:bg-transparent z-50 py-5 lg:py-0 ${open ? "" : "hidden md:flex"
                        }`}
                >
                    <NavLink className='px-5 hover:underline hover:text-red-600 text-lg ' to="/completed">Completed Task</NavLink>
                    <NavLink className='px-5 hover:underline hover:text-red-600 text-lg ' to="/todos">To-Do</NavLink>
                    <NavLink className='px-5 hover:underline hover:text-red-600 text-lg ' to="/calendar">Calendar</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Navbar