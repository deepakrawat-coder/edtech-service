import { Suspense, lazy } from "react";
import { useData } from "../context/DataContext";

// 🔹 Eager load (critical, above-the-fold)
import Hero from "../components/Hero";
import AboutUsSection from "../components/AboutUsSection";

// 🔹 Lazy load everything else (below-the-fold)
const Brands = lazy(() => import("../components/Brands"));
const Services = lazy(() => import("../components/Services"));
const Features = lazy(() => import("../components/Features"));
const Connect = lazy(() => import("../components/Connect"));
const Testimonials = lazy(() => import("../components/Testimonials"));
const Pricing = lazy(() => import("../components/Pricing"));
const Marquee = lazy(() => import("../components/Marquee"));
const Faq = lazy(() => import("../components/Faq"));
const BlogSection = lazy(() => import("../components/BlogsSection"));

export default function Home() {
  const {
    clients,
    testimonials,
    plains,
    faqs,
    blogs,
    banner,
    services,
    keyFeatures,
    about,
  } = useData();

  return (
    <>
      {/* Above-the-fold: eager load → instant */}
      <Hero banner={banner} />
      <AboutUsSection about={about} />

      {/* Below-the-fold: lazy load with Suspense */}
      <Suspense fallback={<div className="text-center p-6">Loading...</div>}>
        <Brands clients={clients} />
        <Services services={services} />
        <Features keyFeatures={keyFeatures} />
        <Connect />
        <Testimonials testimonialsData={testimonials} />
        <Pricing pricing={plains} />
        <Marquee />
        <Faq faqs={faqs} />
        <BlogSection blogData={blogs} />
      </Suspense>
    </>
  );
}
