import React, { useEffect } from "react";
import { HomeJumbotron } from "../components/HomeJumbotron";
import { ClientsSection } from "../components/ClientsSection";
import { ServicesSection } from "../components/ServicesSection";
import { NewsletterSection } from "../components/NewsletterSection";
import { BlogSection } from "../components/BlogSection";
import homebanner1 from "../assets/homebanner1.webp";
import homebanner2 from "../assets/homebanner2.webp";
import homebanner3 from "../assets/homebanner3.webp";
import WorkSection from "../components/WorkSection";
import { StatsSection } from "../components/StatsSection";
import { TestimonialsSection } from "../components/TestimonialsSection";
import { QuateSection } from "../components/QuateSection";
import { PricingSection } from "../components/PricingSection";
import { OurDevelopmentProcess } from "../components/OurDevelopmentProcess";

export default function Home({ setLightHeader }) {
  useEffect(() => {
    setLightHeader(true);

    return () => {
      setLightHeader(false);
    };
  }, []);
  return (
    <>
      <div
        className="container"
        style={{ backgroundColor: "#242424", marginBottom: "3em" }}
      >
        <HomeJumbotron
          taglinesLine="Quality"
          taglines={["services", "products", "customizations"]}
          matcherLine="you really"
          matchers={["want", "need", "deserve"]}
          info="Whether you want to modernize your application portfolio broadly, pursue specific opportunities in your industry, or optimize a single technology, DSME brings together all the services with leading back-office and industry-specific SaaS. Get started easily with hundreds of reference architectures and fully automated solutions available for direct deployment into your business."
          imgs={[homebanner1, homebanner2, homebanner3]}
          buttons={true}
          light={true}
          styleColor={{ color: "white" }}
        />
      </div>
      <div className="container">
        <ServicesSection />
        <StatsSection />
        <WorkSection />
        <QuateSection />
        <PricingSection />
        <OurDevelopmentProcess />
        <ClientsSection />
        <TestimonialsSection />
        <BlogSection />
        <NewsletterSection />
      </div>
    </>
  );
}
