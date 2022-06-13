import React from "react";
import { Box } from "react-feather";

export function ExperitseCard({}) {
  return (
    <div className="container__web__dev__experties__content__entry">
      <div className="container__web__dev__experties__content__header">
        <Box size={30} color="currentColor" />
        <div className="container__web__dev__experties__content__header__heading">
          Massively Customized Web Apps
        </div>
      </div>
      <div className="container__web__dev__experties__content__info">
        Tailor your web apps exactly the way your business works. Build one from
        scratch, migrate your legacy back-end or upgrade existing front-end
        functionality.
      </div>
    </div>
  );
}
