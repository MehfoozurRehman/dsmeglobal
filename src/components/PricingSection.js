import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "react-feather";
import products from "../assets/products.svg";
import customizations from "../assets/customizations.svg";

export function PricingSection() {
  return (
    <div className="container__pricing">
      <div className="container__pricing__content">
        <div className="container__pricing__content__left">
          <img src={customizations} alt="customizations" />
          <div className="container__pricing__content__left__heading">
            Build your dedicated teams
          </div>
          <div className="container__pricing__content__left__sub__heading">
            Our teams at your services
          </div>
          <div className="container__pricing__content__left__info">
            Get your projects fast-tracked with best technical and management
            talent. Increase quality and efficiency, and retain complete control
            of teams
          </div>
          <Link
            to="/pricing-dedicated-teams"
            className="container__pricing__content__left__link"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            Build your team{" "}
            <ArrowRight size={20} strokeWidth={1.5} color="currentColor" />
          </Link>
        </div>
        <div className="container__pricing__content__right">
          <img src={products} alt="products" />
          <div className="container__pricing__content__right__heading">
            Fixed Price Project
          </div>
          <div className="container__pricing__content__right__sub__heading">
            We design and develop your vision
          </div>
          <div className="container__pricing__content__right__info">
            Get a comprehensive product development experience from design to
            delivery with reduced development costs.
          </div>
          <Link
            to="/pricing"
            className="container__pricing__content__right__link"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            DEVELOP YOUR PRODUCT{" "}
            <ArrowRight size={20} strokeWidth={1.5} color="currentColor" />
          </Link>
        </div>
      </div>
    </div>
  );
}
