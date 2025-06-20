import React from 'react';
import Sectionheading from './Sectionheading';

const pricingData = [
    {
        title: "E-Book",
        price: "$05",
        features: [
            "Complete Book",
            "PDF and EPUB",
            "Hardcover Book",
            "Access to Downloads",
        ],
       
    },
    {
        title: "Bundle",
        price: "$15",
        features: [
            "All Book Versions",
            "Audiobook Access",
            "Signed Copy",
            "Bonus Chapter",
        ],
        
    },
    {
        title: "Premium",
        price: "$10",
        features: [
            "Full Bundle",
            "1-on-1 Webinar",
            "Special Notes",
            "Exclusive Community",
        ],
    },
];

const Pricing = () => {
    const title = "Pricing based on their version";
    const des = "Pricing";

    return (
        <section className="section bg-color py-5">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 text-center">
                        <Sectionheading title={title} des={des} />
                    </div>
                </div>

                <div className="row d-flex align-items-center justify-content-center">
                    {pricingData.map((item, index) => (
                        <div className="col-md-6 col-lg-4 mb-4 mb-lg-0" key={index}>
                            <div className='p-5 bg-white text-center rounded-2 h-100 pricing'>
                                <h3 className="pricing_title">{item.title}</h3>
                                <h3 className="pricing_price">{item.price}</h3>
                                <ul className="pricing_list my-4 text-black ps-1">
                                    {item.features.map((feature, idx) => (
                                        <li key={idx} className='mb-4 py-1'>{feature}</li>
                                    ))}
                                </ul>
                                <div className='pricing-btn position-relative lh-lg rounded-1'>
                                    
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
