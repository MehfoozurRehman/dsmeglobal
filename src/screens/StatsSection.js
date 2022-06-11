import React, { useMemo, useState, useRef, useEffect } from "react";
import CountUp from "react-countup";

export function StatsSection() {
  const ref = useRef(null);

  const isInViewport = useIsInViewport(ref);
  console.log("isInViewport: ", isInViewport);
  return (
    <div className="container__stats__wrapper" ref={ref}>
      <div className="container__stats__content">
        <div className="container__stats">
          <div className="container__stats__entry">
            <div className="container__stats__entry__value">
              <CountUp end={10} redraw={true} />+
            </div>
            <div className="container__stats__entry__label">
              years in remote software development
            </div>
          </div>
          <div className="container__stats__entry">
            <div className="container__stats__entry__value">
              <CountUp end={150} redraw={true} />+
            </div>
            <div className="container__stats__entry__label">
              digital solutions delivered
            </div>
          </div>
          <div className="container__stats__entry">
            <div className="container__stats__entry__value">
              <CountUp end={200} redraw={true} />
            </div>
            <div className="container__stats__entry__label">
              experts on board
            </div>
          </div>
          <div className="container__stats__entry">
            <div className="container__stats__entry__value">
              <CountUp end={9} redraw={true} />/
              <CountUp end={10} redraw={true} />
            </div>
            <div className="container__stats__entry__label">
              projects conducted remotely
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function useIsInViewport(ref) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  const observer = useMemo(
    () =>
      new IntersectionObserver(([entry]) =>
        setIsIntersecting(entry.isIntersecting)
      ),
    []
  );

  useEffect(() => {
    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref, observer]);

  return isIntersecting;
}
