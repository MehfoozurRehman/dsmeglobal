import React from "react";

export default function PricingFeatureEntry({ title, content, icon }) {
  return (
    <div className="pricing__feature__entry">
      {icon ? (
        <div className="pricing__feature__entry__icon">{icon}</div>
      ) : null}
      <div className="pricing__feature__entry__heading">{title}</div>
      <div className="pricing__feature__entry__info">{content}</div>
    </div>
  );
}
