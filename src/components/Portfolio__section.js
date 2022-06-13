import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Portfolio__section({ data }) {
  return (
    <div className="portfolio__section">
      <div className="portfolio__section__container">
        <div className="portfolio__section__container__heading">
          About {data.title} solution
        </div>
        <div className="portfolio__section__container__heading__text">
          {data.description}
        </div>
        <div className="portfolio__section__container__buttons">
          {data.techonologies?.map((item) => (
            <button style={{ border: `2px solid ${data.theme}` }}>
              {item.label}
            </button>
          ))}
        </div>
        <div className="portfolio__section__container__text__content">
          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className="portfolio__section__container__text__content__entry__background"
          >
            <path
              fill="#F2F2F2"
              d="M48.8,-64.6C63.5,-56.5,75.8,-42.6,82.3,-26C88.7,-9.4,89.1,9.9,83.6,27.3C78.1,44.7,66.6,60.2,51.7,72C36.7,83.9,18.4,91.9,1.1,90.4C-16.2,88.9,-32.4,77.9,-47.1,66C-61.8,54.1,-75,41.4,-82.7,25.1C-90.3,8.9,-92.4,-10.9,-85.5,-26.5C-78.7,-42.1,-62.9,-53.4,-47.1,-61.2C-31.4,-69,-15.7,-73.3,0.7,-74.2C17.1,-75.2,34.1,-72.8,48.8,-64.6Z"
              transform="translate(100 100)"
            />
          </svg>

          <div className="portfolio__section__container__text__content__entry">
            {data.quotation}
          </div>
          <div className="portfolio__section__container__text__content__entry__span__bottom">
            <div style={{ marginBottom: ".5em", fontWeight: "bold" }}>
              {data.quotationAuthor}
            </div>
            <div>{data.quotationDesignation}</div>
          </div>
        </div>
      </div>
      <div className="portfolio__section__images">
        <Swiper slidesPerView={3} spaceBetween={30}>
          <SwiperSlide>
            <img
              src={
                "https://res.cloudinary.com/mehfoozurrehman/image/upload/q_50/" +
                data.image
              }
              alt=""
              className="portfolio__section__images__entry"
            />
          </SwiperSlide>
          {data.sliderImage?.map((item) => (
            <SwiperSlide>
              <img
                src={
                  "https://res.cloudinary.com/mehfoozurrehman/image/upload/q_50/" +
                  item
                }
                alt=""
                className="portfolio__section__images__entry"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="portfolio__section__container__calendar__sec">
        <div
          className="portfolio__section__container__calendar__sec__container"
          style={{ backgroundColor: data.theme }}
        >
          <div className="portfolio__section__container__calendar__seccontainer__left">
            <div className="portfolio__section__container__calendar__seccontainer__left__weeks">
              10 weeks
            </div>
            <div>For the MVP</div>
          </div>
          <div className="portfolio__section__container__calendar__seccontainer__right">
            <div className="portfolio__section__container__calendar__seccontainer__right__weeks">
              2 Years
            </div>
            <div>
              of overall <br /> collaboration
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
