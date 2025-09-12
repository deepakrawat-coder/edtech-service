import { Link } from "react-router-dom";

export default function TermsConditions() {
    return (
        <>
            {/* Breadcrumb Section starts */}
            <div className="breadcrumb-wrapper bg-cover" style={{backgroundImage: "url('assets/img/breadcrumb.jpg')"}} >
                <div className="container">
                    <div className="page-heading">
                        <div className="page-heading-text">
                            <h1 className="wow fadeInUp" data-wow-delay=".3s">Terms & Condition</h1>
                            <h2 className="wow fadeInUp" data-wow-delay=".5s">In Your Business.</h2>
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
                                    Terms & Condition
                                </li>
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
            {/* Breadcrumb Section ends */}


             {/* Terms Start  */}
            <section className="terms-section fix section-padding">
                <div className="container">
                    <div className="terms-wrapper">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="terms-single-content">
                                    <div className="terms-header">
                                        <h2> Terms & Condition </h2>
                                        <h5> Last updated December 15, 2023 </h5>
                                    </div>
                                    <h5>
                                        A CRM management terms page should clearly outline the terms and conditions related to
                                        the use of the CRM software or services. This page is crucial for setting expectations
                                        and legal boundaries between the service provider and the users. Here’s a detailed list
                                        of what it should contain. A CRM management terms page should clearly outline the terms
                                        and conditions related to the use of the CRM software or services. This page is crucial
                                        for setting expectations and legal boundaries between the service provider and the
                                        users. Here’s a detailed list of what it should contain.
                                    </h5>
                                    <div className="terms-area">
                                        <div className="terms-items">
                                            <div className="number">1</div>
                                            <h4>
                                                <b>User Responsibilities: </b> Clearly state your pricing structure, payment
                                                terms, and any additional charges. Specify when and how invoices will be issued,
                                                as well as your accepted payment methods.
                                            </h4>
                                        </div>
                                        <div className="terms-items">
                                            <div className="number">2</div>
                                            <h4>
                                                <b>Account Registration and Security:</b> Information on account creation,
                                                maintenance, and security.User responsibility for maintaining the
                                                confidentiality of login credentials.
                                            </h4>
                                        </div>
                                        <div className="terms-items">
                                            <div className="number">3</div>
                                            <h4>
                                                <b>Service Access and Usage:</b> Details on how users can access and use the CRM
                                                services. Availability and limitations of the service (e.g., uptime commitments,
                                                maintenance schedules).
                                            </h4>
                                        </div>
                                        <div className="terms-items">
                                            <div className="number">4</div>
                                            <h4>
                                                <b>Data Privacy and Security:</b> Policies regarding data collection, usage, and
                                                storage.Security measures in place to protect user data.User rights and
                                                responsibilities concerning data privacy.
                                            </h4>
                                        </div>
                                        <div className="terms-items pb-3">
                                            <div className="number">5</div>
                                            <h4>
                                                <b>Fees and Payment Terms:</b> Information on pricing, payment methods, and
                                                billing cycles. Refund and cancellation policies. Consequences of late or
                                                non-payment.
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Terms End  */}
        </>
    )
}
