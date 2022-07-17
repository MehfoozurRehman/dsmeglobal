import React from "react";
import { HomeJumbotron } from "../components/HomeJumbotron";
import mobile from "../assets/mobile.svg";
import { HowSection } from "../components/HowSection";
import { WhyDSMEGlobalLinksMobDev } from "../components/WhyDSMEGlobalLinksMobDev";
import { EmergingTechnologiesKnowHowMobDev } from "../components/EmergingTechnologiesKnowHowMobDev";
import { ExceptionalDomainExpertiseMobDev } from "../components/ExceptionalDomainExpertiseMobDev";
import { OurExpertiseMobDev } from "../components/OurExpertiseMobDev";

export default function ServicesMobDev() {
  return (
    <>
      <div className="container">
        <HomeJumbotron
          taglinesLine="Mobile Application Development"
          info="Custom built mobile applications with amazing experiences that help support your business goals."
          img={mobile}
          talk={true}
        />
      </div>
      <OurExpertiseMobDev />
      <ExceptionalDomainExpertiseMobDev />
      <EmergingTechnologiesKnowHowMobDev />
      <HowSection />
      <WhyDSMEGlobalLinksMobDev />
    </>
  );
}
