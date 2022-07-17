import React from "react";
import { HomeJumbotron } from "../components/HomeJumbotron";
import { MeetUsStories } from "../components/MeetUsStories";
import { MeetUsQualityOverQuantity } from "../components/MeetUsQualityOverQuantity";
import { MeetUsSmallThingsBigDifferences } from "../components/MeetUsSmallThingsBigDifferences";
import meet from "../assets/meet.svg";

export default function MeetUs() {
  return (
    <>
      <div className="container">
        <HomeJumbotron
          taglinesLine="Meet Us"
          info="We give you opportunities to excel and achieve the global recognition that you deserve!"
          img={meet}
        />
      </div>
      <div className="meetus__container__main">
        <MeetUsSmallThingsBigDifferences />
        <MeetUsQualityOverQuantity />
        <MeetUsStories />
      </div>
    </>
  );
}
