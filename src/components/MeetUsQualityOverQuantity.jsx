import React from "react";
import qualityOver from "../assets/qualityOver.svg";
import continuousChange from "../assets/continuousChange.svg";
import fouceOn from "../assets/fouceOn.svg";

export function MeetUsQualityOverQuantity() {
  return (
    <div className="meetus__containerOf__sub">
      <div className="meetus__container__sub">
        <div className="meetus__container__sub__content">
          <div className="meetus__container__sub__left">
            <div className="meetus__container__sub__left__image">
              <img
                loading="lazy"
                src={qualityOver}
                alt="Quality over quantity"
              />
            </div>
          </div>
          <div className="meetus__container__sub__right">
            <div className="meetus__container__sub__right__heading">
              <span>Quality </span> over quantity
            </div>
            <div className="meetus__container__sub__right__para">
              When it comes to our job, it's quality that matters. UX research,
              code reviews, manual and automatic tests. No exceptions.
            </div>
          </div>
        </div>
      </div>
      <div className="meetus__container__sub">
        <div
          className="meetus__container__sub__content"
          id="meetus__container__sub__content2"
        >
          <div className="meetus__container__sub__left">
            <div className="meetus__container__sub__right__heading">
              Continuous <span>change</span>
            </div>
            <div className="meetus__container__sub__right__para">
              Change is the only constant. We believe in that. Technology
              switch? Sure thing! New frameworks and tools? More than welcome.
            </div>
          </div>
          <div className="meetus__container__sub__right">
            <div className="meetus__container__sub__left__image">
              <img
                loading="lazy"
                src={continuousChange}
                alt="Continuous change"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="meetus__container__sub">
        <div className="meetus__container__sub__content">
          <div className="meetus__container__sub__left">
            <div className="meetus__container__sub__left__image">
              <img loading="lazy" src={fouceOn} alt="Fouce on people" />
            </div>
          </div>
          <div className="meetus__container__sub__right">
            <div className="meetus__container__sub__right__heading">
              Focus on <span>people</span>
            </div>
            <div className="meetus__container__sub__right__para">
              “People matter”. Such a cliché, right? But at DSME Global Links,
              they really do. Family atmosphere and tons of laughs guaranteed.
              See for yourself.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
