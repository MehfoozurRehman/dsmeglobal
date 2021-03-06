import React, { lazy, Suspense, useState } from "react";
import { withStyles } from "react-critical-css";
import SwiperCore, { Autoplay } from "swiper";
import { Route, Routes } from "react-router";
import Loader from "./components/Loader";
import style from "./App.scss";

const Header = lazy(() => import("./components/Header"));
const Footer = lazy(() => import("./components/Footer"));
const ContactUsBottom = lazy(() => import("./components/ContactUsBottom"));

const Home = lazy(() => import("./screens/Home"));
const AboutUs = lazy(() => import("./screens/AboutUs"));
const Blogs = lazy(() => import("./screens/Blogs"));
const Careers = lazy(() => import("./screens/Careers"));
const Industry = lazy(() => import("./screens/Industry"));
const Services = lazy(() => import("./screens/Services"));
const ServiceCustomSoft = lazy(() => import("./screens/ServiceCustomSoft"));
const ServiceBlockChain = lazy(() => import("./screens/ServiceBlockChain"));
const ServiceEcomerece = lazy(() => import("./screens/ServiceEcomerece"));
const ServiceIos = lazy(() => import("./screens/ServiceIos"));
const ServiceStaff = lazy(() => import("./screens/ServiceStaff"));
const ServiceStartup = lazy(() => import("./screens/ServiceStartup"));
const ServiceAndroid = lazy(() => import("./screens/ServiceAndroid"));
const Portfolio = lazy(() => import("./screens/Portfolio"));
const PortfolioDetail = lazy(() => import("./screens/PortfolioDetail"));
const ServicesWebDev = lazy(() => import("./screens/ServicesWebDev"));
const ServiceUIUX = lazy(() => import("./screens/ServiceUIUX"));
const ServiceMobDev = lazy(() => import("./screens/ServiceMobDev"));
const QuoteScreen = lazy(() => import("./screens/QuoteScreen"));
const MeetUs = lazy(() => import("./screens/MeetUs"));
const ContactUs = lazy(() => import("./screens/ContactUs"));
const Pricing = lazy(() => import("./screens/Pricing"));
const PricingDedicated = lazy(() => import("./screens/PricingDedicated"));
const BlogDetails = lazy(() => import("./screens/BlogDetails"));
const ServiceWebScraping = lazy(() => import("./screens/ServiceWebScraping"));
const DiscoveryWorkshop = lazy(() => import("./screens/DiscoveryWorkshop"));

function App() {
  const [lightHeader, setLightHeader] = useState(false);
  const [noShowContactUs, setNoShowContactUs] = useState(true);
  SwiperCore.use([Autoplay]);
  return (
    <Suspense fallback={<Loader style={{ height: "100vh" }} />}>
      <Header light={lightHeader} />
      <Routes maxLoadingTime={500}>
        <Route path="/" element={<Home setLightHeader={setLightHeader} />} />
        <Route
          path="/services"
          element={<Services setLightHeader={setLightHeader} />}
        />
        <Route path="/services/web-dev" element={<ServicesWebDev />} />
        <Route path="/services/uiux" element={<ServiceUIUX />} />
        <Route path="/services/mob-dev" element={<ServiceMobDev />} />
        <Route path="/services/blockchain" element={<ServiceBlockChain />} />
        <Route path="/services/custom-soft" element={<ServiceCustomSoft />} />
        <Route path="/services/ios" element={<ServiceIos />} />
        <Route path="/services/web-scraping" element={<ServiceWebScraping />} />
        <Route path="/services/android" element={<ServiceAndroid />} />
        <Route path="/services/ecomerece" element={<ServiceEcomerece />} />
        <Route path="/services/startup" element={<ServiceStartup />} />
        <Route path="/services/staff" element={<ServiceStaff />} />
        <Route
          path="/services/discoveryworkshop"
          element={<DiscoveryWorkshop />}
        />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/blog-details" element={<BlogDetails />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/pricing-dedicated-teams" element={<PricingDedicated />} />

        <Route
          path="/contact-us"
          element={<ContactUs setNoShowContactUs={setNoShowContactUs} />}
        />
        <Route
          path="/quote"
          element={<QuoteScreen setNoShowContactUs={setNoShowContactUs} />}
        />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/industry" element={<Industry />} />
        <Route
          path="/careers"
          element={<Careers setLightHeader={setLightHeader} />}
        />
        <Route path="/portfolio-detail" element={<PortfolioDetail />} />
        <Route path="/meet-us" element={<MeetUs />} />
      </Routes>
      {noShowContactUs ? <ContactUsBottom /> : null}
      <Footer />
    </Suspense>
  );
}

export default withStyles(style)(App);
