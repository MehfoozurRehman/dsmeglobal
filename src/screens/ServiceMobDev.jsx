import React, {useEffect, useState} from 'react';
import {HomeJumbotron} from '../components/HomeJumbotron';
import mobile from '../assets/mobile.svg';
import {HowSection} from '../components/HowSection';
import {WhyDSMEGlobalLinksMobDev} from '../components/WhyDSMEGlobalLinksMobDev';
import {EmergingTechnologiesKnowHowMobDev} from '../components/EmergingTechnologiesKnowHowMobDev';
import {ExceptionalDomainExpertiseMobDev} from '../components/ExceptionalDomainExpertiseMobDev';
import {OurExpertiseMobDev} from '../components/OurExpertiseMobDev';
import {AboutSuccessStories} from '../components/AboutSuccessStories';

export default function ServicesMobDev() {
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
    window.addEventListener('resize', getSlidesPerView);

    return () => {
      window.removeEventListener('resize', getSlidesPerView);
    };
  }, []);
  return (
    <>
      <div className="container">
        <HomeJumbotron
          taglinesLine="Mobile Application Development"
          info="Custom built mobile applications with amazing experiences that help support your business goals."
          img={mobile}
          talk={true}
        />
      </div>
      <OurExpertiseMobDev />
      <ExceptionalDomainExpertiseMobDev />
      <EmergingTechnologiesKnowHowMobDev />
      <HowSection />
      <WhyDSMEGlobalLinksMobDev />
      <AboutSuccessStories slidesPerView={slidesPerView} />
    </>
  );
}
