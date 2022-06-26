import React from "react";
import { HomeJumbotron } from "./HomeJumbotron";
import { ClientsSection } from "./ClientsSection";
import { ServicesSection } from "./ServicesSection";
import { NewsletterSection } from "./NewsletterSection";
import { BlogSection } from "./BlogSection";
import services from "../assets/services.svg";
import products from "../assets/products.svg";
import customizations from "../assets/customizations.svg";
import WorkSection from "../components/WorkSection";
import { StatsSection } from "./StatsSection";
import { TestimonialsSection } from "./TestimonialsSection";
import { QuateSection } from "./QuateSection";
import { PricingSection } from "./PricingSection";

export default function Home() {
  return (
    <div className="container">
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
      />
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
  );
}
