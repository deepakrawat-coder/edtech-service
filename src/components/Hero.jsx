import { Link } from "react-router-dom";
import StartTrial from "./StartTrial";
export default function Hero({ banner }) {
  const hero = banner?.[0] || {};

  return (
    <>
      <section className="hero-section hero-1 bg-cover custom-bg">
        <div className="container">
          <div className="hero-content">
            <h1 className="title-anim">
              {hero.heading || "Default Heading"}{" "}
              <span>{hero.highlight_heading || "Highlight"}</span>
            </h1>
            <p className="wow fadeInUp" data-wow-delay=".3s">
              {hero.sub_heading || ""}
            </p>

            <ul className="review-box wow fadeInUp" data-wow-delay=".5s">
              <li>
                <i className="fa-sharp fa-solid fa-circle-check"></i>
                <span>
                  <b>1000+</b> Reviews on
                </span>
              </li>
              <li>
                <i className="fa-sharp fa-solid fa-circle-check"></i>
                <span>No credit card required</span>
              </li>
              <li>
                <i className="fa-sharp fa-solid fa-circle-check"></i>
                <span>
                  Trusted by <b>200+</b> Companies
                </span>
              </li>
            </ul>

            <div className="hero-button">
              <StartTrial />
              <Link
                to="#"
                className="theme-btn style-2 video-popup wow fadeInUp d-none d-lg-block"
                data-wow-delay=".5s"
              >
                Watch demo <i className="fa-regular fa-circle-play"></i>
              </Link>
            </div>
          </div>
        </div>

        <div className="dashboard-section section-padding pb-0 custom_none">
          <div className="dashboard-image">
            <picture>
              <source srcSet={hero.image} type="image/avif" />
              <source srcSet={hero.image} type="image/webp" />
              <img
                src={hero.image}
                alt="Hero Banner"
                className="img-fluid rounded-3"
                loading="eager"
                fetchpriority="high"
                width="1270"
                height="700"
              />
            </picture>
          </div>
        </div>
      </section>
    </>
  );
}
