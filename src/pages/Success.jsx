import { Link } from "react-router-dom";

export default function Success() {
  return (
    <section className="container my-5 py-3 text-center">
      <img src="/assets/img/work-process/payment-successful.jpg" width="400" alt="success image" className="img-fluid" loading='lazy' />
      <p> Payment Successful. Go to <Link to="/">home</Link>.</p>
    </section>
  );
}