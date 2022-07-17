import React from "react";
import agilefirst from "../assets/agileFirst.svg";

export function MeetUsSmallThingsBigDifferences() {
  return (
    <div className="meetus__container__smallThings">
      <div className="meetus__container__smallThings__content">
        <div className="meetus__container__smallThings__heading">
          Small things. <span>Big difference</span>
        </div>
        <div className="meetus__container__smallThings__content__container">
          <div className="meetus__container__smallThings__left">
            <div className="meetus__container__smallThings__left__heading">
              <span>Agile </span> first
            </div>
            <div className="meetus__container__smallThings__left__para">
              For some people, Agile is dull. For us, it is the way to adapt,
              deliver and grow.
            </div>
          </div>
          <div className="meetus__container__smallThings__right">
            <div className="meetus__container__smallThings__right__image">
              <img src={agilefirst} alt="Agile first" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
