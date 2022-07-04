import React from "react";
import { HomeJumbotron } from "../components/HomeJumbotron";
import industries from "../assets/industry.png";
import PricingFeatureEntry from "../components/PricingFeatureEntry";
function Industry() {
  return (
    <>
      <div className="container">
        <HomeJumbotron
          taglinesLine="Industry"
          taglines={["We", "We serve"]}
          info="Your Industry Specific Custom Software Solution.?"
          img={industries}
          talk={true}
        />
      </div>
      <div className="pricing__feature">
        <div className="pricing__feature__entry__reverse">
          We <span>Provide</span> You
        </div>
        <PricingFeatureEntry
          title="Healthcare"
          content="We bring easy healthcare to the masses, by building tech solutions that enable practices, improve patient experiences, streamlines workflows."
        />
        <PricingFeatureEntry
          title="Real Estate"
          content="Make real estate transactions more profitable with our fully automated sales process and property management solutions."
        />
        <PricingFeatureEntry
          title="Retail"
          content="We build bespoke retail apps to better manage warehouse operations, ease stock ordering process and enhance consumer purchase experience."
        />
        <PricingFeatureEntry
          title="FinTech"
          content="With the aim of making financial services more accessible, we provide Fintech services like mobile banking, investment banking, and BLE technology."
        />
        <PricingFeatureEntry
          title="Logistics & Transport"
          content="Simplify complex and highly challenging logistics and transportation processes with our custom designed apps and software integrations."
        />
         <PricingFeatureEntry
          title="Insurance"
          content="We create personalized products for insurance companies to assist them with risk inspections,document/claim management and retention."
        />
         <PricingFeatureEntry
          title="EdTech"
          content="Deliver learning architectures, that personalize learning and training while using big data analysis to find the best ways for learners to progress."
        />
         <PricingFeatureEntry
          title="Media & Entertainment"
          content="Stay ahead of market trends with our data-driven and analytics powered media & entertainment applications and development services."
        />
      </div>
    </>
  );
}

export default Industry;
