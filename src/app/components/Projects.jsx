import React from 'react';
import Link from 'next/link';

const Projects = () => {
  return (
    <div id='Projects' className='py-10'>
        <div class="mb-10">
            <h1 className=' font-semibold text-5xl text-center'> Featured Projects </h1>
        </div>
        <div className="flex justify-between mb-5 my-auto">
           
            <div class="pr-10 ml-5">
                <h3 className=' text-center text-xl font-medium'> Senior Sphere </h3>
                <ul className='flex text-blue-400 list-none align-middle ml-52'>
                    <li className='ml-5'>React js</li>
                    <li className='ml-5'>Next js</li>
                    <li className='ml-5'>Tailwind CSS</li>
                    <li className='ml-5'>Javascript</li>
                </ul>
                <p className='pr-40 mt-5 text-center'>A hackathon project created using Next js Mongo Db and Django designed to provide the elderly people social interaction with their peers as well as with some Emergency as well as necessary health care facilities.</p>
                <div className='flex ml-60 mt-5'>
                    <Link href='#' className='mr-5 hover:text-blue-300'>Check it out</Link>
                    <Link className='mr-5 hover:text-blue-300' href='https://github.com/Rushikesh-24/SeniorSphere'>View on Github</Link>
                </div>
            </div>
            <div class="mr-5 pl-10">
                <img className=' rounded-md' alt="Senior Sphere" src="/assets/project1.jpg" />
            </div>
        </div>
        <div className="flex mx-5 my-auto">
            <div class="images-left">
            <img alt="mountains" className=' rounded' src="logo.png" />
            </div>
            <div class="contents-right">
                <h3> Project Title </h3>
                <ul>
                <li> Featured Skills</li>
                </ul>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <div>
                    <Link href='#'>Check it out</Link>
                    <Link href='#'>View on Github</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects