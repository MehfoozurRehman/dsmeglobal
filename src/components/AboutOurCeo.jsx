import React from "react";
import ceo from "../assets/ceo.webp";

export function AboutOurCeo({}) {
  return (
    <div className="about__ceo__message">
      <div className="about__ceo__message__left">
        <img
          loading="lazy"
          src={ceo}
          alt="ceo"
          className="about__ceo__message__left__img"
        />
      </div>
      <div className="about__ceo__message__right">
        <div className="about__ceo__message__right__heading">
          Message from our <span>ceo</span>
        </div>
        <div className="about__ceo__message__right__info">
          <b>We believe in what we do and that drives us to excel</b>
          <br />
          “We enable a smooth and reliable digital transformation by providing
          comprehensive services that embed technology into business.”
        </div>
      </div>
    </div>
  );
}
