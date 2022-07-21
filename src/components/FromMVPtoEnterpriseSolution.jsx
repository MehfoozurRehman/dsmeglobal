import React from "react";
import { CheckCircle } from "react-feather";
import angular from "../assets/technologies/angular-icon-logo.webp";
import react from "../assets/technologies/react.webp";
import sql from "../assets/technologies/sql-server-logo.webp";
import nodejs from "../assets/technologies/node js.webp";
import mysql from "../assets/technologies/MySQL-Logo.wine.webp";
import xml from "../assets/technologies/Group 847.webp";
import typescript from "../assets/technologies/Image 5.webp";

export function FromMVPtoEnterpriseSolution() {
  return (
    <div className="container__web__dev__solution">
      <div className="container__web__dev__solution__left">
        <div className="container__web__dev__solution__left__heading">
          From MVP's to <span> Enterprise Solution</span>
        </div>
        <div className="container__web__dev__solution__left__info">
          For us an MVP is a solution with limited features that is detailed
          enough to get you an the most accurate market feedback yet economical
          enough to fit your pocket.
        </div>
        <div className="container__web__dev__solution__left__info">
          Everything we build meets and exceed industry standards
        </div>
        <div className="container__web__dev__solution__left__row">
          <img
            loading="lazy"
            src="https://www.codedistrict.com/assets/images/mvp-img-1.svg"
            alt="mvp"
            className="container__web__dev__solution__left__row__img"
          />
          <img
            loading="lazy"
            src={angular}
            alt="angular"
            className="container__web__dev__solution__left__row__img"
          />
          <img
            loading="lazy"
            src={react}
            alt="react"
            className="container__web__dev__solution__left__row__img"
          />
          <img
            loading="lazy"
            src={sql}
            alt="sql"
            className="container__web__dev__solution__left__row__img"
          />
          <img
            loading="lazy"
            src={nodejs}
            alt="nodejs"
            className="container__web__dev__solution__left__row__img"
          />
          <img
            loading="lazy"
            src={mysql}
            alt="mysql"
            className="container__web__dev__solution__left__row__img"
          />
          <img
            loading="lazy"
            src={xml}
            alt="xml"
            className="container__web__dev__solution__left__row__img"
          />
          <img
            loading="lazy"
            src={typescript}
            alt="typescript"
            className="container__web__dev__solution__left__row__img"
          />
        </div>
      </div>
      <div className="container__web__dev__solution__right">
        <div className="container__web__dev__solution__right__entry">
          <CheckCircle size={20} color="currentColor" />
          Fast & Responsive
        </div>
        <div className="container__web__dev__solution__right__entry">
          <CheckCircle size={20} color="currentColor" />
          Highly Scalable
        </div>
        <div className="container__web__dev__solution__right__entry">
          <CheckCircle size={20} color="currentColor" />
          Appealing UI
        </div>
        <div className="container__web__dev__solution__right__entry">
          <CheckCircle size={20} color="currentColor" />
          Secure Architecture
        </div>
        <div className="container__web__dev__solution__right__entry">
          <CheckCircle size={20} color="currentColor" />
          Cross-Platform Compatibility
        </div>
      </div>
    </div>
  );
}
