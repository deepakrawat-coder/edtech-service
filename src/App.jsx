// src/App.jsx
import { Routes, Route } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import TermsConditions from "./pages/TermsConditions";
import Blogs from "./pages/Blogs";
import BlogDetails from "./pages/BlogDetails";
import BuyNow from "./pages/BuyNow";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Success from "./pages/Success";
import Fail from "./pages/Fail";
import Pricing from "./components/Pricing";
import RefundPolicy from "./pages/RefundPolicy";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        {/* child routes inside RootLayout */}
        <Route index element={<Home />} />
        <Route path="#pricing" element={<Pricing />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route
          path="cancellation-and-refund-policy"
          element={<RefundPolicy />}
        />
        <Route path="/success" element={<Success />} />
        <Route path="/fail" element={<Fail />} />
        <Route path="/buy-now/:" element={<BuyNow />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blog/:slug" element={<BlogDetails />} />
        <Route path="/pay/:planId" element={<BuyNow />} />
        {/* <Route path="/pay/:freeTrial" element={<BuyNow />} />  */}

        {/* <Route path="about" element={<About />} /> */}
        {/* <Route path="contact" element={<Contact />} /> */}

        {/* catch all unmatched routes */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
