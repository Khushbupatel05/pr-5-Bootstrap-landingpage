import React from 'react'


const Benefits = () => {
  return (
    <>
      <div className='section py-5 mt-4'>
        <div className="container">
          <div className="col-sm-12">
            <div className="text-center">
              <p className='text-uppercase  home-text fs-6 '> Why wonted? </p>
              <h1 className='text-capitalize mt-2 tital'>There is no friend as loyal as a book</h1>
            </div>
            <div className='section-divider mt-4 position-relative'></div>
          </div>
          <div className="row">
            <div className="col-lg-6 mb-lg-0">
              <div>
                <div className="col-sm-12">
                  <div className='achive-img position-relative ps-3 w-100 pt-5'>
                    <img src="./image/achive2.jpg" alt="" className='rounded-1 position-relative benefits-img' />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 pt-5">
              <div className='achive-content '>
                <div className="row">
                  <div className="col-sm-6  ">
                    <div className="achieve-item h-100 p-4 rounded-2 bg-white">
                      <div className="achieve-icon   d-flex align-items-center justify-content-center">
                        <i className="bi bi-journal-bookmark-fill  mt-2" />
                      </div>
                      <h3 className="mt-4 achive-tital">Experience</h3>
                      <p>
                        Lorem ipsum dolor sit amet ametus conso tetur ading
                        elitor fugit piatur iusto provid.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Benefits