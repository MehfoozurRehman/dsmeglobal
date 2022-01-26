import React from "react";
import contactImg from "../assets/contactImg.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Input from "../components/Input";
import { Facebook, Instagram, Linkedin, Twitter } from "react-feather";

export default function ContactUs() {
  return (
    <>
      <div className="contact__section">
        <div className="contact__section__content">
          <div className="contact__section__content__left">
            <div className="contact__section__content__left__header">
              CONTACT <span>Information</span>
            </div>
            <div className="contact__section__content__left__content">
              <div className="contact__section__content__left__content__entry">
                <div className="contact__section__content__left__content__entry__heading">
                  Phone
                </div>
                <div className="contact__section__content__left__content__entry__content">
                  354 454 5344 343
                </div>
                <div className="contact__section__content__left__content__entry__content">
                  354 454 5344 343
                </div>
              </div>
              <div className="contact__section__content__left__content__entry">
                <div className="contact__section__content__left__content__entry__heading">
                  Email
                </div>
                <div className="contact__section__content__left__content__entry__content">
                  hello@J7.com
                </div>
                <div className="contact__section__content__left__content__entry__content">
                  hello@J7Group.com
                </div>
              </div>
              <div className="contact__section__content__left__content__entry">
                <div className="contact__section__content__left__content__entry__heading">
                  Head Office
                </div>
                <div className="contact__section__content__left__content__entry__content">
                  1st floor, DHA - Z Block,
                </div>
                <div className="contact__section__content__left__content__entry__content">
                  Plot # 33, Lahore, 54000, Pakistan
                </div>
              </div>
            </div>
          </div>
          <form className="contact__section__content__middle">
            <div className="contact__section__content__middle__header">
              <div className="contact__section__content__middle__sub__heading">
                Let us help you!
              </div>
              <div className="contact__section__content__middle__heading">
                GET IN <span>TOUCH!</span>
              </div>
            </div>
            <div className="contact__section__content__middle__form">
              <Input type="text" placeholder="Name" />
              <Input type="text" placeholder="Email" />
              <Input type="text" placeholder="Phone" />
              <Input variant="textarea" type="text" placeholder="Message" />
            </div>
            <button className="button" style={{ width: "80%" }}>
              Send
            </button>
          </form>
          <div className="contact__section__content__right">
            <img
              src={contactImg}
              alt="contactImg"
              className="contact__section__content__right__img"
            />
            <div className="contact__section__content__right__links">
              <a
                href="#"
                className="contact__section__content__right__links__link"
              >
                <Facebook size={20} color="currentColor" />
              </a>
              <a
                href="#"
                className="contact__section__content__right__links__link"
              >
                <Instagram size={20} color="currentColor" />
              </a>
              <a
                href="#"
                className="contact__section__content__right__links__link"
              >
                <Twitter size={20} color="currentColor" />
              </a>
              <a
                href="#"
                className="contact__section__content__right__links__link"
              >
                <Linkedin size={20} color="currentColor" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
