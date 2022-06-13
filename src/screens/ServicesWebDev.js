import React, { useEffect, useState } from "react";
import { fetcher } from "../utils/functions";
import useSWR from "swr";
import { HomeJumbotron } from "./HomeJumbotron";
import bannerImage1 from "../assets/bannerImage1.svg";
import { Box, CheckCircle } from "react-feather";
import { ExperienceCard } from "./ExperienceCard";
import { ExperitseCard } from "./ExperitseCard";

export default function ServicesWebDev() {
  const { data, error } = useSWR(
    `${process.env.REACT_APP_API_URL}api/v1/get_service`,
    fetcher,
    { suspense: true }
  );
  return (
    <>
      <div className="container">
        <HomeJumbotron
          taglinesLine="Web Application Development"
          info="Web applications that are visually amazing and provide seamless user experience for the desktop, mobile and tablet."
          img={bannerImage1}
        />
      </div>

      <div className="container__web__dev__experties">
        <div className="container__web__dev__experties__header">
          <div className="container__web__dev__experties__header__heading">
            Our Expertise
          </div>
          <div className="container__web__dev__experties__header__info">
            Custom built web applications with amazing user experiences & latest
            web technologies that help support your business goals.
          </div>
        </div>
        <div className="container__web__dev__experties__content">
          <ExperitseCard />
          <ExperitseCard />
          <ExperitseCard />
          <ExperitseCard />
        </div>
      </div>
      <div className="container__web__dev__experience__wrapper">
        <div className="container__web__dev__experience">
          <div className="container__web__dev__experience__header">
            <div className="container__web__dev__experience__header__heading">
              Experience In Developing Diverse Solutions.
            </div>
            <div className="container__web__dev__experience__header__info">
              Custom solutions are lean, designed as per your brand guidelines
              and tailor made to address the business goals.
            </div>
          </div>
          <div className="container__web__dev__experience__content">
            <ExperienceCard />
            <ExperienceCard />
            <ExperienceCard />
            <ExperienceCard />
            <ExperienceCard />
            <ExperienceCard />
          </div>
        </div>
      </div>
      <div className="container__web__dev__solution">
        <div className="container__web__dev__solution__left">
          <div className="container__web__dev__solution__left__heading">
            From MVP's to Enterprise Solution
          </div>
          <div className="container__web__dev__solution__left__info">
            For us an MVP is a solution with limited features that is detailed
            enough to get you an the most accurate market feedback yet
            economical enough to fit your pocket.
          </div>
          <div className="container__web__dev__solution__left__info">
            Everything we build meets and exceed industry standards
          </div>
          <div className="container__web__dev__solution__left__row">
            <img
              src="https://www.codedistrict.com/assets/images/mvp-img-1.svg"
              alt=""
              className="container__web__dev__solution__left__row__img"
            />
            <img
              src="https://www.codedistrict.com/assets/images/mvp-image-2.svg"
              alt=""
              className="container__web__dev__solution__left__row__img"
            />
            <img
              src="https://www.codedistrict.com/assets/images/mvp-image-3.svg"
              alt=""
              className="container__web__dev__solution__left__row__img"
            />
            <img
              src="https://www.codedistrict.com/assets/images/mvp-image-4.svg"
              alt=""
              className="container__web__dev__solution__left__row__img"
            />
            <img
              src="https://www.codedistrict.com/assets/images/mvp-image-5.svg"
              alt=""
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
            Fast & Responsive
          </div>
          <div className="container__web__dev__solution__right__entry">
            <CheckCircle size={20} color="currentColor" />
            Fast & Responsive
          </div>
          <div className="container__web__dev__solution__right__entry">
            <CheckCircle size={20} color="currentColor" />
            Fast & Responsive
          </div>
          <div className="container__web__dev__solution__right__entry">
            <CheckCircle size={20} color="currentColor" />
            Fast & Responsive
          </div>
          <div className="container__web__dev__solution__right__entry">
            <CheckCircle size={20} color="currentColor" />
            Fast & Responsive
          </div>
        </div>
      </div>
    </>
  );
}
