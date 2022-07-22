import React, {useEffect, useState} from 'react';
import {HomeJumbotron} from '../components/HomeJumbotron';
import {HowSection} from '../components/HowSection';
import {FromMVPtoEnterpriseSolution} from '../components/FromMVPtoEnterpriseSolution';
import {ExperienceInDevelopingDiverseSolutions} from '../components/ExperienceInDevelopingDiverseSolutions';
import {EmergingTechnologiesWebDev} from '../components/EmergingTechnologiesWebDev';
import {WhyWorkwithDSMEGlobalLinks} from '../components/WhyWorkwithDSMEGlobalLinks';
import {OurExpertise} from '../components/OurExpertise';
import {AboutSuccessStories} from '../components/AboutSuccessStories';
import web from '../assets/web.svg';

export default function ServicesWebDev() {
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
          taglinesLine="Web Application Development"
          info="Web applications that are visually amazing and provide seamless user experience for the desktop, mobile and tablet."
          img={web}
          talk={true}
        />
      </div>
      <OurExpertise />
      <ExperienceInDevelopingDiverseSolutions />
      <FromMVPtoEnterpriseSolution />
      <EmergingTechnologiesWebDev />
      <HowSection />
      <WhyWorkwithDSMEGlobalLinks />
      <AboutSuccessStories slidesPerView={slidesPerView} />
    </>
  );
}
