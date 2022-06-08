import React from "react";
import { HomeJumbotron } from "./HomeJumbotron";
import { ClientsSection } from "./ClientsSection";
import { ServicesSection } from "./ServicesSection";
import { NewsletterSection } from "./NewsletterSection";
import { BlogSection } from "./BlogSection";
import bannerImage1 from "../assets/bannerImage1.svg";
import WorkSection from "../components/WorkSection";
import { StatsSection } from "./StatsSection";
import { TestimonialsSection } from "./TestimonialsSection";

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
        img={bannerImage1}
      />
      <ClientsSection />
      <ServicesSection />
      <StatsSection />
      <WorkSection />
      <BlogSection />
      <TestimonialsSection />
      <NewsletterSection />
    </div>
  );
}
