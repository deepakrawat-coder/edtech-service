import { Link } from "react-router-dom";
import StartTrial from './StartTrial';

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
              {/* <Link to="#" className="theme-btn">
                Start free trial{" "}
                <i className="fa-sharp fa-regular fa-arrow-right"></i>
              </Link> */}
              <StartTrial/>
              <Link to="#" className="theme-btn style-2">
                Get a demo{" "}
                <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="footer-widgets-wrapper">
            <div className="row jus" id="footer">
              <div className="col-xl-5 col-lg-4 col-md-6">
                <div className="single-footer-widget">
                  <div className="widget-head">
                    <Link to="/">
                      <img
                      fetchPriority="low"
                        src="/assets/img/logo/logo.png"
                        alt="img"
                        loading="lazy"
                      />
                    </Link>
                  </div>
                  <div className="footer-content">
                    <p>
                      {" "}
                      We are a dedicated team of Innovators at Edtech Innovate Pvt. Ltd. We listen to needs and demands of the Educational Institutes and the students in particular. We are focused on imparting smart education to the students and offer state of the art management tools to the institutes all over India and abroad.{" "}
                    </p>
                    <div className="social-icon d-flex align-items-center">
                      <Link to="https://www.facebook.com/EdTechInnovatePvtLtd" aria-label="facebook social media icon" target="_blank">
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                      <Link to="https://www.instagram.com/edtech_innovate/" aria-label="instagram social media icon" target="_blank">
                        <i className="fab fa-instagram"></i>
                      </Link>
                      <Link to="https://www.linkedin.com/company/edtechinnovate" aria-label="linkedin social media icon" target="_blank">
                        <i className="fa-brands fa-linkedin-in"></i>
                      </Link>
                      <Link to="https://www.youtube.com/@EdTechInnovate" aria-label="youtube social media icon" target="_blank">
                        <i className="fa-brands fa-youtube"></i>
                      </Link>
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
                      <Link to="https://www.edtechinnovate.com/admission-management-system" target="_blank">
                        Admission Management System{" "}
                        <span className="text-primary fw-bold">(AMS)</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="https://www.edtechinnovate.com/learning-management-system" target="_blank">
                        Learning Management System{" "}
                        <span className="text-primary fw-bold">(LMS)</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="https://www.edtechinnovate.com/online-exam-portal" target="_blank">Online Examination Portal</Link>
                    </li>
                    {/* <li>
                      <Link to="#">
                        Customer Relationship Management{" "}
                        <span className="text-primary fw-bold">(CRM)</span>
                      </Link>
                    </li> */}
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
                      <Link to="/blogs"> Blogs </Link>  
                    </li>
                    <li>
                      <Link to="/terms-conditions">
                        Terms & Conditions
                      </Link>
                    </li>
                    <li>
                      <Link to="/privacy-policy">Privacy Policy</Link>
                    </li>
                    <li>
                      <Link to="/cancellation-and-refund-policy">
                        Cancellation & Refund Policy
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
              <h5>
                <Link to="tel:+91 8851920153"> +91 8851920153 </Link>
              </h5>
            </div>
            <div className="icon-items">
              <div className="icon">
                <i className="fa-solid fa-envelope"></i>
              </div>
              <h5>
                {" "}
                <Link
                  to="mailto:info@edtechinnovate.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  info@edtechinnovate.com
                </Link>
              </h5>
            </div>
            <div className="icon-items">
              <div className="icon">
                <i className="fa-sharp fa-solid fa-location-dot"></i>
              </div>
              <h5>
                <Link to="#">
                  {" "}
                  A-18, S1, Second Floor, Sector 59, Noida UP 201301{" "}
                </Link>
              </h5>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="footer-bottom-wrapper">
              <p className="text-center">
                Copyright 2025 All rights are reserved By{" "}
                <Link to="#" className="fw-bold">
                  {" "}
                  Edtech Innovate Pvt Ltd
                </Link>
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
