import React, { useRef } from "react";
import CountUp from "react-countup";
import { Zoom } from "react-reveal";
import { useIsInViewport } from "../utils/useIsInViewport";

export function StatsSection() {
  const ref = useRef(null);
  const isInViewport = useIsInViewport(ref);

  return (
    <div className="container__stats__wrapper" ref={ref}>
      <div className="container__stats__content">
        <div className="container__stats">
          <Zoom>
            <div className="container__stats__entry">
              <div className="container__stats__entry__value">
                <CountUp end={10} redraw={true} duration={2} />+
              </div>
              <div className="container__stats__entry__label">
                Years in Remote Software Development
              </div>
            </div>
          </Zoom>
          <Zoom>
            <div className="container__stats__entry">
              <div className="container__stats__entry__value">
                <CountUp end={150} redraw={true} duration={2} />+
              </div>
              <div className="container__stats__entry__label">
                Digital Solutions Delivered
              </div>
            </div>
          </Zoom>
          <Zoom>
            <div className="container__stats__entry">
              <div className="container__stats__entry__value">
                <CountUp end={200} redraw={true} duration={2} />
              </div>
              <div className="container__stats__entry__label">
                Experts on Board
              </div>
            </div>
          </Zoom>
          <Zoom>
            <div className="container__stats__entry">
              <div className="container__stats__entry__value">
                <CountUp end={9} redraw={true} duration={2} />/
                <CountUp end={10} redraw={true} duration={2} />
              </div>
              <div className="container__stats__entry__label">
                Projects Conducted Remotely
              </div>
            </div>
          </Zoom>
        </div>
      </div>
    </div>
  );
}
