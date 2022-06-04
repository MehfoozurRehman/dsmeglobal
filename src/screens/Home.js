import React from "react";
import { Link } from "react-router-dom";
import bannerImage1 from "../assets/bannerImage1.svg";

export default function Home() {
  return (
    <div className="container">
      <div className="container__jumbotron">
        <div className="container__jumbotron__left">
          <div className="container__jumbotron__left__heading">
            Quality Services you Really want
          </div>
          <div className="container__jumbotron__left__info">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore,
            culpa est? Quos iusto dolore culpa, veritatis quas minus quibusdam
            ad? Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Dolore, culpa est? Quos iusto dolore culpa, veritatis quas minus
            quibusdam ad?
          </div>
          <div className="container__jumbotron__button">
            <button
              onClick={() => {
                document.getElementById("about__section");
              }}
              className="container__jumbotron__left__button__secondary"
            >
              Learn more
            </button>
            <Link
              to="/portfolio"
              className="container__jumbotron__left__button__primary"
            >
              Our Work
            </Link>
          </div>
        </div>
        <div className="container__jumbotron__right">
          <img src={bannerImage1} alt="" />
        </div>
      </div>
    </div>
  );
}
