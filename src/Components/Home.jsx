
import React from 'react'

const Home = () => {
  return (
    <div className='hero-section vh-100 py-5'>
      <div>
          <div className="circle x1" />
          <div className="circle x2" />
          <div className="circle x3" />
          <div className="circle x4" />
          <div className="circle x5" />
      </div>
      <div className="container">
        <div className="row gx-5 d-flex  align-items-center vh-100">
          <div className="col-lg-6">
            <div className='mb-5 pb-5'>
              <div>
                <div className='text-uppercase ps-1 pe-1 home-text fs-6'>
                  Let's make the best investment
                </div>
                <div>
                  <h1 className='text-capitalize mt-2 text-heading'>There is no friend as loyal as a book</h1>
                  <p className=' mb-3 text-p'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad harum quibusdam, assumenda quia explicabo.</p>
                  <div>
                    <input type="email" name='email' placeholder='Enter Email' className='input rounded' />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className='mb-5 pb-5'>
              <img src="image/hero.png" alt="" />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Home;