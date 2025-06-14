import React from 'react'
import Sectionheading from './Sectionheading';

const Author = () => {

    let title = "Learn about the book writer";
    let des = " About author"
    return (
        <>
            <div className="section py-5">
                <div className="container">
                    <div className="row">
                        <div className=" col-sm-12">
                            <div className="text-center ">
                                <Sectionheading title={title} des={des} />
                            </div>
                        </div>
                    </div>
                    <div className="row gx-5">
                        <div className="col-lg-6 mb-4 mb-lg-0">
                            <div className="author-img ">
                                <img src="image/achive.png" className='rounded-3' alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 ">
                            <div className='px-2'>
                                <p className='mb-4 pt-2'>
                                    Based on wikipedia, Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Optio aspernatur quam in nostrum aliquam
                                    eligendi vel, modi cupiditate numquam officiis dicta minima
                                    placeat nulla impedit voluptatum adipisci beatae. Rerum,
                                    impedit.
                                </p>
                                <div className="author-content">
                                    <div className="row mb-5">
                                        <div className="col-6 mb-4 ">
                                            <h4>Name:</h4>
                                            <p className="mb-0">Jacob Thomas</p>
                                        </div>
                                        <div className="col-6 mb-4">
                                            <h4>Born:</h4>
                                            <p className="mb-0">05. 16. 1992</p>
                                        </div>
                                        <div className="col-6 mb-4">
                                            <h4>Country:</h4>
                                            <p className="mb-0">US</p>
                                        </div>
                                        <div className="col-6 mb-4">
                                            <h4>Email ID:</h4>
                                            <p className="mb-0">info@wonted.com</p>
                                        </div>
                                        <div className="col-6 mb-4">
                                            <h4>Languages:</h4>
                                            <p className="mb-0">English, French</p>
                                        </div>
                                        <div className="col-6 mb-4">
                                            <h4>Address:</h4>
                                            <p className="mb-0">Etowah, TN 37331 United States</p>
                                        </div>
                                    </div>

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
            </div>
        </>
    )
}

export default Author