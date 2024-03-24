import React from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import './index.css'

function Skills({ skills, education, non_tech }) {
    useEffect(() => {
        AOS.init({duration: 2000})
      })
    return (
        <main id='skills' data-aos="fade-right">
            <h1 className='text-danger text-center fw-bolder'>Skills and Qualification</h1>
        <div className='shadow p-3 bg-light rounded mx-3 mx-md-5 my-5 d-md-flex justify-content-around' >
            
            <div className='text-black pt-5'>
                <h2 className='text-danger mb-4'>Technical Skills</h2>
                <ul className=''>
                    {
                        skills.map((val) => (
                            <li key={val.id}>
                                {val.name}
                            </li>
                        ))
                    }
                </ul>
            </div>

            <div className='text-black pt-5'>
                <h2 className='text-danger mb-4'>Qualification</h2>
                {
                    education.map((val) =>(
                        <div key={val.id}>
                            <h5>{val.name}</h5>
                            <p className='mb-2'>{val.year}</p>
                            <p className='m-0'>CGPA: {val.cgpa}</p>
                        </div>
                    ))
                }
            </div>

            <div className='text-black pt-5'>
                <h2 className='text-danger mb-4'>Non-Technical Skills</h2>
                <ul className=''>
                    {
                        non_tech.map((val) => (
                            <li key={val.id}>
                                {val.name}
                            </li>
                        ))
                    }
                </ul>
            </div>

        </div>
        </main>

    )
}

export default Skills
