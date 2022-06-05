import React from "react";
import { Fade } from "react-reveal";
import { Link } from "react-router-dom";
import bannerImage1 from "../assets/bannerImage1.svg";

export function HomeJumbotron({}) {
  return (
    <div className="container__jumbotron">
      <div className="container__jumbotron__left">
        <div className="container__jumbotron__left__heading">
          <Fade>Quality Services you Really want</Fade>
        </div>
        <div className="container__jumbotron__left__info">
          <Fade>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore,
            culpa est? Quos iusto dolore culpa, veritatis quas minus quibusdam
            ad? Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Dolore, culpa est? Quos iusto dolore culpa, veritatis quas minus
            quibusdam ad?
          </Fade>
        </div>
        <div className="container__jumbotron__left__button">
          <Fade>
            <button
              onClick={() => {
                document.getElementById("about__section");
              }}
              className="container__jumbotron__left__button__secondary"
            >
              Learn more
            </button>
          </Fade>
          <Fade>
            <Link
              to="/portfolio"
              className="container__jumbotron__left__button__primary"
            >
              Our Work
            </Link>
          </Fade>
        </div>
      </div>
      <div className="container__jumbotron__right">
        <Fade>
          <img src={bannerImage1} alt="" />
        </Fade>
      </div>
    </div>
  );
}
