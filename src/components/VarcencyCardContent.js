import React from "react";
import { getText, parseDate } from "../utils/functions";

export default function VarcencyCardContent({ item, onApply }) {
  return (
    <div className="hot__offers__section__content__entry">
      <div className="hot__offers__section__content__entry__left">
        <div className="hot__offers__section__content__entry__left__heading">
          {item.position}
        </div>
        <div className="hot__offers__section__content__entry__left__date">
          {parseDate(item.updatedAt)}
        </div>
      </div>
      <div className="hot__offers__section__content__entry__middle">
        <div className="hot__offers__section__content__entry__middle__heading">
          Description
        </div>
        <div className="hot__offers__section__content__entry__middle__description">
          {item.description}
        </div>
        <div
          className="hot__offers__section__content__entry__middle__heading"
          style={{
            marginTop: ".5em",
          }}
        >
          Requirements
        </div>
        <div className="hot__offers__section__content__entry__middle__description">
          {getText(item.requirements)}
        </div>
      </div>
      <div className="hot__offers__section__content__entry__right">
        <button
          className="hot__offers__section__content__entry__right__apply"
          onClick={onApply}
        >
          Apply
        </button>
      </div>
    </div>
  );
}
