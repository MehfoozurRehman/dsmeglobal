import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetcher } from "../utils/functions";
import useSWR from "swr";
import { Bounce, Fade, Zoom } from "react-reveal";

export function WorkSection() {
  const [project, setProject] = useState([]);

  const { data, error } = useSWR(
    `${import.meta.env.VITE_REACT_APP_API_URL}api/v1/get_work`,
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
            Flip through our <span>latest projects</span>
          </div>
          <div className="work__section__content">
            <div className="work__section__content__project">
              <div className="work__section__content__project__image__wrapper">
                <Fade right>
                  <img
                    loading="lazy"
                    src={
                      "https://res.cloudinary.com/mehfoozurrehman/image/upload/q_50/" +
                      project.image
                    }
                    alt={project.title}
                    className="work__section__content__project__image"
                  />
                </Fade>
              </div>
              <Bounce right>
                <div className="work__section__content__project__about">
                  <div className="work__section__content__project__about__heading">
                    <div className="work__section__content__project__about__heading__top">
                      {project.company}
                    </div>
                    <div className="work__section__content__project__about__heading__bottom">
                      {project.title}
                    </div>
                  </div>
                  <div className="work__section__content__project__about__info">
                    {project.description}
                  </div>
                </div>
              </Bounce>
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
                      title={
                        "work__section__content__selection__entry__input" +
                        item.title
                      }
                      onClick={() => {
                        setProject(item);
                      }}
                      defaultChecked={i === 0 ? true : false}
                    />
                    <Zoom>
                      <img
                        loading="lazy"
                        src={
                          "https://res.cloudinary.com/mehfoozurrehman/image/upload/" +
                          item.logo
                        }
                        alt={item.title}
                        className="work__section__content__selection__entry__img"
                      />
                    </Zoom>
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
