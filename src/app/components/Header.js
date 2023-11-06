import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <nav className='flex justify-around items-center h-20 text-slate-200 sticky'>
        <div className="px-2 text-2xl">
            <h1>Harsh Telang</h1>
        </div>
        <div className="">
            <ul className='flex justify-center'>
                <li className='list-none mx-5 my-6 font-medium text-base hover:text-lg hover:text-indigo-300 zoom'>Home</li>
                <li className='list-none mx-5 my-6 font-medium text-base hover:text-lg hover:text-indigo-300 zoom'>About</li>
                <li className='list-none mx-5 my-6 font-medium text-base hover:text-lg hover:text-indigo-300 zoom'>Skills</li>
                <li className='list-none mx-5 my-6 font-medium text-base hover:text-lg hover:text-indigo-300 zoom'>Projects</li>
                <li className='list-none mx-5 my-6 font-medium text-base hover:text-lg hover:text-indigo-300 zoom'>Contact</li>
            </ul>
        </div>
    </nav>
  )
}

export default Header