import React from "react";
import "../styles/MeetUs.scss";
import { HomeJumbotron } from "./HomeJumbotron";
import bannerImage from "../assets/bannerImage2.png";
import agilefirst from "../assets/agileFirst.png";
import qualityOver from "../assets/qualityOver.png";
import continuousChange from "../assets/continuousChange.png";
import fouceOn from "../assets/fouceOn.png";
import storiesCardImage from "../assets/storiesCardImage.png";

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
          img={bannerImage}
        />
      </div>
      <div className="meetus__container__main">
        <div className="meetus__container__smallThings">
          <div className="meetus__container__smallThings__content">
            <div className="meetus__container__smallThings__heading">
              Small things. Big difference
            </div>
            <div className="meetus__container__smallThings__content__container">
              <div className="meetus__container__smallThings__left">
                <div className="meetus__container__smallThings__left__heading">
                  Agile first
                </div>
                <div className="meetus__container__smallThings__left__para">
                  For some people, Agile is dull. For us, it is the way to
                  adapt, deliver and grow.
                </div>
              </div>
              <div className="meetus__container__smallThings__right">
                <div className="meetus__container__smallThings__right__image">
                  <img src={agilefirst} alt="Agile first picture" />
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
                  <img src={qualityOver} alt="Quality over quantity image" />
                </div>
              </div>
              <div className="meetus__container__sub__right">
                <div className="meetus__container__sub__right__heading">
                  Quality over quantity
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
                  Continuous change
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
                  Focus on people
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
              See our stories
            </div>
            <div className="meetus__container__stories__para">
              Your passion is the part of our identity. See how #dsmepeople
              rock.
            </div>
            <div className="meetus__container__stories__card__container">
              <div className="meetus__container__stories__card">
                <div className="meetus__container__stories__card__image">
                  <img src={storiesCardImage} alt="Stories card" />
                </div>
                <div className="meetus__container__stories__card__text">
                  <div className="meetus__container__stories__card__heading">
                    Abrar Khalid
                  </div>
                  <div className="meetus__container__stories__card__para">
                    Designer
                  </div>
                </div>
              </div>
              <div className="meetus__container__stories__card">
                <div className="meetus__container__stories__card__image">
                  <img src={storiesCardImage} alt="Stories card" />
                </div>
                <div className="meetus__container__stories__card__text">
                  <div className="meetus__container__stories__card__heading">
                    Abrar Khalid
                  </div>
                  <div className="meetus__container__stories__card__para">
                    Designer
                  </div>
                </div>
              </div>
              <div className="meetus__container__stories__card">
                <div className="meetus__container__stories__card__image">
                  <img src={storiesCardImage} alt="Stories card" />
                </div>
                <div className="meetus__container__stories__card__text">
                  <div className="meetus__container__stories__card__heading">
                    Abrar Khalid
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
