import React from "react";

export function ServicesFeatureListItem({ label, info }) {
  return (
    <div className="container__feature__col__entry">
      <div className="container__feature__col__entry__heading">{label}</div>
      <div className="container__feature__col__entry__info">{info}</div>
    </div>
  );
}
