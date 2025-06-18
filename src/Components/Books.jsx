import React from 'react'
import Sectionheading from './Sectionheading';

const Books = () => {
     let title = "Some of other books by author.";
  let des = " Books"
    return (
        <>
            <section className='py-5 bg-color'>
                <div className="container">
                    <div className="row">
                        <Sectionheading title={title} des={des} />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Books