import React from 'react'
import Sectionheading from './Sectionheading';

const TestimonialSlider = () => {

     let title = "What people said about my books";
    let des = " Testimonials"
    return (
        <>
            <section className='bg-color  py-5 my-5 mt-5'>
                <div className="container">
                    <div className="row">
                        <div className="  col-sm-12">
                            <div className="text-center ">
                                <Sectionheading title={title} des={des} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default TestimonialSlider