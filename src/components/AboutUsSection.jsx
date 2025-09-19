import { Link } from 'react-router-dom'

export default function AboutUsSection ({about}) {   
    return (
        <>
             <section className="project-section style-1 fix section-padding pb-4">
                <div className="container">
                    <div className="section-title text-center mb-5">
                        <div className="sub-text justify-content-center wow fadeInUp">
                            <img src="/assets/img/star.png" alt="img" loading='lazy' />
                            <h6> {about?.[0]?.title} </h6> <img src="/assets/img/star.png" alt="img" loading='lazy' />
                        </div>
                        <h2 className="title-anim"> About Us</h2 >
                        {/* <p className="mt-3 wow fadeInUp" data-wow-delay=".3s">
                            CRM management is comprehensive contact management, allowing businesses to centralize <br /> and
                            organize customer information for easy access.
                        </p> */}
                    </div>

                    <div className="row align-items-center">
                        <div className="col-12 col-md-6">
                            <div className="about-us-content mb-4">
                            {/* <h2 className='fs-2'> About Us </h2> */}
                            <p className='mb-0'> {about?.[0]?.message} </p>
                            </div>
                        </div>

                        <div className="col-12 col-md-6">
                            <div className="about-us-img">
                                <img src={about?.[0]?.image} alt="img" className='img-fluid rounded-3 w-100' loading='lazy' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}