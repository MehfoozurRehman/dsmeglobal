import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import clutch from "../assets/top-clutch.png";
import topSoftwarePic from "../assets/top-software.png";
import topMobileAppCompany from "../assets/top-mobile-app-development-company-badge-1.png";
import subtractPng from "../assets/subtract.png";
import softwareUsa from "../assets/software-usa.png";
import itrateco from "../assets/itrateco.png";
import fastestGrowingApp from "../assets/fastest-growing-app.png";
import designrush from "../assets/designrush.png";
import designWorkImageMob from "../assets/design-work-image-mob.png";
import appfuturaBadge from "../assets/appfutura-badge.jpg";
import softwaredev from "../assets/softwaredev.png";
import sdappfuturaBadge from "../assets/sdappfutura-badge.jpg";
import webappusfuturaBadge from "../assets/webappusfutura-badge.jpg";
import webappfuturaBadge from "../assets/webappfutura-badge.jpg";
import topAppPic from "../assets/topapp.jpg";

export function AboutAwardAchievements({
  slidesPerViewLogo,
  Navigation,
  Pagination,
  showNavigation,
}) {
  return (
    <div className="pricing__fitted__team">
      <div className="pricing__fitted__team__header">
        <div className="pricing__fitted__team__header__heading">
          Awards & Achievements
        </div>
        <div className="pricing__fitted__team__header__info">
          We are proud to be recognized as a top service provider by these
          platforms.
        </div>
      </div>
      <div className="pricing__fitted__team__content">
        <Swiper
          slidesPerView={slidesPerViewLogo}
          modules={[Navigation, Pagination]} // loop
          // spaceBetween={30}
          navigation={showNavigation ? true : false}
          pagination={
            !showNavigation
              ? {
                  clickable: true,
                }
              : false
          }
        >
          <SwiperSlide>
            <div className="pricing__awards__achievements__slide__logo">
              <img loading="lazy" src={clutch} alt="Brand Logo" />
            </div>
            <div className="pricing__awards__achievements__slide__logo">
              <img loading="lazy" src={designWorkImageMob} alt="Brand Logo" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="pricing__awards__achievements__slide__logo">
              <img loading="lazy" src={topSoftwarePic} alt="Brand Logo" />
            </div>
            <div className="pricing__awards__achievements__slide__logo">
              <img loading="lazy" src={topMobileAppCompany} alt="Brand Logo" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="pricing__awards__achievements__slide__logo">
              <img loading="lazy" src={clutch} alt="Brand Logo" />
            </div>
            <div className="pricing__awards__achievements__slide__logo">
              <img loading="lazy" src={subtractPng} alt="Brand Logo" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="pricing__awards__achievements__slide__logo">
              <img loading="lazy" src={fastestGrowingApp} alt="Brand Logo" />
            </div>
            <div className="pricing__awards__achievements__slide__logo">
              <img loading="lazy" src={designrush} alt="Brand Logo" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="pricing__awards__achievements__slide__logo">
              <img loading="lazy" src={softwareUsa} alt="Brand Logo" />
            </div>
            <div className="pricing__awards__achievements__slide__logo">
              <img loading="lazy" src={itrateco} alt="Brand Logo" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="pricing__awards__achievements__slide__logo">
              <img loading="lazy" src={appfuturaBadge} alt="Brand Logo" />
            </div>
            <div className="pricing__awards__achievements__slide__logo">
              <img loading="lazy" src={softwaredev} alt="Brand Logo" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="pricing__awards__achievements__slide__logo">
              <img loading="lazy" src={webappfuturaBadge} alt="Brand Logo" />
            </div>
            <div className="pricing__awards__achievements__slide__logo">
              <img loading="lazy" src={topAppPic} alt="Brand Logo" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="pricing__awards__achievements__slide__logo">
              <img loading="lazy" src={webappusfuturaBadge} alt="Brand Logo" />
            </div>
            <div className="pricing__awards__achievements__slide__logo">
              <img loading="lazy" src={softwaredev} alt="Brand Logo" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="pricing__awards__achievements__slide__logo">
              <img loading="lazy" src={sdappfuturaBadge} alt="Brand Logo" />
            </div>
            <div className="pricing__awards__achievements__slide__logo">
              <img loading="lazy" src={softwaredev} alt="Brand Logo" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="highly__customer__main__container">
        <div className="highly__customer__main__first__container">
          <div className="highly__customer__main__container__heading">
            Highly Customer Centric <span>Development Process</span>
          </div>
          <div className="highly__customer__main__first__container__jira__container">
            <div className="highly__customer__main__first__container__jira__container__heading">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-square"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              </svg>
              Jira Software
            </div>
            <div className="highly__customer__main__first__container__jira__container__content">
              Tasks are maintained on a daily basis. This allows you to get a
              quick overview on where the team stands.
            </div>
          </div>
          <div className="highly__customer__main__first__container__jira__container">
            <div className="highly__customer__main__first__container__jira__container__heading">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-square"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              </svg>
              Slack
            </div>
            <div className="highly__customer__main__first__container__jira__container__content">
              Each team member posts a daily update on email/slack. This
              includes tasks done today, tasks planned for tomorrow and
              blockers.
            </div>
          </div>
          <div className="highly__customer__main__first__container__jira__container">
            <div className="highly__customer__main__first__container__jira__container__heading">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-square"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              </svg>
              Daily & Weekly Scrum Call
            </div>
            <div className="highly__customer__main__first__container__jira__container__content">
              Depending on how involved the client wants to be, daily or weekly
              scrum calls are setup to stay on top of what's going on within the
              project.
            </div>
          </div>
          <div className="highly__customer__main__first__container__jira__container">
            <div className="highly__customer__main__first__container__jira__container__heading">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-square"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              </svg>
              Product Demo Calls
            </div>
            <div className="highly__customer__main__first__container__jira__container__content">
              On every sprint end, we give you a live demo of work, done during
              that week.
            </div>
          </div>
        </div>
        <div className="highly__customer__main__second__container">
          <div className="highly__customer__main__second__container__interior">
            <div className="highly__customer__main__container__heading__content">
              <span>{"//"}</span>
              We build glass wall visibility on all our projects using various
              communication channels and Project Management tools to ensure
              clients stay updated about the progress of their projects at all
              times.
              <span className="one">{"//"}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
