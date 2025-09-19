import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useData } from "../context/DataContext";
import axios from "axios";

export default function BuyNow() {
  const { planId } = useParams();
  const { plains } = useData();

  // Find the selected plan
  const selectedPlan = plains.find((item) => item.plain_id === planId);

  if (!selectedPlan) {
    return (
      <div className="container text-center mt-5">
        <h2>Plan not found</h2>
        <Link to="/" className="theme-btn mt-3">
          Go Back
        </Link>
      </div>
    );
  }

  // Ensure features is an array
  let features = [];
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

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
    agree: false,
  });

  const [loading, setLoading] = useState(false);
  const [responseMsg, setResponseMsg] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  //   const handleSubmit = async (e) => {
  //     e.preventDefault();

  //     if (!formData.agree) {
  //       alert("You must agree to the Terms & Conditions.");
  //       return;
  //     }

  //     setLoading(true);
  //     setResponseMsg("");

  //     // Data to send to API
  //     const dataToSend = {
  //       plan_id: planId,
  //       plan_name: selectedPlan.category_name,
  //       plan_price: selectedPlan.discout_price,
  //       ...formData,
  //     };

  //     // Log data in console
  //     console.log("Data sent to API:", dataToSend);

  //     try {
  //       const res = await axios.post(
  //         "https://yourdomain.com/api/store-payment.php",
  //         dataToSend
  //       );

  //       setResponseMsg(res.data.message || "Form submitted successfully!");
  //       setFormData({
  //         name: "",
  //         email: "",
  //         number: "",
  //         message: "",
  //         agree: false,
  //       });
  //     } catch (err) {
  //       console.error(err);
  //       setResponseMsg("Something went wrong. Please try again.");
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!formData.agree) {
//       alert("You must agree to the Terms & Conditions.");
//       return;
//     }

//     setLoading(true);
//     setResponseMsg("");

//     const dataToSend = {
//       plan_id: planId,
//       plan_name: selectedPlan.category_name,
//       plan_price: selectedPlan.discout_price,
//       ...formData,
//     };

//     console.log("Data sent to API:", dataToSend);

//     try {
//       const res = await axios.post(
//         "http://edtech-web.local/admin/app/service/payments/store",
//         dataToSend
//       );
//       console.log(res);

//       if (res.data.status) {
//         setResponseMsg("Redirecting to payment...");

//         // ✅ Extract token correctly
//         const tokenObj = res.data.token;
//         const token = tokenObj?.access_key;
// console.log(token);
//         if (token) {
//           // ✅ Use test/live URL depending on env
//           const paymentUrl = `https://pay.easebuzz.in/payment/initiate/${token}`;
//           console.log(paymentUrl);return false;
//           // For test environment, use:
//           // const paymentUrl = `https://testpay.easebuzz.in/payment/initiate/${token}`;

//           window.open(paymentUrl, "_blank", "noopener,noreferrer");
//         } else {
//           setResponseMsg("Payment token not generated.");
//         }
//       } else {
//         setResponseMsg(res.data.message || "Something went wrong");
//       }
//     } catch (err) {
//       console.error(err);
//       setResponseMsg("Something went wrong. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };
// const handleSubmit = async (e) => {
//   e.preventDefault();

//   if (!formData.agree) {
//     alert("You must agree to the Terms & Conditions.");
//     return;
//   }

//   setLoading(true);
//   setResponseMsg("");

//   const dataToSend = {
//     plan_id: planId,
//     plan_name: selectedPlan.category_name,
//     plan_price: selectedPlan.discout_price,
//     ...formData,
//   };

//   console.log("Data sent to API:", dataToSend);

//   try {
//     const res = await axios.post(
//       "http://edtech-web.local/admin/app/service/payments/store",
//       dataToSend
//     );

//     console.log("Easebuzz response:", res.data);

//     if (res.data.status) {
//       setResponseMsg("Redirecting to payment...");

//       // ✅ Extract access key (token) from backend
//       const token = res.data.token?.access_key;

//       if (token) {
//         // ✅ Decide environment (change to "pay" for production)
//         const baseUrl = process.env.NODE_ENV === "development"
//           ? "https://testpay.easebuzz.in"
//           : "https://pay.easebuzz.in";

//         const paymentUrl = `${baseUrl}/payment/initiate/${token}`;

//         // ✅ Open Easebuzz checkout in new tab
//         window.open(paymentUrl, "_blank", "noopener,noreferrer");
//       } else {
//         setResponseMsg("Payment token not generated.");
//       }
//     } else {
//       setResponseMsg(res.data.message || "Something went wrong");
//     }
//   } catch (err) {
//     console.error("Easebuzz error:", err);
//     setResponseMsg("Something went wrong. Please try again.");
//   } finally {
//     setLoading(false);
//   }
// };
const handleSubmit = async (e) => {
  e.preventDefault();

  if (!formData.agree) {
    alert("You must agree to the Terms & Conditions.");
    return;
  }

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

      // ✅ Token is now a string, not an object
      const token = res.data.token;

      if (token) {
        // ✅ Decide environment (use test/live accordingly)
        // const baseUrl = process.env.NODE_ENV === "development"
        //   ? "https://testpay.easebuzz.in"
        //   : "https://pay.easebuzz.in";

        const paymentUrl = `https://pay.easebuzz.in/pay/${token}`;

        // ✅ Open Easebuzz checkout in new tab
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
                Buy Now
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
                <li>Buy Now</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Section */}
      <section>
        <div className="container">
          <div className="contact-datails-form-wrapper section-padding pb-5 style1">
            <div className="row justify-content-center align-items-center">
              {/* Plan Details */}
              <div className="col-12 col-md-4">
                <div className="pricing-card-item">
                  {selectedPlan.tag && (
                    <div className="tag">
                      <img src={selectedPlan.tag} alt="tag" loading="lazy" />
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
                    <h3>{selectedPlan.category_name}</h3>
                    <div className="pricing-text">
                      <h2>₹{selectedPlan.discout_price}</h2>
                      <div className="price">
                        <span>
                          <del>${selectedPlan.actual_price}</del> Off
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

              {/* Payment Form */}
              <div className="col-12 col-md-8">
                <div
                  className="contact-form-wrapper style1 wow shadow-sm fadeInUp border border-1"
                  data-wow-delay="1.2s"
                >
                  <div className="section-title style5 mb-25">
                    <h4 className="subtitle wow fadeInUp" data-wow-delay="0.3s">
                      Payment Details
                    </h4>
                  </div>
                  <form
                    action="#"
                    onSubmit={handleSubmit}
                    id="contact-form"
                    method="POST"
                  >
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
                          ></textarea>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            name="agree"
                            checked={formData.agree}
                            onChange={handleChange}
                            id="flexCheckChecked"
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
                          {loading ? "Processing..." : "Pay Now"}
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
    </>
  );
}
