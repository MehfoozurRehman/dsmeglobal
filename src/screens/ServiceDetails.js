import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import useSWR from "swr";
import { fetcher } from "../utils/functions";

export default function ServiceDetails() {
  const [showImage, setShowImage] = useState(false);
  const [showImagData, setShowImageData] = useState([]);

  if (showImage) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  const { data, error } = useSWR(
    `${process.env.REACT_APP_API_URL}api/v1/get_project`,
    fetcher,
    { suspense: true }
  );

  let serviceData = JSON.parse(window.localStorage.getItem("servicesData"));
  let filter;
  serviceData.categories.map((item) => {
    filter = item.value;
  });

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
              loading="lazy"
              src={showImagData.image}
              alt={showImagData.title}
              className="service__popup__img"
            />
          </div>
        </div>
      ) : null}
      <div className="service__details__jumbotron">
        <div className="service__details__jumbotron__left">
          <img
            loading="lazy"
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
      <div className="blog__page">
        <div className="blog__page__content">
          {error ? (
            <div>failed to load</div>
          ) : (
            data?.map((item) => (
              <ProjectCard
                setShowImage={setShowImage}
                setShowImageData={setShowImageData}
                data={item}
                key={JSON.stringify(item)}
                filter={filter}
              />
            ))
          )}
        </div>
      </div>
    </>
  );
}
