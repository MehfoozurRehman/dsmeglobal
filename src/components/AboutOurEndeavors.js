import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import AboutUsEndveoursPic from "../assets/About__us__endveours.jpeg";

export function AboutOurEndeavors({}) {
  return (
    <div className="pricing__fitted__team">
      <div
        className="pricing__fitted__team__header"
        id="pricing__success__stories__team__header"
      >
        <div className="pricing__fitted__team__header__heading">
          Our Endeavors
        </div>
      </div>
      <div className="pricing__fitted__team__content">
        <Swiper slidesPerView={1} autoplay>
          <SwiperSlide>
            <div className="about__us__success__stories__slide">
              <div className="about__us__success__stories__slide__image">
                <img
                  loading="lazy"
                  src={AboutUsEndveoursPic}
                  alt="Story Image"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="about__us__success__stories__slide">
              <div className="about__us__success__stories__slide__image">
                <img
                  loading="lazy"
                  src={AboutUsEndveoursPic}
                  alt="Story Image"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="about__us__success__stories__slide">
              <div className="about__us__success__stories__slide__image">
                <img
                  loading="lazy"
                  src={AboutUsEndveoursPic}
                  alt="Story Image"
                />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
