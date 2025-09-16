import { Link } from "react-router-dom";

export default function BuyNow() {

    const pricingData = [
        {
            id: 1,
            title: "Basic Plan",
            price: "$35",
            discount: "$5.99",
            billing: "Billed Yearly",
            style: "", // no special style
            tag: null,
            features: [
                { text: "Live chat widget for website", included: true },
                { text: "All basic CRM features", included: true },
                { text: "Up to 8,000 contacts", included: true },
                { text: "Additional staff accounts", included: true },
                { text: "Avalara tax automation", included: false },
                { text: "Organizational admin", included: false },
                { text: "24/7 email and chat support", included: true },
            ],
        },
    ];

    return (
        <>
            {/* Breadcrumb Section starts */}
            <div className="breadcrumb-wrapper bg-cover" style={{ backgroundImage: "url('assets/img/breadcrumb.jpg')" }} >
                <div className="container">
                    <div className="page-heading">
                        <div className="page-heading-text">
                            <h1 className="wow fadeInUp" data-wow-delay=".3s"> Buy Now </h1>
                        </div>
                        <div className="breadcrumb-main-items">
                            <ul className="breadcrumb-items wow fadeInUp" data-wow-delay=".5s">
                                <li>
                                    <Link to="/">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <i className="fa-regular fa-arrow-right-long"></i>
                                </li>
                                <li>
                                    buy now
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* Breadcrumb Section ends */}


            <section>
                <div className="container">
                    <div className="contact-datails-form-wrapper section-padding pb-5 style1">
                        <div className="row justify-content-center align-items-center">

                            <div className="col-12 col-md-4">
                                <div className="tab-content">
                                    <div id="Yearly" className="tab-pane fade show active" role="tabpanel">
                                        <div className="row">
                                            {pricingData.map((plan, index) => (
                                                <div
                                                    className="col-12 wow fadeInUp"
                                                    data-wow-delay={`${0.3 + index * 0.2}s`}
                                                    key={plan.id}
                                                >
                                                    <div className={`pricing-card-item ${plan.style}`}>
                                                        {plan.tag && (
                                                            <div className="tag">
                                                                <img src={plan.tag} alt="tag" loading='lazy' />
                                                            </div>
                                                        )}
                                                        <div className="pricing-header">
                                                            <div className="pricing-shape">
                                                                <img src="/assets/img/pricing-shape.png" alt="shape" loading='lazy' />
                                                            </div>
                                                            <h3>{plan.title}</h3>
                                                            <div className="pricing-text">
                                                                <h2>{plan.price}</h2>
                                                                <div className="price">
                                                                    <span>
                                                                        <del>{plan.discount}</del> Off
                                                                    </span>
                                                                    <p>{plan.billing}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="pricing-list">
                                                            <h4>Key features:</h4>
                                                            <ul>
                                                                {plan.features.map((feature, i) => (
                                                                    <li key={i}>
                                                                        {feature.included ? (
                                                                            <i className="fa-solid fa-check"></i>
                                                                        ) : (
                                                                            <i className="fa-sharp fa-regular fa-xmark color-1"></i>
                                                                        )}
                                                                        {feature.text}
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                            
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-md-8">
                                <div className="contact-form-wrapper style1 wow shadow-sm fadeInUp border border-1" data-wow-delay="1.2s">
                                    <div className="section-title style5 mb-25">
                                        <h4 className="subtitle  wow fadeInUp" data-wow-delay="0.3s"> Payment Details </h4>
                                    </div>
                                    <form action="#" id="contact-form" method="POST">
                                        <div className="row g-3">
                                            <div className="col-12">
                                                <div className="form-clt">
                                                    <input type="text" name="name" id="name" placeholder="Username*" />
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-clt">
                                                    <input type="email" name="email" id="email" placeholder="Email*" />
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-clt">
                                                    <input type="tel" name="number" id="number" placeholder="Mobile*" />
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-clt">
                                                    <textarea name="message" id="message"
                                                        placeholder="Address* "></textarea>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" value=""
                                                        id="flexCheckChecked" />
                                                    <label className="form-check-label" for="flexCheckChecked">
                                                        I agree to the Terms & Conditions
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <button type="submit" className="theme-btn">
                                                    Pay Now
                                                    <i className="fa-solid fa-arrow-right ms-1"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}