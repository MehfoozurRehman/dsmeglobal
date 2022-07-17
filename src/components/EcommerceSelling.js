import React from "react";

export function EcommerceSelling({}) {
  return (
    <div className="ecommerce__screen__container__selling">
      <div className="ecommerce__screen__container__selling__heading">
        We can help you across multiple stages
      </div>
      <div className="ecommerce__screen__container__selling__content">
        <div className="ecommerce__screen__container__selling__content__left">
          <img
            src="https://www.codedistrict.com/assets/images/shopify-multi-stage.jpg"
            alt="ecommerce__screen__container__selling__content__left"
            className="ecommerce__screen__container__selling__content__left__img"
          />
        </div>
        <div className="ecommerce__screen__container__selling__content__right">
          <div className="ecommerce__screen__container__selling__content__right__entry">
            You’re just entering into e-commerce, and need a new platform for
            your online stores.
          </div>
          <div className="ecommerce__screen__container__selling__content__right__entry">
            You’re already familiar with e-commerce and want to upgrade to a
            more effective website.
          </div>
          <div className="ecommerce__screen__container__selling__content__right__entry">
            You’re looking to migrate to Shopify and leverage their ecosystem.
          </div>
        </div>
      </div>
    </div>
  );
}
