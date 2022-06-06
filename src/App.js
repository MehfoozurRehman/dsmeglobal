import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ContactUs from "./screens/ContactUs";
import ServiceDetails from "./screens/ServiceDetails";
import Portfolio from "./screens/Portfolio";
import Pricing from "./screens/Pricing";
import AboutUs from "./screens/AboutUs";
import Blogs from "./screens/Blogs";
import BlogDetails from "./screens/BlogDetails";
import Careers from "./screens/Careers";
import { loadFull } from "tsparticles";
import { BackgroundParticals } from "./BackgroundParticals";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./styles/App.scss";
import "animate.css";
import "swiper/css";

export default function App() {
  const [isDark, setIsDark] = useState(false);
  const particlesInit = async (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <>
      <BackgroundParticals
        particlesInit={particlesInit}
        particlesLoaded={particlesLoaded}
      />
      <Header isDark={isDark} />
      <Routes>
        <Route path="/" element={<Home setIsDark={setIsDark} />} />
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
