import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logoDark from "../assets/logoDark.png";
import Input from "./Input";

export default function Footer() {
  const [subscribe, setSubsribe] = useState("");
  const [errorEmail, setErrorEmaill] = useState(false);
  const [errorEmailMessage, setErrorEmailMessage] = useState("");
  return (
    <div className="footer__conatiner">
      <div className="footer__conatiner__content">
        <div className="footer__overlay__content__col">
          <Link
            to="/"
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
            className="footer__overlay__content__col__img__wrapper"
          >
            <img
              src={logoDark}
              alt="logoDark"
              className="footer__overlay__content__col__img"
            />
          </Link>
          <div className="footer__overlay__content__col__text">
            We Engineer Software Solutions and take care of all the technology
            so you can focus on what you do best.
          </div>
        </div>
        <div className="footer__overlay__content__col">
          <div className="footer__overlay__content__col__heading">
            Quicklinks
          </div>
          <a href="#about" className="footer__overlay__content__col__entry">
            About Us
          </a>
          <a href="#about" className="footer__overlay__content__col__entry">
            Portfolio
          </a>
          <a href="#about" className="footer__overlay__content__col__entry">
            Contact Us
          </a>
          <a href="#about" className="footer__overlay__content__col__entry">
            Pricing & Payments
          </a>
        </div>

        <div className="footer__overlay__content__col">
          <div className="footer__overlay__content__col__heading">
            Socail Media
          </div>
          <a href="#about" className="footer__overlay__content__col__entry">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="11.186"
              height="21.42"
              viewBox="0 0 11.186 21.42"
            >
              <path
                id="Path_11"
                data-name="Path 11"
                d="M87.259,21.421V11.662h3.332l.476-3.808H87.259V5.474c0-1.071.357-1.9,1.9-1.9h2.023V.119C90.71.119,89.52,0,88.211,0c-2.856,0-4.879,1.785-4.879,5V7.854H80v3.808h3.332v9.758Z"
                transform="translate(-80)"
                fill="#131313"
                fillRule="evenodd"
              />
            </svg>
            Facebook
          </a>
          <a href="#about" className="footer__overlay__content__col__entry">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21.421"
              height="17.375"
              viewBox="0 0 21.421 17.375"
            >
              <path
                id="Path_12"
                data-name="Path 12"
                d="M44.783,19.374a12.384,12.384,0,0,0,12.5-12.5v-.6a9.673,9.673,0,0,0,2.142-2.261,9.879,9.879,0,0,1-2.5.714,4.63,4.63,0,0,0,1.9-2.38,10.915,10.915,0,0,1-2.737,1.071A4.25,4.25,0,0,0,52.875,2a4.471,4.471,0,0,0-4.4,4.4,2.32,2.32,0,0,0,.119.952,12.3,12.3,0,0,1-9.044-4.641,4.557,4.557,0,0,0-.6,2.261,4.728,4.728,0,0,0,1.9,3.689,4.012,4.012,0,0,1-2.023-.6h0a4.349,4.349,0,0,0,3.57,4.284,3.669,3.669,0,0,1-1.19.119,2.025,2.025,0,0,1-.833-.119,4.508,4.508,0,0,0,4.165,3.094,8.985,8.985,0,0,1-5.474,1.9A3.3,3.3,0,0,1,38,17.232a11.232,11.232,0,0,0,6.783,2.142"
                transform="translate(-38 -2)"
                fill="#131313"
                fillRule="evenodd"
              />
            </svg>
            Twitter
          </a>
          <a href="#about" className="footer__overlay__content__col__entry">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21.421"
              height="21.42"
              viewBox="0 0 21.421 21.42"
            >
              <path
                id="Path_13"
                data-name="Path 13"
                d="M10.71,1.9a32.84,32.84,0,0,1,4.284.119,5.52,5.52,0,0,1,2.023.357A4.179,4.179,0,0,1,19.04,4.4,5.52,5.52,0,0,1,19.4,6.426c0,1.071.119,1.428.119,4.284a32.84,32.84,0,0,1-.119,4.284,5.52,5.52,0,0,1-.357,2.023,4.179,4.179,0,0,1-2.023,2.023,5.52,5.52,0,0,1-2.023.357c-1.071,0-1.428.119-4.284.119A32.84,32.84,0,0,1,6.426,19.4,5.52,5.52,0,0,1,4.4,19.04,4.179,4.179,0,0,1,2.38,17.017a5.52,5.52,0,0,1-.357-2.023c0-1.071-.119-1.428-.119-4.284a32.84,32.84,0,0,1,.119-4.284A5.52,5.52,0,0,1,2.38,4.4a4.274,4.274,0,0,1,.833-1.19A2.012,2.012,0,0,1,4.4,2.38a5.52,5.52,0,0,1,2.023-.357A32.84,32.84,0,0,1,10.71,1.9m0-1.9a35.162,35.162,0,0,0-4.4.119A7.347,7.347,0,0,0,3.689.6a4.659,4.659,0,0,0-1.9,1.19A4.659,4.659,0,0,0,.6,3.689,5.422,5.422,0,0,0,.119,6.307,35.162,35.162,0,0,0,0,10.71a35.162,35.162,0,0,0,.119,4.4A7.347,7.347,0,0,0,.6,17.731a4.659,4.659,0,0,0,1.19,1.9,4.659,4.659,0,0,0,1.9,1.19,7.347,7.347,0,0,0,2.618.476,35.162,35.162,0,0,0,4.4.119,35.162,35.162,0,0,0,4.4-.119,7.347,7.347,0,0,0,2.618-.476,4.993,4.993,0,0,0,3.094-3.094,7.347,7.347,0,0,0,.476-2.618c0-1.19.119-1.547.119-4.4a35.162,35.162,0,0,0-.119-4.4,7.347,7.347,0,0,0-.476-2.618,4.659,4.659,0,0,0-1.19-1.9A4.659,4.659,0,0,0,17.731.6,7.347,7.347,0,0,0,15.113.119,35.162,35.162,0,0,0,10.71,0m0,5.236A5.386,5.386,0,0,0,5.236,10.71,5.474,5.474,0,1,0,10.71,5.236m0,9.044a3.506,3.506,0,0,1-3.57-3.57,3.506,3.506,0,0,1,3.57-3.57,3.506,3.506,0,0,1,3.57,3.57,3.506,3.506,0,0,1-3.57,3.57M16.422,3.689A1.309,1.309,0,1,0,17.731,5a1.321,1.321,0,0,0-1.309-1.309"
                fill="#131313"
                fillRule="evenodd"
              />
            </svg>
            Instagram
          </a>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            e.target.reset();
            axios
              .post(`${process.env.REACT_APP_API_URL}api/v1/set_news_letter`, {
                email: subscribe,
              })
              .then(() => {
                console.log("NewsLetter Submitted");
              });
            console.log(subscribe);
          }}
          className="footer__overlay__content__col"
        >
          <div className="footer__overlay__content__col__heading">
            Newsletter
          </div>
          <div className="contact__section__content__middle__form">
            <Input
              type="text"
              required={true}
              placeholder="John@gmail.com"
              isError={errorEmail}
              errorMessage={errorEmailMessage}
              onChange={(e) => {
                if (e.target.value === "") {
                  setErrorEmaill(true);
                  setErrorEmailMessage("Please enter email");
                } else {
                  setErrorEmaill(false);
                  setErrorEmailMessage("");
                  setSubsribe(e.target.value);
                }
              }}
            />
          </div>
          <button
            className="button"
            style={{ width: "60%", marginTop: "1em", height: 40 }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
