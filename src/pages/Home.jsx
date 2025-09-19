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
import AboutUsSection from "../components/AboutUsSection";

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
      <AboutUsSection />
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

// import React, { Suspense } from 'react';

// const Hero = React.lazy(() => import('../components/Hero'));
// const Brands = React.lazy(() => import('../components/Brands'));
// const Services = React.lazy(() => import('../components/Services'));
// const Features = React.lazy(() => import('../components/Features'));
// const Connect = React.lazy(() => import('../components/Connect'));
// const Testimonials = React.lazy(() => import('../components/Testimonials'));
// const Pricing = React.lazy(() => import('../components/Pricing'));
// const Marquee = React.lazy(() => import('../components/Marquee'));
// const Faq = React.lazy(() => import('../components/Faq'));
// const BlogSection = React.lazy(() => import('../components/BlogsSection'));

// export default function Home() {
//     return (
//         <Suspense fallback={<div>Loading...</div>}>
//             <Hero />
//             <Brands />
//             <Services />
//             <Features />
//             <Connect />
//             <Testimonials />
//             <Pricing />
//             <Marquee />
//             <Faq />
//             <BlogSection />
//         </Suspense>
//     );
// }
