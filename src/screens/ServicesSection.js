import React from "react";
import { Fade } from "react-reveal";
import useSWR from "swr";
import { ServicesCard as ServicesCardNew } from "./ServicesCard";
import ServicesCard from "../components/ServicesCard";
import { fetcher } from "../utils/functions";

export function ServicesSection() {
  const { data, error } = useSWR(
    `${process.env.REACT_APP_API_URL}api/v1/get_service`,
    fetcher,
    { suspense: true }
  );
  return (
    <>
      <div className="container__services">
        <div className="container__services__left">
          <div className="container__services__left__heading">
            <Fade>How can we help your buisness ?</Fade>
          </div>
          <div className="container__services__left__info">
            <Fade>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus
              sed sequi tempore minus, eum laborum voluptatibus non, est
              veritatis,
            </Fade>
          </div>
        </div>
        <div className="container__services__right">
          {error ? (
            <div>failed to load</div>
          ) : (
            data
              .filter((item, i) => i < 4)
              .map((item) => (
                <ServicesCardNew data={item} key={JSON.stringify(item)} />
              ))
          )}
        </div>
      </div>
    </>
  );
}
