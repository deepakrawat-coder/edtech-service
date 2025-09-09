import {Link} from 'react-router-dom'

export default function Services() {
    // JSON-like data array
    const servicesData = [
        {
            id: 1,
            icon: "/assets/img/icon/01.svg",
            title: "Contact management",
            description:
                "This title is versatile and can adapted to fit the specific tone and branding of your website quality.",
            link: "service-details.html",
            delay: ".3s",
        },
        {
            id: 2,
            icon: "/assets/img/icon/02.svg",
            title: "Sales automation",
            description:
                "This title is versatile and can adapted to fit the specific tone and branding of your website quality.",
            link: "service-details.html",
            delay: ".5s",
        },
        {
            id: 3,
            icon: "/assets/img/icon/03.svg",
            title: "Task Management",
            description:
                "This title is versatile and can adapted to fit the specific tone and branding of your website quality.",
            link: "service-details.html",
            delay: ".7s",
        },
        {
            id: 4,
            icon: "/assets/img/icon/04.svg",
            title: "Pipelines management",
            description:
                "This title is versatile and can adapted to fit the specific tone and branding of your website quality.",
            link: "service-details.html",
            delay: ".3s",
        },
        {
            id: 5,
            icon: "/assets/img/icon/05.svg",
            title: "Email automation",
            description:
                "This title is versatile and can adapted to fit the specific tone and branding of your website quality.",
            link: "service-details.html",
            delay: ".5s",
        },
        {
            id: 6,
            icon: "/assets/img/icon/06.svg",
            title: "Workflow Automation",
            description:
                "This title is versatile and can adapted to fit the specific tone and branding of your website quality.",
            link: "service-details.html",
            delay: ".7s",
        },
    ];

    return (
        <section
            className="service-section style-1 fix section-padding pt-0"
            style={{ backgroundImage: "url('/assets/img/service/bg.png')" }}
        >
            <div className="container">
                {/* Section title */}
                <div className="section-title text-center">
                    <div className="sub-text justify-content-center wow fadeInUp">
                        <img src="/assets/img/star.png" alt="star" loading='lazy' />
                        <h6> Service</h6>
                        <img src="/assets/img/star.png" alt="star" loading='lazy' />
                    </div>
                    <h2 className="title-anim">Exploring Essential Service</h2>
                    <p className="mt-3 wow fadeInUp" data-wow-delay=".3s">
                        CRM management is comprehensive contact management, allowing
                        businesses to centralize <br /> and organize customer information
                        for easy access.
                    </p>
                </div>

                {/* Services grid */}
                <div className="row">
                    {servicesData.map((service) => (
                        <div
                            key={service.id}
                            className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                            data-wow-delay={service.delay}
                        >
                            <div className="service-box-items">
                                {/* Shapes */}
                                <div className="item-shape">
                                    <img src="/assets/img/service/item-shape.png" alt="shape" loading='lazy' />
                                </div>
                                <div className="item-shape-2">
                                    <img
                                        src="/assets/img/service/item-shape-2.png"
                                        alt="shape"
                                    />
                                </div>

                                {/* Icon */}
                                <div className="icon">
                                    <img src={service.icon} alt={service.title} loading='lazy'/>
                                </div>

                                {/* Content */}
                                <div className="content">
                                    <h3>
                                        <Link to={service.link}>{service.title}</Link>
                                    </h3>
                                    <p>{service.description}</p>
                                </div>

                                {/* Arrow */}
                                {/* <Link to={service.link} className="arrow-icon">
                                    <i className="fa-sharp fa-solid fa-arrow-right"></i>
                                </Link> */}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Button */}
                <div
                    className="service-button text-center mb-1 wow fadeInUp"
                    data-wow-delay=".3s"
                >
                    <Link to="service.html" className="theme-btn">
                        See All Services{" "}
                        <i className="fa-sharp fa-regular fa-arrow-right"></i>
                    </Link>
                </div>
            </div>
        </section>
    );
}
