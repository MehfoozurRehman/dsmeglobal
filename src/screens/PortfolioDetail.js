import React, { useState, useEffect } from "react";
import Portfolio__section from "../components/Portfolio__section";

export default function PortfolioDetail() {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(JSON.parse(window.localStorage.getItem("project")));
  }, []);

  return (
    <>
      <div
        className="portfolio__home__section"
        style={{ backgroundColor: data.theme }}
      >
        <div className="portfolio__home__section__content">
          <div className="portfolio__home__section__left">
            <div className="portfolio__home__section__left__heading">
              {data.title}
            </div>
          </div>
          <img
            loading="lazy"
            src={
              "https://res.cloudinary.com/mehfoozurrehman/image/upload/q_50/" +
              data.banner
            }
            alt={data.title}
            className="portfolio__home__section__right"
          />
        </div>
      </div>
      <div className="container" style={{ marginTop: "5em" }}>
        <Portfolio__section data={data} />
      </div>
    </>
  );
}
