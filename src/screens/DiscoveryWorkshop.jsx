import React from "react";
import { HomeJumbotron } from "../components/HomeJumbotron";
import web from "../assets/web.svg";
import { HowFixedPriceProcessWorks } from "./HowFixedPriceProcessWorks";
import { ExperienceCard } from "../components/ExperienceCard";

function AgileDiscoveryWorkshop() {
  return (
    <>
      <div className="container">
        <HomeJumbotron
          taglinesLine=" Agile Discovery Workshop"
          info="Fastest way to engineer your requirements and take your product from concept to development."
          img={web}
          talk={true}
        />
      </div>
      <HowFixedPriceProcessWorks />
      <div className="container__web__dev__experience__wrapper">
        <div className="container__web__dev__experience">
          <div className="container__web__dev__experience__header">
            <div className="container__web__dev__experience__header__heading">
              Why we Recommend It
            </div>
            <div className="container__web__dev__experience__header__info">
              It's the first step to building a successful and awesome tech
              product. It builds tremendous confidence when moving on to the
              development phase.
            </div>
          </div>
          <div className="container__web__dev__experience__content">
            <ExperienceCard
              label="Reduce Cost"
              info="ADW is the best way to reduce inflated and superficial development costs. Our goal is to arrive at the most critical features that add direct business value and get rid of the fat."
            />
            <ExperienceCard
              label="Speed & Agility"
              info="We have structured this workshop in a way to ensure that we gather and document an in-depth understanding of your product in the shortest time possible."
            />
            <ExperienceCard
              label="Mitigate Risk"
              info="During the workshop, we help you identify problem areas and any technical challenges. The goal is to make sure that any high-risk items are identified and dealt ear"
            />
            <ExperienceCard
              label="Best way to prepare for development"
              info="There is no doubt that 90% of software projects often fail in time, cost or scope. Gathering requirements with ADW is our way of addressing this problem and we have been pretty successful with it."
            />
            <ExperienceCard
              label="Specialized Experts"
              info="We’ve helped launch hundreds of products and our team has been doing this for nearly 15 years. We bring experts to the table and our goal is to make you as educated as possible before making important decisions."
            />
            <ExperienceCard
              label="Stakeholders Involvement  "
              info="All concerned stakeholders of the product are involved in the process from day one. This way businesses get to build a product that does end up getting used."
            />
          </div>
        </div>
      </div>
    
    </>
  );
}

export default AgileDiscoveryWorkshop;
