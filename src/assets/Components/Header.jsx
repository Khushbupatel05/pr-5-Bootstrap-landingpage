
import React from 'react'

const Header = () => {
  return (
    <>
      <header className='container'>
        <div className='d-flex align-items-center justify-content-between'>  
            <div>
              <img src="" alt="" />
              Logo
            </div>
            <nav>
                <ul className='d-flex gap-2 fw-bold align-items-center justify-content-center'>
                  <li>Home</li>
                  <li>Feature</li>
                  <li>Pricing</li>
                  <li>Blog</li>
                  <li>Contact</li>
                </ul>
            </nav>
        </div>
      </header>
    </>
  )
}

export default Header