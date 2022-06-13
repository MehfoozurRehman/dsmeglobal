import React, { useEffect, useState } from "react";
import { fetcher } from "../utils/functions";
import useSWR from "swr";
import { HomeJumbotron } from "./HomeJumbotron";
import bannerImage1 from "../assets/bannerImage1.svg";
import ServicesCard from "../components/ServicesCard";

export default function Services() {
  const { data, error } = useSWR(
    `${process.env.REACT_APP_API_URL}api/v1/get_service`,
    fetcher,
    { suspense: true }
  );
  return (
    <>
      <div className="container">
        <HomeJumbotron
          taglinesLine="Best"
          taglines={["Jobs", "Oppertunities"]}
          info="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore,
            culpa est? Quos iusto dolore culpa, veritatis quas minus quibusdam
            ad? Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Dolore, culpa est? Quos iusto dolore culpa, veritatis quas minus
            quibusdam ad?"
          img={bannerImage1}
        />
      </div>
      <div
        className="services__main__container"
        style={{ position: "sticky", zIndex: 999 }}
      >
        {error ? (
          <div>failed to load</div>
        ) : (
          data.map((item) => (
            <ServicesCard data={item} key={JSON.stringify(item)} />
          ))
        )}
      </div>
    </>
  );
}
