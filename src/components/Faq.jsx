export default function Faq() {
    // JSON data for FAQ
    const faqData = [
        {
            id: "One",
            question: "Q. CRM software, and how can it benefit my business?",
            answer:
                "CRM (Customer Relationship Management) software helps businesses centralize data, streamline sales processes, and improve customer.",
        },
        {
            id: "Two",
            question: "Q. How do I get started with CRM software?",
            answer:
                "CRM (Customer Relationship Management) software helps businesses centralize data, streamline sales processes, and improve customer.",
        },
        {
            id: "Three",
            question: "Q. Can I customize CRM software my business needs?",
            answer:
                "CRM (Customer Relationship Management) software helps businesses centralize data, streamline sales processes, and improve customer.",
        },
        {
            id: "Four",
            question: "Q. Is CRM software scalable for businesses of all sizes?",
            answer:
                "CRM (Customer Relationship Management) software helps businesses centralize data, streamline sales processes, and improve customer.",
        },
        {
            id: "Five",
            question: "Q. How secure is my data in CRM software?",
            answer:
                "CRM (Customer Relationship Management) software helps businesses centralize data, streamline sales processes, and improve customer.",
        },
    ];

    return (
        <section className="faq-section fix">
            <div className="faq-shape">
                <img src="/assets/img/faq-shape.png" alt="img" loading='lazy' />
            </div>
            <div className="faq-shape-2">
                <img src="/assets/img/faq-shape-2.png" alt="img" loading='lazy' />
            </div>
            <div className="container">
                <div className="section-title text-center mb-70">
                    <div className="sub-text justify-content-center wow fadeInUp">
                        <img src="/assets/img/star.png" alt="img" loading='lazy' />
                        <h6>FAQS</h6> <img src="/assets/img/star.png" alt="img" loading='lazy' />
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
                                    {faqData.map((faq, index) => (
                                        <div className="accordion-item" key={faq.id}>
                                            <h2 className="accordion-header" id={`heading${faq.id}`}>
                                                <button
                                                    className={`accordion-button ${index !== 0 ? "collapsed" : ""}`}
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target={`#collapse${faq.id}`}
                                                    aria-expanded={index === 0 ? "true" : "false"}
                                                    aria-controls={`collapse${faq.id}`}
                                                >
                                                    {faq.question}
                                                </button>
                                            </h2>
                                            <div
                                                id={`collapse${faq.id}`}
                                                className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`}
                                                aria-labelledby={`heading${faq.id}`}
                                                data-bs-parent="#accordionExample"
                                            >
                                                <div className="accordion-body">
                                                    <p>{faq.answer}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
