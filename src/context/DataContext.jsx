import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [clients, setClients] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [plains, setPlains] = useState([]);
  const [faqs, setFaqs] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [banner, setBanner] = useState([]);
  const [services, setServices] = useState([]);
  const [keyFeatures, setKeyFeatures] = useState([]);
  const [about, setAbout] = useState([]);
  useEffect(() => {
    axios
      .get("http://edtech-web.local/admin/app/service/api/lmsApi", {
        headers: { "X-Pid": "3" },
      })
      .then((res) => {
        // console.log(res.data);
        if (res.data.status === 200) {
          console.log(res.data.data);
          setClients(res.data.data.clientLogos);
          setTestimonials(res.data.data.testimonialsData);
          setPlains(res.data.data.plainsData);
          setFaqs(res.data.data.faqData);
          setBlogs(res.data.data.blogData);
          setBanner(res.data.data.heroData);
          setServices(res.data.data.serviceData);
          setKeyFeatures(res.data.data.keyFeaturesData);
          setAbout(res.data.data.aboutData);
        }
      })
      .catch((err) => {
        console.error("API Error:", err);
      });
  }, []);

  return (
    <DataContext.Provider
      value={{
        clients,
        testimonials,
        plains,
        faqs,
        blogs,
        banner,
        services,
        keyFeatures,
        about,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
