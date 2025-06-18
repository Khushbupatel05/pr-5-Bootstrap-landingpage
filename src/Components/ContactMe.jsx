import React from 'react';
import Button from './Button';

const ContactMe = () => {
  return (
    <div className="section bg-color py-5">
      <div className="container">
        <div className="row align-items-center">
        
          <div className="col-12 col-md-5 text-center mb-4 mb-md-0">
            <div className="contactme-icon  ">
              <i className="bi bi-book-half"></i>
            </div>
          </div>

      
          <div className="col-12 col-md-7 text-center text-md-start">
            <div className="section-content">
              <p className="fs-2 contact-content mb-3">
                Do you have a question?
                <br />
                Feel free to contact me.
              </p>
              <h5 className="contact-content ct mb-4">+61 (0) 111 222 333</h5>
              <Button />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
