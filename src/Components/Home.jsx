import React from 'react';
import Button from './Button';

const Home = () => {
  return (
    <div className="hero-section vh-100 py-5 position-relative">

      <div>
        <div className="circle x1" />
        <div className="circle x2" />
        <div className="circle x3" />
        <div className="circle x4" />
        <div className="circle x5" />
      </div>

      <div className="container">
        <div className="row align-items-center vh-100">

         
          <div className="col-lg-6 mb-4 mb-lg-0 pt-5 pt-lg-0 text-center text-lg-start">
            <div className="mb-5 pb-5">
              <div className="text-uppercase ps-1 pe-1 home-text fs-6 mb-lg-0 pt-5 pt-lg-0">
                Let's make the best investment
              </div>
              <h1 className="text-capitalize mt-2 text-heading">
                There is no friend as loyal as a book
              </h1>
              <p className="mb-3 text-p">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad harum quibusdam, assumenda quia explicabo.
              </p>

              <div className="d-flex  flex-sm-row align-items-center justify-content-center justify-content-sm-start">
                <input  type="email" name="email" placeholder="Enter Email" className="input rounded  mb-sm-0 "  />
                <Button btnName="Subscribe" className=""/>
              </div>
            </div>
          </div>

          <div className="col-lg-6 text-center">
            <div className="mb-5 pb-5">
              <img src="image/hero.png" alt="hero" className="img-fluid" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Home;
