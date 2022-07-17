import React from "react";
import { ExperienceCard } from "../components/ExperienceCard";

export function ExceptionalDomainExpertiseMobDev({}) {
  return (
    <div className="container__web__dev__experience__wrapper">
      <div className="container__web__dev__experience">
        <div className="container__web__dev__experience__header">
          <div className="container__web__dev__experience__header__heading">
            Exceptional Domain Expertise
          </div>
          <div className="container__web__dev__experience__header__info">
            Phenomenal domain expertise to help you build and deliver mobile
            applications that can increase productivity, improve engagement and
            boost customer loyalty.
          </div>
        </div>
        <div className="container__web__dev__experience__content">
          <ExperienceCard
            label="Mobile Healthcare"
            info="Patient-friendly, HIPAA compliant mobile healthcare products effectively handling integration challenges with electronic health records."
          />
          <ExperienceCard
            label="Workflow and Asset Management"
            info="We build workflow and asset management apps that help you deliver maximum value by using world-class Digital Asset Management solutions."
          />
          <ExperienceCard
            label="Field Automation"
            info="Our custom built field force apps are fully integrated with a GPS to ensure high efficiency and productivity of your field force."
          />
          <ExperienceCard
            label="Fleet Management"
            info="With our custom built fleet management systems you can minimize vehicle risk, improve productivity and reduce costs of transportation."
          />
          <ExperienceCard
            label="Recruitment"
            info="We build recruitment, talent sourcing, and jobs marketplace apps that help you deliver maximum value, vetted candidates, real-time match-making, and support systems result in reduced HR-related costs for companies."
          />
          <ExperienceCard
            label="mCommerce Development"
            info="We can help you build fully customized, reliable and secure m-commerce platforms that boosts customer engagement."
          />
          <ExperienceCard
            label="Sports & Lifestyle Apps"
            info="Captivate users with the most robust, simple and useful sports and lifestyle apps that will give your competitors tough competition."
          />
          <ExperienceCard
            label="Social Networking Apps"
            info="Reduce the time to market for your amazing social networking apps and cash out on the first movers advantage by leveraging our expertise."
          />
        </div>
      </div>
    </div>
  );
}
