import React from 'react';
import {ExperienceCard} from '../components/ExperienceCard';

export function ExceptionalDomainExpertiseMobDev() {
  return (
    <div className="container__web__dev__experience__wrapper">
      <div className="container__web__dev__experience">
        <div className="container__web__dev__experience__header">
          <div className="container__web__dev__experience__header__heading">
            Exceptional <span> Domain Expertise </span>
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
            label="Recruitment"
            info="We build recruitment, talent sourcing, and jobs marketplace apps that help you deliver maximum value, vetted candidates, real-time match-making, and support systems result in reduced HR-related costs for companies."
          />
          <ExperienceCard
            label="Real Estate"
            info="Make real estate transactions more profitable with our fully automated sales process and property management solutions.            "
          />
          <ExperienceCard
            label="Food"
            info="Build stronger customer relationships, transact in new ways, and grow your food and beverage business. DSME can help you connect every guest interaction to your back-of-house operations, so you can deliver better business performance and exceptional customer experiences."
          />
          <ExperienceCard
            label="Tourism"
            info="Traveler demands, financial pressure, technology advancements, and global growth is changing the rules. DSME empowers travel companies to stay ahead of the game and provide exceptional experiences by becoming intelligent enterprises. "
          />
          <ExperienceCard
            label="mCommerce Development"
            info="We can help you build fully customized, reliable and secure m-commerce platforms that boosts customer engagement."
          />
          <ExperienceCard
            label="Retail"
            info="Put your customers at the heart of your retail business. With a complete set of mission-critical retail solutions and services from DSME, you’ll gain the insights and agility you need to delight customers at every touchpoint. "
          />
          <ExperienceCard
            label="Sports & Lifestyle Apps"
            info="Captivate users with the most robust, simple and useful sports and lifestyle apps that will give your competitors tough competition."
          />
          <ExperienceCard
            label="Social Networking Apps"
            info="Reduce the time to market for your amazing social networking apps and cash out on the first movers advantage by leveraging our expertise."
          />

          <ExperienceCard
            label="Logistics and Supply chain"
            info="Effective retail supply chain management could be worth several percentage points of profitability. Align planning decisions to demand forecasting, inventory management, and receipt flow to drive profitable allocation and replenishment, supply chain execution, and order fulfillment. "
          />
          <ExperienceCard
            label="E-Commerce"
            info="Innovate at the speed of your customers, scale easily across the globe, and meet any level of demand. Extend your commerce with DSME to deliver experiences like augmented reality, marketplaces, and more."
          />
        </div>
      </div>
      
    </div>
  );
}
