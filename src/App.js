import React from "react";
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

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/service-details" element={<ServiceDetails />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
      <Footer />
    </>
  );
}
