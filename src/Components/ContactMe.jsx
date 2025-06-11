import React from 'react'
import Button from './Button'

const ContactMe = () => {
    return (
        <>
            <div className="section bg-color py-5 ">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className='section-content  text-center'>
                                <p className='fs-2 contact-content'>Do you have a question?
                                    <br />
                                    Feel free to contact me.</p>
                                <h5 className=' contact-content ct'>+61 (0) 111 222 333</h5>  
                                <Button />  
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactMe