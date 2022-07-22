import React from "react";
import { Bounce } from "react-reveal";

export function PromiseEntry({ svg, label, info }) {
  return (
    <div className="about__core__values__content__entry about__promise__content__entry">
      <Bounce>
        <div className="about__core__values__content__entry__icon">{svg}</div>
        <div className="about__core__values__content__entry__heading">
          {label}
        </div>
        <div className="about__core__values__content__entry__info">{info}</div>
      </Bounce>
    </div>
  );
}
