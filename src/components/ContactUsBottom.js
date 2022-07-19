import React, { useState } from "react";
import contactImg from "../assets/contact.svg";
import Input from "../components/Input";
import axios from "axios";

export default function ContactUsBottom() {
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
    <div style={{ marginTop: "8em" }}>
      <div className="contact__section">
        <div className="contact__section__content">
          <div className="contact__section__content__left">
            <img
              loading="lazy"
              src={contactImg}
              alt="contactImg"
              className="contact__section__content__img"
            />
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
                  .post(`${process.env.REACT_APP_API_URL}api/v1/set_contact`, {
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
                  label="Company Name (Optional)"
                  placeholder="Type your company name"
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
                  type="email"
                  required={true}
                  label="Email*"
                  placeholder=""
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
                  label="Mobile (Optional)"
                  placeholder=""
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
              </div>
              <Input
                type="text"
                label="Subject"
                placeholder=""
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
                label="How can we help you?"
                placeholder="Give us some details about your project"
              />
            </div>
            <button className="contact__section__content__middle__form__button">
              Let’s start a conversation
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
