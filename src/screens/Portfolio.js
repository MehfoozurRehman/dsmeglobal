import React, { useState } from "react";
import { PortfolioFilter } from "../components/PortfolioFilter";
import { ProjectCard } from "../components/ProjectCard";
import { fetcher } from "../utils/functions";
import project from "../assets/projects.svg";
import { HomeJumbotron } from "../components/HomeJumbotron";
import useSWR from "swr";

export default function Portfolio() {
  const [showImage, setShowImage] = useState(false);
  const [noOfItems, setNoOfItems] = useState(9);
  const [showImagData, setShowImageData] = useState([]);
  const [filter, setFilter] = useState("");
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
  return (
    <>
      <div className="container">
        <HomeJumbotron
          taglinesLine="Portfolio"
          info={
            <>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At itaque
              minima eveniet vero porro expedita pariatur error reiciendis ut ab
              architecto quaerat similique, ipsum suscipit placeat quo rem cum!
              Rem id magni cum, voluptatibus harum possimus fugit praesentium
              nostrum illum.
            </>
          }
          img={project}
        />
      </div>
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
              loading="lazy"
              src={showImagData.image}
              alt={showImagData.title}
              className="service__popup__img"
            />
          </div>
        </div>
      ) : null}
      <div className="blog__page" style={{ marginTop: "-8em" }}>
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
          {error ? (
            <div>failed to load</div>
          ) : (
            data
              .filter((item, i) => (filter === "" ? i < noOfItems : i))
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
        {filter === "" && data.length > 6 ? (
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
