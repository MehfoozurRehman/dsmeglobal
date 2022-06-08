import React from "react";

export function StatsSection() {
  return (
    <div className="container__stats__wrapper">
      <div className="container__stats__content">
        <div className="container__stats">
          <div className="container__stats__entry">
            <div className="container__stats__entry__value">10+</div>
            <div className="container__stats__entry__label">
              years in remote software development
            </div>
          </div>
          <div className="container__stats__entry">
            <div className="container__stats__entry__value">150+</div>
            <div className="container__stats__entry__label">
              digital solutions delivered
            </div>
          </div>
          <div className="container__stats__entry">
            <div className="container__stats__entry__value">200</div>
            <div className="container__stats__entry__label">
              experts on board
            </div>
          </div>
          <div className="container__stats__entry">
            <div className="container__stats__entry__value">9/10</div>
            <div className="container__stats__entry__label">
              projects conducted remotely
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
