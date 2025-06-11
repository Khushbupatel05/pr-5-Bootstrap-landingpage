import React from 'react'
import Sectionheading from './Sectionheading'

const Contact = () => {

    let title = "Write me anything  " ;
    let des = " Contact"
    return (
        <>
            <div className="section bg-white py-5 mt-5 mb-4 pb-5">
                <div className="container">
                    <div className="col-sm-12">
                        <div className="text-center ">
                           <Sectionheading title={title}  des={des}/>
                        </div>
                       
                    </div>
                    <div className="row">
                        <div className="col-lg-8 col-md-6 col-sm-12">
                            <div className="contact-form p-5">
                                <form id="contact-form" method="post" action>
                                    <div className="mb-3 ">
                                        <input name="name" className="contact-name form-control w-100 " id="contact-name" type="text" placeholder="Your Name" required />
                                    </div>
                                    <div className="mb-3">
                                        <input name="email" className="contact-email contact-name  form-control w-100" id="contact-email" type="email" placeholder="Your Email" required />
                                    </div>
                                    <div className="mb-3">
                                        <input name="subject" className="contact-subject contact-name  form-control w-100" id="contact-subject" type="text" placeholder="Subject" required />
                                    </div>
                                    <div className="mb-3">
                                        <textarea name="message" className="contact-message form-control w-100 "  rows={4}  id="contact-message" placeholder="Your Message" required defaultValue={""} />
                                    </div>
                                    <button className=" fs-6 position-relative py-2 ps-4 pe-4 " >
                                        Send Now
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-12 col-md-6">
                            <div className='contact-info p-5 contact-form '>
                                <ul className='ps-0'>
                                    <li className='mb-4'>
                                        <span className='contact-content text-uppercase mb-1'>Address:</span>
                                        <br />
                                        16, Lankaway
                                        <br />
                                        Florida, USA 99544
                                    </li>
                                    <li className='mb-4'>
                                        <span className='contact-content text-uppercase mb-1'>Phone:</span>
                                        <br />
                                        <p>112 444 7900</p>
                                    </li>

                                    <li className='mb-3'>
                                        <span className='contact-content text-uppercase mb-1'>Email:</span>
                                        <br />
                                        <p>support@support.com</p>
                                    </li>
                                </ul>
                                <h4 className='fs-4 pt-4 pb-1 contact-content'>Connect book socials</h4>
                                <ul className='social-icon d-flex gap-2 align-items-center ps-0  mt-3'>
                                    <li className='contact-icon'><i className="bi bi-facebook" /></li>
                                    <li className='contact-icon'><i className="bi bi-twitter" /></li>
                                    <li className='contact-icon'><i className="bi bi-linkedin" /></li>
                                    <li className='contact-icon'><i className="bi bi-youtube" /></li>
                                    <li className='contact-icon'><i className="bi bi-whatsapp" /></li>                                    
                                </ul>    
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact