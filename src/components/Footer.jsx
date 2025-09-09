import { Link } from 'react-router-dom'

// src/components/Footer.jsx
export default function Footer() {
  return (
    <>
      <footer className="footer-section bg-cover section-padding pb-0 custom-footer-bg">
        <div className="container">
          <div className="footer-cta-content pb-80">
            <h2 className="title-anim">Try It Free Explore for 7 Days</h2>
            <p>Start building your dream CRM pipeline today</p>
            <div className="project-button mt-40">
              <Link to="pricing.html" className="theme-btn">Start free trial <i
                className="fa-sharp fa-regular fa-arrow-right"></i></Link>
              <Link to="contact.html" className="theme-btn style-2">Get a demo <i
                className="fa-sharp fa-regular fa-arrow-right"></i></Link>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="footer-widgets-wrapper">
            <div className="row jus">
              <div className="col-xl-5 col-lg-4 col-md-6">
                <div className="single-footer-widget">
                  <div className="widget-head">
                    <Link to="index.html">
                      <img src="/assets/img/logo/logo.png" alt="img" loading='lazy' />
                    </Link>
                  </div>
                  <div className="footer-content">
                    <p> It involves the use of CRM software and strategies to effectively manage customer
                      relationships, improve customer satisfaction, and drive business growth. </p>
                    <div className="social-icon d-flex align-items-center">
                      <Link to="#"><i className="fab fa-facebook-f"></i></Link>
                      <Link to="#"><i className="fab fa-twitter"></i></Link>
                      <Link to="#"><i className="fa-brands fa-linkedin-in"></i></Link>
                      <Link to="#"><i className="fa-brands fa-youtube"></i></Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 ps-lg-5">
                <div className="single-footer-widget">
                  <div className="widget-head">
                    <h3>Our Products</h3>
                  </div>
                  <ul className="list-area">
                    <li>
                      <Link to="contact.html">
                        Admission Management System <span className='text-primary fw-bold'>(AMS)</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="pricing.html">
                        Learning Management System <span className='text-primary fw-bold'>(LMS)</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="project-details.html">
                        Online Examination Portal
                      </Link>
                    </li>
                    <li>
                      <Link to="contact.html">
                        Customer Relationship Management <span className='text-primary fw-bold'>(CRM)</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 ps-lg-4">
                <div className="single-footer-widget">
                  <div className="widget-head">
                    <h3>Useful Links</h3>
                  </div>
                  <ul className="list-area">
                    <li>
                      <Link to="about.html">
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link to="team.html">
                        Pricing
                      </Link>
                    </li>
                    <li>
                      <Link to="terms.html">
                       Blogs
                      </Link>
                    </li>
                    <li>
                      <Link to="/terms-conditions">
                        Terms & Conditions
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
          <div className="footer-contact-info">
            <div className="icon-items">
              <div className="icon">
                <i className="fa-sharp fa-solid fa-phone-volume"></i>
              </div>
              <h5><Link to="tel:01233337689">0123-333-7689</Link></h5>
            </div>
            <div className="icon-items">
              <div className="icon">
                <i className="fa-solid fa-envelope"></i>
              </div>
              <h5><Link to="/cdn-cgi/l/email-protection#3b52555d547b5e435a564b575e15585456"><span className="__cf_email__" data-cfemail="fc95929a93bc99849d918c9099d29f9391">[email&#160;protected]</span></Link></h5>
            </div>
            <div className="icon-items">
              <div className="icon">
                <i className="fa-sharp fa-solid fa-location-dot"></i>
              </div>
              <h5>
                <Link
                  to="#">House
                  5919 Trussville, USA.</Link>
              </h5>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="footer-bottom-wrapper">
              <p className="text-center">
                Copyright 2025 All rights are reserved By <Link to="#" className='fw-bold'> Edtech Innovate Pvt Ltd</Link>
              </p>
            </div>
          </div>
        </div>
      </footer>

      <button id="back-top" className="back-to-top">
        <i className="fa-regular fa-arrow-up"></i>
      </button>
    </>
  );
}
