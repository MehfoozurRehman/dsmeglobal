import React from 'react';
import agilefirst from '../assets/agileFirst.svg';
import {Bounce, Zoom} from 'react-reveal';

export function MeetUsSmallThingsBigDifferences() {
  return (
    <div className="meetus__container__smallThings">
      <div className="meetus__container__smallThings__content">
        <Zoom In>
          <div className="meetus__container__smallThings__heading">
            Small things. <span>Big difference</span>
          </div>
        </Zoom>
        <div className="meetus__container__smallThings__content__container">
          <Bounce left>
            <div className="meetus__container__smallThings__left">
              <div className="meetus__container__smallThings__left__heading">
                <span>Agile </span> first
              </div>
              <div className="meetus__container__smallThings__left__para">
                For some people, Agile is dull. For us, it is the way to adapt,
                deliver and grow.
              </div>
            </div>
          </Bounce>
          <div className="meetus__container__smallThings__right">
            <Bounce right>
              <div className="meetus__container__smallThings__right__image">
                <img loading="lazy" src={agilefirst} alt="Agile first" />
              </div>
            </Bounce>
          </div>
        </div>
      </div>
    </div>
  );
}
