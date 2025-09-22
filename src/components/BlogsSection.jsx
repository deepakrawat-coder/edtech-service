import { Link } from "react-router-dom";

export default function BlogSection({ blogData }) {
  // JSON Data for Blogs
  // const blogData = [
  //     {
  //         id: 1,
  //         image: "/assets/img/news/01.jpg",
  //         date: "07 May,2024",
  //         link: "#",
  //         title: "How to Comprehensive at SaaS Developments",
  //     },
  //     {
  //         id: 2,
  //         image: "/assets/img/news/02.jpg",
  //         date: "07 May,2024",
  //         link: "#",
  //         title: "6 Essential Tips for Big Commerce Stores",
  //     },
  //     {
  //         id: 3,
  //         image: "/assets/img/news/03.jpg",
  //         date: "07 May,2024",
  //         link: "#",
  //         title: "Empowering Startups & Small Businesses",
  //     },
  // ];

  return (
    <section className="news-section section-padding fix">
      <div className="container">
        <div className="section-title text-center mb-40">
          <div className="sub-text justify-content-center wow fadeInUp">
            <img src="/assets/img/star.png" alt="img" loading="lazy" />
            <h6>Blog & Article</h6>{" "}
            <img src="/assets/img/star.png" alt="img" loading="lazy" />
          </div>
          <h2 className="title-anim">Our latest Blogs</h2>
          {/* <p className="mt-3 wow fadeInUp" data-wow-delay=".3s">
            Welcome to our FAQS section, where we address common queries and
            provide helpful <br /> solutions to ensure you get the most out of
            our CRM software.
          </p> */}
        </div>

        <div className="row">
          {blogData.map((blog) => (
            <div  className="col-xl-4 col-lg-6 col-md-6 d-flex align-items-stretch" key={blog.id}>
              <div className="news-box-items img-custom-anim-top">
                <Link to={`/blog/${blog.Slug}`}>
                  <div className="news-thumb">
                    <img src={blog.Photo} alt={blog.Name} loading="lazy" />
                  </div>
                </Link>
                <div className="news-content">
                  <ul className="post-date">
                    <li>
                      <Link to={`/blog/${blog.Slug}`}>
                        <i className="fa-light fa-calendar-days"></i>
                        {blog.Created_At}
                      </Link>
                    </li>
                  </ul>
                  <h3>
                    <Link to={`/blog/${blog.Slug}`}>{blog.Name}</Link>
                  </h3>
                  <Link to={`/blog/${blog.Slug}`} className="link-btn">
                    Continue Reading
                    <i className="fa-sharp fa-regular fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className="service-button text-center mb-1 wow fadeInUp mt-4 mt-md-5"
          data-wow-delay=".3s"
        >
          <Link to="/blogs" className="theme-btn">
            See All Blogs <i className="fa-sharp fa-regular fa-arrow-right"></i>
          </Link>
        </div>
      </div>
    </section>
  );
}
