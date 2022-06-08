import React, { useState } from "react";
import axios from "axios";
import Input from "./Input";
import { X } from "react-feather";
import ActionConfirm from "./ActionConfirm";

export default function GetQuatePopup({ setIsGetQuateOpen }) {
  const [submitted, setSubmited] = useState(false);
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
      {submitted ? (
        <ActionConfirm />
      ) : (
        <div className="apply__popup">
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
              setSubmited(true);
              setTimeout(() => {
                setSubmited(false);
                setIsGetQuateOpen(false);
              }, 3000);
            }}
            className="apply__popup__form"
          >
            <button
              className="apply__popup__close"
              onClick={() => {
                setIsGetQuateOpen(false);
              }}
            >
              <X size={25} color="currentColor" />
            </button>
            <div className="apply__popup__form__heading">Get a quate</div>
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
            <button className="apply__popup__form__button">
              Get an estimate
            </button>
          </form>
        </div>
      )}
    </>
  );
}
