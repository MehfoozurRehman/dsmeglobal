import React from "react";
import { Zoom } from "react-reveal";
import agileprocess from "../assets/agile__process__img.webp";

export function AboutAgileDevelopmentProcess({}) {
  return (
    <div className="about__agile__process">
      <div className="about__agile__process__heading">
        Agile <span>Development</span> Process
      </div>
      <Zoom>
        <img
          loading="lazy"
          className="about__agile__process__img"
          src={agileprocess}
          alt="agile process img"
        />
      </Zoom>
    </div>
  );
}
