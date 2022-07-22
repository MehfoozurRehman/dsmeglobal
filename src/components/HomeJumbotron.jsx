import React, { useEffect, useState } from "react";
import { Bounce, Zoom } from "react-reveal";
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
      <Bounce left>
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
                  navigate("/quote");
                }}
                className="container__jumbotron__left__button__secondary"
              >
                Let's Talk
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
                Let’s work together
              </button>
            </div>
          ) : null}
        </div>
      </Bounce>
      <Zoom>
        <div className="container__jumbotron__right">
          {imgs ? (
            imgs
              .filter((item, i) => i === taglineNo)
              .map((item) => (
                <img
                  loading="lazy"
                  src={item}
                  alt={item}
                  key={JSON.stringify(item)}
                />
              ))
          ) : (
            <img loading="lazy" src={img} alt={img} />
          )}
        </div>
      </Zoom>
    </div>
  );
}
