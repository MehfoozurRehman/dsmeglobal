import React, { useEffect } from "react";
import ContactSection from "../components/ContactSection";

export default function ContactUs({ setIsDark }) {
  useEffect(() => {
    setIsDark(false);
  }, []);
  return (
    <>
      <ContactSection />
    </>
  );
}
