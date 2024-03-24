import React from 'react'
import { FaCode } from "react-icons/fa";
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

function Project({ project }) {
    useEffect(() => {
        AOS.init({duration: 2000})
      })
    return (
        <div className='container' id='project'>
            <h1 className='text-danger text-center mb-5 fw-bolder'>My Projects</h1>

            <div className='row mx-sm-3 ms-lg-3' >
                {
                    project.map((val) => (
                        <div className='col-12 col-md-12 col-lg-6 mb-5' data-aos="flip-right" key={val.id}>
                            <div className='card shadow rounded bg-light text-black h-100 p-4'>
                                <div className='card-body' >
                                    <span className='fs-1'><FaCode /></span>
                                    <p className='fs-4 text-danger fw-bolder'>{val.title}</p>
                                    <p>{val.body}</p>
                                    <a href={val.link} target="_blank" rel="noreferrer" className='text-decoration-none bg-danger text-white p-2 rounded'>Visit Project</a>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>


        </div>
    )
}

export default Project
