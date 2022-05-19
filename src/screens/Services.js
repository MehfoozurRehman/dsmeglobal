import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../components/Loader";
import ServicesCard from "../components/ServicesCard";

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
            {servicesData.length === 0 ? (
              <Loader />
            ) : (
              servicesData.map((item) => (
                <ServicesCard data={item} key={JSON.stringify(item)} />
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
}
