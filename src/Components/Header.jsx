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
              <ul className='d-flex align-items-center d-none d-lg-flex justify-content-center gap-3 fw-semibold m-0 menu'>
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
            <Button className="d-flex d-lg-none" variant="white" onClick={handleShow}>
              <i className="bi bi-list"></i>
            </Button>
          </div>
        </div>
      </div>

      
      <Offcanvas show={show} onHide={handleClose} placement="start">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <img src="/image/wonted-logo.png" alt="logo"  />
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul className="list-unstyled fw-semibold">
            <li className='mb-3 nav-link' onClick={handleClose}>Home</li>
            <li className='mb-3 nav-link' onClick={handleClose}>Benefits</li>
            <li className='mb-3 nav-link' onClick={handleClose}>Chapters</li>
            <li className='mb-3 nav-link' onClick={handleClose}>Pricing</li>
            <li className='mb-3 nav-link' onClick={handleClose}>Author</li>
            <li className='mb-3 nav-link' onClick={handleClose}>Events</li>
            <li className='mb-3 nav-link' onClick={handleClose}>Reviews</li>
            <li className='mb-3 nav-link' onClick={handleClose}>Blog</li>
            <li className='mb-3 nav-link' onClick={handleClose}>Contact</li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </header>
  );
};

export default Header;
