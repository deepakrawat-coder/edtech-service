import {Link} from 'react-router-dom'

export default function Pricing() {

    // src/data/pricingData.js
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
        {
            id: 2,
            title: "Standard Plan",
            price: "$78",
            discount: "$8.00",
            billing: "Billed Yearly",
            style: "style-2",
            tag: "/assets/img/tag.png",
            features: [
                { text: "Live chat widget for website", included: true },
                { text: "All basic CRM features", included: true },
                { text: "Up to 8,000 contacts", included: true },
                { text: "Additional staff accounts", included: true },
                { text: "24/7 email and chat support", included: true },
                { text: "Custom reports and analytics", included: true },
                { text: "Custom reports and analytics", included: true },
            ],
        },
        {
            id: 3,
            title: "Professional Plan",
            price: "$99",
            discount: "$5.99",
            billing: "Billed Yearly",
            style: "style-3",
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
        <section
            className="pricing-section section-padding fix"
            style={{ backgroundImage: "url('/assets/img/pricing-bg.png')" }}
        >
            <div className="container">
                <div className="section-title text-center mb-80">
                    <div className="sub-text justify-content-center wow fadeInUp">
                        <img src="/assets/img/star.png" alt="img" loading='lazy' />
                        <h6>PRICING PLAN</h6>
                        <img src="/assets/img/star.png" alt="img" loading='lazy' />
                    </div>
                    <h2 className="title-anim">Starter Plan For Everyone</h2>
                    <p className="mt-3 wow fadeInUp" data-wow-delay=".3s">
                        Choose from our tiered options, each tailored to match your specific needs and budget.
                        <br /> Enjoy transparent pricing with no hidden fees.
                    </p>
                </div>

                <div className="tab-content">
                    <div id="Yearly" className="tab-pane fade show active" role="tabpanel">
                        <div className="row">
                            {pricingData.map((plan, index) => (
                                <div
                                    className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
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
                                            <Link to="pricing.html" className="theme-btn">
                                                Pick your plan <i className="fa-sharp fa-regular fa-arrow-right"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
