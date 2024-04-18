import React from 'react'
import "./Services.css"
import { RxDesktop } from "react-icons/rx";
import { TbAffiliateFilled } from "react-icons/tb";
import { FaCircleNodes } from "react-icons/fa6";


function Services() {
    return (
        <section className='service-container'>
            <h2><span>My</span> work</h2>
            <div className='ser-wrapper'>
                <div >
                    <div className='ser-card'>
                        <span><RxDesktop /></span>
                        <h1>UI/UX Design</h1>
                        <p>Worked on several open sources
                        projects.
                        </p>
                        <p className='works-card'> See my work here...</p>
                    </div>
                </div>


                <div >
                    <div className='ser-card'>
                        <span><TbAffiliateFilled /></span>
                        <h1>Frontend Development</h1>

                        <p>Worked with HTML,CSS,JS,React
                        </p>
                        <p className='works-card'> See my work here...</p>
                    </div>
                </div>
                <div >
                    <div className='ser-card'>
                        <span><FaCircleNodes /></span>
                        <h1>Backend Development</h1>

                        <p>Worked with NodeJS,PhP,SQL,
                        </p>
                        <p className='works-card'> See my work here...</p>
                    </div>
                </div>
            </div>



        </section>
    )
}

export default Services
