import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function WorkSection({}) {
  const [project, setProject] = useState("Aida Pro");
  const [workData, setWorkData] = useState([]);
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}api/v1/get_work`).then((res) => {
      setWorkData(res.data);
    });
  }, []);
  return (
    <div className="work__section">
      <div className="work__section__header">
        <div className="work__section__header__bar"></div>
        <div className="work__section__header__content">
          <div className="work__section__header__content__sub__heading">
            Checkout
          </div>
          <div className="work__section__header__content__heading">
            Our Work
          </div>
        </div>
        <div className="work__section__header__bar"></div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1274.087"
          height="43.975"
          viewBox="0 0 1274.087 43.975"
        >
          <g
            id="Group_10463"
            data-name="Group 10463"
            transform="translate(1.509 1.744)"
          >
            <path
              id="Path_8530"
              data-name="Path 8530"
              d="M743.7,4310.92s228.353-1.3,387.208,0,125.76,25.433,248.21,5.191,201.878-33.254,350.8-21.687,284.614,36.146,284.614,36.146"
              transform="translate(-743.698 -4290.082)"
              fill="none"
              stroke="#54bd96"
              strokeLinecap="round"
              strokeWidth="3"
            />
            <path
              id="Path_8532"
              data-name="Path 8532"
              d="M743.7,4309.731s228.353,1.3,387.208,0,125.76-25.433,248.21-5.191,201.878,33.254,350.8,21.688,284.614-36.146,284.614-36.146"
              transform="translate(-743.698 -4290.082)"
              fill="none"
              stroke="#54bd96"
              strokeLinecap="round"
              strokeWidth="3"
            />
          </g>
        </svg>
      </div>
      <div className="work__section__content">
        {workData
          .filter((item) => item.title === project)
          .map((item) => (
            <div className="work__section__content__project" key={item._id}>
              <div className="work__section__content__project__image__wrapper">
                <img
                  src={process.env.REACT_APP_API_URL + item.image}
                  alt={item.title}
                  className="work__section__content__project__image"
                />
              </div>
              <div className="work__section__content__project__about">
                <div className="work__section__content__project__about__heading">
                  <div className="work__section__content__project__about__heading__top">
                    {item.company}
                  </div>
                  <div className="work__section__content__project__about__heading__bottom">
                    {item.title}
                  </div>
                </div>
                <div className="work__section__content__project__about__info">
                  {item.description}
                </div>
              </div>
            </div>
          ))}

        <div className="work__section__content__selection">
          {workData.map((item, i) => (
            <div className="work__section__content__selection__entry" key={i}>
              <input
                type="radio"
                name="work__section__content__selection__entry__input"
                className="work__section__content__selection__entry__input"
                onClick={() => {
                  setProject(item.title);
                }}
                defaultChecked={i === 0 ? true : false}
              />
              <img
                src={process.env.REACT_APP_API_URL + item.logo}
                alt=""
                className="work__section__content__selection__entry__img"
              />
            </div>
          ))}
        </div>
        <Link to="/portfolio" className="button__reverse">
          View Complete Portfolio
        </Link>
      </div>
    </div>
  );
}
