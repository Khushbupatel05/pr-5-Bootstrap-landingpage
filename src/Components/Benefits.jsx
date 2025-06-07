import React from 'react'
import Achive from './Achive'


const Benefits = () => {

   let arr = [
            {
            icon: "bi bi-journal-bookmark-fill",
            title: "Experience",
            desc: "Lorem ipsum dolor sit amet ametus conso tetur ading elitor fugit piatur iusto provid."
        },
        {
            icon: "bi bi-dice-3",
            title: "Motivation",
            desc: "Lorem ipsum dolor sit amet ametus conso tetur ading elitor fugit piatur iusto provid."
        },
        {
            icon: "bi bi-mortarboard-fill",
            title: "Goals",
            desc: "Lorem ipsum dolor sit amet ametus conso tetur ading elitor fugit piatur iusto provid."
        },
        {
            icon: "bi bi-bullseye",
            title: "Vision",
            desc: "Lorem ipsum dolor sit amet ametus conso tetur ading elitor fugit piatur iusto provid."
        },
       
    ]
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
                  <div className="row gy-3">
                    {arr.map((item) => {
                      return <Achive  icon={item.icon} title={item.title} desc={item.desc} />
                    })}
                  </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Benefits