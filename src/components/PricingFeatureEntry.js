import React from "react";

export default function PricingFeatureEntry({ title, content }) {
  return (
    <div className="pricing__feature__entry">
      <div className="pricing__feature__entry__heading">{title}</div>
      <div className="pricing__feature__entry__info">{content}</div>
    </div>
  );
}
