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
      <div className="container__jumbotron__left">
        <Fade>
          <div
            className="container__jumbotron__left__heading"
            style={{ ...styleColor }}
          >
            {taglinesLine}{" "}
            {taglines
              ?.filter((tagline, i) => i === taglineNo)
              .map((tagline) => {
                return <span key={JSON.stringify(tagline)}>{tagline}</span>;
              })}{" "}
            {matchers ? (
              <>
                {matcherLine}{" "}
                {matchers
                  ?.filter((matcher, i) => i === taglineNo)
                  .map((matcher) => {
                    return <span key={JSON.stringify(matcher)}>{matcher}</span>;
                  })}{" "}
              </>
            ) : null}
          </div>
        </Fade>
        <div
          className="container__jumbotron__left__info"
          style={taglines?.length === 0 ? null : { marginTop: "2em" }}
        >
          <Fade>{info}</Fade>
        </div>
        {buttons ? (
          <div className="container__jumbotron__left__button">
            <Fade>
              <button
                onClick={() => {
                  navigate("/meet-us");
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
        ) : null}
      </div>
      <div className="container__jumbotron__right">
        {imgs ? (
          imgs
            .filter((item, i) => i === taglineNo)
            .map((item) => (
              <Fade key={JSON.stringify(item)}>
                <img src={item} alt={item} />
              </Fade>
            ))
        ) : (
          <Fade>
            <img src={img} alt={img} />
          </Fade>
        )}
      </div>
    </div>
  );
}
