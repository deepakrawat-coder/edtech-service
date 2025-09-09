import {Link} from 'react-router-dom'

export default function Features() {
    return (
        <>
            <section className="project-section style-1 fix section-padding">
                <div className="container">
                    <div className="section-title text-center mb-78">
                        <div className="sub-text justify-content-center wow fadeInUp">
                            <img src="/assets/img/star.png" alt="img" loading='lazy' />
                            <h6> Appreciation feature</h6> <img src="/assets/img/star.png" alt="img" loading='lazy' />
                        </div>
                        <h2 className="title-anim"> Edtech CRM A unique way business</h2 >
                        <p className="mt-3 wow fadeInUp" data-wow-delay=".3s">
                            CRM management is comprehensive contact management, allowing businesses to centralize <br /> and
                            organize customer information for easy access.
                        </p>
                    </div>
                    <div className="project-main-wrapper">
                        <div className="project-wrapper">
                            <div className="project-content">
                                <span className="wow fadeInUp">01.</span>
                                <h3 className="wow fadeInUp" data-wow-delay=".3s"><Link to="project-details.html">Sales Force
                                    Automation</Link></h3>
                                <p className="wow fadeInUp" data-wow-delay=".3s">With comprehensive lead management tools,
                                    businesses can capture leads from various sources, track their interactions, and prioritize
                                    follow-ups. By customizing.</p>
                                {/* <Link to="project-details.html" className="link-btn wow fadeInUp" data-wow-delay=".5s">Learn more<i
                                    className="fa-sharp fa-regular fa-arrow-right"></i></Link> */}
                            </div>
                            <div className="project-thumb img-custom-anim-right">
                                <img src="/assets/img/project/01.png" alt="img" loading='lazy' />
                            </div>
                        </div>
                        <div className="project-wrapper style-padding style-2">
                            <div className="project-thumb img-custom-anim-left">
                                <img src="/assets/img/project/02.png" alt="img" loading='lazy' />
                            </div>
                            <div className="project-content">
                                <span className="wow fadeInUp">02.</span>
                                <h3 className="wow fadeInUp" data-wow-delay=".3s"><Link to="project-details.html">Lead Management</Link>
                                </h3>
                                <p className="wow fadeInUp" data-wow-delay=".5s">With comprehensive lead management tools,
                                    businesses can capture leads from various sources, track their interactions, and prioritize
                                    follow-ups. By customizing.</p>
                                {/* <Link to="project-details.html" className="link-btn wow fadeInUp" data-wow-delay=".3s">Learn more<i
                                    className="fa-sharp fa-regular fa-arrow-right"></i></Link> */}
                            </div>
                        </div>
                        <div className="project-wrapper style-3">
                            <div className="project-content">
                                <span className="wow fadeInUp">03.</span>
                                <h3 className="wow fadeInUp" data-wow-delay=".3s"><Link to="project-details.html">Customer
                                    Service</Link></h3>
                                <p className="wow fadeInUp" data-wow-delay=".5s">By centralizing customer data, tracking
                                    interactions, and analyzing buying behavior, Sales CRM equips sales teams with the insights
                                    and tools they need to close deals.</p>
                                {/* <Link to="project-details.html" className="link-btn wow fadeInUp" data-wow-delay=".3s">Learn more<i
                                    className="fa-sharp fa-regular fa-arrow-right"></i></Link> */}
                            </div>
                            <div className="project-thumb img-custom-anim-right">
                                <img src="/assets/img/project/03.png" alt="img" loading='lazy' />
                            </div>
                        </div>
                        <div className="project-wrapper style-padding style-4">
                            <div className="project-thumb img-custom-anim-left">
                                <img src="/assets/img/project/04.png" alt="img" loading='lazy' />
                            </div>
                            <div className="project-content">
                                <span className="wow fadeInUp">04.</span>
                                <h3 className="wow fadeInUp" data-wow-delay=".3s"><Link to="project-details.html">Multichannel
                                    Marketing</Link>
                                </h3>
                                <p className="wow fadeInUp" data-wow-delay=".5s">With comprehensive lead management tools,
                                    businesses can capture leads from various sources, track their interactions, and prioritize
                                    follow-ups. By customizing.</p>
                                {/* <Link to="project-details.html" className="link-btn wow fadeInUp" data-wow-delay=".3s">Learn more<i
                                    className="fa-sharp fa-regular fa-arrow-right"></i></Link> */}
                            </div>
                        </div>
                        <div className="project-button wow fadeInUp" data-wow-delay=".3s">
                            <Link to="project-details.html" className="theme-btn">More Features <i
                                className="fa-sharp fa-regular fa-arrow-right"></i></Link>
                            <Link to="pricing.html" className="theme-btn style-2">Start free trial <i
                                className="fa-sharp fa-regular fa-arrow-right"></i></Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}