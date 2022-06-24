import React from "react";

export function ExperienceCard({ label, info }) {
  return (
    <div className="container__web__dev__experience__content__entry">
      <div className="container__web__dev__experience__content__entry__heading">
        {label}
      </div>
      <div className="container__web__dev__experience__content__entry__info">
        {info}
      </div>
    </div>
  );
}
