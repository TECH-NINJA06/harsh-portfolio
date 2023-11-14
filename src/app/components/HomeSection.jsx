import Image from 'next/image'
import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const HomeSection = () => {
  return (
    <div className='flex justify-around text-white items-center mx-20'>
       {/*} <div className="text-5xl pr-80 text-center">
          <div className='font-medium my-17'>
            Hey, I am <span>Harsh Telang</span>
          </div>
          <div>
           <p className=' text-lg my-10'>I am a Full Stack Web Developer and a ML/AI enthusiast from Goa-India</p>
           <button class="w-32 h-14 outline-none border-gray-300 border  rounded-full text-lg cursor-pointer text-white">Download CV</button>
          </div>
  </div>*/}
        <div className="col-span-7 place-self-center text-center sm:text-left my-10">
                    <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
                        <span className=" bg-clip-text br-gradient-to-r from-purple-400 to-pink-600">Hello, I am </span>
                        <br />
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                'Harsh Telang',
                                2000, // wait 1s before replacing "Mice" with "Hamsters"
                                'A Web Developer',
                                1000,
                                'A App Developer',
                                1000,
                                'A ML/AI Enthusiast',
                                1000
                            ]}
                            wrapper="span"
                            speed={35}
                            style={{ fontSize: '2em', display: 'inline-block' }}
                            repeat={Infinity}
                        />
                    </h1>
                    <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6">I am currently persueing my BE degree in Computer Engineering in GEC Goa</p>
                    <div>
                        <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white hover:bg-slate-200">Hire Me</button>
                        <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 border hover:bg-slate-800 text-white mt-3">
                            <span className="block bg-[#3b3b3b] hover:bg-slate-800 rounded-full px-5 py-2">Download CV</span>
                        </button>
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