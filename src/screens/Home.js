import React, { useEffect, useState } from "react";
import { HomeJumbotron } from "./HomeJumbotron";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import axios from "axios";

export default function Home() {
  return (
    <div className="container">
      <HomeJumbotron />
      <ClientsSection />
      <HomeJumbotron />
    </div>
  );
}

function ClientsSection({}) {
  const [clientsData, setClientsData] = useState([]);
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}api/v1/get_work`).then((res) => {
      setClientsData(res.data);
    });
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
        <Swiper slidesPerView={4}>
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
