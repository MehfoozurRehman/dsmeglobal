import React from 'react';
import {Bounce} from 'react-reveal';

export function PricingFeatureEntry({title, content, icon}) {
  return (
    <Bounce right>
      <div className="pricing__feature__entry">
        {icon ? (
          <div className="pricing__feature__entry__icon">{icon}</div>
        ) : null}
        <div className="pricing__feature__entry__heading">{title}</div>
        <div className="pricing__feature__entry__info">{content}</div>
      </div>
    </Bounce>
  );
}
