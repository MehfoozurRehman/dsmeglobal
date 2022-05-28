import React from "react";
import { Fade, Zoom } from "react-reveal";

export default function PricingFeatureEntry({ title, content }) {
  return (
    <Zoom>
      <div className="pricing__feature__entry">
        <div className="pricing__feature__entry__heading">{title}</div>
        <div className="pricing__feature__entry__info">{content}</div>
      </div>
    </Zoom>
  );
}
