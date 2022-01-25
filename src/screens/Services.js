import React from "react";
import { Link } from "react-router-dom";
import mobileSvg from "../assets/mobileSvg.svg";

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
              path="/"
            />
            <ServicesCard
              heading="Security & 
            Surveillance Solutions"
              imgSrc={mobileSvg}
              path="/"
            />
            <ServicesCard
              heading="Web App
            Development"
              imgSrc={mobileSvg}
              path="/"
            />
            <ServicesCard
              heading="Startup Services"
              imgSrc={mobileSvg}
              path="/"
            />
            <ServicesCard
              heading="Ecommerce Solutions"
              imgSrc={mobileSvg}
              path="/"
            />
            <ServicesCard
              heading="Graphic Designing Services"
              imgSrc={mobileSvg}
              path="/"
            />
            <ServicesCard
              heading="Animation Services"
              imgSrc={mobileSvg}
              path="/"
            />
            <ServicesCard
              heading="UI & UX Services"
              imgSrc={mobileSvg}
              path="/"
            />
            <ServicesCard
              heading="Search Engine Optimizations"
              imgSrc={mobileSvg}
              path="/"
            />
            <ServicesCard
              heading="IT Consulting & Outsourcing
            "
              imgSrc={mobileSvg}
              path="/"
            />
          </div>
        </div>
      </div>
      <div className="footer__conatiner">
        <div className="footer__conatiner__content"></div>
      </div>
    </>
  );
}
