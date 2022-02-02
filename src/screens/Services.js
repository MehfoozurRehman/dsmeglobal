import React, { useEffect } from "react";
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

export default function Services({ setIsDark }) {
  useEffect(() => {
    setIsDark(true);
  }, []);
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
              path="/service-details"
            />
            <ServicesCard
              heading="Security & Surveillance Solutions"
              imgSrc={securitySvg}
              path="/service-details"
            />
            <ServicesCard
              heading="Web App Development"
              imgSrc={webSvg}
              path="/service-details"
            />
            <ServicesCard
              heading="Startup Services"
              imgSrc={startupSvg}
              path="/service-details"
            />
            <ServicesCard
              heading="Ecommerce Solutions"
              imgSrc={ecommerceSvg}
              path="/service-details"
            />
            <ServicesCard
              heading="Graphic Designing Services"
              imgSrc={graphicSvg}
              path="/service-details"
            />
            <ServicesCard
              heading="Animation Services"
              imgSrc={animationSvg}
              path="/service-details"
            />
            <ServicesCard
              heading="UI & UX Services"
              imgSrc={uiSvg}
              path="/service-details"
            />
            <ServicesCard
              heading="Search Engine Optimizations"
              imgSrc={seoSvg}
              path="/service-details"
            />
            <ServicesCard
              heading="IT Consulting & Outsourcing"
              imgSrc={itSvg}
              path="/service-details"
            />
          </div>
        </div>
      </div>
    </>
  );
}
