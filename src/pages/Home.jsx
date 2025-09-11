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
// import { isLMSProduct } from "../helper";

export default function Home() {
  const [clients, setClients] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [plains, setPlains] = useState([]);
  //   useEffect(() => {
  //     axios.get("http://edtech-web.local/admin/app/service/api/lmsApi"),
  //       {
  //         headers: {
  //           pid: 1,
  //         },
  //       }.then((res) => {
  //         if (res.data.status === 200) {
  //           setClients(res.data.data);
  //         }
  //       });
  //   }, []);
  useEffect(() => {
    axios
      .get("http://edtech-web.local/admin/app/service/api/lmsApi", {
        headers: {
          "X-Pid": "3",
        },
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.status === 200) {
          setClients(res.data.data.clientLogos);
          setTestimonials(res.data.data.testimonialsData);
          setPlains(res.data.data.plainsData);
        }
      })
      .catch((err) => {
        console.error("API Error:", err);
      });
  }, []);

  return (
    <>
      <Hero />
      <Brands clients={clients} />
      <Services />
      <Features />
      <Connect />
      <Testimonials testimonialsData={testimonials} />
      <Pricing pricing={plains} />
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
