import React from "react";
import { Fade } from "react-reveal";

export default function PricingFeatureEntry({ title, content }) {
  return (
    <Fade>
      <div className="pricing__feature__entry">
        <div className="pricing__feature__entry__heading">{title}</div>
        <div className="pricing__feature__entry__info">{content}</div>
      </div>
    </Fade>
  );
}
