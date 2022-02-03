import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function ServicesCard({ data }) {
  return (
    <Link
      onClick={() => {
        window.localStorage.setItem("servicesData", JSON.stringify(data));
      }}
      to="/service-details"
      className="services__main__container__content__wrapper__card"
    >
      <div className="services__main__container__content__wrapper__card__svg__container">
        <img
          src={process.env.REACT_APP_API_URL + data.logo}
          alt="services__main__container__content__wrapper__card__svg"
          className="services__main__container__content__wrapper__card__svg"
        />
      </div>
      {data.title}
    </Link>
  );
}

export default function Services({ setIsDark }) {
  const [servicesData, setServicesData] = useState([]);
  useEffect(() => {
    setIsDark(true);
    axios
      .get(`${process.env.REACT_APP_API_URL}api/v1/get_service`)
      .then((res) => {
        setServicesData(res.data);
      });
  }, []);

  return (
    <>
      <div className="services__main__container">
        <div className="services__main__container__content">
          <div className="services__main__container__content__heading">
            SERVICES
          </div>
          <div className="services__main__container__content__wrapper">
            {servicesData.map((item) => (
              <ServicesCard data={item} key={item._id} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
