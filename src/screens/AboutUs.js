import React, { useEffect, useState } from "react";
import { Navigation, Pagination } from "swiper";
import { HomeJumbotron } from "../components/HomeJumbotron";
import about from "../assets/about.svg";
import { AboutOurVision } from "../components/AboutOurVision";
import { AboutOurMission } from "../components/AboutOurMission";
import { AboutKeyDifferences } from "../components/AboutKeyDifferences";
import { AboutOurTeam } from "../components/AboutOurTeam";
import { AboutAgileDevelopmentProcess } from "../components/AboutAgileDevelopmentProcess";
import { AboutOurPromise } from "../components/AboutOurPromise";
import { AboutOurCoreValues } from "../components/AboutOurCoreValues";
import { AboutOurCeo } from "../components/AboutOurCeo";
import { AboutAwardAchievements } from "../components/AboutAwardAchievements";
import { AboutOurEndeavors } from "../components/AboutOurEndeavors";
import { AboutSuccessStories } from "../components/AboutSuccessStories";
import { AboutPressRelease } from "../components/AboutPressRelease";

export default function AboutUs() {
  const [slidesPerView, setSlidesPerView] = useState(3);
  const [slidesPerViewLogo, setSlidesPerViewLogo] = useState(4);
  const [showNavigation, setShowNavigation] = useState(true);

  function getSlidesPerView() {
    if (window.innerWidth < 400) {
      setSlidesPerView(1);
      setSlidesPerViewLogo(1);
    } else if (window.innerWidth < 500) {
      setSlidesPerView(1);
      setSlidesPerViewLogo(1);
    } else if (window.innerWidth < 750) {
      setSlidesPerView(2);
      setSlidesPerViewLogo(2);
    } else if (window.innerWidth < 1000) {
      setShowNavigation(false);
      setSlidesPerViewLogo(3);
    } else {
      setSlidesPerView(3);
      setSlidesPerViewLogo(4);
      setShowNavigation(true);
    }
  }
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    getSlidesPerView();
    window.addEventListener("resize", getSlidesPerView);

    return () => {
      window.removeEventListener("resize", getSlidesPerView);
    };
  }, []);

  return (
    <>
      <div className="container">
        <HomeJumbotron
          taglinesLine="Lets Get to"
          taglines={["Know Us", "Know Our Story"]}
          info={
            <>
              We are talented. We are experienced. <br />
              We are bold. We are DSME Global Links! <br />
              Get a behind-the-scenes glimpse of your new favorite software
              development company.
              <br />
              Let’s work together
            </>
          }
          img={about}
        />
      </div>
      <AboutOurCeo />
      <AboutOurTeam />
      <AboutAgileDevelopmentProcess />
      <AboutOurCoreValues />
      <AboutOurPromise />
      <AboutKeyDifferences />
      <AboutOurMission />
      <AboutOurVision />
      <AboutOurEndeavors />
      <AboutPressRelease slidesPerView={slidesPerView} />
      <AboutSuccessStories slidesPerView={slidesPerView} />
      <AboutAwardAchievements
        slidesPerViewLogo={slidesPerViewLogo}
        Navigation={Navigation}
        Pagination={Pagination}
        showNavigation={showNavigation}
      />
    </>
  );
}
