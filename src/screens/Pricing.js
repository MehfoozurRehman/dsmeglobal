import React, { useEffect } from "react";
import HomeSectionCarouselEntry from "../components/HomeSectionCarouselEntry";
import deliveryPic from "../assets/delivery.png";
import pricing from "../assets/pricing.mp4";
import ContactSection from "../components/ContactSection";
import PricingFeatureEntry from "../components/PricingFeatureEntry";
import { Fade } from "react-reveal";

export default function Pricing({ setIsDark }) {
  useEffect(() => {
    setIsDark(false);
  }, []);
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
  return (
    <>
      <div style={{ maxHeight: "100vh", overflow: "hidden" }}>
        <HomeSectionCarouselEntry
          subHeading="WE FIND"
          heading={
            <>
              OUR <span>UNIQUE</span> WAY
            </>
          }
          buttonLabel="Lean more"
          videoSrc={pricing}
          toPath="/"
        />
      </div>
      <div className="pricing__feature">
        <div className="pricing__feature__entry__reverse">
          <Fade>
            We <span>Provide</span> You
          </Fade>
        </div>
        <PricingFeatureEntry
          title="Discovery Workshop"
          content="We provide you with an in-depth analysis of project requirements and its scope through our two-weeks Discovery Workshop."
        />
        <PricingFeatureEntry
          title="Fast Track Delivery"
          content="Thorough requirements engineering & effective development process guarantees fast-track delivery with no bottlenecks."
        />
        <PricingFeatureEntry
          title="Quality Products"
          content="We make sure that the final product fully meets your expectations by providing quality assurance throughout the project lifecycle."
        />
        <PricingFeatureEntry
          title="Competitive Advantage"
          content="We offer practical solutions leveraging latest technological tools and industry practices at market competitive rates."
        />
        <PricingFeatureEntry
          title="Security & Protection"
          content="All the work is completely IP protected and secured by maintaining the intellectual property through strict NDAs."
        />
      </div>
      <div className="pricing__delivery__section">
        <div className="pricing__delivery__section__content__wrapper">
          <div className="pricing__delivery__section__heading">
            <Fade>
              Process <span>From Idea Creation to Product Delivery</span>
            </Fade>
          </div>
          <img
            src={deliveryPic}
            alt="deliveryPic"
            className="pricing__delivery__section__img"
          />

          <div className="pricing__delivery__section__content">
            <Fade>
              <div className="pricing__delivery__section__content__card">
                <div className="pricing__delivery__section__content__card__heading">
                  Discovery
                </div>
                {DeliveryCardEntry1.map((item) => (
                  <div
                    className="pricing__delivery__section__content__card__para"
                    key={JSON.stringify(item)}
                  >
                    {item.para}
                  </div>
                ))}
              </div>
            </Fade>
            <Fade>
              <div className="pricing__delivery__section__content__card">
                <div className="pricing__delivery__section__content__card__heading">
                  Execution
                </div>
                {DeliveryCardEntry2.map((item) => (
                  <div
                    className="pricing__delivery__section__content__card__para"
                    key={JSON.stringify(item)}
                  >
                    {item.para}
                  </div>
                ))}
              </div>
            </Fade>
            <Fade>
              <div className="pricing__delivery__section__content__card">
                <div className="pricing__delivery__section__content__card__heading">
                  Support
                </div>
                {DeliveryCardEntry3.map((item) => (
                  <div
                    className="pricing__delivery__section__content__card__para"
                    key={JSON.stringify(item)}
                  >
                    {item.para}
                  </div>
                ))}
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </>
  );
}
