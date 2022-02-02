import React from "react";
import { Link } from "react-router-dom";
import plane from "../assets/plane.mp4";

export default function HomeSectionCarouselEntry({
  subHeading,
  heading,
  buttonLabel,
  toPath,
  isRight,
  noBtn,
}) {
  return (
    <div className="home__section__carousel__entry">
      <video src={plane} autoPlay={"autoplay"} muted={true} loop={true} />
      <div className="home__section__carousel__entry__overlay">
        <div
          className={
            isRight
              ? "home__section__carousel__entry__overlay__content home__section__carousel__entry__overlay__content__right"
              : "home__section__carousel__entry__overlay__content"
          }
        >
          <div className="home__section__carousel__entry__overlay__content__sub__heading">
            {subHeading}
          </div>
          <div className="home__section__carousel__entry__overlay__content__heading">
            {heading}
          </div>
          {noBtn ? null : (
            <Link to={toPath ? toPath : "/"} className="button">
              {buttonLabel}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
