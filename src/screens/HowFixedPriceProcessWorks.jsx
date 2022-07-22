import React from "react";

export function HowFixedPriceProcessWorks({}) {
  return (
    <div className="pricing__process__container">
      <div className="pricing__process__container__content">
        <div className="pricing__process__container__content__top">
          <div className="pricing__process__container__content__top__heading">
            How the Process Works?
          </div>
          <div className="pricing__process__container__content__top__info">
            We have been successfully delivered over 250+ products on-time and
            within budget for startups, entrepreneurs, businesses and large
            enterprises.
          </div>
        </div>
        <div className="pricing__process__container__content__bottom">
          <div className="pricing__process__container__content__bottom__left">
            <div className="pricing__process__container__content__bottom__left__top">
              Initial Discovery
            </div>
            <div className="pricing__process__container__content__bottom__left__middle">
              <div className="pricing__process__container__content__bottom__left__middle__button ">
                Assessment
              </div>
              <div className="pricing__process__container__content__bottom__left__middle__button">
                Deep Dive
              </div>
            </div>
            <div className="pricing__process__container__content__bottom__left__bottom">
              <ul>
                <li>
                  We discuss your project requirements over a couple of calls or
                  It will be meetings and assess what you already have.
                </li>
                <li>
                  If we feel that the requirements are enough for us to provide
                  you with a tentative cost/effort estimate - we go down that
                  route. Otherwise, we recommend that you go through our Agile
                  Discovery Workshop to get you development ready.
                </li>
                <li>
                  Otherwise, we recommend that you go through our Agile
                  Discovery Workshop to get you development ready.
                </li>
              </ul>
            </div>
          </div>
          <div className="pricing__process__container__content__bottom__left">
            <div className="pricing__process__container__content__bottom__left__top">
              Develop
            </div>
            <div className="pricing__process__container__content__bottom__left__middle">
              <div className="pricing__process__container__content__bottom__left__middle__button">
                Detailed Discovery
              </div>
              <div className="pricing__process__container__content__bottom__left__middle__button">
                Design
              </div>
              <div className="pricing__process__container__content__bottom__left__middle__button">
                Development & QA
              </div>
              <div className="pricing__process__container__content__bottom__left__middle__button">
                UAT
              </div>
            </div>
            <div className="pricing__process__container__content__bottom__left__bottom">
              <ul>
                <li>
                  We start off with doing a detailed discovery as a first
                  milestone, where we revisit the initial requirements and make
                  them more detailed (user stories, wire-frames, non-functional
                  requirements).
                </li>
                <li>
                  On the basis of this, we draft a statement of work and provide
                  a detailed project & payment plan
                </li>
                <li>
                  The remaining milestones are about delivering the scope of
                  work defined during detailed discovery.
                </li>
                <div
                  style={{
                    marginTop: "2em",
                    textAlign: "center",
                  }}
                >
                  We understand that each client is unique although a typical
                  fixed-price project is composed of all the above stages, we
                  tailor our process according to your needs. You can also
                  benefit from our additional offerings below:
                </div>
              </ul>
            </div>
          </div>
          <div className="pricing__process__container__content__bottom__left">
            <div className="pricing__process__container__content__bottom__left__top">
              Go Live
            </div>
            <div className="pricing__process__container__content__bottom__left__middle">
              <div className="pricing__process__container__content__bottom__left__middle__button">
                Pilot
              </div>
              <div className="pricing__process__container__content__bottom__left__middle__button">
                Support & Transition
              </div>
            </div>
            <div className="pricing__process__container__content__bottom__left__bottom">
              <ul>
                <li>
                  Once the product has gone through the User Acceptance Testing
                  stage, we successfully launch it while providing ongoing
                  support & maintenance during the Pilot phase.
                </li>
                <li>
                  After that, we can either transition everything to your team
                  or move to a monthly Support & Maintenance contract.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
