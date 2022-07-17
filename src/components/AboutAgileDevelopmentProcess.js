import React from "react";
import agileprocess from "../assets/agile__process__img.png";

export function AboutAgileDevelopmentProcess({}) {
  return (
    <div className="about__agile__process">
      <div className="about__agile__process__heading">
        Agile Development Process
      </div>
      <img
        className="about__agile__process__img"
        src={agileprocess}
        alt="agile process img"
      />
    </div>
  );
}
