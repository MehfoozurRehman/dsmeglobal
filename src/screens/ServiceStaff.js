import React from "react";
import { HomeJumbotron } from "../components/HomeJumbotron";
import { BenifitsForStaff } from "../components/BenifitsForStaff";
import { TechonologiesForStaff } from "../components/TechonologiesForStaff";
import { TopTalentForStaff } from "../components/TopTalentForStaff";
import { ScaleUpTeamForStaff } from "../components/ScaleUpTeamForStaff";
import { AugmentationProcessForStaff } from "../components/AugmentationProcessForStaff";
import { CorporateModelForStaff } from "../components/CorporateModelForStaff";
import staff from "../assets/staff.svg";

export default function ServiceStaff() {
  return (
    <>
      <div className="container">
        <HomeJumbotron
          taglinesLine="Staff Automation"
          info="Web applications that are visually amazing and provide seamless user experience for the desktop, mobile and tablet."
          img={staff}
          talk={true}
        />
      </div>
      <TopTalentForStaff />
      <ScaleUpTeamForStaff />
      <AugmentationProcessForStaff />
      <CorporateModelForStaff />
      <TechonologiesForStaff />
      <BenifitsForStaff />
    </>
  );
}
