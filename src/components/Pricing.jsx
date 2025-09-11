import { Link } from "react-router-dom";

export default function Pricing({ pricing = [] }) {
  console.log("Pricing prop:", pricing);

  // rotate styles across cards
  const styles = ["","style-2", "style-3", ];

  return (
    <section
      className="pricing-section section-padding fix"
      style={{ backgroundImage: "url('/assets/img/pricing-bg.png')" }}
    >
      <div className="container">
        <div className="section-title text-center mb-80">
          <div className="sub-text justify-content-center wow fadeInUp">
            <img src="/assets/img/star.png" alt="img" loading="lazy" />
            <h6>PRICING PLAN</h6>
            <img src="/assets/img/star.png" alt="img" loading="lazy" />
          </div>
          <h2 className="title-anim">Starter Plan For Everyone</h2>
          <p className="mt-3 wow fadeInUp" data-wow-delay=".3s">
            Choose from our tiered options, each tailored to match your specific
            needs and budget.
            <br /> Enjoy transparent pricing with no hidden fees.
          </p>
        </div>

        <div className="tab-content">
          <div id="Yearly" className="tab-pane fade show active" role="tabpanel">
            <div className="row">
              {pricing.length > 0 ? (
                pricing.map((plan, index) => {
                  let features = [];
                  try {
                    features = plan.features ? JSON.parse(plan.features) : [];
                  } catch (e) {
                    console.error("Invalid features JSON:", plan.features);
                  }

                  return (
                    <div
                      className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                      data-wow-delay={`${0.3 + index * 0.2}s`}
                      key={plan.plain_id}
                    >
                      <div
                        className={`pricing-card-item ${
                          styles[index % styles.length]
                        }`}
                      >
                        {plan.tag && (
                          <div className="tag">
                            <img src={plan.tag} alt="tag" loading="lazy" />
                          </div>
                        )}
                        <div className="pricing-header">
                          <div className="pricing-shape">
                            <img
                              src="/assets/img/pricing-shape.png"
                              alt="shape"
                              loading="lazy"
                            />
                          </div>
                          <h3>{plan.category_name}</h3>
                          <div className="pricing-text">
                            <h2>${plan.discout_price}</h2>
                            <div className="price">
                              <span>
                                <del>${plan.actual_price}</del> Off
                              </span>
                              <p>Billed Yearly</p>
                            </div>
                          </div>
                        </div>
                        <div className="pricing-list">
                          <h4>Key features:</h4>
                          <ul>
                            {features.map((f, i) => (
                              <li key={i}>
                                {f.status === "1" ? (
                                  <i className="fa-solid fa-check"></i>
                                ) : (
                                  <i className="fa-sharp fa-regular fa-xmark color-1"></i>
                                )}
                                {f.feature}
                              </li>
                            ))}
                          </ul>
                          <Link to="#" className="theme-btn">
                            Pick your plan{" "}
                            <i className="fa-sharp fa-regular fa-arrow-right"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })
              ) : (
                <p className="text-center">No plans available</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
