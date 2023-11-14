import React from 'react';
import Image from 'next/image';

const Skills = () => {
  return (
    <div className='my-10'>
      <div>
            <h1 className='font-bold text-4xl my-5 text-center'> Professional Skills</h1>
      </div>
      <div className='flex justify-center px-20'>
            <Image
                  className='m-12 bg-none zoom-skills rounded-full'
                  width={80}
                  height={80}
                  src="data:image/png;base64,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" 
            />
            <Image
                  className='m-12 bg-none zoom-skills rounded-full'
                  width={80}
                  height={80}
                  src="/assets/React-icon.svg" 
            />
            <Image
                  className='m-12 bg-none zoom-skills rounded-full'
                  width={80}
                  height={80}
                  src="/assets/nodejs.png" 
            />
            <Image
                  className='m-12 bg-none zoom-skills rounded-full'
                  width={80}
                  height={80}
                  src="data:image/png;base64,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" 
            />
            <Image
                  className='m-12 bg-none zoom-skills rounded-full'
                  width={80}
                  height={80}
                  src="/assets/javascript.png" 
            />
            <Image
                  className='m-12 bg-none zoom-skills rounded-full'
                  width={80}
                  height={80}
                  src="/assets/CSS.png" 
            />
            <Image
                  className='m-12 bg-none zoom-skills rounded-full'
                  width={80}
                  height={80}
                  src="/assets/HTML.png" 
            />
            <Image
                  className='m-12 bg-none zoom-skills rounded-full'
                  width={80}
                  height={80}
                  src="/assets/express-js.png" 
            />
            <Image
                  className='m-12 bg-none zoom-skills rounded-full'
                  width={80}
                  height={80}
                  src="/assets/tailwind.png" 
            />
      
      </div>
    </div>
  )
}

export default Skills