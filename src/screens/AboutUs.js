import React from "react";
import missionSvg from "../assets/missionSvg.svg";
import visionSvg from "../assets/visionSvg.svg";
import { Fade } from "react-reveal";
import { HomeJumbotron } from "./HomeJumbotron";
import bannerImage1 from "../assets/bannerImage1.svg";

export default function AboutUs() {
  return (
    <>
      <div className="container">
        <HomeJumbotron
          taglinesLine="Quality"
          taglines={["services", "products", "customizations"]}
          matcherLine="you really"
          matchers={["want", "need", "deserve"]}
          info="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore,
            culpa est? Quos iusto dolore culpa, veritatis quas minus quibusdam
            ad? Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Dolore, culpa est? Quos iusto dolore culpa, veritatis quas minus
            quibusdam ad?"
          img={bannerImage1}
        />
      </div>
      <div
        className="our__mission__section__about__us"
        style={{ overflow: "hidden" }}
      >
        <div className="our__mission__section__about__us__content">
          <div className="our__mission__section__about__us__content__left">
            <div className="feature__section__entry__content__jumbotron__sub__heading">
              <Fade>Our Mission</Fade>
            </div>
            <div className="our__mission__section__about__us__content__left__para">
              <Fade>
                DSME’s mission is to solve challenging technical problems in
                partnership with our clients. D.S.M.E Global Links cohorts with
                its customers to disentangle complex technology problems and
                help them acclimatize to a constantly evolving economic and
                technological backdrop. Specializing in mobile, web and other
                smart technologies.
              </Fade>
            </div>
          </div>
          <Fade>
            <img
              src={missionSvg}
              alt="missionSvg"
              className="our__mission__section__about__us__content__right__img"
            />
          </Fade>
        </div>
      </div>
      <div
        className="our__vision__section__about__us"
        style={{ overflow: "hidden" }}
      >
        <div className="our__vision__section__about__us__content">
          <div className="our__vision__section__about__us__content__right">
            <Fade>
              <img
                src={visionSvg}
                alt="visionSvg"
                className="our__vision__section__about__us__content__right__img"
              />
            </Fade>
          </div>
          <div className="our__vision__section__about__us__content__left">
            <div className="feature__section__entry__content__jumbotron__sub__heading">
              <Fade>Our Vision</Fade>
            </div>
            <div className="our__vision__section__about__us__content__left__para">
              <Fade>
                Our vision is to help businesses and people create a better
                community and social living using technology-enabled solutions.
                We spend our efforts in making the finest educational,
                commercial business software, mobile applications, and next-gen
                tech-enabled solutions to help and improve businesses and
                lifestyles of the community.
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
