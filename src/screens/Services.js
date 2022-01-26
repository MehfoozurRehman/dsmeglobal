import React from "react";
import { Link } from "react-router-dom";
import mobileSvg from "../assets/mobileSvg.svg";
import webSvg from "../assets/webSvg.svg";
import securitySvg from "../assets/securitySvg.svg";
import startupSvg from "../assets/startupSvg.svg";
import ecommerceSvg from "../assets/ecommerceSvg.svg";
import graphicSvg from "../assets/graphicSvg.svg";
import animationSvg from "../assets/animationSvg.svg";
import uiSvg from "../assets/uiSvg.svg";
import seoSvg from "../assets/seoSvg.svg";
import itSvg from "../assets/itSvg.svg";

function ServicesCard({ heading, imgSrc, path }) {
  return (
    <Link
      to={path}
      className="services__main__container__content__wrapper__card"
    >
      <div className="services__main__container__content__wrapper__card__svg__container">
        <img
          src={imgSrc}
          alt="services__main__container__content__wrapper__card__svg"
          className="services__main__container__content__wrapper__card__svg"
        />
      </div>
      {heading}
    </Link>
  );
}

export default function Services() {
  return (
    <>
      <div className="services__main__container">
        <div className="services__main__container__content">
          <div className="services__main__container__content__heading">
            SERVICES
          </div>
          <div className="services__main__container__content__wrapper">
            <ServicesCard
              heading="Mobile App Development"
              imgSrc={mobileSvg}
              path=""
            />
            <ServicesCard
              heading="Security & 
            Surveillance Solutions"
              imgSrc={securitySvg}
              path=""
            />
            <ServicesCard
              heading="Web App
            Development"
              imgSrc={webSvg}
              path=""
            />
            <ServicesCard
              heading="Startup Services"
              imgSrc={startupSvg}
              path=""
            />
            <ServicesCard
              heading="Ecommerce Solutions"
              imgSrc={ecommerceSvg}
              path=""
            />
            <ServicesCard
              heading="Graphic Designing Services"
              imgSrc={graphicSvg}
              path=""
            />
            <ServicesCard
              heading="Animation Services"
              imgSrc={animationSvg}
              path=""
            />
            <ServicesCard heading="UI & UX Services" imgSrc={uiSvg} path="" />
            <ServicesCard
              heading="Search Engine Optimizations"
              imgSrc={seoSvg}
              path=""
            />
            <ServicesCard
              heading="IT Consulting & Outsourcing
            "
              imgSrc={itSvg}
              path=""
            />
          </div>
        </div>
      </div>
    </>
  );
}
