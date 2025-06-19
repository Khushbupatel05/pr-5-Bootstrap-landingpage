import React from 'react';
import Sectionheading from './Sectionheading';

const Achivement = () => {
    let title = "Awards Achieved for this book";
    let des = "Achievements";

    const awards = [
        {
            icon: "bi bi-trophy-fill",
            image: "/image/a1.jpg",
            title: "Nominated",
            desc: "International Thriller Writers Award for Best Novel (These Toxic Things)",
        },
        {
            icon: "bi bi-trophy-fill",
            image: "/image/a2.jpg",
            title: "Winner",
            desc: "International Thriller Writers Award for Best Novel (These Toxic Things)",
        },
        {
            icon: "bi bi-trophy-fill",
            image: "/image/a3.jpg",
            title: "Guest of Honor",
            desc: "International Thriller Writers Award for Best Novel (These Toxic Things)",
        },
        {
            icon: "bi bi-trophy-fill",
            image: "/image/a4.jpg",
            title: "Finalist",
            desc: "International Thriller Writers Award for Best Novel (These Toxic Things)",
        },
        {
            icon: "bi bi-trophy-fill",
            image: "/image/a5.jpg",
            title: "Winner",
            desc: "International Thriller Writers Award for Best Novel (These Toxic Things)",
        },
        {
            icon: "bi bi-trophy-fill",
            image: "/image/a1.jpg",
            title: "Nominated",
            desc: "International Thriller Writers Award for Best Novel (These Toxic Things)",
        },
    ];

    return (
        <section className="py-5 bg-color">
            <div className="container">
                <div className="row mb-4">
                    <Sectionheading title={title} des={des} />
                </div>
                <div className="row">
                    {awards.map((award, index) => (
                        <div className="col-md-6 mb-4" key={index}>
                            <div
                                className="d-flex shadow-sm bg-white rounded-2 position-relative"
                                style={{ borderBottom: "4px solid #6e518f", minHeight: "200px" }} >
                                <div className="w-50">
                                    <img
                                        src={award.image}
                                        alt={`Award ${index}`}
                                        className="img-fluid h-100 w-100 rounded-start"
                                        style={{ objectFit: "cover" }}
                                    />
                                </div>
                                <div className="w-50 pt-3 pe-1 pb-1 ps-2 position-relative">
                                    <i className={`${award.icon} position-absolute award-icon`} ></i>
                                    <h5 className="fw-semibold award-title pt-4">{award.title}</h5>
                                    <p className="mb-0 award-dec fw-medium" >{award.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achivement;
