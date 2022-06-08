import React, { useEffect, useState } from "react";
import { Fade } from "react-reveal";
import { Link } from "react-router-dom";
import bannerImage1 from "../assets/bannerImage1.svg";

export function HomeJumbotron() {
  const [taglineNo, setTaglineNo] = useState(0);
  const taglines = ["services", "products", "customizations"];
  const matchers = ["want", "need", "deserve"];
  useEffect(() => {
    setTimeout(() => {
      setTaglineNo(taglineNo < taglines.length - 1 ? taglineNo + 1 : 0);
    }, 4100);
  }, [taglineNo]);

  return (
    <div className="container__jumbotron">
      <div className="container__jumbotron__left">
        <Fade>
          <div className="container__jumbotron__left__heading">
            Quality{" "}
            {taglines
              .filter((tagline, i) => i === taglineNo)
              .map((tagline) => {
                console.log(tagline);
                return <span>{tagline}</span>;
              })}{" "}
            you really{" "}
            {matchers
              .filter((matcher, i) => i === taglineNo)
              .map((matcher) => {
                console.log(matcher);
                return <span>{matcher}</span>;
              })}{" "}
          </div>
        </Fade>
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
