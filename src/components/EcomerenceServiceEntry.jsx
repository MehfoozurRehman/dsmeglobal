import React from "react";

export default function EcomerenceServiceEntry({ svg, label, info }) {
  return (
    <div className="ecommerce__screen__container__services__content__entry">
      {svg}
      <div className="ecommerce__screen__container__services__content__entry__heading">
        {label}
      </div>
      <div className="ecommerce__screen__container__services__content__entry__info">
        {info}
      </div>
    </div>
  );
}
