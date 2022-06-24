import React from "react";

export function ExperitseCard({ label, info, svg }) {
  return (
    <div className="container__web__dev__experties__content__entry">
      <div className="container__web__dev__experties__content__header">
        {svg}
        <div className="container__web__dev__experties__content__header__heading">
          {label}
        </div>
      </div>
      <div className="container__web__dev__experties__content__info">
        {info}
      </div>
    </div>
  );
}
