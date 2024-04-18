import React from 'react'
import "./Contact.css"

const btnEl =document.getElementById('btn-el')

btnEl?.addEventListener('click',(e)=>{
    e.preventDefault()
})

function Contact() {
    return (
        <section className='contact-container' id='contact-section'>
            <h1>Contact <span>me</span></h1>
            <div className='contact-wrapper'>
                <div className='contact-form'>
                    <form action="action">
                        <div>
                            <label htmlFor="fullname">
                                Fullname
                            </label>
                            <br />
                            <input type="text" id='fullname'/>
                            <div className='warning'></div>
                        </div>

                        <div>
                            <label htmlFor="email">
                                E-mail
                            </label>
                            <br />
                            <input type="text" />
                            <div className='warning' ></div>

                        </div>

                        <div>
                            <label htmlFor="email">
                                Phone number
                            </label>
                            <br />
                            <input type="text" />
                            <div className='warning'></div>

                        </div>

                        <div>
                            <textarea type="text" rows={10} ></textarea>
                            <div className='warning'></div>

                        </div>


                        <div>
                            <button id='btn-el' >Submit</button>
                        </div>


                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact