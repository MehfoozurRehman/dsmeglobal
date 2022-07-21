import React, { useEffect } from "react";
import { HomeJumbotron } from "../components/HomeJumbotron";
import { ClientsSection } from "../components/ClientsSection";
import { ServicesSection } from "../components/ServicesSection";
import { NewsletterSection } from "../components/NewsletterSection";
import { BlogSection } from "../components/BlogSection";
import homebanner1 from "../assets/homebanner1.png";
import homebanner2 from "../assets/homebanner2.png";
import homebanner3 from "../assets/homebanner3.png";
import WorkSection from "../components/WorkSection";
import { StatsSection } from "../components/StatsSection";
import { TestimonialsSection } from "../components/TestimonialsSection";
import { QuateSection } from "../components/QuateSection";
import { PricingSection } from "../components/PricingSection";

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
          info="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore,
       culpa est? Quos iusto dolore culpa, veritatis quas minus quibusdam
       ad? Lorem, ipsum dolor sit amet consectetur adipisicing elit.
       Dolore, culpa est? Quos iusto dolore culpa, veritatis quas minus
       quibusdam ad?"
          imgs={[homebanner1, homebanner2, homebanner3]}
          buttons={true}
          light={true}
          styleColor={{ color: "white" }}
        />
      </div>
      <div className="container">
        <ClientsSection />
        <ServicesSection />
        <StatsSection />
        <WorkSection />
        <QuateSection />
        <PricingSection />
        <TestimonialsSection />
        <BlogSection />
        <NewsletterSection />
      </div>
    </>
  );
}
