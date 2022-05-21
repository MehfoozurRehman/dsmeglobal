import React from "react";
import { getText } from "../utils/functions";

export default function HotOfferJobCard({ item, onApply }) {
  return (
    <button className="hot__offers__section__content__card" onClick={onApply}>
      <div className="hot__offers__section__content__card__title">
        {item.position}
      </div>
      <div className="hot__offers__section__content__card__info">
        <div className="hot__offers__section__content__card__info__heading">
          Description
        </div>
        <div className="hot__offers__section__content__card__info__content">
          {item.description.substring("", 100)}
        </div>
        <div className="hot__offers__section__content__card__info__heading">
          Requirements
        </div>
        <div className="hot__offers__section__content__card__info__content">
          {getText(item.requirements).substring("", 200)}
        </div>
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="feather feather-arrow-right"
      >
        <line x1="5" y1="12" x2="19" y2="12"></line>
        <polyline points="12 5 19 12 12 19"></polyline>
      </svg>
    </button>
  );
}
