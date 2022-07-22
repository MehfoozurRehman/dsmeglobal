import React from 'react';
import {Zoom} from 'react-reveal';

export function ExperitseCard({label, info, svg}) {
  return (
    <Zoom In>
      <div className="container__web__dev__experties__content__entry">
        <div className="container__web__dev__experties__content__header">
          {svg}
          <div className="container__web__dev__experties__content__header__heading">
            {label}
          </div>
        </div>
        <div className="container__web__dev__experties__content__info">
          {info}
        </div>
      </div>
    </Zoom>
  );
}
