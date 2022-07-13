import React from "react";
import img1 from "../assets/1.png";
import img2 from "../assets/2.png";
import img3 from "../assets/3.png";
import img4 from "../assets/4.png";
import img5 from "../assets/5.png";
import img6 from "../assets/6.png";
import { Link } from "react-router-dom";
import logoDark from "../assets/logo.svg";
import { Facebook, Instagram, Linkedin } from "react-feather";
import { FooterServices } from "./FooterServices";
import { FooterTopics } from "./FooterTopics";

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
              <img src={logoDark} alt="logo" />
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
              <div className="footer__container__content__col__text__heading">
                Phone
              </div>
              <div className="footer__container__content__col__text__data">
                <div className="footer__container__content__col__text__data__entry">
                  354 454 5344 343
                </div>
                <div className="footer__container__content__col__text__data__entry">
                  354 454 5344 343
                </div>
              </div>

              <div className="footer__container__content__col__text__data">
                <div className="footer__container__content__col__text__data__entry">
                  hello@J7.com
                </div>
                <div className="footer__container__content__col__text__data__entry">
                  hello@J7Group.com
                </div>
              </div>
              <div className="footer__container__content__col__text__data">
                <div className="footer__container__content__col__text__data__entry">
                  1st floor, DHA - Z Block, Plot # 33, Lahore, 54000, Pakistan
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__container__awards">
          <img src={img1} alt="/" />
          <img src={img2} alt="/" />
          <img src={img3} alt="/" />
          <img src={img4} alt="/" />
          <img src={img5} alt="/" />
          <img src={img6} alt="/" />
        </div>
      </div>
      <div className="footer__container__content__bottom">
        <div className="footer__container__content__bottom__container">
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
              href="https://www.facebook.com/dsmeglobal"
              className="footer__container__content__bottom__left__link"
              title="Facebook"
            >
              <Facebook size={20} color="currentColor" />
            </a>
            <a
              href="https://www.instagram.com/dsmeglobal"
              className="footer__container__content__bottom__left__link"
              title="Instagram"
            >
              <Instagram size={20} color="currentColor" />
            </a>
            <a
              href="https://www.linkedin.com/company/dsmegloballinks"
              className="footer__container__content__bottom__left__link"
              title="Linkedin"
            >
              <Linkedin size={20} color="currentColor" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
