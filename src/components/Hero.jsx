import {Link} from 'react-router-dom'

export default function Hero() {
    return (
        <>
            {/* <section className="hero-section hero-1 bg-cover" style={{ backgroundImage: "url('/assets/img/hero/hero-bg-1.png')" }}> */}
            <section className="hero-section hero-1 bg-cover custom-bg">
                <div className="container">
                    <div className="hero-content">
                        <h1 className="title-anim">Power your business with <span>Edtech CRM</span> </h1>
                        <p className="wow fadeInUp" data-wow-delay=".3s"> Our modern sales CRM empowers you to unleash productivity,
                            ensuring seamless pipeline visibility. </p>
                        <ul className="review-box wow fadeInUp" data-wow-delay=".5s">
                            <li>
                                <i className="fa-sharp fa-solid fa-circle-check"></i>
                                <span>
                                    <b>10,000+</b>
                                    Reviews on
                                </span>
                            </li>
                            <li>
                                <i className="fa-sharp fa-solid fa-circle-check"></i>
                                <span>
                                    No credit card required
                                </span>
                            </li>
                            <li>
                                <i className="fa-sharp fa-solid fa-circle-check"></i>
                                <span>
                                    Trusted by
                                    <b>100,000+</b>
                                    Company
                                </span>
                            </li>
                        </ul>
                        <div className="hero-button">
                            <Link to="pricing.html" className="theme-btn wow fadeInUp" data-wow-delay=".3s">Start free trial <i
                                className="fa-sharp fa-regular fa-arrow-right"></i></Link>
                            <Link to="#" className="theme-btn style-2 video-popup wow fadeInUp" data-wow-delay=".5s">
                                Watch demo <i className="fa-regular fa-circle-play"></i>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="dashboard-section section-padding pb-0">
                    <div className="dashboard-image img-custom-anim-left ">
                        <img src="/assets/img/dashboard-img.png" alt="img" className='img-fluid' loading='lazy' />
                            {/* <Link to="https://www.youtube.com/watch?v=Cn4G2lZ_g2I" className="video-btn ripple video-popup">
                                <i className="fas fa-play"></i>
                            </Link> */}
                    </div>
                </div>
            </section>
        </>
    );
}