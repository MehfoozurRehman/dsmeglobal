import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Loader from "./components/Loader";
import { loadFull } from "tsparticles";
import Footer from "./components/Footer";
import Portfolio__detail from "./screens/Portfolio__detail";
import "./styles/App.scss";
import "./styles/Footer.scss";
import "./styles/portfoliodetail.scss";
import "./styles/About__sec.scss";
import "animate.css";
import "swiper/css";
const Home = lazy(() => import("./screens/Home"));
const ContactUs = lazy(() => import("./screens/ContactUs"));
const ServiceDetails = lazy(() => import("./screens/ServiceDetails"));
const Portfolio = lazy(() => import("./screens/Portfolio"));
const Pricing = lazy(() => import("./screens/Pricing"));
const AboutUs = lazy(() => import("./screens/AboutUs"));
const Blogs = lazy(() => import("./screens/Blogs"));
const BlogDetails = lazy(() => import("./screens/BlogDetails"));
const Careers = lazy(() => import("./screens/Careers"));
const Header = lazy(() => import("./components/Header"));
const BackgroundParticals = lazy(() => import("./BackgroundParticals"));

export default function App() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Suspense fallback={<Loader style={{ height: "100vh" }} />}>
      <BackgroundParticals particlesInit={particlesInit} />

      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service-details" element={<ServiceDetails />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/blog-details" element={<BlogDetails />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/portfolio-detail" element={<Portfolio__detail />} />
      </Routes>
      <Footer />
    </Suspense>
  );
}
