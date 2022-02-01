import React, { useState } from "react";
import contactImg from "../assets/contactImg.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Input from "../components/Input";
import { Facebook, Instagram, Linkedin, Twitter } from "react-feather";
import axios from "axios";

export default function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errorName, setErrorName] = useState(false);
  const [errorNameMessage, setErrorNameMessage] = useState("");
  const [errorEmail, setErrorEmaill] = useState(false);
  const [errorEmailMessage, setErrorEmailMessage] = useState("");
  const [errorPhone, setErrorPhone] = useState(false);
  const [errorPhoneMessage, setErrorPhoneMessage] = useState("");
  const [errorSubject, setErrorSubject] = useState(false);
  const [errorSubjectMessage, setErrorSubjectMessage] = useState("");
  const [errorDescription, setErrorDescription] = useState(false);
  const [errorDescriptionMessage, setErrorDescriptionMessage] = useState("");
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
          <form
            onSubmit={(e) => {
              e.preventDefault();
              e.target.reset();
              if (name === "") {
                if (name === "") {
                  setErrorName(true);
                  setErrorNameMessage("Please enter message");
                }
              } else {
                axios
                  .post("http://localhost:9000/api/v1/set_contact", {
                    username: name,
                    email: email,
                    phone: phone,
                    subject: subject,
                    message: message,
                  })
                  .then(() => {
                    console.log("data submited");
                  });
              }
              console.log(name, email, phone, subject, message);
            }}
            className="contact__section__content__middle"
          >
            <div className="contact__section__content__middle__header">
              <div className="contact__section__content__middle__sub__heading">
                Let us help you!
              </div>
              <div className="contact__section__content__middle__heading">
                GET IN <span>TOUCH!</span>
              </div>
            </div>
            <div className="contact__section__content__middle__form">
              <Input
                type="text"
                placeholder="Name"
                required={true}
                isError={errorName}
                errorMessage={errorNameMessage}
                onChange={(e) => {
                  if (e.target.value === "") {
                    setErrorName(true);
                    setErrorNameMessage("Please enter name");
                  } else {
                    setErrorName(false);
                    setErrorNameMessage("");
                    setName(e.target.value);
                  }
                }}
              />
              <Input
                type="email"
                required={true}
                placeholder="Email"
                isError={errorEmail}
                errorMessage={errorEmailMessage}
                onChange={(e) => {
                  if (e.target.value === "") {
                    setErrorEmaill(true);
                    setErrorEmailMessage("Please enter email");
                  } else {
                    setErrorEmaill(false);
                    setErrorEmailMessage("");
                    setEmail(e.target.value);
                  }
                }}
              />
              <Input
                type="tel"
                placeholder="Phone"
                required={true}
                isError={errorPhone}
                errorMessage={errorPhoneMessage}
                onChange={(e) => {
                  if (e.target.value === "") {
                    setErrorPhone(true);
                    setErrorPhoneMessage("Please enter phone");
                  } else {
                    setErrorPhone(false);
                    setErrorPhoneMessage("");
                    setPhone(e.target.value);
                  }
                }}
              />
              <Input
                type="text"
                placeholder="Subject"
                required={true}
                isError={errorSubject}
                errorMessage={errorSubjectMessage}
                onChange={(e) => {
                  if (e.target.value === "") {
                    setErrorSubject(true);
                    setErrorSubjectMessage("Please enter subject");
                  } else {
                    setErrorSubject(false);
                    setErrorSubjectMessage("");
                    setSubject(e.target.value);
                  }
                }}
              />
              <Input
                variant="textarea"
                type="text"
                required={true}
                isError={errorDescription}
                errorMessage={errorDescriptionMessage}
                onChange={(e) => {
                  if (e.target.value === "") {
                    setErrorDescription(true);
                    setErrorDescriptionMessage("Please enter message");
                  } else {
                    setErrorDescription(false);
                    setErrorDescriptionMessage("");
                    setMessage(e.target.value);
                  }
                }}
                placeholder="Message"
              />
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
