import { Link, useParams } from "react-router-dom";

export default function BlogDetails() {
    const { slug } = useParams();

    return (
        <>
            <div
                className="breadcrumb-wrapper bg-cover"
                style={{ backgroundImage: "url('assets/img/breadcrumb.jpg')" }}
            >
                <div className="container">
                    <div className="page-heading">
                        <div className="page-heading-text">
                            <h1 className="wow fadeInUp" data-wow-delay=".3s"> Latest News </h1>
                            <h2 className="wow fadeInUp" data-wow-delay=".5s"> Blog & Article </h2>
                        </div>
                        <div className="breadcrumb-main-items">
                            <ul className="breadcrumb-items wow fadeInUp" data-wow-delay=".5s">
                                <li>
                                    <Link to="/"> Home </Link>
                                </li>
                                <li>
                                    <i className="fa-regular fa-arrow-right-long"></i>
                                </li>
                                <li>Blog Details</li>
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

            {/* Example output of the dynamic slug */}
            <div className="container mt-5">
                <h3> Viewing Blog Post: </h3>
                <p><strong> Slug: </strong> {slug} </p>
            </div>
        </>
    );
}
