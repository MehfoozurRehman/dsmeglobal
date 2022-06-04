import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Home from "./screens/Home";
import "./styles/App.scss";
import "./styles/footer.scss";
import "animate.css";
import Header from "./components/Header";
import Services from "./screens/Services";
import Footer from "./components/Footer";
import ContactUs from "./screens/ContactUs";
import ServiceDetails from "./screens/ServiceDetails";
import Portfolio from "./screens/Portfolio";
import Pricing from "./screens/Pricing";
import AboutUs from "./screens/AboutUs";
import Blogs from "./screens/Blogs";
import BlogDetails from "./screens/BlogDetails";
import Careers from "./screens/Careers";

export default function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <>
      <Header isDark={isDark} />
      <Routes>
        <Route path="/" element={<Home setIsDark={setIsDark} />} />
        <Route path="/services" element={<Services setIsDark={setIsDark} />} />
        <Route
          path="/service-details"
          element={<ServiceDetails setIsDark={setIsDark} />}
        />
        <Route
          path="/portfolio"
          element={<Portfolio setIsDark={setIsDark} />}
        />
        <Route path="/blog" element={<Blogs setIsDark={setIsDark} />} />
        <Route
          path="/blog-details"
          element={<BlogDetails setIsDark={setIsDark} />}
        />
        <Route path="/pricing" element={<Pricing setIsDark={setIsDark} />} />
        <Route
          path="/contact-us"
          element={<ContactUs setIsDark={setIsDark} />}
        />
        <Route path="/about-us" element={<AboutUs setIsDark={setIsDark} />} />
        <Route path="/careers" element={<Careers setIsDark={setIsDark} />} />
      </Routes>
      <Footer />
    </>
  );
}
