import React, { lazy, Suspense, useState } from "react";
import { Route, Routes } from "react-router-loading";
import Loader from "./components/Loader";
import SwiperCore, { Autoplay } from "swiper";

import "./App.scss";
import "animate.css";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

const ContactUsBottom = lazy(() => import("./screens/ContactUsBottom"));
const ServiceCustomSoft = lazy(() => import("./screens/ServiceCustomSoft"));
const ServiceBlockChain = lazy(() => import("./screens/ServiceBlockChain"));
const ServiceEcomerece = lazy(() => import("./screens/ServiceEcomerece"));
const ServiceIos = lazy(() => import("./screens/ServiceIos"));
const ServiceStaff = lazy(() => import("./screens/ServiceStaff"));
const ServiceStartup = lazy(() => import("./screens/ServiceStartup"));
const ServiceAndroid = lazy(() => import("./screens/ServiceAndroid"));
const Footer = lazy(() => import("./components/Footer"));
const PortfolioDetail = lazy(() => import("./screens/PortfolioDetail"));
const Services = lazy(() => import("./screens/Services"));
const ServicesWebDev = lazy(() => import("./screens/ServicesWebDev"));
const ServiceUIUX = lazy(() => import("./screens/ServiceUIUX"));
const ServiceMobDev = lazy(() => import("./screens/ServiceMobDev"));
const QuoteScreen = lazy(() => import("./screens/QuoteScreen"));
const MeetUs = lazy(() => import("./screens/MeetUs"));
const Home = lazy(() => import("./screens/Home"));
const ContactUs = lazy(() => import("./screens/ContactUs"));
const Portfolio = lazy(() => import("./screens/Portfolio"));
const Pricing = lazy(() => import("./screens/Pricing"));
const PricingDedicated = lazy(() => import("./screens/PricingDedicated"));
const AboutUs = lazy(() => import("./screens/AboutUs"));
const Blogs = lazy(() => import("./screens/Blogs"));
const BlogDetails = lazy(() => import("./screens/BlogDetails"));
const Careers = lazy(() => import("./screens/Careers"));
const Header = lazy(() => import("./components/Header"));
const Industry = lazy(() => import("./screens/Industry"));

export default function App() {
  const [lightHeader, setLightHeader] = useState(false);
  const [noShowContactUs, setNoShowContactUs] = useState(true);
  SwiperCore.use([Autoplay]);
  return (
    <Suspense fallback={<Loader style={{ height: "100vh" }} />}>
      <Header light={lightHeader} />
      <Routes maxLoadingTime={500}>
        <Route path="/" element={<Home setLightHeader={setLightHeader} />} />
        <Route path="/services" element={<Services />} loading />
        <Route path="/services/web-dev" element={<ServicesWebDev />} loading />
        <Route path="/services/uiux" element={<ServiceUIUX />} loading />
        <Route path="/services/mob-dev" element={<ServiceMobDev />} loading />
        <Route
          path="/services/blockchain"
          element={<ServiceBlockChain loading />}
        />
        <Route
          path="/services/custom-soft"
          element={<ServiceCustomSoft />}
          loading
        />
        <Route path="/services/ios" element={<ServiceIos />} loading />
        <Route path="/services/android" element={<ServiceAndroid />} loading />
        <Route
          path="/services/ecomerece"
          element={<ServiceEcomerece />}
          loading
        />
        <Route path="/services/startup" element={<ServiceStartup />} loading />
        <Route path="/services/staff" element={<ServiceStaff />} loading />
        <Route path="/portfolio" element={<Portfolio />} loading />
        <Route path="/blog" element={<Blogs />} loading />
        <Route path="/blog-details" element={<BlogDetails />} loading />
        <Route path="/pricing" element={<Pricing />} loading />
        <Route
          path="/pricing-dedicated-teams"
          element={<PricingDedicated />}
          loading
        />
        <Route
          path="/contact-us"
          element={<ContactUs setNoShowContactUs={setNoShowContactUs} />}
          loading
        />
        <Route
          path="/quote"
          element={<QuoteScreen setNoShowContactUs={setNoShowContactUs} />}
          loading
        />
        <Route path="/about-us" element={<AboutUs />} loading />
        <Route path="/industry" element={<Industry />} loading />
        <Route
          path="/careers"
          element={<Careers setLightHeader={setLightHeader} />}
          loading
        />
        <Route path="/portfolio-detail" element={<PortfolioDetail />} loading />
        <Route path="/meet-us" element={<MeetUs />} loading />
      </Routes>

      {noShowContactUs ? <ContactUsBottom /> : null}
      <Footer />
    </Suspense>
  );
}
