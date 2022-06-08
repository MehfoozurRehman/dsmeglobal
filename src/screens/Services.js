import React from "react";
import useSWR from "swr";
import ServicesCard from "../components/ServicesCard";
import { fetcher } from "../utils/functions";

export default function Services() {
  const { data, error } = useSWR(
    `${process.env.REACT_APP_API_URL}api/v1/get_service`,
    fetcher,
    { suspense: true }
  );
  return (
    <div className="services__main__container">
      {error ? (
        <div>failed to load</div>
      ) : (
        data.map((item) => (
          <ServicesCard data={item} key={JSON.stringify(item)} />
        ))
      )}
    </div>
  );
}
