
const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="row">
          <div className='custom-nav-wrapper d-flex align-items-center justify-content-between py-3 bg-white'>
            <div>
              <img src="/image/wonted-logo.png" alt="logo" />
            </div>
            <nav>
              <ul className='d-flex align-items-center justify-content-center gap-3 fw-semibold  m-0 menu'>
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
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header