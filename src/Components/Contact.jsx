import React from 'react'
import "./Contact.css"
function Contact() {
    return (
        <section className='contact-container'>
            <h1>Contact <span>me</span></h1>
            <div className='contact-wrapper'>
                <div className='contact-form'>
                    <form action="action">
                        <div>
                            <label htmlFor="fullname">
                                Fullname
                            </label>
                            <br />
                            <input type="text" />
                            <div className='warning'>asdasd</div>
                        </div>

                        <div>
                            <label htmlFor="email">
                                E-mail
                            </label>
                            <br />
                            <input type="text" />
                            <div className='warning' >sdsd</div>

                        </div>

                        <div>
                            <label htmlFor="email">
                                Phone number
                            </label>
                            <br />
                            <input type="text" />
                            <div className='warning'>sdssd</div>

                        </div>

                        <div>
                            <textarea type="text" rows={10} ></textarea>
                            <div className='warning'>sd</div>

                        </div>


                        <div>
                            <button>Submit</button>
                        </div>


                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact