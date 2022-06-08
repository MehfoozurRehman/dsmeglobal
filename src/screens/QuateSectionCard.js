import React from "react";
import { Box } from "react-feather";

export function QuateSectionCard({ title, info }) {
  return (
    <div className="container__stats__right__card">
      <div className="container__stats__right__card__icon">
        <Box size={20} color="currentColor" />
      </div>
      <div className="container__stats__right__card__heading">{title}</div>
      <div className="container__stats__right__card__info">{info}</div>
    </div>
  );
}
