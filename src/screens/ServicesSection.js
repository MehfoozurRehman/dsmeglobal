import React from "react";
import { Fade } from "react-reveal";
import { ServicesCard } from "./ServicesCard";
import Services from "../screens/Services";

export function ServicesSection() {
  return (
    <>
      <div className="container__services">
        <div className="container__services__left">
          <div className="container__services__left__heading">
            <Fade>How can we help your buisness ?</Fade>
          </div>
          <div className="container__services__left__info">
            <Fade>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus
              sed sequi tempore minus, eum laborum voluptatibus non, est
              veritatis,
            </Fade>
          </div>
        </div>
        <div className="container__services__right">
          <ServicesCard />
          <ServicesCard />
          <ServicesCard />
          <ServicesCard />
        </div>
      </div>
      <Services />
    </>
  );
}
