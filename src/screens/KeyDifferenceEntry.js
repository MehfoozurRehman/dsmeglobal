import React from "react";

export function KeyDifferenceEntry({ svg, label, info }) {
  return (
    <div className="about__key__difference__content__col__entry">
      <div className="about__key__difference__content__col__entry__header">
        <div className="about__key__difference__content__col__entry__header__icon">
          {svg}
        </div>
        <div className="about__key__difference__content__col__entry__header__heading">
          {label}
        </div>
      </div>
      {info ? (
        <div className="about__key__difference__content__col__entry__info">
          {info}
        </div>
      ) : null}
    </div>
  );
}
