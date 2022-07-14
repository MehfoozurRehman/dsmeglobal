import React from "react";

export function EngagementModelCard({ icon, label, info }) {
  return (
    <div className="services__startup__card engagement__models__card ">
      <div className="services__startup__card__icon">{icon}</div>
      <div className="services__startup__card__label">{label}</div>
      <div className="services__startup__card__info">{info}</div>
    </div>
  );
}
