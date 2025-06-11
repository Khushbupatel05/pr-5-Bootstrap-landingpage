import React from 'react'

const Sectionheading = (props) => {
  return (
      <>
      <div>
        <div className="section-title text-center mb60">
          <p className='text-uppercase  home-text fs-6 '> {props.des}</p>
          <h1 className='text-capitalize mt-2 tital'>{props.title} </h1>
           <div className='section-divider mt-4 position-relative mb-5'></div>
          </div>
      </div>
    </>
  )
}

export default Sectionheading