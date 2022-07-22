import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "react-feather";
import products from "../assets/products.svg";
import customizations from "../assets/customizations.svg";
import { Bounce } from "react-reveal";

export function PricingSection() {
  return (
    <div className="container__pricing">
      <div
        className="container__testimonials__overlay__heading"
        style={{ marginBottom: "1em", marginTop: "2em" }}
      >
        Engagement  Models
        <span>
          Depending on your project specifics and needs, you can choose method
          of your own choice.
        </span>
      </div>
      <div
        className="container__pricing__content"
        style={{ paddingTop: "0em" }}
      >
        <div className="container__pricing__content__left">
          <img loading="lazy" src={customizations} alt="customizations" />
          <Bounce left>
            <div className="container__pricing__content__left__heading">
              Build your dedicated teams
            </div>
            <div className="container__pricing__content__left__sub__heading">
              Get your projects fast-tracked with the best technical and
              management talent. Increase quality and efficiency, and retain
              complete control of teams.
            </div>
            <div className="container__pricing__content__left__info">
              High-performing, on-demand teams of engineers.
              <ul>
                <li>Augment your existing in-house / external team.</li>
                <li>Develop a product - working in a true agile fashion.</li>
                <li>Maintain & support your existing product.</li>
              </ul>
              Highly effective onboarding & execution process.
            </div>
            <Link
              to="/pricing-dedicated-teams"
              className="container__pricing__content__left__link"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              Build your team
              <ArrowRight size={20} strokeWidth={1.5} color="currentColor" />
            </Link>
          </Bounce>
        </div>
        <div className="container__pricing__content__right">
          <img loading="lazy" src={products} alt="products" />
          <Bounce right>
            <div className="container__pricing__content__right__heading">
              Fixed Price Project
            </div>
            <div className="container__pricing__content__right__sub__heading">
              Get a comprehensive product development experience from design to
              delivery with reduced development costs.
            </div>
            <div className="container__pricing__content__right__info">
              Our “Risk-buster” Approach to software development.
              <ul>
                <li>Assess specs to cover all the if's but's and what if's.</li>
                <li>
                  Visualize your end product without spending money on
                  development.
                </li>
              </ul>
              On-time. Within budget. As per expectations.
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
          </Bounce>
        </div>
      </div>
    </div>
  );
}
