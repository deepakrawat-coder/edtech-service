import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useData } from "../context/DataContext";
import axios from "axios";

export default function BuyNow() {
  const { planId } = useParams();
  const isFreeTrial = planId === "freeTrial";
  const { plains } = useData();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
    agree: false,
  });
  
  const [loading, setLoading] = useState(false);
  const [responseMsg, setResponseMsg] = useState("");
  const [showModal, setShowModal] = useState(false);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Find the selected plan (if not free trial)
  const selectedPlan = isFreeTrial ? null : plains.find((item) => item.plain_id === planId);
  
  // If it's not a free trial and no plan is found
  if (!isFreeTrial && !selectedPlan) {
    return (
      <div className="container text-center mt-5">
        <h2>Plan not found</h2>
        <Link to="/" className="theme-btn mt-3">
          Go Back
        </Link>
      </div>
    );
  }

  // Parse features if it's not a free trial
  let features = [];
  if (!isFreeTrial) {
    try {
      features = Array.isArray(selectedPlan.features)
        ? selectedPlan.features
        : selectedPlan.features
        ? JSON.parse(selectedPlan.features)
        : [];
    } catch (e) {
      console.error("Invalid features JSON:", selectedPlan.features);
      features = [];
    }
  }

  // First step → just open modal
  const handlePreview = (e) => {
    e.preventDefault();
    if (!formData.agree) {
      alert("You must agree to the Terms & Conditions.");
      return;
    }
    setShowModal(true);
  };

  // Confirm inside modal → Call API for payment
  const handleConfirmPayment = async () => {
    setLoading(true);
    setResponseMsg("");

    const dataToSend = {
      plan_id: planId,
      plan_name: selectedPlan.category_name,
      plan_price: selectedPlan.discout_price,
      ...formData,
    };

    console.log("Data sent to API:", dataToSend);

    try {
      const res = await axios.post(
        "http://edtech-web.local/admin/app/service/payments/store",
        dataToSend
      );

      console.log("Easebuzz response:", res.data);

      if (res.data.status) {
        setResponseMsg("Redirecting to payment...");

        const token = res.data.token;
        if (token) {
          const paymentUrl = `https://pay.easebuzz.in/pay/${token}`;
          window.open(paymentUrl, "_blank", "noopener,noreferrer");
        } else {
          setResponseMsg("Payment token not generated.");
        }
      } else {
        setResponseMsg(res.data.message || "Something went wrong");
      }
    } catch (err) {
      console.error("Easebuzz error:", err);
      setResponseMsg("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
      setShowModal(false);
    }
  };

  // Handle free trial submission
  const handleFreeTrial = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseMsg("");

    const dataToSend = {
      plan_id: "freeTrial",
      plan_name: "Free Trial",
      plan_price: 0,
      ...formData,
    };

    console.log("Free trial data:", dataToSend);

    try {
      const res = await axios.post(
        "http://edtech-web.local/admin/app/service/payments/store",
        dataToSend
      );
      
      if (res.data.status) {
        setResponseMsg("Free trial request submitted successfully! We'll contact you soon.");
        setFormData({ name: "", email: "", number: "", message: "", agree: false });
      } else {
        setResponseMsg(res.data.message || "Something went wrong");
      }
    } catch (error) {
      console.error("Error submitting free trial:", error);
      setResponseMsg("Something went wrong, please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Breadcrumb Section */}
      <div
        className="breadcrumb-wrapper bg-cover"
        style={{ backgroundImage: "url('assets/img/breadcrumb.jpg')" }}
      >
        <div className="container">
          <div className="page-heading">
            <div className="page-heading-text">
              <h1 className="wow fadeInUp" data-wow-delay=".3s">
                {isFreeTrial ? "Free Trial Request" : "Buy Now"}
              </h1>
            </div>
            <div className="breadcrumb-main-items">
              <ul
                className="breadcrumb-items wow fadeInUp"
                data-wow-delay=".5s"
              >
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <i className="fa-regular fa-arrow-right-long"></i>
                </li>
                <li>{isFreeTrial ? "Free Trial" : "Buy Now"}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Payment/Trial Section */}
      <section>
        <div className="container">
          <div className="contact-datails-form-wrapper section-padding pb-5 style1">
            <div className="row justify-content-center align-items-center">
              {/* Plan Details (only show if not free trial) */}
              {!isFreeTrial && (
                <div className="col-12 col-md-4 mb-4 mb-md-0">
                  <div className="pricing-card-item">
                    <div className="pricing-header">
                      <h3>{selectedPlan.category_name}</h3>
                      <div className="pricing-text">
                        <h2>₹{selectedPlan.discout_price}</h2>
                        <div className="price">
                          <span>
                            <del>₹{selectedPlan.actual_price}</del> Off
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
                            {f.status === 1 ? (
                              <i className="fa-solid fa-check"></i>
                            ) : (
                              <i className="fa-solid fa-xmark color-1"></i>
                            )}
                            {f.feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {/* Form Section */}
              <div className={`col-12 ${isFreeTrial ? 'col-md-8 mx-auto' : 'col-md-8'}`}>
                <div className="contact-form-wrapper style1 shadow-sm border border-1">
                  <div className="section-title style5 mb-25">
                    <h4 className="subtitle">
                      {isFreeTrial ? "Free Trial Request Form" : "Payment Details"}
                    </h4>
                  </div>
                  <form onSubmit={isFreeTrial ? handleFreeTrial : handlePreview}>
                    <div className="row g-3">
                      <div className="col-12">
                        <div className="form-clt">
                          <input
                            type="text"
                            name="name"
                            id="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Username*"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-clt">
                          <input
                            type="email"
                            name="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email*"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-clt">
                          <input
                            type="tel"
                            name="number"
                            id="number"
                            value={formData.number}
                            onChange={handleChange}
                            placeholder="Mobile*"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-clt">
                          <textarea
                            name="message"
                            id="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Address*"
                            required
                          ></textarea>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="agree"
                            checked={formData.agree}
                            onChange={handleChange}
                            id="flexCheckChecked"
                            required
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckChecked"
                          >
                            I agree to the Terms & Conditions
                          </label>
                        </div>
                      </div>
                      <div className="col-12">
                        <button
                          type="submit"
                          className="theme-btn"
                          disabled={loading}
                        >
                          {loading 
                            ? "Processing..." 
                            : isFreeTrial 
                              ? "Request Free Trial" 
                              : "Preview & Pay"
                          }
                          <i className="fa-solid fa-arrow-right ms-1"></i>
                        </button>
                        {responseMsg && <p className="mt-2">{responseMsg}</p>}
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Preview Modal (only for payment, not free trial) */}
      {showModal && !isFreeTrial && (
        <div
          className="modal fade show d-block"
          style={{ background: "rgba(0,0,0,0.6)" }}
        >
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content rounded-3 shadow-lg">
              {/* Header */}
              <div className="modal-header border-0">
                <h5 className="modal-title fw-bold text-dark fs-4">
                  📝 Confirm Your Details
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowModal(false)}
                ></button>
              </div>

              {/* Body */}
              <div className="modal-body pt-1">
                <div className="row">
                  {/* Plan Details */}
                  <div className="col-md-12">
                    <div className="p-3 pb-0">
                      <h6 className="fw-bold text-dark mb-2">Plan Details</h6>
                      <h4 className="fw-bold fs-2 text-dark">
                        {selectedPlan.category_name}
                      </h4>
                      <div className="my-1 ps-0 ms-0 text-start rounded-3">
                        <h2 className="font-bold text-success mb-0">
                          <span className="">₹{selectedPlan.discout_price}</span>
                          <span className="fs-5 text-danger ms-2">
                            <del>₹{selectedPlan.actual_price}/Year</del>
                          </span>
                        </h2>
                      </div>

                      <h6 className="fw-semi-bold text-dark mb-2">Key Features:</h6>
                      <ul className="list-unstyled row">
                        {features.map((f, i) => (
                          <li
                            key={i}
                            className="d-flex flex-row items-center mb-3 col-md-6 col-sm-12"
                          >
                            <p
                              className="d-flex justify-content-center align-items-center rounded-circle me-2"
                              style={{
                                width: "34px",
                                height: "34px",
                                backgroundColor:
                                  f.status === 1
                                    ? "rgb(21 106 67 / 68%)"
                                    : "rgb(187 10 27 / 55%)",
                              }}
                            >
                              <i
                                className={`fa-solid ${
                                  f.status === 1 ? "fa-check" : "fa-xmark"
                                } text-white`}
                              ></i>
                            </p>
                            <p>{f.feature}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* User Details */}
                  <div className="col-md-12">
                    <div className="p-3">
                      <h6 className="fw-bold fs-3 text-dark mb-2">Your Information</h6>
                      <p>
                        <strong>Name:</strong> {formData.name}
                      </p>
                      <p>
                        <strong>Email:</strong> {formData.email}
                      </p>
                      <p>
                        <strong>Mobile:</strong> {formData.number}
                      </p>
                      <p>
                        <strong>Address:</strong> {formData.message}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="modal-footer border-0 d-flex justify-content-between">
                <button
                  className="btn btn-outline-secondary px-4"
                  onClick={() => setShowModal(false)}
                >
                  ✏️ Edit
                </button>
                <button
                  className="btn btn-success px-4"
                  onClick={handleConfirmPayment}
                  disabled={loading}
                >
                  {loading ? (
                    <span>
                      <i className="fa fa-spinner fa-spin me-2"></i> Processing...
                    </span>
                  ) : (
                    <span>✅ Confirm & Pay</span>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}