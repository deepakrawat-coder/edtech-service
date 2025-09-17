import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [clients, setClients] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [plains, setPlains] = useState([]);
  const [faqs, setFaqs] = useState([]);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios
      .get("http://edtech-web.local/admin/app/service/api/lmsApi", {
        headers: { "X-Pid": "3" },
      })
      .then((res) => {
        if (res.data.status === 200) {
          setClients(res.data.data.clientLogos);
          setTestimonials(res.data.data.testimonialsData);
          setPlains(res.data.data.plainsData);
          setFaqs(res.data.data.faqData);
          setBlogs(res.data.data.blogData);
        }
      })
      .catch((err) => {
        console.error("API Error:", err);
      });
  }, []);

  return (
    <DataContext.Provider value={{ clients, testimonials, plains, faqs, blogs }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
