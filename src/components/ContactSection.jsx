import React, { useState } from "react";
import contactImg from "../assets/contact.svg";
import Input from "./Input";
import axios from "axios";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "react-feather";

export default function ContactSection() {
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
            <img
              loading="lazy"
              src={contactImg}
              alt="contactImg"
              className="contact__section__content__img"
            />
            <div className="contact__section__content__left__header">
              CONTACT <span>Information</span>
            </div>
            <div className="contact__section__content__left__content">
              <div className="contact__section__content__left__content__entry">
                <div className="contact__section__content__left__content__entry__icon">
                  <Phone size={30} color="currentColor" />
                </div>
                <div className="contact__section__content__left__content__entry__wrapper">
                  <div className="contact__section__content__left__content__entry__heading">
                    Phone
                  </div>
                  <div className="contact__section__content__left__content__entry__content">
                    +92-321-9652222
                  </div>
                </div>
              </div>
              <div className="contact__section__content__left__content__entry">
                <div className="contact__section__content__left__content__entry__icon">
                  <Mail size={30} color="currentColor" />
                </div>
                <div className="contact__section__content__left__content__entry__wrapper">
                  <div className="contact__section__content__left__content__entry__heading">
                    Email
                  </div>
                  <div className="contact__section__content__left__content__entry__content">
                    info@dsmeglobal.com
                  </div>
                </div>
              </div>
              <div className="contact__section__content__left__content__entry">
                <div className="contact__section__content__left__content__entry__icon">
                  <MapPin size={30} color="currentColor" />
                </div>
                <div className="contact__section__content__left__content__entry__wrapper">
                  <div className="contact__section__content__left__content__entry__heading">
                    Head Office
                  </div>
                  <div className="contact__section__content__left__content__entry__content">
                    33-Z, 1st Floor Commercial Plaza, DHA Phase III, Lahore,
                    Pakistan.
                  </div>
                </div>
              </div>
              <div className="contact__section__content__right__links">
                <a
                  href="https://www.facebook.com/dsmeglobal"
                  className="contact__section__content__right__links__link"
                  title="Facebook"
                >
                  <Facebook size={20} color="currentColor" />
                </a>
                <a
                  href="https://www.instagram.com/dsmeglobal"
                  className="contact__section__content__right__links__link"
                  title="Instagram"
                >
                  <Instagram size={20} color="currentColor" />
                </a>
                <a
                  href="https://www.linkedin.com/company/dsmegloballinks"
                  className="contact__section__content__right__links__link"
                  title="Linkedin"
                >
                  <Linkedin size={20} color="currentColor" />
                </a>
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
                  .post(
                    `${
                      import.meta.env.VITE_REACT_APP_API_URL
                    }api/v1/set_contact`,
                    {
                      username: name,
                      email: email,
                      phone: phone,
                      subject: subject,
                      message: message,
                    }
                  )
                  .then(() => {
                    console.log("data submited");
                  });
              }
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
              <div className="contact__section__content__middle__form__row">
                <Input
                  type="text"
                  label="Name"
                  placeholder="Type your name"
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
              </div>
              <div className="contact__section__content__middle__form__row">
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
              </div>
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
            <button className="contact__section__content__middle__form__button">
              Send
            </button>
            <iframe
              title="google-map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.806546077531!2d74.37747145100826!3d31.474507381293495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391907a286809427%3A0x66f8b31237e79ada!2sDSME%20Global%20Links!5e0!3m2!1sen!2s!4v1654765161734!5m2!1sen!2s"
              referrerPolicy="no-referrer-when-downgrade"
              className="contact__section__content__middle__form__map"
            />
          </form>
        </div>
      </div>
    </>
  );
}
