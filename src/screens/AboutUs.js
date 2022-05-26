import React, { useEffect } from "react";
import missionSvg from "../assets/missionSvg.svg";
import visionSvg from "../assets/visionSvg.svg";
import aboutVideo from "../assets/about.mp4";
import HomeSectionCarouselEntry from "../components/HomeSectionCarouselEntry";

export default function AboutUs({ setIsDark }) {
  useEffect(() => {
    setIsDark(false);
  }, []);
  return (
    <>
      <div style={{ height: "100vh", overflow: "hidden" }}>
        <HomeSectionCarouselEntry videoSrc={aboutVideo} noBtn={true} />
      </div>
      <div className="our__mission__section__about__us">
        <div className="our__mission__section__about__us__content">
          <div className="our__mission__section__about__us__content__left">
            <div className="feature__section__entry__content__jumbotron__sub__heading">
              Our
            </div>
            <div className="feature__section__entry__content__jumbotron__heading">
              Mission
            </div>
            <div className="our__mission__section__about__us__content__left__para">
              DSME’s mission is to solve challenging technical problems in
              partnership with our clients. D.S.M.E Global Links cohorts with
              its customers to disentangle complex technology problems and help
              them acclimatize to a constantly evolving economic and
              technological backdrop. Specializing in mobile, web and other
              smart technologies.
            </div>
          </div>
          <img
            src={missionSvg}
            alt="missionSvg"
            className="our__mission__section__about__us__content__right__img"
          />
        </div>
      </div>
      <div className="our__vision__section__about__us">
        <div className="our__vision__section__about__us__content">
          <div className="our__vision__section__about__us__content__right">
            <img
              src={visionSvg}
              alt="visionSvg"
              className="our__vision__section__about__us__content__right__img"
            />
          </div>
          <div className="our__vision__section__about__us__content__left">
            <div
              style={{ color: "#FBFBFB" }}
              className="feature__section__entry__content__jumbotron__sub__heading"
            >
              Our
            </div>
            <div className="feature__section__entry__content__jumbotron__heading">
              VISION
            </div>
            <div className="our__vision__section__about__us__content__left__para">
              Our vision is to help businesses and people create a better
              community and social living using technology-enabled solutions. We
              spend our efforts in making the finest educational, commercial
              business software, mobile applications, and next-gen tech-enabled
              solutions to help and improve businesses and lifestyles of the
              community.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
