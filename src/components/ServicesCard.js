import React from "react";
import { Fade } from "react-reveal";
import { Link } from "react-router-dom";

export default function ServicesCard({ data }) {
  function onClick() {
    window.localStorage.setItem("servicesData", JSON.stringify(data));
    setTimeout(() => {
      window.scrollTo({ behavior: "smooth", top: 0 });
    }, 300);
  }
  return (
    <Link
      onClick={onClick}
      to={data.link ? data.link : "/service-details"}
      className="services__main__container__content__wrapper__card"
    >
      <div className="services__main__container__content__wrapper__card__svg__container">
        <Fade>
          <img
            src={
              "https://res.cloudinary.com/mehfoozurrehman/image/upload/" +
              data.logo
            }
            alt={data.title}
            className="services__main__container__content__wrapper__card__svg"
          />
        </Fade>
      </div>
      <div className="services__main__container__content__wrapper__card__heading">
        <Fade>{data.title}</Fade>
      </div>
      <div className="services__main__container__content__wrapper__card__info">
        <Fade>{data.description.substring(0, 120) + "..."}</Fade>
      </div>
    </Link>
  );
}
