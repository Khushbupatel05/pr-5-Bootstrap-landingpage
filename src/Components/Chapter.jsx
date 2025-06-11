import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import Sectionheading from './Sectionheading';

const Chapter = () => {
  let title = "Chapters we've covered";
  let des = " Chapters"
  let arr = [
    {
      que: "Chapter 01",
      ans: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus ea dolore amet laudantium quibusdam nobis labore molestiae odit voluptas velit!"
    },
    {
      que: "Chapter 02",
      ans: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus ea dolore amet laudantium quibusdam nobis labore molestiae odit voluptas velit!"
    },
    {
      que: "Chapter 03",
      ans: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus ea dolore amet laudantium quibusdam nobis labore molestiae odit voluptas velit!"
    },
    {
      que: "Chapter 04",
      ans: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus ea dolore amet laudantium quibusdam nobis labore molestiae odit voluptas velit!"
    },
    {
      que: "Chapter 05",
      ans: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus ea dolore amet laudantium quibusdam nobis labore molestiae odit voluptas velit!"
    },
    {
      que: "Chapter 06",
      ans: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus ea dolore amet laudantium quibusdam nobis labore molestiae odit voluptas velit!"
    },
    {
      que: "Chapter 07",
      ans: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus ea dolore amet laudantium quibusdam nobis labore molestiae odit voluptas velit!"
    },
  ]
  return (
    <>
      <div className="section chapter-section mt-5 mb-4 py-5">
        <div className="container">
          <div className=" col-sm-12">
            <div className="text-center ">
              <Sectionheading title={title} des={des} />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 mb-lg-0">
              <div cl>
                <div className="col-sm-12">
                  <div className=' position-relative  pt-5 mt-5'>
                    <img src="./image/hero-2.png" alt="" className='' />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 pt-5">
              <div className="row mt-5 ">
                {
                  arr.map((item, idx) => {
                    return <Accordion defaultActiveKey="0" className='mt-2' >
                      <Accordion.Item eventKey={`${idx}`}>
                        <Accordion.Header className='accordian-title'>{item.que}</Accordion.Header>
                        <Accordion.Body>
                          {item.ans}
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Chapter