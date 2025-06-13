import React from 'react'
import Sectionheading from './Sectionheading';

const Pricing = () => {
    let title = "Pricing based on their version";
    let des = " Pricing"
    return (
        <>
            <div className="section bg-color py-5">
                <div className="container">
                    <div className="row">
                        <div className="  col-sm-12">
                            <div className="text-center ">
                                <Sectionheading title={title} des={des} />
                            </div>
                        </div>
                    </div>
                    <div className="row d-flex align-items-center justify-content-center">
                        <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
                            <div className='p-5 bg-white text-center'>
                                <h3 class="pricing_title">E-Book</h3>
                                <h3 class="pricing_price">$05</h3>
                                <ul class="pricing_list my-4 text-black ps-1">
                                    <li className='mb-4 py-1'>Complete Book</li>
                                    <li className='mb-4 py-1'>PDF and EPUB</li>
                                    <li className='mb-4 py-1'>Hardcover Book</li>
                                    <li className='mb-4 py-1'>Access to Downloads</li>
                                </ul>
                                <div className='pricing-btn position-relative lh-lg rounded-1'>
                                    BUY NOW
                                </div>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Pricing