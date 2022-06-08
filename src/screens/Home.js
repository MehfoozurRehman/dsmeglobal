import React from "react";
import { HomeJumbotron } from "./HomeJumbotron";
import { ClientsSection } from "./ClientsSection";
import { ServicesSection } from "./ServicesSection";
import { NewsletterSection } from "./NewsletterSection";
import { BlogSection } from "./BlogSection";
import bannerImage1 from "../assets/bannerImage1.svg";
import WorkSection from "../components/WorkSection";

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
function StatsSection() {
  return (
    <div className="container__stats__wrapper">
      <div className="container__stats__content">
        <div className="container__stats">
          <div className="container__stats__entry">
            <div className="container__stats__entry__value">10+</div>
            <div className="container__stats__entry__label">
              years in remote software development
            </div>
          </div>
          <div className="container__stats__entry">
            <div className="container__stats__entry__value">150+</div>
            <div className="container__stats__entry__label">
              digital solutions delivered
            </div>
          </div>
          <div className="container__stats__entry">
            <div className="container__stats__entry__value">200</div>
            <div className="container__stats__entry__label">
              experts on board
            </div>
          </div>
          <div className="container__stats__entry">
            <div className="container__stats__entry__value">9/10</div>
            <div className="container__stats__entry__label">
              projects conducted remotely
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
