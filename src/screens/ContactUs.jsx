import React, { useEffect } from "react";
import ContactSection from "../components/ContactSection";

export default function ContactUs({ setNoShowContactUs }) {
  useEffect(() => {
    setNoShowContactUs(false);

    return () => {
      setNoShowContactUs(true);
    };
  }, []);

  return (
    <div style={{ marginTop: "8em" }}>
      <ContactSection />
    </div>
  );
}
