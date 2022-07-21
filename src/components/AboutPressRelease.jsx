import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import pressRelasePic1 from "../assets/pressRelase1.webp";
import pressRelasePic2 from "../assets/pressRelase2.webp";
import pressRelasePic3 from "../assets/pressRelase3.webp";
import pressRelasePic4 from "../assets/pressRelase4.webp";
import pressRelasePic5 from "../assets/pressRelase5.webp";
import pressRelasePic6 from "../assets/pressRelase6.webp";

export function AboutPressRelease({ slidesPerView }) {
  return (
    <div className="pricing__fitted__team">
      <div
        className="pricing__fitted__team__header"
        id="pricing__success__stories__team__header"
      >
        <div className="pricing__fitted__team__header__heading">
          Press Releases
        </div>
      </div>
      <div className="pricing__fitted__team__content">
        <Swiper
          slidesPerView={slidesPerView}
          autoplay
          navigation
          pagination={{
            clickable: true,
          }}
        >
          <SwiperSlide>
            <div className="pricing__success__stories__slide">
              <div className="pricing__success__stories__slide__image">
                <img loading="lazy" src={pressRelasePic1} alt="Story" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="pricing__success__stories__slide">
              <div className="pricing__success__stories__slide__image">
                <img loading="lazy" src={pressRelasePic2} alt="Story" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="pricing__success__stories__slide">
              <div className="pricing__success__stories__slide__image">
                <img loading="lazy" src={pressRelasePic3} alt="Story" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="pricing__success__stories__slide">
              <div className="pricing__success__stories__slide__image">
                <img loading="lazy" src={pressRelasePic4} alt="Story" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="pricing__success__stories__slide">
              <div className="pricing__success__stories__slide__image">
                <img loading="lazy" src={pressRelasePic5} alt="Story" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="pricing__success__stories__slide">
              <div className="pricing__success__stories__slide__image">
                <img loading="lazy" src={pressRelasePic6} alt="Story" />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
