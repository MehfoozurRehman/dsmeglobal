import React from "react";
import { Box } from "react-feather";

export default function EcommerceWorkCodeCard({ svg, label, info }) {
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
