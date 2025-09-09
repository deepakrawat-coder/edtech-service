// src/App.jsx
import { Routes, Route } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        {/* child routes inside RootLayout */}
        <Route index element={<Home />} />

        
        {/* <Route path="about" element={<About />} /> */}
        {/* <Route path="contact" element={<Contact />} /> */}


        {/* catch all unmatched routes */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
