import React from "react";
import HotOfferJobCard from "../components/HotOfferJobCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Bounce } from "react-reveal";

export function CareersViewOpenings({
  error,
  slidesPerPage,
  data,
  setIsApplyOpen,
  setSelectedItem,
}) {
  return (
    <div className="hot__offers__section__wrapper">
      <section id="job__section" className="hot__offers__section">
       <Bounce left> <div className="hot__offers__section__header"> View<span>Openings</span>  </div></Bounce>
        <div className="hot__offers__section__content">
          {error ? (
            <div>failed to load</div>
          ) : (
            <Swiper slidesPerView={slidesPerPage} spaceBetween={30}>
              {data.map((item) => (
                <SwiperSlide key={JSON.stringify(item)}>
                  <HotOfferJobCard
                    item={item}
                    onApply={() => {
                      setIsApplyOpen(true);
                      setSelectedItem(item);
                    }}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
      </section>
    </div>
  );
}
