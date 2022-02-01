import React from "react";
import HomeSectionCarouselEntry from "../components/HomeSectionCarouselEntry";
import deliveryPic from "../assets/delivery.png";
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
const DeliveryCardEntry1 = [
  { para: "Onsite / Offsite Discovery Workshop" },
  { para: "Vision and Goal Mapping" },
  { para: "Stakeholders Interviews" },
  { para: "Requirements Definition" },
  { para: "UI/UX and Visual Prototyping" },
  { para: "High Risk Tech POCs" },
  { para: "Product Roadmap" },
];
const DeliveryCardEntry2 = [
  { para: " Software Architecture and Design" },
  { para: "Development of Web / Mobile / Backend Components" },
  { para: "APIs Development and Integrations" },
  { para: "Continuous Integration/Delivery" },
  { para: "UAQ" },
  { para: "QA Testing" },
];
const DeliveryCardEntry3 = [
  { para: "SLA Based Support" },
  { para: "L3 and Production Support" },
  { para: "Services" },
  { para: "Operational support" },
  { para: "On-going Support" },
];

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
      <div className="pricing__delivery__section">
        <div className="pricing__delivery__section__content__wrapper">
          <div className="pricing__delivery__section__heading">
            Process <span>From Idea Creation to Product Delivery</span>
          </div>
          <img
            src={deliveryPic}
            alt="deliveryPic"
            className="pricing__delivery__section__img"
          />
          <div className="pricing__delivery__section__content">
            <div className="pricing__delivery__section__content__card">
              <div className="pricing__delivery__section__content__card__heading">
                Discovery
              </div>
              {DeliveryCardEntry1.map((item) => (
                <div className="pricing__delivery__section__content__card__para">
                  {item.para}
                </div>
              ))}
            </div>
            <div className="pricing__delivery__section__content__card">
              <div className="pricing__delivery__section__content__card__heading">
                Execution
              </div>
              {DeliveryCardEntry2.map((item) => (
                <div className="pricing__delivery__section__content__card__para">
                  {item.para}
                </div>
              ))}
            </div>
            <div className="pricing__delivery__section__content__card">
              <div className="pricing__delivery__section__content__card__heading">
                Support
              </div>
              {DeliveryCardEntry3.map((item) => (
                <div className="pricing__delivery__section__content__card__para">
                  {item.para}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
