import React, { useEffect, useState } from "react";
import { Fade } from "react-reveal";
import { Link } from "react-router-dom";

export function HomeJumbotron({
  taglinesLine,
  taglines,
  matcherLine,
  matchers,
  info,
  img,
}) {
  const [taglineNo, setTaglineNo] = useState(0);

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
            {taglinesLine}{" "}
            {taglines
              .filter((tagline, i) => i === taglineNo)
              .map((tagline) => {
                console.log(tagline);
                return <span>{tagline}</span>;
              })}{" "}
            {matchers ? (
              <>
                {matcherLine}{" "}
                {matchers
                  ?.filter((matcher, i) => i === taglineNo)
                  .map((matcher) => {
                    console.log(matcher);
                    return <span>{matcher}</span>;
                  })}{" "}
              </>
            ) : null}
          </div>
        </Fade>
        <div className="container__jumbotron__left__info">
          <Fade>{info}</Fade>
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
          <img src={img} alt={img} />
        </Fade>
      </div>
    </div>
  );
}
