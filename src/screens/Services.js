import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../components/Loader";
import ServicesCard from "../components/ServicesCard";

export default function Services({ setIsDark }) {
  const [servicesData, setServicesData] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}api/v1/get_service`)
      .then((res) => {
        setServicesData(res.data);
      });
  }, []);

  return (
    <>
      <div className="services__main__container">
        {servicesData.map((item) => (
          <ServicesCard data={item} key={JSON.stringify(item)} />
        ))}
      </div>
    </>
  );
}
