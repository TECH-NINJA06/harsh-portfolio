import Image from 'next/image'
import React from 'react'

const HomeSection = () => {
  return (
    <div className='flex justify-around text-white items-center mx-20'>
        <div className="text-5xl pr-80 text-center">
          <div className='font-medium my-17'>
            Hey, I am <span>Harsh Telang</span>
          </div>
          <div>
           <p className=' text-lg my-10'>I am a Full Stack Web Developer and a ML/AI enthusiast from Goa-India</p>
          </div>
        </div>
        <div className='bg-transparent rounded-full'>
          <Image
            className='m-12 bg-none radius-inherit'
            width={288}
            height={264}
            src="/logo-portfolio.gif" />
        </div>
    </div>
  )
  
}

export default HomeSection