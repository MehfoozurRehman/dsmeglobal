import React from "react";
import { HomeJumbotron } from "../components/HomeJumbotron";
import meet from "../assets/meet.svg";
import agilefirst from "../assets/agileFirst.svg";
import qualityOver from "../assets/qualityOver.svg";
import continuousChange from "../assets/continuousChange.svg";
import fouceOn from "../assets/fouceOn.svg";

function MeetUs() {
  return (
    <>
      <div className="container">
        <HomeJumbotron
          taglinesLine="Lets Get to"
          taglines={["Know Us", "Know Our Story"]}
          info="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore,
        culpa est? Quos iusto dolore culpa, veritatis quas minus quibusdam
        ad? Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Dolore, culpa est? Quos iusto dolore culpa, veritatis quas minus
        quibusdam ad?"
          img={meet}
        />
      </div>
      <div className="meetus__container__main">
        <div className="meetus__container__smallThings">
          <div className="meetus__container__smallThings__content">
            <div className="meetus__container__smallThings__heading">
              Small things. <span>Big difference</span>
            </div>
            <div className="meetus__container__smallThings__content__container">
              <div className="meetus__container__smallThings__left">
                <div className="meetus__container__smallThings__left__heading">
                  <span>Agile </span> first
                </div>
                <div className="meetus__container__smallThings__left__para">
                  For some people, Agile is dull. For us, it is the way to
                  adapt, deliver and grow.
                </div>
              </div>
              <div className="meetus__container__smallThings__right">
                <div className="meetus__container__smallThings__right__image">
                  <img src={agilefirst} alt="Agile first" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="meetus__containerOf__sub">
          <div className="meetus__container__sub">
            <div className="meetus__container__sub__content">
              <div className="meetus__container__sub__left">
                <div className="meetus__container__sub__left__image">
                  <img src={qualityOver} alt="Quality over quantity" />
                </div>
              </div>
              <div className="meetus__container__sub__right">
                <div className="meetus__container__sub__right__heading">
                  <span>Quality </span> over quantity
                </div>
                <div className="meetus__container__sub__right__para">
                  When it comes to our job, it's quality that matters. UX
                  research, code reviews, manual and automatic tests. No
                  exceptions.
                </div>
              </div>
            </div>
          </div>
          <div className="meetus__container__sub">
            <div
              className="meetus__container__sub__content"
              id="meetus__container__sub__content2"
            >
              <div className="meetus__container__sub__left">
                <div className="meetus__container__sub__right__heading">
                  Continuous <span>change</span>
                </div>
                <div className="meetus__container__sub__right__para">
                  Change is the only constant. We believe in that. Technology
                  switch? Sure thing! New frameworks and tools? More than
                  welcome.
                </div>
              </div>
              <div className="meetus__container__sub__right">
                <div className="meetus__container__sub__left__image">
                  <img src={continuousChange} alt="Continuous change" />
                </div>
              </div>
            </div>
          </div>
          <div className="meetus__container__sub">
            <div className="meetus__container__sub__content">
              <div className="meetus__container__sub__left">
                <div className="meetus__container__sub__left__image">
                  <img src={fouceOn} alt="Fouce on people" />
                </div>
              </div>
              <div className="meetus__container__sub__right">
                <div className="meetus__container__sub__right__heading">
                  Focus on <span>people</span>
                </div>
                <div className="meetus__container__sub__right__para">
                  When it comes to our job, it's quality that matters. UX
                  research, code reviews, manual and automatic tests. No
                  exceptions.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="meetus__container__stories">
          <div className="meetus__container__stories__content">
            <div className="meetus__container__stories__heading">
              See our <span>stories</span>
            </div>
            <div className="meetus__container__stories__para">
              Your passion is the part of our identity. See how #dsmepeople
              rock.
            </div>
            <div className="meetus__container__stories__card__container">
              <div className="meetus__container__stories__card">
                <div className="meetus__container__stories__card__image">
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                    alt="Stories card"
                  />
                </div>
                <div className="meetus__container__stories__card__text">
                  <div className="meetus__container__stories__card__heading">
                    Olivia Piper
                  </div>
                  <div className="meetus__container__stories__card__para">
                    Designer
                  </div>
                </div>
              </div>
              <div className="meetus__container__stories__card">
                <div className="meetus__container__stories__card__image">
                  <img
                    src="https://images.unsplash.com/photo-1522556189639-b150ed9c4330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                    alt="Stories card"
                  />
                </div>
                <div className="meetus__container__stories__card__text">
                  <div className="meetus__container__stories__card__heading">
                    Liam Benjamin
                  </div>
                  <div className="meetus__container__stories__card__para">
                    Designer
                  </div>
                </div>
              </div>
              <div className="meetus__container__stories__card">
                <div className="meetus__container__stories__card__image">
                  <img
                    src="https://images.unsplash.com/photo-1517256673644-36ad11246d21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                    alt="Stories card"
                  />
                </div>
                <div className="meetus__container__stories__card__text">
                  <div className="meetus__container__stories__card__heading">
                    Madison Joe
                  </div>
                  <div className="meetus__container__stories__card__para">
                    Designer
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MeetUs;
