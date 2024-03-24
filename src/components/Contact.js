import React from 'react'
import './index.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

function Contact() {
  useEffect(() => {
    AOS.init({duration: 2000})
  })
  return (
    <div className='container my-5' id="contact">
        <p className='text-center'>Get in Touch</p>
      <h1 className='text-center text-danger fw-bold'>Contact Me</h1>
      <div className='text-center shadow bg-light rounded p-4 links' data-aos="flip-right">
        <p className='m-2'>+91 7397416604</p>
        <a className='d-inline-block mb-2 text-decoration-none text-black' href="mailto:surendersk1065@gmail.com">surendersk1065@gmail.com</a><br></br>
        <a className='d-inline-block mb-2 text-decoration-none text-black' href='http://www.linkedin.com/in/surender-s-a1097a207'><span className='fs-4 me-2'><CiLinkedin /></span>Linked in</a><br></br>
        <a className='d-inline-block mb-2 text-decoration-none text-black' href='https://github.com/surendersk1065'><span className='fs-4 me-2'><FaGithub /></span>GitHub</a><br></br>
        <a href="./media/sk resume.pdf" download
            className='text-decoration-none rounded bg-danger p-2 text-white d-inline-block mb-2'
        >Download my Resume</a>
      </div>
    </div>
  )
}

export default Contact
