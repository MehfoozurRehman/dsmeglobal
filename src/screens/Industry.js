import React from "react";
import { HomeJumbotron } from "../components/HomeJumbotron";
import { IndustryFeatrues } from "../components/IndustryFeatrues";
import industries from "../assets/industry.png";

export default function Industry() {
  return (
    <>
      <div className="container">
        <HomeJumbotron
          taglinesLine="From startup to enterprise, the full range of engineering services your company needs"
          info="Choose a software development partner that knows the realities of your business. We foster innovation across various industries, from healthcare, retail, insurance, e-commerce, recruitment, food, real estate, and travel to entertainment."
          img={industries}
          talk={true}
        />
      </div>
      <IndustryFeatrues />
    </>
  );
}
