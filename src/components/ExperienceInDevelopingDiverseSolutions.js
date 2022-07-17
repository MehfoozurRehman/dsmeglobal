import React from "react";
import { ExperienceCard } from "../components/ExperienceCard";

export function ExperienceInDevelopingDiverseSolutions() {
  return (
    <div className="container__web__dev__experience__wrapper">
      <div className="container__web__dev__experience">
        <div className="container__web__dev__experience__header">
          <div className="container__web__dev__experience__header__heading">
            Experience In Developing Diverse Solutions.
          </div>
          <div className="container__web__dev__experience__header__info">
            Custom solutions are lean, designed as per your brand guidelines and
            tailor-made to address the business goals.
          </div>
        </div>
        <div className="container__web__dev__experience__content">
          <ExperienceCard
            label="Large Scale Distributed Systems"
            info="Leverage our expertise to build highly customized and scalable projects to gain competitive edge."
          />
          <ExperienceCard
            label="Results Driven Business Apps"
            info="Develop intelligent data-driven web apps that help you make more informed decisions."
          />
          <ExperienceCard
            label="Automating Existing Processes"
            info="We can also help you streamline & automate your internal operations with our discovery-led approach."
          />
          <ExperienceCard
            label="E-commerce & Web Portals"
            info="From marketplaces to online shopping, we have designed & developed several eCommerce portals."
          />
          <ExperienceCard
            label="Scalable SaaS Products"
            info="Doesn't matter if you are a startup, entrepreneur or an business, we can help you develop scalable SaaS products."
          />
          <ExperienceCard
            label="Branded Microsites"
            info="Develop and design custom microsites to introduce new products & services or capture leads to enhance marketing efforts."
          />
        </div>
      </div>
    </div>
  );
}
