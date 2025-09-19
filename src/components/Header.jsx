// src/components/Header.jsx
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <>
            <header className="header sticky-top">
                <nav className="navbar navbar-expand-lg bg-white py-3 shadow-sm">
                    <div className="container">
                        <Link className="navbar-brand" to="/">
                            <img src="/assets/img/logo/logo.png" width="150" alt="edtech logo" className="img-fluid rounded-3" loading="lazy" />
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="#"> About Us </Link>
                                </li>
                                <li className="nav-item">
                                    {/* <Link className="nav-link" to="#pricing"> Pricing </Link> */}
                                    <a className="nav-link" href="#pricing">Pricing</a>
                                </li>
                                <li className="nav-item">
                                    {/* <Link className="nav-link" to="#"> Services </Link> */}
                                     <a className="nav-link" href="#service">Service</a>
                                </li>
                                <li className="nav-item">
                                    {/* <Link className="nav-link" to="#"> Contact Us </Link> */}
                                     <a className="nav-link" href="#footer">Contact Us</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
}
