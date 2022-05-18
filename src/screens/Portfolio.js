import axios from "axios";
import React, { useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard";

function PortfolioFilter({ title, onChange, defaultChecked }) {
  return (
    <div className="portolio__filter__left__entry">
      <input
        type="radio"
        className="portolio__filter__left__entry__input"
        name="portolio__filter__left__entry__input"
        onChange={onChange}
        defaultChecked={defaultChecked}
      />
      <div className="portolio__filter__left__entry__content">{title}</div>
    </div>
  );
}

export default function Portfolio({ setIsDark }) {
  const [showImage, setShowImage] = useState(false);
  const [noOfItems, setNoOfItems] = useState(9);
  const [showImagData, setShowImageData] = useState([]);
  const [projectData, setProjectData] = useState([]);
  const [filter, setFilter] = useState("");
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
          <PortfolioFilter
            title="All"
            defaultChecked={true}
            onChange={() => {
              setFilter("");
            }}
          />
          <PortfolioFilter
            title="Web Apps"
            onChange={() => {
              setFilter("Web App Development");
            }}
          />
          <PortfolioFilter
            title="Mobile Apps"
            onChange={() => {
              setFilter("Mobile App Development");
            }}
          />
          <PortfolioFilter
            title="Ecommerce"
            onChange={() => {
              setFilter("Ecommerce Solutions");
            }}
          />
          <PortfolioFilter
            title="UI/UX Design"
            onChange={() => {
              setFilter("UI & UX Services");
            }}
          />
        </div>
        <div className="portolio__filter__right">
          <input
            type="radio"
            className="portolio__filter__right__input"
            name="portolio__filter__left__entry__input"
            onChange={() => {
              setFilter("our product");
            }}
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
                <stop offset="0" stopColor="#1db27b" />
                <stop offset="1" stopColor="#0f593e" />
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
        {projectData
          .filter((item, i) => (filter === "" ? i < noOfItems : (i = i)))
          .map((item) => (
            <ProjectCard
              setShowImage={setShowImage}
              setShowImageData={setShowImageData}
              data={item}
              key={JSON.stringify(item)}
              filter={filter}
            />
          ))}
      </div>
      {filter === "" ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "2em",
          }}
        >
          <button
            className="button"
            onClick={() => {
              setNoOfItems(noOfItems + noOfItems);
            }}
          >
            Load More
          </button>
        </div>
      ) : null}
    </>
  );
}
