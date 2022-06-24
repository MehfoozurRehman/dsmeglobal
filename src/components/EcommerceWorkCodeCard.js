import React from "react";
import { Box } from "react-feather";

export default function EcommerceWorkCodeCard({ label, info }) {
  return (
    <div className="ecommerce__screen__container__services__content__entry">
      <Box size={20} color="currentColor" strokeWidth={1.5} />
      <div className="ecommerce__screen__container__services__content__entry__heading">
        {label}
      </div>
      <div className="ecommerce__screen__container__services__content__entry__info">
        {info}
      </div>
    </div>
  );
}
