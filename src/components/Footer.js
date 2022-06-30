import React from 'react'
import { AiFillMail } from 'react-icons/ai'

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div className='border-0 border-t-2 bg-zinc-800 text-white mt-12'>
            <div className='py-20 px-8 max-w-xl mx-auto '>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
                    <div className='flex justify-center items-center'>
                        <h1 className='text-xl font-bold'>Copyright &copy; {year} </h1>
                    </div>
                    <div className='flex justify-center items-center '>
                        <div className='text-center lg:text-left mt-5 lg:mt-0'>
                            <h1 className='text-xl font-bold'>Contact</h1>
                            <ul className='text-zinc-400 text-lg'>
                                <li className='flex items-end gap-2'>
                                    <AiFillMail /> contact@taskapp.com
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer