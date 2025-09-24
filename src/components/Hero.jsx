import { Link } from "react-router-dom";
import StartTrial from './StartTrial';
export default function Hero({ banner }) {
  return (
    <>
      {/* <section className="hero-section hero-1 bg-cover" style={{ backgroundImage: "url('/assets/img/hero/hero-bg-1.png')" }}> */}
      <section className="hero-section hero-1 bg-cover custom-bg">
        <div className="container">
          <div className="hero-content">
            {/* <h1 className="title-anim">{banner[0].heading} <span>{banner[0].highlight_heading}</span> </h1> */}
            <h1 className="title-anim">
              {banner?.[0]?.heading || "Default Heading"}{" "}
              <span>{banner?.[0]?.highlight_heading || "Highlight"}</span>
            </h1>
            <p className="wow fadeInUp" data-wow-delay=".3s"> {banner?.[0]?.sub_heading} </p>
            <ul className="review-box wow fadeInUp" data-wow-delay=".5s">
              <li>
                <i className="fa-sharp fa-solid fa-circle-check"></i>
                <span> <b> 1000+ </b> Reviews on </span>
              </li>
              <li>
                <i className="fa-sharp fa-solid fa-circle-check"></i>
                <span> No credit card required </span>
              </li>
              <li>
                <i className="fa-sharp fa-solid fa-circle-check"></i>
                <span> Trusted by <b> 200+ </b> "Companies" </span>
              </li>
            </ul>
            <div className="hero-button">
              <StartTrial/>
              <Link
                to="#"
                className="theme-btn style-2 video-popup wow fadeInUp"
                data-wow-delay=".5s"
              >
                Watch demo <i className="fa-regular fa-circle-play"></i>
              </Link>
            </div>
          </div>
        </div>
        <div className="dashboard-section section-padding pb-0">
          <div className="dashboard-image">
            <img src={banner?.[0]?.image} alt="img" className='img-fluid rounded-3' loading='lazy' fetchPriority="high" />
            {/* <Link to="https://www.youtube.com/watch?v=Cn4G2lZ_g2I" className="video-btn ripple video-popup">
                                <i className="fas fa-play"></i>
                            </Link> */}
          </div>
        </div>
      </section>
    </>
  );
}
