import React from "react";
import { Bounce, Zoom } from "react-reveal";
import visionSvg from "../assets/visionSvg.svg";

export function AboutOurVision({}) {
  return (
    <div
      className="our__vision__section__about__us"
      style={{
        overflow: "hidden",
      }}
    >
      <div className="our__vision__section__about__us__content">
        <div className="our__vision__section__about__us__content__right">
          <Zoom>
            <img
              loading="lazy"
              src={visionSvg}
              alt="visionSvg"
              className="our__vision__section__about__us__content__right__img"
            />
          </Zoom>
        </div>
        <div className="our__vision__section__about__us__content__left">
          <Bounce right>
            <div className="feature__section__entry__content__jumbotron__sub__heading">
              Our Vision
            </div>
            <div className="our__vision__section__about__us__content__left__para">
              Our vision is to help businesses and people create a better
              community and social living using technology-enabled solutions. We
              spend our efforts in making the finest educational, commercial
              business software, mobile applications, and next-gen tech-enabled
              solutions to help and improve businesses and lifestyles of the
              community.
            </div>
          </Bounce>
        </div>
      </div>
    </div>
  );
}
