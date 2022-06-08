import React from "react";
import { Fade, Zoom } from "react-reveal";
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
              <Fade>{subHeading}</Fade>
            </div>
            <div className="feature__section__entry__content__jumbotron__heading">
              <Fade>{heading}</Fade>
            </div>
            <Link to={toPath ? toPath : "/"} className="button__reverse">
              <Fade>{buttonLabel}</Fade>
            </Link>
          </div>
          <div className="feature__section__entry__content__jumbotron__right">
            <Fade>
              <img
                src={svg}
                alt={subHeading + heading}
                className="feature__section__entry__content__jumbotron__right__img"
              />
            </Fade>
          </div>
        </div>
        <div className="feature__section__entry__content__feature__list">
          {features.map((feature) => (
            <div
              className="feature__section__entry__content__feature__list__entry"
              key={JSON.stringify(feature)}
            >
              <Fade>
                <img
                  src={feature.svg}
                  alt="feature__svg"
                  className="feature__section__entry__content__feature__list__entry__img"
                />
              </Fade>
              <span style={{ marginTop: 20 }}>
                <Fade>{feature.title}</Fade>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
