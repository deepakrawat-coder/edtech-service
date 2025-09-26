import React from "react";
import DOMPurify from "dompurify";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Testimonials({ keyFeatures }) {
  return (
    <section className="testimonial-section section-padding">
      <div className="container">
        {/* Section Title */}
        <div className="section-title text-center mb-40">
          <div className="sub-text justify-content-center">
            <img
              src="/assets/img/star.png"
              alt="star"
              loading="lazy"
              fetchPriority="low"
            />
            <p className="h6 mb-0">features</p>
            <img
              src="/assets/img/star.png"
              alt="star"
              loading="lazy"
              fetchPriority="low"
            />
          </div>
          <h2 className="title-anim mb-3">
            Edtech CRM A unique way business
          </h2>
          <p>
            CRM management is comprehensive contact management, allowing
            businesses to centralize <br /> and organize customer information
            for easy access.
          </p>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          navigation={{
            nextEl: ".array-next",
            prevEl: ".array-prev",
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            575: { slidesPerView: 1 },
            767: { slidesPerView: 1 },
            991: { slidesPerView: 1 },
          }}
        >
          {keyFeatures.map((t) => (
            <SwiperSlide key={t.id}>
              <div className="testimonial-box-items">
                <div className="row align-items-center">
                  <div className="col-12 col-lg-6">
                    <div className="feature-content mb-4">
                      <h3 className="wow fadeInUp mb-2" data-wow-delay=".3s">
                        {t.title}
                      </h3>
                      <p
                        className="wow fadeInUp font-16"
                        data-wow-delay=".3s"
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
                        fetchPriority="low"
                        width="600"
                        height="450"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation */}
        <div className="array-button justify-content-center pt-5">
          <button className="array-prev" aria-label="Key Feature Preview">
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          <button className="array-next" aria-label="Key Feature Next">
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
}
