import React, { useEffect } from "react";
import plane from "../assets/plane.mov";
import cross from "../assets/cross.mp4";
import mobile from "../assets/mobile.mp4";
import mobileApplicationSvg from "../assets/mobileApplicationSvg.svg";
import webApplicationSvg from "../assets/webApplicationSvg.svg";
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
import WorkSection from "../components/WorkSection";
import IntoSection from "../components/IntoSection";
import BlogSection from "../components/BlogSection";

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
  const HomeSectionCarouselEntryArray = [
    {
      videoSrc: plane,
      subHeading: "WE FIND",
      heading: "OUR UNIQUE WAY",
      buttonLabel: "View Our Work",
      toPath: "/portfolio",
    },
    {
      videoSrc: cross,
      subHeading: "WE THINK",
      heading: "OUT OF THE BOX",
      isRight: true,
      buttonLabel: "View Our Work",
      toPath: "/portfolio",
    },
    {
      videoSrc: mobile,
      subHeading: "WE PREFER",
      heading: "You Over Anything",
      buttonLabel: "View Our Work",
      toPath: "/portfolio",
    },
  ];
  return (
    <>
      <Carousel
        autoPlay={true}
        interval={5000}
        showArrows={false}
        showStatus={false}
        infiniteLoop={true}
        showThumbs={false}
        stopOnHover={false}
      >
        {HomeSectionCarouselEntryArray.map((item, i) => (
          <HomeSectionCarouselEntry
            key={i}
            videoSrc={item.videoSrc}
            subHeading={item.subHeading}
            heading={item.heading}
            isRight={item.isRight}
            buttonLabel={item.buttonLabel}
            toPath={item.toPath}
          />
        ))}
      </Carousel>
      <IntoSection />
      <Carousel
        autoPlay={true}
        interval={3000}
        showArrows={false}
        showStatus={false}
        infiniteLoop={true}
        showThumbs={false}
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
      <BlogSection />
      <ContactSection />
    </>
  );
}
