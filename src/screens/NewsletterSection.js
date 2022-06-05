import React from "react";

export function NewsletterSection({}) {
  return (
    <div className="container__newsletter">
      <div className="container__newsletter__left">
        <div className="container__newsletter__left__heading">Newsletter</div>
        <div className="container__newsletter__left__info">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, ipsam.
        </div>
      </div>
      <div className="container__newsletter__right__form">
        <input
          type="text"
          placeholder="Please enter your email"
          className="container__newsletter__right__form__input"
        />
        <button className="container__newsletter__right__form__button">
          Subscribe
        </button>
      </div>
    </div>
  );
}
