import React from "react";
import { Box } from "react-feather";
import { Fade } from "react-reveal";

export function ServicesCard({}) {
  return (
    <Fade>
      <div className="container__services__right__entry">
        <div className="container__services__right__entry__icon">
          <Box size={40} color="currentColor" />
        </div>
        <div className="container__services__right__entry__heading">
          Lorem, ipsum dolor.
        </div>
        <div className="container__services__right__entry__info">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
          reiciendis.
        </div>
      </div>
    </Fade>
  );
}
