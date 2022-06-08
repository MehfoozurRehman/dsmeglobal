import React from "react";
import { HomeJumbotron } from "./HomeJumbotron";
import { ClientsSection } from "./ClientsSection";
import { ServicesSection } from "./ServicesSection";
import { NewsletterSection } from "./NewsletterSection";
import { BlogSection } from "./BlogSection";
import bannerImage1 from "../assets/bannerImage1.svg";

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
      <BlogSection />
      <div className="container__testimonials">
        <img src="" alt="" className="container__testimonials__img" />
        <div className="container__testimonials__overlay">
          <div className="container__testimonials__overlay__content"></div>
        </div>
      </div>
      <NewsletterSection />
    </div>
  );
}
