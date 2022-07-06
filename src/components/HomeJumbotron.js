import React, { useEffect, useState } from "react";
import { Fade } from "react-reveal";
import { Link, useNavigate } from "react-router-dom";

export function HomeJumbotron({
  taglinesLine,
  taglines,
  matcherLine,
  matchers,
  info,
  img,
  buttons,
  imgs,
  styleColor,
  styleImage,
  talk,
  light,
}) {
  const [taglineNo, setTaglineNo] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setTaglineNo(taglineNo < taglines?.length - 1 ? taglineNo + 1 : 0);
    }, 4100);
  }, [taglineNo, taglines?.length]);

  return (
    <div className="container__jumbotron" style={{ ...styleImage }}>
      <Fade>
        <div className="container__jumbotron__left">
          <div
            className="container__jumbotron__left__heading"
            style={{ ...styleColor }}
          >
            <div className="container__jumbotron__left__heading__entry">
              {taglinesLine}{" "}
              {taglines
                ?.filter((tagline, i) => i === taglineNo)
                .map((tagline) => {
                  return <span key={JSON.stringify(tagline)}>{tagline}</span>;
                })}{" "}
            </div>
            <div className="container__jumbotron__left__heading__entry">
              {matchers ? (
                <>
                  {matcherLine}{" "}
                  {matchers
                    ?.filter((matcher, i) => i === taglineNo)
                    .map((matcher) => {
                      return (
                        <span key={JSON.stringify(matcher)}>{matcher}</span>
                      );
                    })}{" "}
                </>
              ) : null}
            </div>
          </div>
          <div
            className="container__jumbotron__left__info"
            style={
              light
                ? { color: "white", marginTop: "2em" }
                : taglines?.length !== 0
                ? { marginTop: "2em" }
                : null
            }
          >
            {info}
          </div>
          {buttons ? (
            <div className="container__jumbotron__left__button">
              <button
                onClick={() => {
                  navigate("/meet-us");
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
          ) : null}
          {talk ? (
            <div className="container__jumbotron__left__button">
              <button
                onClick={() => {
                  navigate("/quote");
                }}
                className="container__jumbotron__left__button__secondary"
              >
                Lets talk
              </button>
            </div>
          ) : null}
        </div>
      </Fade>
      <Fade>
        <div className="container__jumbotron__right">
          {imgs ? (
            imgs
              .filter((item, i) => i === taglineNo)
              .map((item) => (
                <img src={item} alt={item} key={JSON.stringify(item)} />
              ))
          ) : (
            <img src={img} alt={img} />
          )}
        </div>
      </Fade>
    </div>
  );
}
