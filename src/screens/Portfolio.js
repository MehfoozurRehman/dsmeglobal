import axios from "axios";
import React, { useEffect, useState } from "react";
import Loader from "../components/Loader";
import PortfolioFilter from "../components/PortfolioFilter";
import ProjectCard from "../components/ProjectCard";

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
                width="24"
                height="24"
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

      <div className="blog__page">
        <div className="blog__page__heading">PORTFOLIO</div>

        <div className="blog__page__filter">
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
          <PortfolioFilter
            title="Our Procucts"
            onChange={() => {
              setFilter("our product");
            }}
          />
        </div>
        <div className="blog__page__content">
          {projectData.length === 0 ? (
            <Loader />
          ) : (
            projectData
              .filter((item, i) => (filter === "" ? i < noOfItems : (i = i)))
              .map((item) => (
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
        {filter === "" && projectData.length > 6 ? (
          <div className="blog__page__content__button">
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
      </div>
    </>
  );
}
