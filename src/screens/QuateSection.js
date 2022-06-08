import React, { useState } from "react";
import GetQuatePopup from "../components/GetQuatePopup";
import { QuateSectionCard } from "./QuateSectionCard";

export function QuateSection() {
  const [isGetQuateOpen, setIsGetQuateOpen] = useState(false);
  return (
    <>
      <div className="container__stats__wrapper">
        <div className="container__stats__content">
          <div className="container__stats">
            <div className="container__stats__left">
              <div className="container__stats__left__heading">
                Where business meets cutting-edge technology
              </div>
              <div className="container__stats__left__info">
                Choose the tech stack for your next application, or let us pick
                the best solution for you
              </div>
              <button
                className="container__stats__left__button"
                onClick={() => {
                  setIsGetQuateOpen(true);
                }}
              >
                Get a quote
              </button>
            </div>
            <div className="container__stats__right">
              <QuateSectionCard
                title="Android"
                info="Create a seamless mobile experience with Android app development Our
        software house has been recognised by Google for outstanding Android
        application quality"
              />
              <QuateSectionCard
                title="iOS"
                info="Stay ahead of the curve with a custom iOS app We offer iOS application development services for startups, enterprises, and unicorns around the globe"
              />
              <QuateSectionCard
                title="Cross-platform"
                info="Create a seamless mobile experience with Android app development Our
              software house has been recognised by Google for outstanding Android
              application quality"
              />
              <QuateSectionCard
                title="Frontend"
                info="Create a seamless mobile experience with Android app development Our
        software house has been recognised by Google for outstanding Android
        application quality"
              />
              <QuateSectionCard
                title="Backend"
                info="Create a seamless mobile experience with Android app development Our
        software house has been recognised by Google for outstanding Android
        application quality"
              />
              <QuateSectionCard
                title="Artificial Intelligence"
                info="Create a seamless mobile experience with Android app development Our
        software house has been recognised by Google for outstanding Android
        application quality"
              />
            </div>
          </div>
        </div>
      </div>
      {isGetQuateOpen ? (
        <GetQuatePopup setIsGetQuateOpen={setIsGetQuateOpen} />
      ) : null}
    </>
  );
}
