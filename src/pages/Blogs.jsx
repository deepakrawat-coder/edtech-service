import { Link } from "react-router-dom";
import { useData } from "../context/DataContext";
export default function Blogs() {
  //  const blogData = [
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
  //     {
  //         id: 4,
  //         image: "/assets/img/news/01.jpg",
  //         date: "07 May,2024",
  //         link: "#",
  //         title: "How to Comprehensive at SaaS Developments",
  //     },
  //     {
  //         id: 5,
  //         image: "/assets/img/news/02.jpg",
  //         date: "07 May,2024",
  //         link: "#",
  //         title: "6 Essential Tips for Big Commerce Stores",
  //     },
  //     {
  //         id: 6,
  //         image: "/assets/img/news/03.jpg",
  //         date: "07 May,2024",
  //         link: "#",
  //         title: "Empowering Startups & Small Businesses",
  //     },
  // ];
  const { blogs } = useData();
  return (
    <>
        <section className="news-section section-padding fix">
            <div className="container">
                <div className="section-title text-center mb-40">
                    <div className="sub-text justify-content-center wow fadeInUp">
                        <img src="/assets/img/star.png" alt="img" loading='lazy' />
                        <h6>Blog & Article</h6> <img src="/assets/img/star.png" alt="img" loading='lazy' />
                    </div>
                    <h2 className="title-anim"> Our latest Blogs </h2>
                </div>

                <div className="row">
                    {blogs.map((blog) => (
                        <div className="col-xl-4 col-lg-6 col-md-6 d-flex align-items-stretch" key={blog.id}>
                            <div className="news-box-items img-custom-anim-top">
                                <Link to={`/blog/${blog.Slug}`}>
                                    <div className="news-thumb">
                                        <img src={blog.Photo} alt={blog.Name}  loading='lazy' />
                                    </div>
                                </Link>
                                <div className="news-content">
                                    <ul className="post-date">
                                        <li>
                                            <Link to={`/blog/${blog.Slug}`}>
                                                <i class="fa-solid fa-calendar-days"></i>
                                                {blog.date}
                                            </Link>
                                        </li>
                                    </ul>
                                    <h3>
                                        <Link to={`/blog/${blog.Slug}`}>{blog.Name}</Link>
                                    </h3>
                                    <Link to={`/blog/${blog.Slug}`} className="link-btn">
                                        Continue Reading
                                        <i class="fa-solid fa-arrow-right"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <h2 className="title-anim"> Our latest Blogs </h2>
          </div>

          <div className="row">
            {blogs.map((blog) => (
              <div
                className="col-xl-4 col-lg-6 col-md-6 d-flex align-items-stretch"
                key={blog.id}
              >
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
                          {blog.date}
                        </Link>
                      </li>
                    </ul>
                    <h3>
                      <Link to={`/blog/${blog.Slug}`}>
                        {blog?.Name && blog.Name.length > 35
                          ? blog.Name.slice(0, 35) + "..."
                          : blog?.Name}
                      </Link>
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
        </div>
      </section>
    </>
  );
}
