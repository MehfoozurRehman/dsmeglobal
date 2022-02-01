import React from "react";
import HomeSectionCarouselEntry from "../components/HomeSectionCarouselEntry";
function PricingFeatureEntry() {
  return (
    <div className="pricing__feature__entry">
      <div className="pricing__feature__entry__heading">Discovery Workshop</div>
      <div className="pricing__feature__entry__info">
        We provide you with an in-depth analysis of project requirements and its
        scope through our two-weeks Discovery Workshop.
      </div>
    </div>
  );
}
export default function Pricing() {
  return (
    <>
      <div style={{ height: "100vh", overflow: "hidden" }}>
        <HomeSectionCarouselEntry
          subHeading="WE FIND"
          heading="OUR UNIQUE WAY"
          buttonLabel="View Our Work"
          toPath="/"
        />
      </div>
      <div className="pricing__feature">
        <div className="pricing__feature__entry__reverse">
          We <span>Provide</span> You
        </div>
        <PricingFeatureEntry />
        <PricingFeatureEntry />
        <PricingFeatureEntry />
        <PricingFeatureEntry />
        <PricingFeatureEntry />
      </div>
    </>
  );
}
