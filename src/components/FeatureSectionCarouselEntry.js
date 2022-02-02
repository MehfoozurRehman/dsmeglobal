import React from "react";
import { Link } from "react-router-dom";

export default function FeatureSectionCarouselEntry({
  subHeading,
  heading,
  buttonLabel,
  toPath,
  svg,
  features,
}) {
  return (
    <div className="feature__section__entry">
      <div className="feature__section__entry__content">
        <div className="feature__section__entry__content__jumbotron">
          <div className="feature__section__entry__content__jumbotron__left">
            <div className="feature__section__entry__content__jumbotron__sub__heading">
              {subHeading}
            </div>
            <div className="feature__section__entry__content__jumbotron__heading">
              {heading}
            </div>
            <Link to={toPath ? toPath : "/"} className="button__reverse">
              {buttonLabel}
            </Link>
          </div>
          <div className="feature__section__entry__content__jumbotron__right">
            <img
              src={svg}
              alt={subHeading + heading}
              className="feature__section__entry__content__jumbotron__right__img"
            />
          </div>
        </div>
        <div className="feature__section__entry__content__feature__list">
          {features.map((feature) => (
            <div className="feature__section__entry__content__feature__list__entry">
              <img
                src={feature.svg}
                alt="feature__svg"
                className="feature__section__entry__content__feature__list__entry__img"
              />
              <span>{feature.title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
