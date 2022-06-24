import React from "react";
import { ExternalLink, Link, Link2 } from "react-feather";

export default function EcomereceProjectsCard({ image }) {
  return (
    <div className="ecommerce__screen__container__recent__work__content___row__entry">
      <img
        src={image}
        alt={image}
        className="ecommerce__screen__container__recent__work__content___row__entry__img"
      />
      <a
        href="#"
        className="ecommerce__screen__container__recent__work__content___row__entry__overlay"
      >
        <div className="ecommerce__screen__container__recent__work__content___row__entry__overlay__header">
          <div className="ecommerce__screen__container__recent__work__content___row__entry__overlay__header__left">
            Skordo
          </div>
          <div className="ecommerce__screen__container__recent__work__content___row__entry__overlay__header__right">
            <ExternalLink size={20} color="currentcolor" />
          </div>
        </div>
        <div className="ecommerce__screen__container__recent__work__content___row__entry__overlay__info">
          Toys and crafts
        </div>
      </a>
    </div>
  );
}
