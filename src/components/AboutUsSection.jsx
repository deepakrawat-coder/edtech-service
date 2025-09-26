import { Link } from "react-router-dom";
import DOMPurify from 'dompurify';
export default function AboutUsSection({ about }) {
  return (
    <>
      <section
        className="project-section style-1 fix section-padding pb-4"
        id="about-us"
      >
        <div className="container ">
          <div className="section-title text-center mb-5">
            {/* <div className="sub-text justify-content-center wow fadeInUp">
              <img src="/assets/img/star.png" alt="img" loading="lazy" fetchPriority="low" />
              <p className="h6 mb-0"> {about?.[0]?.title} </p>{" "}
              <img src="/assets/img/star.png" alt="img" loading="lazy" fetchPriority="low" />
            </div> */}
            {/* <h2 className="title-anim h2"> {about?.[0]?.title}</h2> */}
            <h2 className="title-anim h2"> About Us</h2>
            {/* <p className="mt-3 wow fadeInUp" data-wow-delay=".3s">
                            CRM management is comprehensive contact management, allowing businesses to centralize <br /> and
                            organize customer information for easy access.
                        </p> */}
          </div>

          <div className="row align-items-center">
            <div className="col-12 col-md-12 col-lg-6">
              <div className="about-us-content mb-4">
                {/* <h2 className='fs-2'> About Us </h2> */}
                {/* <p
                  className="mb-0"
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(about?.[0]?.message),
                  }}
                ></p> */}
                <p className="mb-0"> We are a dedicated team of Innovators at Edtech Innovate Pvt. Ltd. We listen to needs and demands of the Educational Institutes and the students in particular. We are focused on imparting smart education to the students and offer state of the art management tools to the institutes all over India and abroad. The team at Edtech Innovate research and study through data on a transparent open platform finding means and ways that nobody is left out due to mismanagement. Edtech Innovate Pvt. Ltd. offers your business a tireless, intelligent assistant by centralizing customer/student info, syncing sales and marketing and turning data into decisions. It transforms the missed opportunities into meaningful connections and messy workflows into smooth rituals. Edtech’s CRM makes every team feel like professionals and every customer feel remembered as they deserve. </p>
              </div>
            </div>

            <div className="col-12 col-md-6 d-none d-lg-block">
              <div className="about-us-img">
                <img
                fetchPriority="low"
                  src={about?.[0]?.image}
                  alt="img"
                  className="img-fluid rounded-3 w-100"
                  loading="lazy"
                  width="636"
                  height="444"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
