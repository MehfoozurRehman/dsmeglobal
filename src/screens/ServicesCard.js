import React from "react";
import { Fade } from "react-reveal";

export function ServicesCard({ data }) {
  return (
    <Fade>
      <div className="container__services__right__entry">
        <div className="container__services__right__entry__icon">
          <img
            src={
              "https://res.cloudinary.com/mehfoozurrehman/image/upload/" +
              data.logo
            }
            alt={data.title}
          />
        </div>
        <div className="container__services__right__entry__heading">
          {data.title}
        </div>
        <div className="container__services__right__entry__info">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
          reiciendis.
        </div>
      </div>
    </Fade>
  );
}
