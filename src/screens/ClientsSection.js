import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Fade } from "react-reveal";
import { fetcher } from "../utils/functions";
import useSWR from "swr";

export function ClientsSection() {
  const [slidesPerView, setSlidesPerView] = useState(4);

  const { data, error } = useSWR(
    `${process.env.REACT_APP_API_URL}api/v1/get_work`,
    fetcher,
    { suspense: true }
  );

  function getSlidesPerView() {
    if (window.innerWidth < 400) {
      setSlidesPerView(1);
    } else if (window.innerWidth < 500) {
      setSlidesPerView(2);
    } else if (window.innerWidth < 750) {
      setSlidesPerView(3);
    } else {
      setSlidesPerView(4);
    }
  }
  useEffect(() => {
    getSlidesPerView();
    window.addEventListener("resize", getSlidesPerView);
  }, []);
  return (
    <div className="container__clients">
      <div className="container__clients__left">
        <div className="container__clients__left__heading">
          <Fade>Our Clients</Fade>
        </div>
        <div className="container__clients__left__info">
          <Fade>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex,
            nostrum.
          </Fade>
        </div>
      </div>
      <div className="container__clients__right">
        {error ? (
          <div>failed to load</div>
        ) : (
          <Swiper slidesPerView={slidesPerView}>
            {data.map((client) => (
              <SwiperSlide key={JSON.stringify(client)}>
                <div className="container__clients__right__entry">
                  <Fade>
                    <img
                      src={
                        "https://res.cloudinary.com/mehfoozurrehman/image/upload/q_50/" +
                        client.logo
                      }
                      alt={client.title}
                    />
                  </Fade>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </div>
  );
}
