import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <div className='py-40 home'>
       <div className='flex '>
        <div className='basis-1/3'>
          <Image
            className='m-12 rounded-full'
            width={300}
            height={300}
            src="/abt.jpg"
          />
        </div>
        <div className='basis-2/4'>
          <h1 className=' font-bold text-4xl my-5'>About Me</h1>
          <p className=' text-2xl'>I am a Computer Science Engineering student at GEC Goa and also a full stack Web Developer and a ML/AI enthusiast. My love for coding and problem solving has driven me to explore various programming languages and emerging technologies. I am thrilled to share my journey and showcase the projects and skills I've gained as a passionate aspiring software developer. Here you'll find some of my best projects that highlight my proficiency in coding.</p>
        </div>
       </div>
    </div>
  )
}

export default About