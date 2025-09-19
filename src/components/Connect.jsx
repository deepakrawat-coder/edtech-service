import {Link} from 'react-router-dom'

export default function Connect() {
    return (
        <>
            {/* <section className="cta-section section-padding bg-cover"  style={{ backgroundImage: "url('/assets/img/cta/cta-bg.jpg')" }}> */}
            <section className="cta-section section-padding bg-cover custom-footer-bg">
                {/* <div className="techro-logo">
                    <img src="/assets/img/logo/logo.png" alt="img" loading='lazy' />
                </div> */}
                <div className="container">
                    <div className="cta-content-wrapper">
                        <h2 className="title-anim">Essential Connect your favorite tools with Edtech CRM</h2>
                        <p className="wow fadeInUp" data-wow-delay=".3s">Connect your favorite tools and find new Add-Ons.</p>
                        <Link to="#" className="theme-btn">Start free trial <i
                            className="fa-sharp fa-regular fa-arrow-right"></i></Link>
                    </div>
                </div>
            </section>
        </>
    )
}