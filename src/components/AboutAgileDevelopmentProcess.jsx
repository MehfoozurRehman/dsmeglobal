import React from "react";
import agileprocess from "../assets/agile__process__img.webp";

export function AboutAgileDevelopmentProcess({}) {
  return (
    <div className="about__agile__process">
      <div className="about__agile__process__heading">
        Agile Development Process
      </div>
      <img
        loading="lazy"
        className="about__agile__process__img"
        src={agileprocess}
        alt="agile process img"
      />
    </div>
  );
}
