import { Link } from 'react-router-dom'

export default function Services() {
    // JSON-like data array
    const servicesData = [
        {
            id: 1,
            icon: "/assets/img/icon/01.svg",
            title: "Key to control",
            description:
                "Customer Relationship Management CRM is the key to governing consumer connection by offering a control. This is done through a transparent central data system, streamlining communication.",
            link: "#",
            delay: ".3s",
        },
        {
            id: 2,
            icon: "/assets/img/icon/02.svg",
            title: "Data Collection",
            description:
                "CRM systems collect data by capturing every interaction between a company and it’s consumers via emails, purchases, feedback, preferences with history. This data is stored in a centralized.",
            link: "#",
            delay: ".5s",
        },
        {
            id: 3,
            icon: "/assets/img/icon/03.svg",
            title: "CRM the Joystick",
            description:
                "CRM is the joystick/language for modern engagement. Move left right up down and you get your desired customer activities, marketing, support, precision and assured results.",
            link: "#",
            delay: ".7s",
        },
        {
            id: 4,
            icon: "/assets/img/icon/04.svg",
            title: "Track Customers",
            description:
                "CRM tracks consumer needs and demand by capturing every interaction such as purchases, feedback, preferences by organising them into its clear transparent framework.",
            link: "#",
            delay: ".3s",
        },
        {
            id: 5,
            icon: "/assets/img/icon/05.svg",
            title: "CRM’s Promise",
            description:
                "CRM promises a longer, happier and a healthier relationship between companies and their customers by nurturing trust, simplifying interactions and with crystal clear responses.",
            link: "#",
            delay: ".5s",
        },
        {
            id: 6,
            icon: "/assets/img/icon/06.svg",
            title: "Grading your workforce",
            description:
                "One of the best tools of CRM includes the grading of the company’s workforce. The real time evaluation done by CRM is a cutting edge algorithm with the highest precision.",
            link: "#",
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
                <div className="row" id='service'>
                    {servicesData.map((service) => (
                        <div
                            key={service.id}
                            className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp position-relative"
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
                                    <img src={service.icon} alt={service.title} width="100" loading='lazy' />
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
                    {/* <Link to="#" className="theme-btn">
                        See All Services{" "}
                        <i className="fa-sharp fa-regular fa-arrow-right"></i>
                    </Link> */}
                </div>
            </div>
        </section>
    );
}
