'use client'

import React, { useState } from 'react'
import Sidebarbutton from './Sidebarbutton';
import { motion } from 'framer-motion';

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const variants = {
    open: {
      clipPath: "circle{1200px at 50px 50px}",
      transition: {
        type: "spring",
        stiffness: 20,
      }
    },
    closed: {
      clipPath: 'circle{30px at 50px 50px}',
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40,
      }
    },
  }
  return (
    <motion.div animate={open? 'open': 'closed'} className='flex flex-col items-center bg-white text-black'>
      <motion.div variants={variants} className=' fixed top-0 left-0 bottom-0 w-96 bg-white'>
        <div className=' absolute w-full h-full flex flex-col items-center justify-center gap-5'>
          <a className=' text-4xl'></a>
        </div>
        Links
      </motion.div>
      <Sidebarbutton setOpen={setOpen} />
    </motion.div>
  )
}

export default Sidebar