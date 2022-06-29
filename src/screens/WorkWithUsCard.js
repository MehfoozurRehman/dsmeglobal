import React from "react";

export function WorkWithUsCard({ label, info }) {
  return (
    <div className="services__startup__card why__work__with__us__card">
      <div className="services__startup__card__label">{label}</div>
      <div className="services__startup__card__info why__work__with__us__card__info">
        {info}
      </div>
    </div>
  );
}
