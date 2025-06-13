import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import Sectionheading from './Sectionheading';

const Chapter = () => {
  let title = "Chapters we've covered";
  let des = " Chapters"

  return (
    <>
      <div className="section bg-color mt-5 mb-4 py-5">
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
                <div>
                  <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>
                        Chapter 01
                      </Accordion.Header>
                      <Accordion.Body>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Temporibus ea dolore amet laudantium quibusdam nobis
                        labore molestiae odit voluptas velit!
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>Chapter 02</Accordion.Header>
                      <Accordion.Body>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Temporibus ea dolore amet laudantium quibusdam nobis
                        labore molestiae odit voluptas velit!
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                      <Accordion.Header>Chapter 03</Accordion.Header>
                      <Accordion.Body>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Temporibus ea dolore amet laudantium quibusdam nobis
                        labore molestiae odit voluptas velit!
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                      <Accordion.Header>Chapter 04</Accordion.Header>
                      <Accordion.Body>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Temporibus ea dolore amet laudantium quibusdam nobis
                        labore molestiae odit voluptas velit!
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                      <Accordion.Header>Chapter 05</Accordion.Header>
                      <Accordion.Body>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Temporibus ea dolore amet laudantium quibusdam nobis
                        labore molestiae odit voluptas velit!
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="5">
                      <Accordion.Header>Chapter 06</Accordion.Header>
                      <Accordion.Body>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Temporibus ea dolore amet laudantium quibusdam nobis
                        labore molestiae odit voluptas velit!
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="6">
                      <Accordion.Header>Chapter 07</Accordion.Header>
                      <Accordion.Body>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Temporibus ea dolore amet laudantium quibusdam nobis
                        labore molestiae odit voluptas velit!
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Chapter