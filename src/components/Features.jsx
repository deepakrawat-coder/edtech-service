import { useEffect, useRef } from "react";
import DOMPurify from 'dompurify';

export default function Testimonials({ keyFeatures }) {
  const sliderRef = useRef(null);
  keyFeatures.map((items) => {
    // console.log(items);
  });
  // ✅ JSON Data for testimonials
  // const features = [
  //     {
  //         id: 1,
  //         title: "Sales Force Automation id1",
  //         desc: "With comprehensive lead management tools, businesses can capture leads from various sources, track their interactions, and prioritize follow-ups. By customizing.",
  //         img: "https://placehold.co/400x300",
  //     },
  //     {
  //         id: 2,
  //         title: "Sales Force Automation id2",
  //         desc: "With comprehensive lead management tools, businesses can capture leads from various sources, track their interactions, and prioritize follow-ups. By customizing.",
  //         img: "https://placehold.co/400x300",
  //     },
  //     {
  //         id: 1,
  //         title: "Sales Force Automation id3",
  //         desc: "With comprehensive lead management tools, businesses can capture leads from various sources, track their interactions, and prioritize follow-ups. By customizing.",
  //         img: "https://placehold.co/400x300",
  //     },
  // ];

  useEffect(() => {
    if (window.Swiper && sliderRef.current) {
      new window.Swiper(sliderRef.current, {
        spaceBetween: 30,
        speed: 3000,
        loop: true,
        // autoplay: {
        //     delay: 3000,
        //     disableOnInteraction: false,
        // },
        navigation: {
          nextEl: ".array-next",
          prevEl: ".array-prev",
        },
        breakpoints: {
          991: { slidesPerView: 1 },
          767: { slidesPerView: 1 },
          575: { slidesPerView: 1 },
          0: { slidesPerView: 1 },
        },
      });
    }
  }, []);

  return (
    <section className="testimonial-section section-padding">
      <div className="container">
        <div className="section-title text-center mb-40">
          <div className="sub-text justify-content-center">
            <img src="/assets/img/star.png" alt="img" loading="lazy" />
            <h6> features </h6>
            <img src="/assets/img/star.png" alt="img" loading="lazy" />
          </div>
          <h2 className="title-anim mb-3">
            {" "}
            Edtech CRM A unique way business{" "}
          </h2>
          <p>
            {" "}
            CRM management is comprehensive contact management, allowing
            businesses to centralize <br /> and organize customer information
            for easy access.{" "}
          </p>
        </div>

        {/* ✅ Swiper */}
        <div className="swiper testimonial-slider" ref={sliderRef}>
          <div className="swiper-wrapper">
            {keyFeatures.map((t) => (
              <div className="swiper-slide" key={t.id}>
                <div className="testimonial-box-items">
                  <div className="row align-items-center">
                    <div className="col-12 col-lg-6">
                      <div className="feature-content mb-4">
                        <h3 className="wow fadeInUp mb-2" data-wow-delay=".3s">
                          {" "}
                          {t.title}{" "}
                        </h3>
                        {/* <p className="wow fadeInUp" data-wow-delay=".3s">
                          {" "}
                          {t.message}{" "}
                        </p> */}
                        <p
                  className="wow fadeInUp" data-wow-delay=".3s"
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(t.message),
                  }}
                ></p>
                      </div>
                    </div>
                    <div className="col-12 col-lg-6">
                      <div className="feature-content">
                        <img
                          src={t.image}
                          className="img-fluid w-100 rounded-3"
                          alt={t.title}
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="array-button justify-content-center pt-5">
            <button className="array-prev">
              <i className="fa-solid fa-chevron-left"></i>
            </button>
            <button className="array-next">
              <i className="fa-solid fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
