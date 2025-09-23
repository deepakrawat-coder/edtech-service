import { useEffect, useRef } from "react";

export default function Testimonials({ testimonialsData }) {
    const sliderRef = useRef(null);

    useEffect(() => {
        if (window.Swiper && sliderRef.current) {
            new window.Swiper(sliderRef.current, {
                spaceBetween: 30,
                speed: 2000,
                loop: true,
                autoplay: {
                    delay: 2000,
                    disableOnInteraction: false,
                },
                navigation: {
                    nextEl: ".array-next",
                    prevEl: ".array-prev",
                },
                breakpoints: {
                    991: { slidesPerView: 2 },
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
                        <img src="/assets/img/star.png" alt="img" loading='lazy' />
                        <p className="h6 mb-0">OUR Feedback</p>
                        <img src="/assets/img/star.png" alt="img" loading='lazy' />
                    </div>
                    <h2 className="title-anim">Check what these clients have to say</h2>
                    {/* <p>
                        CRM management is comprehensive contact management, allowing
                        businesses to centralize and organize customer information for easy
                        access.
                    </p> */}
                </div>

                <div className="swiper testimonial-slider" ref={sliderRef}>
                    <div className="swiper-wrapper">
                        {testimonialsData.map((t) => (
                            <div className="swiper-slide" key={t.id}>
                                <div className="testimonial-box-items">
                                    <p dangerouslySetInnerHTML={{ __html: t.message }}></p>
                                    <div className="icon">
                                        <img src="/assets/img/testimonial/quote.png" alt="quote" loading='lazy' />
                                    </div>
                                    <div className="client-info-item">
                                        <div className="client-image">
                                            <img src={t.image} alt={t.name} loading='lazy' />
                                        </div>
                                        <div className="content">
                                            <h3>{t.name}</h3>
                                            <p>{t.title}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

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
