import React from "react";
import deliveryPic from "../assets/delivery.png";
import PricingFeatureEntry from "../components/PricingFeatureEntry";
import { HomeJumbotron } from "../components/HomeJumbotron";
import pricing from "../assets/pricing.svg";
import products from "../assets/products.svg";

export default function Pricing() {
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
      <div className="container">
        <HomeJumbotron
          taglinesLine="Best"
          taglines={["products", "prices"]}
          info="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore,
            culpa est? Quos iusto dolore culpa, veritatis quas minus quibusdam
            ad? Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Dolore, culpa est? Quos iusto dolore culpa, veritatis quas minus
            quibusdam ad?"
          imgs={[products, pricing]}
        />
      </div>
      <div className="pricing__feature">
        <div className="pricing__feature__entry__reverse">
          We <span>Provide</span> You
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
        <div className="pricing__delivery__section__heading">
          Process From Idea Creation to Product Delivery
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
              <div
                className="pricing__delivery__section__content__card__para"
                key={JSON.stringify(item)}
              >
                {item.para}
              </div>
            ))}
          </div>

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
        </div>
      </div>
    </>
  );
}
