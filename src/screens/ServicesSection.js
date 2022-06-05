import React from "react";
import { ServicesCard } from "./ServicesCard";

export function ServicesSection({}) {
  return (
    <div className="container__services">
      <div className="container__services__left">
        <div className="container__services__left__heading">
          How can we help your buisness ?
        </div>
        <div className="container__services__left__info">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus sed
          sequi tempore minus, eum laborum voluptatibus non, est veritatis,
        </div>
        <div className="container__jumbotron__left__button">
          <button
            onClick={() => {}}
            className="container__jumbotron__left__button__secondary"
          >
            Learn more
          </button>
        </div>
      </div>
      <div className="container__services__right">
        <ServicesCard />
        <ServicesCard />
        <ServicesCard />
        <ServicesCard />
      </div>
    </div>
  );
}
