import React, { useState } from "react";
import projectImg from "../assets/projectImg.png";
import ProjectCard from "../components/ProjectCard";

function PortfolioFilter({ title }) {
  return (
    <div className="portolio__filter__left__entry">
      <input
        type="radio"
        className="portolio__filter__left__entry__input"
        name="portolio__filter__left__entry__input"
      />
      <div className="portolio__filter__left__entry__content">{title}</div>
    </div>
  );
}

export default function Portfolio() {
  const [showImage, setShowImage] = useState(false);
  if (showImage) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
  return (
    <>
      {showImage ? (
        <div className="service__popup">
          <div className="service__popup__content">
            <button
              className="service__popup__close"
              onClick={() => {
                setShowImage(false);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-x"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <img
              src={projectImg}
              alt="projectImg"
              className="service__popup__img"
            />
          </div>
        </div>
      ) : null}

      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          marginTop: "10em",
        }}
      >
        <div className="services__main__container__content__heading">
          PORTFOLIO
        </div>
      </div>
      <div className="portolio__filter">
        <div className="portolio__filter__left">
          <PortfolioFilter title="UI DESIGN" />
          <PortfolioFilter title="WEBSITES" />
          <PortfolioFilter title="MOBILE APPS" />
          <PortfolioFilter title="LOGOS" />
        </div>
        <div className="portolio__filter__right">
          <input
            type="radio"
            className="portolio__filter__right__input"
            name="portolio__filter__left__entry__input"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30.459"
            height="28.283"
            viewBox="0 0 30.459 28.283"
          >
            <defs>
              <linearGradient
                id="linear-gradient"
                x1="0.5"
                x2="0.5"
                y2="1"
                gradientUnits="objectBoundingBox"
              >
                <stop offset="0" stop-color="#1db27b" />
                <stop offset="1" stop-color="#0f593e" />
              </linearGradient>
            </defs>
            <path
              id="Icon_ionic-ios-star"
              data-name="Icon ionic-ios-star"
              d="M31.553,13.165h-10L18.513,4.1a1.1,1.1,0,0,0-2.067,0l-3.039,9.07H3.338A1.091,1.091,0,0,0,2.25,14.253a.8.8,0,0,0,.02.184,1.045,1.045,0,0,0,.456.768L10.946,21,7.791,30.169a1.091,1.091,0,0,0,.374,1.224,1.052,1.052,0,0,0,.612.265,1.333,1.333,0,0,0,.68-.245L17.479,25.7,25.5,31.413a1.274,1.274,0,0,0,.68.245.977.977,0,0,0,.605-.265,1.078,1.078,0,0,0,.374-1.224L24.006,21l8.152-5.847.2-.17a1.141,1.141,0,0,0,.354-.727A1.151,1.151,0,0,0,31.553,13.165Z"
              transform="translate(-2.25 -3.375)"
              fill="url(#linear-gradient)"
            />
          </svg>
          OUR PRODUCTS
        </div>
      </div>
      <div className="service__details__projects">
        <ProjectCard setShowImage={setShowImage} />
        <ProjectCard setShowImage={setShowImage} />
        <ProjectCard setShowImage={setShowImage} />
        <ProjectCard setShowImage={setShowImage} />
        <ProjectCard setShowImage={setShowImage} />
        <ProjectCard setShowImage={setShowImage} />
        <ProjectCard setShowImage={setShowImage} />
        <ProjectCard setShowImage={setShowImage} />
        <ProjectCard setShowImage={setShowImage} />
        <ProjectCard setShowImage={setShowImage} />
        <ProjectCard setShowImage={setShowImage} />
        <ProjectCard setShowImage={setShowImage} />
        <ProjectCard setShowImage={setShowImage} />
        <ProjectCard setShowImage={setShowImage} />
        <ProjectCard setShowImage={setShowImage} />
        <ProjectCard setShowImage={setShowImage} />
        <ProjectCard setShowImage={setShowImage} />
        <ProjectCard setShowImage={setShowImage} />
        <ProjectCard setShowImage={setShowImage} />
        <ProjectCard setShowImage={setShowImage} />
        <ProjectCard setShowImage={setShowImage} />
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "2em" }}
      >
        <button className="button">Load More</button>
      </div>
    </>
  );
}