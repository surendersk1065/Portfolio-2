import React from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import './index.css'

function About() {
  useEffect(() => {
    AOS.init({duration: 2000})
  })
  return (
    <main data-aos="fade-right" id='aboutpage'>
      <h1 className='text-center my-5 text-danger fw-bold'>About Me</h1>
    <div  className='shadow p-3 bg-light rounded my-5 mx-3 mx-md-5' >
      <div className=' p-md-5 p-2'>
        
        <h2 className='text-black'>Hello !<br></br> </h2>
        <h2 className='mb-4 text-black'>I'm<span className='text-danger fw-bold'> SURENDER S </span>From Chennai </h2>
        <p className='text-justify text-black'>Innovative and results-driven software developer with a B.Tech in Information Technology, passionate about crafting seamless user experiences through elegant front-end solutions. With a strong foundation in HTML, CSS, and JavaScript, with expertise in modern frameworks like React, I bring creativity and efficiency to every project. Experienced in collaborating with cross-functional teams to deliver high-quality, user-centric applications. Seeking opportunities to contribute my skills and drive innovation in front-end development.</p>       
      </div>
    </div>
    </main>
  )
}

export default About
