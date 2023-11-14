import React from 'react'

const Header = () => {
  return (
    <nav className='flex justify-around items-center h-20 text-slate-200 sticky '>
        <div className="px-2 text-2xl">
            <h1>Harsh Telang</h1>
        </div>
        <div className="navbar-nav">
            <ul className='flex justify-center'>
                <li className='list-none mx-5 my-6 font-medium text-base hover:text-lg hover:text-indigo-300 zoom'><a href='./'>Home</a></li>
                <li className='list-none mx-5 my-6 font-medium text-base hover:text-lg hover:text-indigo-300 zoom'><a href='#about'>About</a></li>
                <li className='list-none mx-5 my-6 font-medium text-base hover:text-lg hover:text-indigo-300 zoom'><a href='#skills'>Skills</a></li>
                <li className='list-none mx-5 my-6 font-medium text-base hover:text-lg hover:text-indigo-300 zoom'><a href='#Projects'>Projects</a></li>
                <li className='list-none mx-5 my-6 font-medium text-base hover:text-lg hover:text-indigo-300 zoom'><a href='#contact'>Contact</a></li>
            </ul>
        </div>
    </nav>
  )
}

export default Header