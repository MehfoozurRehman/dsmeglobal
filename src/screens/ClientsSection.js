import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";

export function ClientsSection({}) {
  const [clientsData, setClientsData] = useState([]);
  const [slidesPerView, setSlidesPerView] = useState(4);

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
    axios.get(`${process.env.REACT_APP_API_URL}api/v1/get_work`).then((res) => {
      setClientsData(res.data);
    });
    getSlidesPerView();
    window.addEventListener("resize", getSlidesPerView);
  }, []);
  return (
    <div className="container__clients">
      <div className="container__clients__left">
        <div className="container__clients__left__heading">Our Clients</div>
        <div className="container__clients__left__info">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, nostrum.
        </div>
      </div>
      <div className="container__clients__right">
        <Swiper slidesPerView={slidesPerView}>
          {clientsData.map((client) => (
            <SwiperSlide key={JSON.stringify(client)}>
              <div className="container__clients__right__entry">
                <img
                  src={
                    "https://res.cloudinary.com/mehfoozurrehman/image/upload/q_50/" +
                    client.logo
                  }
                  alt={client.title}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
