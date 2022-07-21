import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import clutch from "../assets/top-clutch.webp";
import topSoftwarePic from "../assets/top-software.webp";
import topMobileAppCompany from "../assets/top-mobile-app-development-company-badge-1.webp";
import subtractPng from "../assets/subtract.webp";
import softwareUsa from "../assets/software-usa.webp";
import itrateco from "../assets/itrateco.webp";
import fastestGrowingApp from "../assets/fastest-growing-app.webp";
import designrush from "../assets/designrush.webp";
import designWorkImageMob from "../assets/design-work-image-mob.webp";
import appfuturaBadge from "../assets/appfutura-badge.webp";
import softwaredev from "../assets/softwaredev.webp";
import sdappfuturaBadge from "../assets/sdappfutura-badge.webp";
import webappusfuturaBadge from "../assets/webappusfutura-badge.webp";
import webappfuturaBadge from "../assets/webappfutura-badge.webp";
import topAppPic from "../assets/topapp.webp";

export function AwardsAchievements({
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
    </div>
  );
}
