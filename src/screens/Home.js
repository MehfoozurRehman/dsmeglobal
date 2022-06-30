import React, { useEffect } from "react";
import { HomeJumbotron } from "../components/HomeJumbotron";
import { ClientsSection } from "../components/ClientsSection";
import { ServicesSection } from "../components/ServicesSection";
import { NewsletterSection } from "../components/NewsletterSection";
import { BlogSection } from "../components/BlogSection";
import services from "../assets/services.svg";
import products from "../assets/products.svg";
import customizations from "../assets/customizations.svg";
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
          imgs={[services, products, customizations]}
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
        <BlogSection />
        <PricingSection />
        <TestimonialsSection />
        <NewsletterSection />
      </div>
    </>
  );
}
