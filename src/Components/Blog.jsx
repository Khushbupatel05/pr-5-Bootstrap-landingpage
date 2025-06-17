import React from 'react'
import Sectionheading from './Sectionheading'

const Blog = () => {

    const title = "Latest Blogs";
    const des = "Our Blog";
  return (
     <>
     <div className="section my-5">
        <div className="container">
            <div className="row">
                <Sectionheading title={title} des={des} />
            </div>
        </div>
     </div>
     </>
  )
}

export default Blog