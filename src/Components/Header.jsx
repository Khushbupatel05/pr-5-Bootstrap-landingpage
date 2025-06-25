import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <header>
      <div className="container">
        <div className="row">
          <div className='custom-nav-wrapper d-flex align-items-center justify-content-between py-3 bg-white'>
            <div>
              <img src="/image/wonted-logo.png" alt="logo" />
            </div>
            <nav className="d-flex">
              <ul className='d-flex align-items-center d-none d-lg-flex justify-content-center gap-3 fw-semibold  m-0 menu'>
                <li className='nav-link'>Home</li>
                <li className='nav-link'>Benefits</li>
                <li className='nav-link'>Chapters</li>
                <li className='nav-link'>Pricing</li>
                <li className='nav-link'>Author</li>
                <li className='nav-link'>Events</li>
                <li className='nav-link'>Reviews</li>
                <li className='nav-link'>Blog</li>
                <li className='nav-link'>Contact</li>
              </ul>
            </nav>
              <Button className="d-flex d-lg-none" variant="primary" onClick={handleShow}>
                Launch
              </Button>
          </div>
        </div>
      </div>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </header>
  );
};
export default Header