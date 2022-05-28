import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import axios from "axios";
import Loader from "../components/Loader";

export default function ServiceDetails({ setIsDark }) {
  const [showImage, setShowImage] = useState(false);
  const [showImagData, setShowImageData] = useState([]);
  const [projectData, setProjectData] = useState([]);
  if (showImage) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
  useEffect(() => {
    setIsDark(true);
    axios
      .get(`${process.env.REACT_APP_API_URL}api/v1/get_project`)
      .then((res) => {
        setProjectData(res.data);
      });
  }, []);
  let serviceData = JSON.parse(window.localStorage.getItem("servicesData"));
  let filter;
  serviceData.categories.map((item) => {
    filter = item.value;
  });
  console.log(filter);
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
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-x"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <img
              src={showImagData.image}
              alt={showImagData.title}
              className="service__popup__img"
            />
          </div>
        </div>
      ) : null}
      <div className="service__details__jumbotron">
        <div className="service__details__jumbotron__content">
          <div className="service__details__jumbotron__left">
            <img
              src={
                "https://res.cloudinary.com/mehfoozurrehman/image/upload/q_50/" +
                serviceData.image
              }
              alt="serviceDetailsImg"
              className="service__details__jumbotron__left__img"
            />
          </div>
          <div className="service__details__jumbotron__right">
            <div className="service__details__jumbotron__right__heading">
              {serviceData.title}
            </div>
            <div className="service__details__jumbotron__right__info">
              {serviceData.description}
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
        {projectData.length === 0 ? (
          <Loader />
        ) : (
          projectData.map((item) => {
            return (
              <ProjectCard
                setShowImage={setShowImage}
                setShowImageData={setShowImageData}
                data={item}
                key={JSON.stringify(item)}
                filter={filter}
              />
            );
          })
        )}
      </div>
    </>
  );
}
