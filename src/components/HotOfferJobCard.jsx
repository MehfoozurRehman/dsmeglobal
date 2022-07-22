import React from 'react';
import {Bounce, Zoom} from 'react-reveal';
import {getText} from '../utils/functions';

export default function HotOfferJobCard({item, onApply}) {
  return (
    <Zoom right>
      <button className="hot__offers__section__content__card" onClick={onApply}>
        <div className="hot__offers__section__content__card__title">
          {item.position}
        </div>
        <div className="hot__offers__section__content__card__info">
          <div className="hot__offers__section__content__card__info__heading">
            Description
          </div>
          <div className="hot__offers__section__content__card__info__content">
            {item.description.substring('', 100)}
          </div>
          <div className="hot__offers__section__content__card__info__heading">
            Requirements
          </div>
          <div className="hot__offers__section__content__card__info__content">
            {getText(item.requirements).substring('', 200)}
          </div>
        </div>
      </button>
    </Zoom>
  );
}
