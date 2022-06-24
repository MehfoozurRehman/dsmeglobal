import React, { useState } from "react";
import { HomeJumbotron } from "./HomeJumbotron";
import bannerImage1 from "../assets/bannerImage1.svg";
import { CheckCircle, User } from "react-feather";
import { ExperienceCard } from "./ExperienceCard";
import { ExperitseCard } from "./ExperitseCard";
import WebdevArrEntry from "../components/WebdevArrEntry";

export default function ServicesWebDev() {
  const [selected, setSelected] = useState("AR VR");
  const array = [
    {
      label: "AR VR",
      svg: <User size={40} color="currentColor" />,
      info: "We study changes in consumer perspective to build a cost-effective, robust and game-changing AR/VR solutions for a variety of products and services.",
    },
    {
      label: "Blockchain",
      svg: <User size={40} color="currentColor" />,
      info: "We provide blockchain consulting services and customized solutions for businesses, startups and enterprises to transform the way they operate.",
    },
    {
      label: "Internet of things",
      svg: <User size={40} color="currentColor" />,
      info: "Our team of engineers can help you build fully customized products/apps with interconnectivity between all known tech and non-tech devices.      ",
    },
    {
      label: "Artificial intelligence",
      svg: <User size={40} color="currentColor" />,
      info: "Owing to the growing demand for intelligent applications, systems and products our engineers are experienced enough to construct robust artificial intelligent solutions.      ",
    },
    {
      label: "Machine learning",
      svg: <User size={40} color="currentColor" />,
      info: "Incorporate machine learning into your current or planned product development initiatives for better user experience, decision making and consumer retention and loyalty.      ",
    },
    {
      label: "Big data",
      svg: <User size={40} color="currentColor" />,
      info: "Make better and faster data driven decisions to help support your businesses with our capability of building products/applications that rely on big data analytics.      ",
    },
  ];
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
      <div className="container__emerging__technologies">
        <div className="container__emerging__technologies__heading__main">
          Emerging Technologies
        </div>
        <div className="container__emerging__technologies__text__main">
          We constantly push our limits and explore emerging technologies to
          build a solution that you help our clients stay ahead of the game.
        </div>
        <div className="container__emerging__technologies__section">
          {array.map((item) => (
            <WebdevArrEntry
              label={item.label}
              svg={item.svg}
              selected={selected}
              setSelected={setSelected}
            />
          ))}
        </div>
        {array
          .filter((item) => item.label === selected)
          .map((item) => (
            <div className="container__emerging__technologies__section__entry__data">
              <div className="container__emerging__technologies__section__entry__data___heading">
                {item.label}
              </div>
              <div className="container__emerging__technologies__section__entry__data__text">
                {item.info}
              </div>
            </div>
          ))}
      </div>
    </>
  );
}
