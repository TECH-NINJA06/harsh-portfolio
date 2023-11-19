'use client';

import { useState } from 'react';
import Link from 'next/link';
import React from 'react';
import { SiMinutemailer } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { IconContext } from "react-icons";

const Footer = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyClick = async () => {
    await navigator.clipboard.writeText('codersclub.gec@gmail.com');
    setCopied(true);
  };

  return (
    <section id="Contact" className=' mx-24'>
    <div className="px-3 py-10">
     <div className="flex-wrap">
         <div>
             <h1 className="font-bold text-4xl my-8 text-center">Contact Me</h1>
             <div className="flex mx-6 my-5">
             <IconContext.Provider value={{ className: "text-2xl" }}><a href="https://www.instagram.com/mr__unknown_xx/"><SiMinutemailer /></a></IconContext.Provider>
                 {/* <i className="fa-solid fa-paper-plane text-2xl"></i> */}
                 <p className='ml-6 text-lg'><button onClick={handleCopyClick}>telangharsh06@gmail.com</button></p>   
             </div>
            {/*<div class="contact-phone">
                 <i class="fa-solid fa-phone"></i>
                 <p>012345678</p>
  </div>*/}
             <div className="flex justify-evenly md-5 mt-14 mr-60">
                {/* <a href="https://www.instagram.com/mr__unknown_xx/"><i className="fa-brands fa-instagram text-3xl zoom-skills"></i></a> */}
                <IconContext.Provider value={{ className: "text-3xl zoom-skills" }}><a href="https://www.instagram.com/mr__unknown_xx/"><FaInstagram /></a></IconContext.Provider>
                <IconContext.Provider value={{ className: "text-3xl zoom-skills" }}><a href="https://www.linkedin.com/in/harsh-telang-226a70265/"><FaLinkedin /></a></IconContext.Provider>
                <IconContext.Provider value={{ className: "text-3xl zoom-skills" }}><a href="https://github.com/Harsh-Telang"><FaGithub /></a></IconContext.Provider>
                <IconContext.Provider value={{ className: "text-3xl zoom-skills" }}><a href="https://www.instagram.com/mr__unknown_xx/"><FaDiscord /></a></IconContext.Provider>
                {/* <a href="https://www.linkedin.com/in/harsh-telang-226a70265/"><i className="fa-brands fa-linkedin text-3xl zoom-skills"></i></a> */}
                {/* <a href="https://github.com/Harsh-Telang"><i className="fa-brands fa-github text-3xl zoom-skills"></i></a> */}
                {/* <a href=""><i className="fa-brands fa-discord text-3xl zoom-skills"></i></a> */}
             </div>

             
         </div>
         <div className="contact-right">
             
         </div>
     </div>
    </div>
 </section>
  )
}

export default Footer