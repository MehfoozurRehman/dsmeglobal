import React from "react";
import { HomeJumbotron } from "../components/HomeJumbotron";
import { HowSection } from "../components/HowSection";
import { FromMVPtoEnterpriseSolution } from "../components/FromMVPtoEnterpriseSolution";
import { ExperienceInDevelopingDiverseSolutions } from "../components/ExperienceInDevelopingDiverseSolutions";
import { EmergingTechnologiesWebDev } from "../components/EmergingTechnologiesWebDev";
import { WhyWorkwithDSMEGlobalLinks } from "../components/WhyWorkwithDSMEGlobalLinks";
import { OurExpertise } from "../components/OurExpertise";
import web from "../assets/web.svg";

export default function ServicesWebDev() {
  return (
    <>
      <div className="container">
        <HomeJumbotron
          taglinesLine="Web Application Development"
          info="Web applications that are visually amazing and provide seamless user experience for the desktop, mobile and tablet."
          img={web}
          talk={true}
        />
      </div>
      <OurExpertise />
      <ExperienceInDevelopingDiverseSolutions />
      <FromMVPtoEnterpriseSolution />
      <EmergingTechnologiesWebDev />
      <HowSection />
      <WhyWorkwithDSMEGlobalLinks />
    </>
  );
}
