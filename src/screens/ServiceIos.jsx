import React from "react";
import { HomeJumbotron } from "../components/HomeJumbotron";
import { WhychoosenativeiOSappdevelopment } from "../components/WhychoosenativeiOSappdevelopment";
import { Tangibleresultsrightonschedule } from "../components/Tangibleresultsrightonschedule";
import { Youshareyourideawegetitdone } from "../components/Youshareyourideawegetitdone";
import ios from "../assets/ios.svg";

export default function ServicesIos() {
  return (
    <>
      <div className="container">
        <HomeJumbotron
          taglinesLine="iOS app development"
          info="Explore new business destinations, accelerate growth, and captivate your customers with a custom iOS application"
          img={ios}
          talk={true}
        />
      </div>
      <div className="ios__mobile__page__section">
        <Youshareyourideawegetitdone />
        <Tangibleresultsrightonschedule />
        <WhychoosenativeiOSappdevelopment />
      </div>
    </>
  );
}
