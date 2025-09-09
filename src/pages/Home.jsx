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
import { useEffect, useState } from "react";
import axios from "axios";
import { isLMSProduct } from "../helper";

export default function Home() {
  const [clients, setClients] = useState([]);
  useEffect(() => {
    axios
      .get("http://edtech-web.local/admin/app/service/api/lmsApi")
      .then((res) => {
        if (res.data.status === 200) {
          // filter clients using helper
          const filteredClients = res.data.data.filter(
            (item) => isLMSProduct(item) === 1
          );

          setClients(filteredClients);
        }
      });
  }, []);

  return (
    <>
      <Hero />
      <Brands clients={clients} />
      <Services />
      <Features />
      <Connect />
      <Testimonials />
      <Pricing />
      <Marquee />
      <Faq />
      <BlogSection />
    </>
  );
}
