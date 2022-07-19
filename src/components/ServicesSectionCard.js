import React from "react";
import { Link } from "react-router-dom";

export default function ServicesSectionCard({ data }) {
  function onClick() {
    window.localStorage.setItem("servicesData", JSON.stringify(data));
    setTimeout(() => {
      window.scrollTo({ behavior: "smooth", top: 0 });
    }, 300);
  }
  return (
    <Link
      onClick={onClick}
      to={data.link ? data.link : "/service"}
      className="services__main__container__content__wrapper__card"
    >
      <div className="services__main__container__content__wrapper__card__svg__container">
        <img
          loading="lazy"
          src={
            "https://res.cloudinary.com/mehfoozurrehman/image/upload/" +
            data.logo
          }
          alt={data.title}
          className="services__main__container__content__wrapper__card__svg"
        />
      </div>
      <div className="services__main__container__content__wrapper__card__heading">
        {data.title}
      </div>
      <div className="services__main__container__content__wrapper__card__info">
        {data.description.substring(0, 120) + "..."}
      </div>
    </Link>
  );
}
