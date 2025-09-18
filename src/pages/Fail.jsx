import { Link } from "react-router-dom";

export default function Fail() {
  return (
    <section className="container my-5 py-3 text-center">
      <img
        src="/assets/img/work-process/payment-failed.jpg"
        width="400"
        alt="failed payment"
        className="img-fluid"
        loading="lazy"
      />
      <p className="mt-3 text-danger fw-bold">
        Payment Failed. Please try again or contact support.
      </p>
      <p>
        Go back to <Link to="/">home</Link>.
      </p>
    </section>
  );
}
