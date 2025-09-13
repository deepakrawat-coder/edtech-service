import { Link, useParams } from "react-router-dom";

export default function BlogDetails() {
    const { slug } = useParams();

    const blogData = [
        {
            id: 1,
            image: "/assets/img/news/01.jpg",
            date: "07 May,2024",
            link: "#",
            title: "How to Comprehensive at SaaS Developments",
        },
        {
            id: 2,
            image: "/assets/img/news/02.jpg",
            date: "07 May,2024",
            link: "#",
            title: "6 Essential Tips for Big Commerce Stores",
        },
        {
            id: 3,
            image: "/assets/img/news/03.jpg",
            date: "07 May,2024",
            link: "#",
            title: "Empowering Startups & Small Businesses",
        },
        {
            id: 4,
            image: "/assets/img/news/01.jpg",
            date: "07 May,2024",
            link: "#",
            title: "How to Comprehensive at SaaS Developments",
        },
        {
            id: 5,
            image: "/assets/img/news/02.jpg",
            date: "07 May,2024",
            link: "#",
            title: "6 Essential Tips for Big Commerce Stores",
        },
        {
            id: 6,
            image: "/assets/img/news/03.jpg",
            date: "07 May,2024",
            link: "#",
            title: "Empowering Startups & Small Businesses",
        },
    ];

    return (
        <>
            <div
                className="breadcrumb-wrapper bg-cover"
                style={{ backgroundImage: "url('assets/img/breadcrumb.jpg')" }}
            >
                <div className="container">
                    <div className="page-heading">
                        <div className="page-heading-text">
                            <h1 className="wow fadeInUp" data-wow-delay=".3s"> Latest News </h1>
                            <h2 className="wow fadeInUp" data-wow-delay=".5s"> Blog & Article </h2>
                        </div>
                        <div className="breadcrumb-main-items">
                            <ul className="breadcrumb-items wow fadeInUp" data-wow-delay=".5s">
                                <li>
                                    <Link to="/"> Home </Link>
                                </li>
                                <li>
                                    <i className="fa-regular fa-arrow-right-long"></i>
                                </li>
                                <li>Blog Details</li>
                            </ul>
                            <div className="breadcrumb-text-items">
                                <div id="scrollDown" className="icon wow fadeInUp" data-wow-delay=".3s">
                                    <i className="fa-regular fa-arrow-down-long"></i>
                                </div>
                                <p className="wow fadeInUp" data-wow-delay=".5s">
                                    CRM management is comprehensive contact management, allowing businesses.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Example output of the dynamic slug */}
            {/* <div className="container mt-5">
                <h3> Viewing Blog Post: </h3>
                <p><strong> Slug: </strong> {slug} </p>
            </div> */}



            {/* News Details Section Starts  */}
            <section className="news-details-section fix section-padding">
                <div className="container">
                    <div className="news-details-wrapper">
                        <div className="row">
                            <div className="col-lg-12">
                                <h2 className="details-title">
                                    How to Comprehensive at SaaS Developments.
                                </h2>
                                <div className="list-items">
                                    <ul className="style-2">
                                        <li><i className="fa-light fa-calendar-week"></i>10 August, 2025</li>
                                    </ul>
                                </div>
                                <div className="details-image">
                                    <img src="/assets/img/news/details-1.jpg" alt="img" />
                                </div>
                                <div className="news-details-content">
                                    <div className="content">
                                        <p className="mb-3">
                                            Focus on creating a user-centric interface with intuitive navigation and responsive
                                            design. Prioritize security by implementing robust measures to protect user data and
                                            ensure compliance with industry regulations. Ensure your SaaS product has strong
                                            integration capabilities with other tools and platforms.
                                        </p>
                                        <p>
                                            Developing a comprehensive SaaS product begins with extensive market research to
                                            identify customer needs and market gaps. Clearly define your product requirements
                                            and goals to guide the development process. Design a scalable and secure
                                            architecture that can grow with your user base. Select an appropriate technology
                                            stack that aligns with your project’s objectives. Implement agile development
                                            practices to ensure flexibility and continuous improvement.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            {/* News Details Section Ends  */}


            {/* Faq Section Starts  */}
            <section className="faq-section section-padding pt-0 fix">
                <div className="faq-shape">
                    <img src="/assets/img/faq-shape.png" alt="img" />
                </div>
                <div className="faq-shape-2">
                    <img src="/assets/img/faq-shape-2.png" alt="img" />
                </div>
                <div className="container">
                    <div className="section-title text-center mb-70">
                        <div className="sub-text justify-content-center wow fadeInUp">
                            <img src="/assets/img/star.png" alt="img" />
                            <h6>FAQS</h6> <img src="/assets/img/star.png" alt="img" />
                        </div>
                        <h2 className="title-anim">Get Your Have a Questions?</h2>
                        <p className="mt-3 wow fadeInUp" data-wow-delay=".3s">
                            Welcome to our FAQS section, where we address common queries and provide helpful <br /> solutions to
                            ensure you get the most out of our CRM software.
                        </p>
                    </div>
                    <div className="faq-wrapper">
                        <div className="row justify-content-center">
                            <div className="col-xl-8">
                                <div className="faq-items">
                                    <div className="accordion" id="accordionExample">
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="headingOne">
                                                <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                                    data-bs-target="#collapseOne" aria-expanded="true"
                                                    aria-controls="collapseOne">
                                                    Q. CRM software, and how can it benefit my business?
                                                </button>
                                            </h2>
                                            <div id="collapseOne" className="accordion-collapse collapse show"
                                                aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    <p>
                                                        CRM (Customer Relationship Management) software helps businesses
                                                        centralize data, streamline sales processes, and improve customer.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="headingTwo">
                                                <button className="accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse" data-bs-target="#collapseTwo"
                                                    aria-expanded="false" aria-controls="collapseTwo">
                                                    Q. How do I get started with CRM software?
                                                </button>
                                            </h2>
                                            <div id="collapseTwo" className="accordion-collapse collapse"
                                                aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    <p>
                                                        CRM (Customer Relationship Management) software helps businesses
                                                        centralize data, streamline sales processes, and improve customer.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="headingthree">
                                                <button className="accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse" data-bs-target="#collapsethree"
                                                    aria-expanded="false" aria-controls="collapsethree">
                                                    Q. Can I customize CRM software my business needs?
                                                </button>
                                            </h2>
                                            <div id="collapsethree" className="accordion-collapse collapse"
                                                aria-labelledby="headingthree" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    <p>
                                                        CRM (Customer Relationship Management) software helps businesses
                                                        centralize data, streamline sales processes, and improve customer.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="headingfour">
                                                <button className="accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse" data-bs-target="#collapsefour"
                                                    aria-expanded="false" aria-controls="collapsefour">
                                                    Q. Is CRM software scalable for businesses of all sizes?
                                                </button>
                                            </h2>
                                            <div id="collapsefour" className="accordion-collapse collapse"
                                                aria-labelledby="headingfour" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    <p>
                                                        CRM (Customer Relationship Management) software helps businesses
                                                        centralize data, streamline sales processes, and improve customer.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="headingfive">
                                                <button className="accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse" data-bs-target="#collapsefive"
                                                    aria-expanded="false" aria-controls="collapsefive">
                                                    Q. How secure is my data in CRM software?
                                                </button>
                                            </h2>
                                            <div id="collapsefive" className="accordion-collapse collapse"
                                                aria-labelledby="headingfive" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    <p>
                                                        CRM (Customer Relationship Management) software helps businesses
                                                        centralize data, streamline sales processes, and improve customer.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Faq Section Ends */}


            {/* Recent Posts */}
                <div className="container mb-5">
                    <div className="section-title text-center mb-40">
                        <div className="sub-text justify-content-center wow fadeInUp">
                            <img src="/assets/img/star.png" alt="img" loading='lazy' />
                            <h6>Recent Posts</h6> <img src="/assets/img/star.png" alt="img" loading='lazy' />
                        </div>
                        <h2 className="title-anim"> Our latest Blogs </h2>
                    </div>

                    <div className="row">
                        {blogData.map((blog) => (
                            <div className="col-xl-4 col-lg-6 col-md-6" key={blog.id}>
                                <div className="news-box-items img-custom-anim-top">
                                    <Link to={blog.link}>
                                        <div className="news-thumb">
                                            <img src={blog.image} alt="blog" loading='lazy' />
                                        </div>
                                    </Link>
                                    <div className="news-content">
                                        <ul className="post-date">
                                            <li>
                                                <Link to={blog.link}>
                                                    <i className="fa-light fa-calendar-days"></i>
                                                    {blog.date}
                                                </Link>
                                            </li>
                                        </ul>
                                        <h3>
                                            <Link to={blog.link}>{blog.title}</Link>
                                        </h3>
                                        <Link to={blog.link} className="link-btn">
                                            Continue Reading
                                            <i className="fa-sharp fa-regular fa-arrow-right"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
        </>
    );
}
