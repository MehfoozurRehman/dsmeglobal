import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Fade } from "react-reveal";
import { fetcher } from "../utils/functions";
import useSWR from "swr";

export default function WorkSection() {
  const [project, setProject] = useState([]);

  const { data, error } = useSWR(
    `${process.env.REACT_APP_API_URL}api/v1/get_work`,
    fetcher,
    { suspense: true }
  );
  useEffect(() => {
    data
      .filter((item, i) => i === 0)
      .map((item) => {
        setProject(item);
      });
  }, [data]);
  return (
    <>
      {
        <div className="work__section">
          <div className="work__section__header">
            <Fade>Checkout Our Work</Fade>
          </div>
          <div className="work__section__content">
            <div className="work__section__content__project">
              <div className="work__section__content__project__image__wrapper">
                <Fade>
                  <img
                    src={
                      "https://res.cloudinary.com/mehfoozurrehman/image/upload/q_50/" +
                      project.image
                    }
                    alt={project.title}
                    className="work__section__content__project__image"
                  />
                </Fade>
              </div>
              <div className="work__section__content__project__about">
                <div className="work__section__content__project__about__heading">
                  <div className="work__section__content__project__about__heading__top">
                    <Fade>{project.company}</Fade>
                  </div>
                  <div className="work__section__content__project__about__heading__bottom">
                    <Fade>{project.title}</Fade>
                  </div>
                </div>
                <div className="work__section__content__project__about__info">
                  <Fade>{project.description}</Fade>
                </div>
              </div>
            </div>
            <div className="work__section__content__selection">
              {error ? (
                <div>failed to load</div>
              ) : (
                data.map((item, i) => (
                  <div
                    className="work__section__content__selection__entry"
                    key={JSON.stringify(item)}
                  >
                    <input
                      type="radio"
                      name="work__section__content__selection__entry__input"
                      className="work__section__content__selection__entry__input"
                      onClick={() => {
                        setProject(item);
                      }}
                      defaultChecked={i === 0 ? true : false}
                    />
                    <Fade>
                      <img
                        src={
                          "https://res.cloudinary.com/mehfoozurrehman/image/upload/" +
                          item.logo
                        }
                        alt={item.title}
                        className="work__section__content__selection__entry__img"
                      />
                    </Fade>
                  </div>
                ))
              )}
            </div>
            <Link
              to="/portfolio"
              onClick={() => {
                window.scrollTo({ behavior: "smooth", top: 0 });
              }}
              className="work__section__content__button"
            >
              View Complete Portfolio
            </Link>
          </div>
        </div>
      }
    </>
  );
}
