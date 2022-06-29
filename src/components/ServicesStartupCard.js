import React from "react";

function ServicesStartupCard({ svg, label, info }) {
  return (
    <div className="services__startup__card">
      {svg ? <div className="services__startup__card__icon">{svg}</div> : null}
      <div className="services__startup__card__label">{label}</div>
      {info ? (
        <div className="services__startup__card__info">{info}</div>
      ) : null}
    </div>
  );
}

export default ServicesStartupCard;
