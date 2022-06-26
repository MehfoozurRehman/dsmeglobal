import React, { useState } from "react";
import { HomeJumbotron } from "./HomeJumbotron";
import web from "../assets/web.svg";
import { Box, CheckCircle, User } from "react-feather";
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
          img={web}
          talk={true}
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
          <ExperitseCard
            svg={<Box size={30} color="currentColor" />}
            label="Massively Customized Web Apps"
            info="Tailor your web apps exactly the way your business works. Build one from scratch, migrate your legacy back-end or upgrade existing front-end functionality."
          />
          <ExperitseCard
            svg={<Box size={30} color="currentColor" />}
            label="Amazing UI/UX Design"
            info="We aGet the most appealing User Interface design for your web-app that provides an overwhelmingly refreshing and friendly experience for your customers."
          />
          <ExperitseCard
            svg={<Box size={30} color="currentColor" />}
            label="Build a Minimum Viable Product"
            info="We always consider the bigger picture while scoping the minimum requirements for your product and build prototypes blazingly fast to reduce your time to market."
          />
          <ExperitseCard
            svg={<Box size={30} color="currentColor" />}
            label="Rescue Missions"
            info="Left stranded with a bad product that doesn’t work? We can pick up the pieces and get you up and running in no time."
          />
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
            <ExperienceCard
              label="Large Scale Distributed Systems"
              info="Leverage our expertise to build highly customized and scalable projects to gain competitive edge."
            />
            <ExperienceCard
              label="Results Driven Business Apps"
              info="Develop intelligent data driven web apps that help you make more informed decisions."
            />
            <ExperienceCard
              label="Automating Existing Processes"
              info="We can also help you streamline & automate your internal operations with our discovery led approach."
            />
            <ExperienceCard
              label="E-commerce & Web Portals"
              info="From marketplaces (doctors, insurances etc) to online shopping, we have designed & developed several eCommerce portals."
            />
            <ExperienceCard
              label="Scalable SaaS Products"
              info="Doesn't matter if you are a startup, entrepreneur or an business, we can help you develop scalable SaaS products."
            />
            <ExperienceCard
              label="Branded Microsites"
              info="Develop and design custom microsites to introduce new products & services or capture leads to enhance marketing efforts."
            />
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
