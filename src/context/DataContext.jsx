// src/context/DataContext.jsx
import { createContext, useContext, useEffect, useState, useMemo } from "react";
import axios from "axios";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  // Critical data
  const [clients, setClients] = useState([]);
  const [banner, setBanner] = useState([]);

  // Non-critical data
  const [testimonials, setTestimonials] = useState([]);
  const [plains, setPlains] = useState([]);
  const [faqs, setFaqs] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [services, setServices] = useState([]);
  const [keyFeatures, setKeyFeatures] = useState([]);
  const [about, setAbout] = useState([]);

  // Fetch critical data
  useEffect(() => {
    const fetchCriticalData = async () => {
      try {
        const res = await axios.get(
          "https://www.edtechinnovate.com/admin/app/service/api/lmsApi",
          { headers: { "X-Pid": "3" } }
        );

        if (res.data.status === 200) {
          setClients(res.data.data.clientLogos);
          setBanner(res.data.data.heroData);
        }
      } catch (err) {
        console.error("Critical API Error:", err);
      }
    };

    fetchCriticalData();
  }, []);

  // Fetch non-critical data
  useEffect(() => {
    const fetchNonCriticalData = async () => {
      try {
        const res = await axios.get(
          "https://www.edtechinnovate.com/admin/app/service/api/lmsApi",
          { headers: { "X-Pid": "3" } }
        );

        if (res.data.status === 200) {
          setTestimonials(res.data.data.testimonialsData);
          setPlains(res.data.data.plainsData);
          setFaqs(res.data.data.faqData);
          setBlogs(res.data.data.blogData);
          setServices(res.data.data.serviceData);
          setKeyFeatures(res.data.data.keyFeaturesData);
          setAbout(res.data.data.aboutData);
        }
      } catch (err) {
        console.error("Non-Critical API Error:", err);
      }
    };

    if ("requestIdleCallback" in window) {
      requestIdleCallback(fetchNonCriticalData);
    } else {
      setTimeout(fetchNonCriticalData, 1000);
    }
  }, []);

  // ✅ Memoize value to avoid re-renders
  const contextValue = useMemo(
    () => ({
      clients,
      banner,
      testimonials,
      plains,
      faqs,
      blogs,
      services,
      keyFeatures,
      about,
    }),
    [clients, banner, testimonials, plains, faqs, blogs, services, keyFeatures, about]
  );

  return (
    <DataContext.Provider value={contextValue}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
