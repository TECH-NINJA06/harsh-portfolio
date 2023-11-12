import React from 'react'

const Projects = () => {
  return (
    <>
        <div class="mb-10">
            <h1 className=' font-semibold text-5xl text-center'> Featured Projects </h1>
        </div>
        <div className="flex mb-5 my-auto">
           
            <div class="contents">
                <h3> Project Title </h3>
                <ul>
                    <li> Featured Skills</li>
                </ul>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <a class="project-link" href="#">Check it out</a>
            </div>
            <div class="images-right">
                <img alt="mountains" src="logo.png" />
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
                <a class="project-link" href="#">Check it out</a>
            </div>
        </div>
    </>
  )
}

export default Projects