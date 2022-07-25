import React, { useEffect, useState } from "react";
import { HomeJumbotron } from "../components/HomeJumbotron";
import teams from "../assets/teams.svg";
import { Navigation, Pagination } from "swiper";
import { AwardsAchievements } from "../components/AwardsAchievements";
import { GetAPerfectlyFittedTeam } from "../components/GetAPerfectlyFittedTeam";
import { HowtoGetStarted } from "../components/HowtoGetStarted";
import { TransparentExecution } from "../components/TransparentExecution";
import { WhyDedicatedTeamswithDSMEGlobal } from "../components/WhyDedicatedTeamswithDSMEGlobal";
import { ProcessFromIdeaCreationtoProductDelivery } from "../components/ProcessFromIdeaCreationtoProductDelivery";
import { PricingDedicatedSuccessStories } from "../components/PricingDedicatedSuccessStories";
import { AdvantagesOfDSMETalent } from "../components/AdvantagesOfDSMETalent";

export default function PricingDedicated() {
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
          taglinesLine="Fully Managed Development Teams To Build Your Software"
          info="Work with a dedicated pool of technical resources for your software development needs. Hire top tech talent and quickly scale your delivery capacity."
          img={teams}
          talk={true}
        />
      </div>
      <GetAPerfectlyFittedTeam />
      <AdvantagesOfDSMETalent />
      <HowtoGetStarted />
      <TransparentExecution />
      <WhyDedicatedTeamswithDSMEGlobal />
      <ProcessFromIdeaCreationtoProductDelivery />
      <PricingDedicatedSuccessStories slidesPerView={slidesPerView} />
      <AwardsAchievements
        slidesPerViewLogo={slidesPerViewLogo}
        Navigation={Navigation}
        Pagination={Pagination}
        showNavigation={showNavigation}
      />
    </>
  );
}
