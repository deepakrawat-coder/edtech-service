import BlogSection from "../components/BlogsSection";
import Brands from "../components/Brands";
import Connect from "../components/Connect";
import Faq from "../components/Faq";
import Features from "../components/Features";
import Hero from "../components/Hero";
import Marquee from "../components/Marquee";
import Pricing from "../components/Pricing";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import { useData } from "../context/DataContext";
// import { isLMSProduct } from "../helper";
import { useEffect, useState } from "react";
import axios from "axios";
import { isLMSProduct } from "../helper";
import AboutUsSection from "../components/AboutUsSection";

export default function Home() {
  // const [clients, setClients] = useState([]);
  // const [testimonials, setTestimonials] = useState([]);
  // const [plains, setPlains] = useState([]);
  // const [faqs, setFaqs] = useState([]);
  // const [blogs, setBlogs] = useState([]); 
  // useEffect(() => {
  //   axios
  //     .get("http://edtech-web.local/admin/app/service/api/lmsApi", {
  //       headers: {
  //         "X-Pid": "3",
  //       },
  //     })
  //     .then((res) => {
  //       console.log(res.data);
  //       if (res.data.status === 200) {
  //         setClients(res.data.data.clientLogos);
  //         setTestimonials(res.data.data.testimonialsData);
  //         setPlains(res.data.data.plainsData);
  //         setFaqs(res.data.data.faqData);
  //         setBlogs(res.data.data.blogData)
  //       }
  //     })
  //     .catch((err) => {
  //       console.error("API Error:", err);
  //     });
  // }, []);
 const { clients, testimonials, plains, faqs, blogs } = useData();
  return (
    <>
      <Hero />
      <AboutUsSection />
      <Brands clients={clients} />
      <Services />
      <Features />
      <Connect />
      <Testimonials testimonialsData={testimonials} />
      <Pricing pricing={plains} />
      <Marquee />
      <Faq faqs={faqs} />
      <BlogSection blogData={blogs} />
    </>
  );
}

