import React from 'react';

const Card = ({ item }) => {
    return (
        <div className="col-md-6 col-lg-4 mb-4">
            <div className="card h-100 border-0">
                <img src={item.img} className="card-img-top" alt="blog" />
                <div className=" p-4">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.desc}</p>
                </div>
                <div className=" d-flex justify-content-between px-3 py-2 bg-white">
                    <div className="icon ">
                        <i className={item.icon}></i> {item.date}
                    </div>
                    <div className="">{item.comment}</div>
                </div>
            </div>
        </div>
    );
};

export default Card;

