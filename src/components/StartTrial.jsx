import { Link } from "react-router-dom";

export default function Hero({ banner }) {
  return (
    <>
      <Link to="/pay/freeTrial" className="theme-btn wow fadeInUp" data-wow-delay=".3s">
        Start free trial <i className="fa-solid fa-arrow-right"></i>
      </Link>
    </>
  );
}
