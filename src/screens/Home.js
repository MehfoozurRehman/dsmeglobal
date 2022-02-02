import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import bulb from "../assets/bulb.mp4";
import cycle from "../assets/cycle.mp4";
import plane from "../assets/plane.mp4";
import cross from "../assets/cross.mp4";
import mobileApplicationSvg from "../assets/mobileApplicationSvg.svg";
import webApplicationSvg from "../assets/webApplicationSvg.svg";
import aidaPro from "../assets/projects/aidaPro.png";
import signature from "../assets/projects/signature.png";
import j7 from "../assets/projects/j7.png";
import boulevardCatering from "../assets/projects/boulevardCatering.png";
import chenabClub from "../assets/projects/chenabClub.png";
import peervestGlobal from "../assets/projects/peervestGlobal.png";
import rlbProfessional from "../assets/projects/rlbProfessional.png";
import aidaProImg from "../assets/aidaProImg.png";
import utilitySvg from "../assets/utilitySvg.svg";
import socialSvg from "../assets/socialSvg.svg";
import arSvg from "../assets/arSvg.svg";
import enterpriseSvg from "../assets/enterpriseSvg.svg";
import commerceSvg from "../assets/e-commerceSvg.svg";
import lifeSvg from "../assets/lifeSvg.svg";
import { Carousel } from "react-responsive-carousel";
import HomeSectionCarouselEntry from "../components/HomeSectionCarouselEntry";
import FeatureSectionCarouselEntry from "../components/FeatureSectionCarouselEntry";
import ContactSection from "../components/ContactSection";
import axios from "axios";
import WorkSection from "../components/WorkSection";
import IntoSection from "../components/IntoSection";

export default function Home({ setIsDark }) {
  useEffect(() => {
    setIsDark(false);
  }, []);

  const mobileApplicationFeatures = [
    {
      title: "Utility Apps",
      svg: utilitySvg,
    },
    {
      title: "Social Networking",
      svg: socialSvg,
    },
    {
      title: "AR Apps",
      svg: arSvg,
    },
    {
      title: "Enterprise Apps",
      svg: enterpriseSvg,
    },
    {
      title: "E-Commerce Apps",
      svg: commerceSvg,
    },
    {
      title: "LifeStyle",
      svg: lifeSvg,
    },
  ];
  return (
    <>
      <Carousel
        autoPlay={true}
        interval={4000}
        showArrows={false}
        showStatus={false}
        infiniteLoop={true}
      >
        <HomeSectionCarouselEntry
          videoSrc={plane}
          subHeading="WE FIND"
          heading="OUR UNIQUE WAY"
          buttonLabel="View Our Work"
          toPath="/portfolio"
        />
        <HomeSectionCarouselEntry
          videoSrc={cross}
          subHeading="WE THINK"
          heading="OUT OF THE BOX"
          isRight={true}
          buttonLabel="View Our Work"
          toPath="/portfolio"
        />
        <HomeSectionCarouselEntry
          videoSrc={plane}
          subHeading="WE PREFER"
          heading="You Over Anything"
          buttonLabel="View Our Work"
          toPath="/portfolio"
        />
      </Carousel>
      <IntoSection />
      <Carousel
        autoPlay={true}
        interval={3000}
        showArrows={false}
        showStatus={false}
        infiniteLoop={true}
        className="into__section"
      >
        <FeatureSectionCarouselEntry
          subHeading="MOBILE"
          heading="APPLICATIONS"
          buttonLabel="View Our Work"
          toPath="/portfolio"
          svg={mobileApplicationSvg}
          features={mobileApplicationFeatures}
        />
        <FeatureSectionCarouselEntry
          subHeading="WEB"
          heading="APPLICATIONS"
          buttonLabel="View Our Work"
          toPath="/portfolio"
          svg={webApplicationSvg}
          features={mobileApplicationFeatures}
        />
      </Carousel>
      <WorkSection />
      <ContactSection />
    </>
  );
}
