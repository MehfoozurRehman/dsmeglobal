import React from "react";
import {
  Dribbble,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "react-feather";
import { Fade } from "react-reveal";
import { Link } from "react-router-dom";
import useSWR from "swr";
import { fetcher } from "../utils/functions";
import logoDark from "../assets/logoDark.png";

export default function Footer() {
  return (
    <div className="footer__container">
      <div className="footer__container__content__wrapper">
        <div className="footer__container__content">
          <div className="footer__container__content__col">
            <Link
              to="/"
              onClick={() => {
                document.getElementById("Home").checked = true;
              }}
              className="header__content__logo"
            >
              <Fade>
                <img src={logoDark} alt="logo" />
              </Fade>
            </Link>
            <div className="footer__container__content__col__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              sunt officiis quod harum, in accusantium consectetur earum hic at
              quibusdam repellendus error nulla atque amet ea sequi porro labore
              numquam.
            </div>
          </div>
          <FooterServices />
          <FooterTopics />
          <div className="footer__container__content__col">
            <div className="footer__container__content__col__heading">
              Contact Us
            </div>
            <div className="footer__container__content__col__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              sunt officiis quod harum, in accusantium consectetur earum hic at
              quibusdam repellendus error nulla atque amet ea sequi porro labore
              numquam.
            </div>
          </div>
        </div>
        <div className="footer__container__awards">
          <img src="" alt="" />
        </div>
      </div>
      <div className="footer__container__content__bottom">
        <div className="footer__container__content__bottom__left">
          <div className="footer__container__content__bottom__text">
            © 2022 Miquido. All rights reserved.
          </div>
          <a
            href="#"
            className="footer__container__content__bottom__left__link"
          >
            Privacy Policy
          </a>
        </div>
        <div className="footer__container__content__bottom__right">
          <div className="footer__container__content__bottom__text">
            Follow us
          </div>
          <a
            href="#"
            className="footer__container__content__bottom__left__link"
          >
            <Linkedin size={20} color="currentcolor" strokeWidth={1.5} />
          </a>
          <a
            href="#"
            className="footer__container__content__bottom__left__link"
          >
            <Twitter size={20} color="currentcolor" strokeWidth={1.5} />
          </a>
          <a
            href="#"
            className="footer__container__content__bottom__left__link"
          >
            <Facebook size={20} color="currentcolor" strokeWidth={1.5} />
          </a>
          <a
            href="#"
            className="footer__container__content__bottom__left__link"
          >
            <Dribbble size={20} color="currentcolor" strokeWidth={1.5} />
          </a>
          <a
            href="#"
            className="footer__container__content__bottom__left__link"
          >
            <Instagram size={20} color="currentcolor" strokeWidth={1.5} />
          </a>
        </div>
      </div>
    </div>
  );
}

function FooterServices({}) {
  const { data, error } = useSWR(
    `${process.env.REACT_APP_API_URL}api/v1/get_service`,
    fetcher,
    { suspense: true }
  );
  return (
    <div className="footer__container__content__col">
      <div className="footer__container__content__col__heading">Services</div>

      {error ? (
        <div>failed to load</div>
      ) : (
        data.map((item) => (
          <Link
            onClick={() => {
              window.localStorage.setItem("servicesData", JSON.stringify(item));
              setTimeout(() => {
                window.scrollTo({ behavior: "smooth", top: 0 });
              }, 300);
            }}
            to="/service-details"
            key={JSON.stringify(item)}
            className="footer__container__content__col__link"
          >
            {item.title}
          </Link>
        ))
      )}
    </div>
  );
}
function FooterTopics({}) {
  const { data, error } = useSWR(
    `${process.env.REACT_APP_API_URL}api/v1/get_techonologies`,
    fetcher,
    { suspense: true }
  );
  return (
    <div className="footer__container__content__col">
      <div className="footer__container__content__col__heading">Services</div>

      {error ? (
        <div>failed to load</div>
      ) : (
        data.map((item) => (
          <a
            href="#"
            key={JSON.stringify(item)}
            className="footer__container__content__col__link"
          >
            {item.name}
          </a>
        ))
      )}
    </div>
  );
}
