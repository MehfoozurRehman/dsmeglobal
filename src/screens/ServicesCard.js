import React from "react";
import { Fade } from "react-reveal";
import { Link } from "react-router-dom";

export function ServicesCard({ data }) {
  function onClick() {
    setTimeout(() => {
      window.scrollTo({ behavior: "smooth", top: 0 });
    }, 300);
  }
  return (
    <Link
      onClick={onClick}
      to={data.link}
      className="container__services__right__entry"
    >
      <div className="container__services__right__entry__icon">
        <Fade>
          <img
            src={
              "https://res.cloudinary.com/mehfoozurrehman/image/upload/" +
              data.logo
            }
            alt={data.title}
          />
        </Fade>
      </div>
      <div className="container__services__right__entry__heading">
        <Fade>{data.title}</Fade>
      </div>
      <div className="container__services__right__entry__info">
        <Fade>{data.shortDescription}</Fade>
      </div>
    </Link>
  );
}
