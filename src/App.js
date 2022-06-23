import React, { lazy, Suspense, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Loader from "./components/Loader";
import { loadFull } from "tsparticles";

import "./App.scss";
import "animate.css";
import "swiper/css";

const ServiceCustomSoft = lazy(() => import("./screens/ServiceCustomSoft"));
const ServiceBlockChain = lazy(() => import("./screens/ServiceBlockChain"));
const ServiceEcomerece = lazy(() => import("./screens/ServiceEcomerece"));
const ServiceIos = lazy(() => import("./screens/ServiceIos"));
const ServiceStaff = lazy(() => import("./screens/ServiceStaff"));
const ServiceStartup = lazy(() => import("./screens/ServiceStartup"));
const ServiceAndroid = lazy(() => import("./screens/ServiceAndroid"));
const Footer = lazy(() => import("./components/Footer"));
const ContactSection = lazy(() => import("./components/ContactSection"));
const Portfolio__detail = lazy(() => import("./screens/Portfolio__detail"));
const Services = lazy(() => import("./screens/Services"));
const ServicesWebDev = lazy(() => import("./screens/ServicesWebDev"));
const ServiceUIUX = lazy(() => import("./screens/ServiceUIUX"));
const ServiceMobDev = lazy(() => import("./screens/ServiceMobDev"));
const QuoteScreen = lazy(() => import("./screens/QuoteScreen"));
const MeetUs = lazy(() => import("./screens/MeetUs"));
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
  const [isContactSection, setIsContactSection] = useState(true);
  const [lightHeader, setLightHeader] = useState(false);

  return (
    <Suspense fallback={<Loader style={{ height: "100vh" }} />}>
      {/* <BackgroundParticals particlesInit={particlesInit} /> */}
      <Header light={lightHeader} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/web-dev" element={<ServicesWebDev />} />
        <Route path="/services/uiux" element={<ServiceUIUX />} />
        <Route path="/services/mob-dev" element={<ServiceMobDev />} />
        <Route path="/services/blockchain" element={<ServiceBlockChain />} />
        <Route path="/services/custom-soft" element={<ServiceCustomSoft />} />
        <Route path="/services/ios" element={<ServiceIos />} />
        <Route path="/services/android" element={<ServiceAndroid />} />
        <Route path="/services/ecomerece" element={<ServiceEcomerece />} />
        <Route path="/services/startup" element={<ServiceStartup />} />
        <Route path="/services/staff" element={<ServiceStaff />} />
        <Route path="/service-details" element={<ServiceDetails />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/blog-details" element={<BlogDetails />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route
          path="/quote"
          element={<QuoteScreen setIsContactSection={setIsContactSection} />}
        />
        <Route path="/about-us" element={<AboutUs />} />
        <Route
          path="/careers"
          element={<Careers setLightHeader={setLightHeader} />}
        />
        <Route path="/portfolio-detail" element={<Portfolio__detail />} />
        <Route path="/meet-us" element={<MeetUs />} />
      </Routes>
      {isContactSection ? <ContactSection /> : null}
      <Footer />
    </Suspense>
  );
}
