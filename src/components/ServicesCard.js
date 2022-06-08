import React, { memo } from "react";
import { Fade } from "react-reveal";
import { Link } from "react-router-dom";

function ServicesCard({ data }) {
  function onClick() {
    window.localStorage.setItem("servicesData", JSON.stringify(data));
  }
  return (
    <Link
      onClick={onClick}
      to="/service-details"
      className="services__main__container__content__wrapper__card"
    >
      <div className="services__main__container__content__wrapper__card__svg__container">
        <Fade>
          <img
            src={
              "https://res.cloudinary.com/mehfoozurrehman/image/upload/" +
              data.logo
            }
            alt="services__main__container__content__wrapper__card__svg"
            className="services__main__container__content__wrapper__card__svg"
          />
        </Fade>
      </div>
      <div className="services__main__container__content__wrapper__card__heading">
        <Fade>{data.title}</Fade>
      </div>
      <div className="services__main__container__content__wrapper__card__info">
        <Fade>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem,
          harum?
        </Fade>
      </div>
    </Link>
  );
}

export default memo(ServicesCard);
