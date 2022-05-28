import React from "react";
import { LightSpeed, Zoom } from "react-reveal";
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
              <Zoom>{subHeading}</Zoom>
            </div>
            <div className="feature__section__entry__content__jumbotron__heading">
              <LightSpeed>{heading}</LightSpeed>
            </div>
            <Link to={toPath ? toPath : "/"} className="button__reverse">
              <Zoom>{buttonLabel}</Zoom>
            </Link>
          </div>
          <div className="feature__section__entry__content__jumbotron__right">
            <Zoom>
              <img
                src={svg}
                alt={subHeading + heading}
                className="feature__section__entry__content__jumbotron__right__img"
              />
            </Zoom>
          </div>
        </div>
        <div className="feature__section__entry__content__feature__list">
          {features.map((feature) => (
            <div
              className="feature__section__entry__content__feature__list__entry"
              key={JSON.stringify(feature)}
            >
              <Zoom>
                <img
                  src={feature.svg}
                  alt="feature__svg"
                  className="feature__section__entry__content__feature__list__entry__img"
                />
              </Zoom>
              <span style={{ marginTop: 20 }}>
                <LightSpeed>{feature.title}</LightSpeed>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
