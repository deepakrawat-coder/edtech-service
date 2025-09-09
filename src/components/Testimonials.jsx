import { useEffect, useRef } from "react";

export default function Testimonials() {
    const sliderRef = useRef(null);

    // ✅ JSON Data for testimonials
    const testimonials = [
        {
            id: 1,
            text: "We've been using CRM management for months now, and the results speak for themselves. Our sales pipeline visibility has improved.",
            img: "/assets/img/brand/ccvte.jpg",
            name: "CCVTE",
            position: "Board",
        },
        {
            id: 2,
            text: "CRM has been a game changer for us! Everything is centralized and much easier to manage.",
            img: "/assets/img/brand/glocal.jpg",
            name: "Glocal University",
            position: "University",
        },
        {
            id: 3,
            text: "The automation features save us hours every week. Our workflows are much smoother now.",
            img: "/assets/img/brand/jua-logo.jpg",
            name: "Jamia",
            position: "Board",
        },
    ];

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
                        <h6>OUR Feedback</h6>
                        <img src="/assets/img/star.png" alt="img" loading='lazy' />
                    </div>
                    <h2 className="title-anim">Check what these clients have to say</h2>
                    <p>
                        CRM management is comprehensive contact management, allowing
                        businesses to centralize and organize customer information for easy
                        access.
                    </p>
                </div>

                {/* ✅ Swiper */}
                <div className="swiper testimonial-slider" ref={sliderRef}>
                    <div className="swiper-wrapper">
                        {testimonials.map((t) => (
                            <div className="swiper-slide" key={t.id}>
                                <div className="testimonial-box-items">
                                    <p>{t.text}</p>
                                    <div className="icon">
                                        <img src="/assets/img/testimonial/quote.png" alt="quote" loading='lazy' />
                                    </div>
                                    <div className="client-info-item">
                                        <div className="client-image">
                                            <img src={t.img} alt={t.name} loading='lazy' />
                                        </div>
                                        <div className="content">
                                            <h3>{t.name}</h3>
                                            <p>{t.position}</p>
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
