import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import serviceDetailsImg from "../assets/serviceDetailsImg.png";
import projectImg from "../assets/projectImg.png";
import ProjectCard from "../components/ProjectCard";

export default function ServiceDetails({ setIsDark }) {
  const [showImage, setShowImage] = useState(false);
  if (showImage) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
  useEffect(() => {
    setIsDark(true);
  }, []);
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
      <div className="service__details__jumbotron">
        <div className="service__details__jumbotron__content">
          <div className="service__details__jumbotron__left">
            <img
              src={serviceDetailsImg}
              alt="serviceDetailsImg"
              className="service__details__jumbotron__left__img"
            />
          </div>
          <div className="service__details__jumbotron__right">
            <div className="service__details__jumbotron__right__heading">
              MOBILE APP DEVELOPMENT
            </div>
            <div className="service__details__jumbotron__right__info">
              Our team builds nimble and elegant apps for all smartphone
              platforms. Our engineers work closely with you to understand your
              specifications and develop apps that provide an intuitive end user
              experience. Our ongoing support ensures your app is ever-ready for
              your users.
            </div>
            <Link
              to="/pricing"
              className="service__details__jumbotron__right__button"
            >
              Order Now
            </Link>
          </div>
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
