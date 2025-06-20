import Button from "./Button"

const Footer = () => {
  return (  
    <>
    <footer className="footer-bg">
        <div className="container">
            <div className='row my-5'>
                <div className="col-md-6 col-lg-3 mb-4 mb-lg-0 ">
                   <div className="py-5 ps-2 pe-2"> 
                        <div className='footer-logo'>
                            <img src="/image/wonted-logo.png" alt="logo" />
                        </div>
                        <div className="">
                            <p className="mt-3 footer-text">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Magni minima esse quos voluptatem quo consequuntur commodi
                            eius sed. Alias, quisquam?
                            </p>
                        </div>
                   </div>
                </div>
                <div className="col-md-6 col-lg-3 mb-4 mb-lg-0">
                   <div className="py-5 ps-4 pe-2 "> 
                        <div className='pt-2 footer-title'>
                           <p>Useful Links</p>
                        </div>
                        <ul className="use-link ps-0 pt-2 ">
                            <li>404 Page</li>
                            <li>Page  Without  Sidebar</li>
                            <li>Page Left  Sidebar</li>
                            <li>Page Right  Sidebar</li>
                        </ul>
                   </div>
                </div>
                <div className="col-md-6 col-lg-3 mb-4 mb-lg-0">
                   <div className="py-5 ps-2 pe-2 "> 
                        <div className='pt-2 footer-title'>
                           <p>Contact Us</p>
                        </div>
                        <ul className="footer-text ps-0 pt-2 ">
                            <li className="d-flex gap-2">
                                <i class="bi bi-geo-alt-fill"></i>
                                <p className="use-link">San Fransisco CA 94107,US</p>
                            </li>
                            <li className="d-flex gap-2">
                                <i class="bi bi-envelope-fill"></i>
                                <p>wonted@gmail.com</p>
                            </li>
                            <li className="d-flex gap-2">
                                <i class="bi bi-telephone-fill"></i>                              
                                +123 345123 556
                            </li>
                        </ul>
                        <ul className='social-icon d-flex gap-2 align-items-center ps-0  mt-3'>
                            <li className='contact-icon'><i className="bi bi-facebook" /></li>
                            <li className='contact-icon'><i className="bi bi-twitter" /></li>
                            <li className='contact-icon'><i class="bi bi-instagram"></i></li>
                            <li className='contact-icon'><i className="bi bi-whatsapp" /></li>                                    
                        </ul>    
                   </div>
                </div>
                <div className="col-md-6 col-lg-3 mb-4 mb-lg-0">
                   <div className="py-5 ps-4 pe-2 "> 
                        <div className='pt-2 footer-title'>
                           <p>Our Newsletter</p>
                        </div>
                        <div>
                            <p className="mt-3 footer-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias, omnis?</p>
                        </div>
                        <form action="">
                            <div>
                                <input type="email" name="email" placeholder="Email" id="subscriber-email" className="form-control p-2 mb-3" ></input>
                             <Button btnName="Subscribe" />
                            </div>
                        </form>
                   </div>
                </div>
            </div>
        </div>
    </footer>
    </>
  )
}

export default Footer