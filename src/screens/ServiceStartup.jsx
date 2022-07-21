import React from "react";
import { HomeJumbotron } from "../components/HomeJumbotron";
import { OurEngagementModelsForStartups } from "../components/OurEngagementModelsForStartups";
import { WhyWorkWithUsForStartups } from "../components/WhyWorkWithUsForStartups";
import { TechnologiesWeWorkOnForStartups } from "../components/TechnologiesWeWorkOnForStartups";
import { OurProcessforStartupProductDevelopment } from "../components/OurProcessforStartupProductDevelopment";
import { StartupServicesSection } from "../components/StartupServicesSection";
import { AccelerateYourGrowthwithOurStartupProductDevelopmentServices } from "../components/AccelerateYourGrowthwithOurStartupProductDevelopmentServices";
import startup from "../assets/startup.svg";

export default function ServiceStartup() {
  return (
    <>
      <div className="container">
        <HomeJumbotron
          taglinesLine="Startup Services"
          info="Web applications that are visually amazing and provide seamless user experience for the desktop, mobile and tablet."
          img={startup}
          talk={true}
        />
      </div>
      <div className="service__startup__main__container">
        <AccelerateYourGrowthwithOurStartupProductDevelopmentServices />
        <StartupServicesSection />
        <OurProcessforStartupProductDevelopment />
        <TechnologiesWeWorkOnForStartups />
        <WhyWorkWithUsForStartups />
        <OurEngagementModelsForStartups />
      </div>
    </>
  );
}
