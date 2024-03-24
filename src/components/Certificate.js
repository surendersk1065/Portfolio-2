import React from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import './index.css'


function Certificate({certificate}) {
    useEffect(() => {
        AOS.init({duration: 2000})
      })

    return (
        <div className='container my-5' id='certificate'>
            <h1 className='text-danger text-center mb-5 fw-bolder'>My certificates</h1>
            <div className='row mx-sm-3 mx-lg-3'>
                {
                    certificate.map((val) =>(
                        <div className='col-12 col-md-6 col-lg-4 mb-5' data-aos="flip-left" key={val.id}>
                            <div className='card shadow bg-light rounded text-black p-4 h-100' >
                            <img 
                                src={val.img}
                                style={{width:"200px", height:"200px"}}
                                className='image-fluid rounded'
                                alt=''
                            />
                            <div className='card-body'>
                            <p>{val.title}</p>
                            </div>
                            </div>
                            
                            
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Certificate
