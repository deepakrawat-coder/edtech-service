import React, { Suspense } from "react";
import { useData } from "../context/DataContext";
import Hero from "../components/Hero";
import AboutUsSection from "../components/AboutUsSection";

// Lazy load below-the-fold sections
const Brands = React.lazy(() => import("../components/Brands"));
const Services = React.lazy(() => import("../components/Services"));
const Features = React.lazy(() => import("../components/Features"));
const Connect = React.lazy(() => import("../components/Connect"));
const Testimonials = React.lazy(() => import("../components/Testimonials"));
const Pricing = React.lazy(() => import("../components/Pricing"));
const Marquee = React.lazy(() => import("../components/Marquee"));
const Faq = React.lazy(() => import("../components/Faq"));
const BlogSection = React.lazy(() => import("../components/BlogsSection"));

import { useInView } from "react-intersection-observer";

export default function Home() {
  const { clients, testimonials, plains, faqs, blogs, banner, services, keyFeatures, about } =
    useData();

  // Intersection observers for far sections
  const [pricingRef, pricingInView] = useInView({ triggerOnce: true });
  const [blogRef, blogInView] = useInView({ triggerOnce: true });

  return (
    <>
      {/* Above-the-fold (eager) */}
      <Hero banner={banner} />
      <AboutUsSection about={about} />

      {/* Below-the-fold (lazy) */}
      <Suspense fallback={<div className="text-center p-6">Loading Brands...</div>}>
        <Brands clients={clients} />
      </Suspense>

      <Suspense fallback={<div className="text-center p-6">Loading Services...</div>}>
        <Services services={services} />
      </Suspense>

      <Suspense fallback={<div className="text-center p-6">Loading Features...</div>}>
        <Features keyFeatures={keyFeatures} />
      </Suspense>

      <Suspense fallback={<div className="text-center p-6">Loading Connect Section...</div>}>
        <Connect />
      </Suspense>

      <Suspense fallback={<div className="text-center p-6">Loading Testimonials...</div>}>
        <Testimonials testimonialsData={testimonials} />
      </Suspense>

      <div ref={pricingRef}>
        {pricingInView && (
          <Suspense fallback={<div className="text-center p-6">Loading Pricing...</div>}>
            <Pricing pricing={plains} />
          </Suspense>
        )}
      </div>

      <Suspense fallback={<div className="text-center p-6">Loading Marquee...</div>}>
        <Marquee />
      </Suspense>

      <Suspense fallback={<div className="text-center p-6">Loading FAQs...</div>}>
        <Faq faqs={faqs} />
      </Suspense>

      <div ref={blogRef}>
        {blogInView && (
          <Suspense fallback={<div className="text-center p-6">Loading Blog Section...</div>}>
            <BlogSection blogData={blogs} />
          </Suspense>
        )}
      </div>
    </>
  );
}
