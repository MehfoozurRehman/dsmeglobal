import React, { useState } from "react";
import { Link } from "react-router-dom";
import video from "../assets/video.mp4";
import mobileApplicationSvg from "../assets/mobileApplicationSvg.svg";
import webApplicationSvg from "../assets/webApplicationSvg.svg";
import aidaPro from "../assets/projects/aidaPro.png";
import signature from "../assets/projects/signature.png";
import j7 from "../assets/projects/j7.png";
import boulevardCatering from "../assets/projects/boulevardCatering.png";
import chenabClub from "../assets/projects/chenabClub.png";
import peervestGlobal from "../assets/projects/peervestGlobal.png";
import rlbProfessional from "../assets/projects/rlbProfessional.png";
import aidaProImg from "../assets/aidaProImg.png";
import utilitySvg from "../assets/utilitySvg.svg";
import socialSvg from "../assets/socialSvg.svg";
import arSvg from "../assets/arSvg.svg";
import enterpriseSvg from "../assets/enterpriseSvg.svg";
import commerceSvg from "../assets/e-commerceSvg.svg";
import lifeSvg from "../assets/lifeSvg.svg";
import contactImg from "../assets/contactImg.png";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Input from "../components/Input";
import { Facebook, Instagram, Linkedin, Twitter } from "react-feather";
import axios from "axios";

function HomeSectionCarouselEntry({
  subHeading,
  heading,
  buttonLabel,
  toPath,
  isRight,
}) {
  return (
    <div className="home__section__carousel__entry">
      <video src={video} autoPlay={"autoplay"} muted={true} loop={true} />
      <div className="home__section__carousel__entry__overlay">
        <div
          className={
            isRight
              ? "home__section__carousel__entry__overlay__content home__section__carousel__entry__overlay__content__right"
              : "home__section__carousel__entry__overlay__content"
          }
        >
          <div className="home__section__carousel__entry__overlay__content__sub__heading">
            {subHeading}
          </div>
          <div className="home__section__carousel__entry__overlay__content__heading">
            {heading}
          </div>
          <Link to={toPath ? toPath : "/"} className="button">
            {buttonLabel}
          </Link>
        </div>
      </div>
    </div>
  );
}

function FeatureSectionCarouselEntry({
  subHeading,
  heading,
  buttonLabel,
  toPath,
  svg,
  features,
}) {
  return (
    <div className="feature__section__entry">
      <div className="feature__section__entry__content">
        <div className="feature__section__entry__content__jumbotron">
          <div className="feature__section__entry__content__jumbotron__left">
            <div className="feature__section__entry__content__jumbotron__sub__heading">
              {subHeading}
            </div>
            <div className="feature__section__entry__content__jumbotron__heading">
              {heading}
            </div>
            <Link to={toPath ? toPath : "/"} className="button__reverse">
              {buttonLabel}
            </Link>
          </div>
          <div className="feature__section__entry__content__jumbotron__right">
            <img
              src={svg}
              alt={subHeading + heading}
              className="feature__section__entry__content__jumbotron__right__img"
            />
          </div>
        </div>
        <div className="feature__section__entry__content__feature__list">
          {features.map((feature) => (
            <div className="feature__section__entry__content__feature__list__entry">
              <img
                src={feature.svg}
                alt="feature__svg"
                className="feature__section__entry__content__feature__list__entry__img"
              />
              <span>{feature.title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [project, setProject] = useState("AidaPro");
  const projectSelection = [
    {
      title: "aidaPro",
      image: aidaPro,
    },
    {
      title: "signature",
      image: signature,
    },
    {
      title: "boulevardCatering",
      image: boulevardCatering,
    },
    {
      title: "chenabClub",
      image: chenabClub,
    },
    {
      title: "peervestGlobal",
      image: peervestGlobal,
    },
    {
      title: "j7",
      image: j7,
    },
    {
      title: "rlbProfessional",
      image: rlbProfessional,
    },
  ];
  const mobileApplicationFeatures = [
    {
      title: "Utility Apps",
      svg: utilitySvg,
    },
    {
      title: "Social Networking",
      svg: socialSvg,
    },
    {
      title: "AR Apps",
      svg: arSvg,
    },
    {
      title: "Enterprise Apps",
      svg: enterpriseSvg,
    },
    {
      title: "E-Commerce Apps",
      svg: commerceSvg,
    },
    {
      title: "LifeStyle",
      svg: lifeSvg,
    },
  ];

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
      <Carousel
        autoPlay={true}
        interval={4000}
        showArrows={false}
        showStatus={false}
        infiniteLoop={true}
      >
        <HomeSectionCarouselEntry
          subHeading="WE FIND"
          heading="OUR UNIQUE WAY"
          buttonLabel="View Our Work"
          toPath="/"
        />
        <HomeSectionCarouselEntry
          subHeading="WE THINK"
          heading="OUT OF THE BOX"
          isRight={true}
          buttonLabel="View Our Work"
          toPath="/"
        />
        <HomeSectionCarouselEntry
          subHeading="WE PREFER"
          heading="You Over Anything"
          buttonLabel="View Our Work"
          toPath="/"
        />
      </Carousel>
      <div className="into__section">
        <div className="into__section__wrapper">
          <div className="into__section__heading">
            WE DELIVER <span>SOLUTIONS</span>
          </div>
          <video
            src={video}
            className="into__section__video"
            autoPlay={"autoplay"}
            muted={true}
            loop={true}
          />
          <Link to="/" className="button">
            View All Services
          </Link>
        </div>
      </div>
      <div className="difference__section">
        <video src={video} autoPlay={"autoplay"} muted={true} />
        <div className="difference__section__overlay">
          <div className="difference__section__overlay__content">
            <div className="difference__section__overlay__sub__heading">
              WHAT MAKES US
            </div>
            <div className="difference__section__overlay__heading">
              DIFFERENT
            </div>
            <div className="difference__section__overlay__content__features">
              <div className="difference__section__overlay__content__features__entry">
                <svg
                  id="Group_837"
                  data-name="Group 837"
                  xmlns="http://www.w3.org/2000/svg"
                  width="99.558"
                  height="99.553"
                  viewBox="0 0 99.558 99.553"
                >
                  <defs>
                    <linearGradient
                      id="linear-gradient"
                      x1="0.5"
                      x2="0.5"
                      y2="1"
                      gradientUnits="objectBoundingBox"
                    >
                      <stop offset="0" stop-color="#1db27b" />
                      <stop offset="1" stop-color="#0f593e" />
                    </linearGradient>
                    <clipPath id="clip-path">
                      <rect
                        id="Rectangle_516"
                        data-name="Rectangle 516"
                        width="99.558"
                        height="99.553"
                        fill="url(#linear-gradient)"
                      />
                    </clipPath>
                  </defs>
                  <g
                    id="Group_836"
                    data-name="Group 836"
                    clip-path="url(#clip-path)"
                  >
                    <path
                      id="Path_1743"
                      data-name="Path 1743"
                      d="M101.669,219.266c-5.487,0-10.975-.024-16.462.025a1.678,1.678,0,0,1-1.759-1.11q-7.734-15.6-15.544-31.166a1.2,1.2,0,0,1,.332-1.735c2.623-2.327,5.262-4.657,8.535-6.008,8.154-3.367,15.712-2.375,22.45,3.458a5.881,5.881,0,0,0,4.214,1.56c4.665-.073,9.333-.058,14-.009a5.8,5.8,0,0,1,5.7,4.744,5.685,5.685,0,0,1-3.14,6.234,7.738,7.738,0,0,1-3,.643c-3.714.075-7.431.011-11.147.042a2.848,2.848,0,0,0-2.96,2.383,2.781,2.781,0,0,0,1.571,3.1,4.211,4.211,0,0,0,1.626.324c4.277.026,8.555.039,12.833.005a6.705,6.705,0,0,0,5.385-2.639q7.377-9.115,14.8-18.195c2.2-2.705,5.537-3.269,8.154-1.393a5.789,5.789,0,0,1,1.227,8.269c-5.647,8.169-11.273,16.356-17.081,24.41a16.769,16.769,0,0,1-14.055,7.045c-5.227.07-10.456.015-15.684.015"
                      transform="translate(-50.129 -131.372)"
                      fill="url(#linear-gradient)"
                    />
                    <path
                      id="Path_1744"
                      data-name="Path 1744"
                      d="M7.808,217.828a6.223,6.223,0,0,1,5.716,3.676c1.78,3.6,3.586,7.179,5.376,10.77q4.475,8.977,8.943,17.957c1.9,3.808.846,6.941-2.95,8.813-.89.439-1.773.894-2.666,1.326-2.18,1.056-3.6.584-4.676-1.565q-3.483-6.941-6.955-13.889-4.921-9.84-9.84-19.683C-.6,222.527-.2,221.28,2.5,219.955c1.122-.552,2.234-1.133,3.388-1.608a12.923,12.923,0,0,1,1.921-.519"
                      transform="translate(0 -161.359)"
                      fill="url(#linear-gradient)"
                    />
                    <path
                      id="Path_1745"
                      data-name="Path 1745"
                      d="M165.574,91.863a17.468,17.468,0,0,1,4.522,11.128c.053,1.034.05,2.073.016,3.108a2.972,2.972,0,0,1-3.176,3.164q-14.446.023-28.892,0a2.855,2.855,0,0,1-3.134-2.636c-.333-4.858.364-9.479,3.418-13.488.332-.435.7-.846,1.053-1.277a17.893,17.893,0,0,0,26.193,0"
                      transform="translate(-99.88 -68.049)"
                      fill="url(#linear-gradient)"
                    />
                    <path
                      id="Path_1746"
                      data-name="Path 1746"
                      d="M181.057,11.914A11.76,11.76,0,0,1,169.433,23.7,11.98,11.98,0,0,1,157.581,11.8,12,12,0,0,1,169.551,0a11.791,11.791,0,0,1,11.506,11.915"
                      transform="translate(-116.73 0)"
                      fill="url(#linear-gradient)"
                    />
                  </g>
                </svg>
                <span>OUR CUSTOMER</span>
              </div>
              <div className="difference__section__overlay__content__features__entry">
                <svg
                  id="Group_839"
                  data-name="Group 839"
                  xmlns="http://www.w3.org/2000/svg"
                  width="112.886"
                  height="92.596"
                  viewBox="0 0 112.886 92.596"
                >
                  <defs>
                    <linearGradient
                      id="linear-gradient"
                      x1="0.5"
                      x2="0.5"
                      y2="1"
                      gradientUnits="objectBoundingBox"
                    >
                      <stop offset="0" stop-color="#1db27b" />
                      <stop offset="1" stop-color="#0f593e" />
                    </linearGradient>
                    <clipPath id="clip-path">
                      <rect
                        id="Rectangle_517"
                        data-name="Rectangle 517"
                        width="112.886"
                        height="92.596"
                        fill="url(#linear-gradient)"
                      />
                    </clipPath>
                  </defs>
                  <g
                    id="Group_838"
                    data-name="Group 838"
                    clip-path="url(#clip-path)"
                  >
                    <path
                      id="Path_1747"
                      data-name="Path 1747"
                      d="M0,69.426q21.269,0,42.538,0c12.038,0,21.528-7.78,23.492-19.632A22.942,22.942,0,0,0,47.087,23.584a3.72,3.72,0,0,0-.533,0v9.527L26.648,16.531,46.48,0V10.05a34.166,34.166,0,0,1,10.635,2.632C69.7,18.276,77.255,27.88,79.251,41.5A36.21,36.21,0,0,1,49.975,81.973a43.324,43.324,0,0,1-7.217.645c-14.253.06-28.505.032-42.758.033Z"
                      fill="url(#linear-gradient)"
                    />
                    <path
                      id="Path_1748"
                      data-name="Path 1748"
                      d="M251.221,235.1v-9.926H224.54c1.551-1.167,2.911-2.131,4.207-3.176a40.736,40.736,0,0,0,8.429-9.237,1.671,1.671,0,0,1,1.605-.844c3.708.038,7.417.017,11.126.017h1.305v-9.951l20.094,16.558L251.221,235.1"
                      transform="translate(-158.42 -142.509)"
                      fill="url(#linear-gradient)"
                    />
                    <path
                      id="Path_1749"
                      data-name="Path 1749"
                      d="M35.676,64.405l10.351,8.626c-5.61,4.342-8.949,9.917-9.489,16.966C36,97.011,38.423,103,43.4,108.249H42.342c-4.737,0-9.474-.006-14.212.008a1.1,1.1,0,0,1-1.2-.665,36.112,36.112,0,0,1,8.12-42.68c.191-.168.393-.322.622-.507"
                      transform="translate(-16.375 -45.44)"
                      fill="url(#linear-gradient)"
                    />
                  </g>
                </svg>
                <span>AGILE & RESPONSIVE</span>
              </div>
              <div className="difference__section__overlay__content__features__entry">
                <svg
                  id="Group_841"
                  data-name="Group 841"
                  xmlns="http://www.w3.org/2000/svg"
                  width="90.165"
                  height="90.229"
                  viewBox="0 0 90.165 90.229"
                >
                  <defs>
                    <linearGradient
                      id="linear-gradient"
                      x1="0.5"
                      x2="0.5"
                      y2="1"
                      gradientUnits="objectBoundingBox"
                    >
                      <stop offset="0" stop-color="#1db27b" />
                      <stop offset="1" stop-color="#0f593e" />
                    </linearGradient>
                    <clipPath id="clip-path">
                      <rect
                        id="Rectangle_518"
                        data-name="Rectangle 518"
                        width="90.165"
                        height="90.229"
                        fill="url(#linear-gradient)"
                      />
                    </clipPath>
                  </defs>
                  <g
                    id="Group_840"
                    data-name="Group 840"
                    clip-path="url(#clip-path)"
                  >
                    <path
                      id="Path_1750"
                      data-name="Path 1750"
                      d="M65.377,83.608c-1.75-.145-4.6-.352-7.44-.633a3.025,3.025,0,0,0-2.638.837c-1.582,1.513-3.26,2.928-4.924,4.353a7.815,7.815,0,0,1-10.588-.005c-1.691-1.454-3.4-2.9-5.011-4.433a2.811,2.811,0,0,0-2.435-.751c-2.921.264-5.846.519-8.774.675-4.468.238-7.478-2.021-8.573-6.347-.623-2.462-1.186-4.941-1.854-7.39a2.432,2.432,0,0,0-.962-1.313c-2.624-1.631-5.3-3.183-7.946-4.771C.278,61.458-.981,57.6.79,53.332c1.018-2.455,2.064-4.9,3.015-7.381a2.645,2.645,0,0,0,0-1.742C2.837,41.692,1.767,39.215.743,36.72A7.864,7.864,0,0,1,4.231,26.336c2.352-1.4,4.726-2.766,7.046-4.217a2.837,2.837,0,0,0,1.1-1.385c1.007-2.959,1.934-5.946,2.881-8.925A7.983,7.983,0,0,1,23.34,6.437c3.275.263,6.548.554,9.826.77a2.086,2.086,0,0,0,1.332-.5c1.762-1.491,3.464-3.053,5.2-4.57a7.827,7.827,0,0,1,10.765,0c1.743,1.514,3.443,3.079,5.2,4.57a2.085,2.085,0,0,0,1.334.491c3.278-.217,6.552-.5,9.826-.773a7.934,7.934,0,0,1,8.236,5.958c.669,2.612,1.256,5.245,1.958,7.848a2.436,2.436,0,0,0,.982,1.3c2.655,1.654,5.359,3.23,8.037,4.847a7.875,7.875,0,0,1,3.377,10.336c-1.027,2.494-2.1,4.972-3.064,7.488a2.641,2.641,0,0,0,0,1.741c.952,2.481,2,4.924,3.017,7.38,1.762,4.257.5,8.113-3.448,10.5-2.644,1.6-5.313,3.156-7.933,4.792a2.443,2.443,0,0,0-.976,1.3c-.662,2.411-1.21,4.852-1.83,7.275-1.156,4.522-4.064,6.663-9.817,6.4M45.087,16.024A29.092,29.092,0,1,0,74.168,45.118,29.226,29.226,0,0,0,45.087,16.024"
                      transform="translate(0 0)"
                      fill="url(#linear-gradient)"
                    />
                    <path
                      id="Path_1751"
                      data-name="Path 1751"
                      d="M90.91,114.657a23.741,23.741,0,1,1,23.569,23.861A23.68,23.68,0,0,1,90.91,114.657m21.408,4.363-.554-.04a11.172,11.172,0,0,0-.863-1.114q-3.676-3.709-7.384-7.387a2.646,2.646,0,1,0-3.761,3.688q5.082,5.125,10.208,10.207a2.623,2.623,0,0,0,4.12-.026q7.733-7.7,15.422-15.442a3.61,3.61,0,0,0,.88-1.477,2.5,2.5,0,0,0-1.268-2.883,2.6,2.6,0,0,0-3.3.619q-6.319,6.292-12.607,12.616a9.4,9.4,0,0,0-.894,1.24"
                      transform="translate(-69.567 -69.655)"
                      fill="url(#linear-gradient)"
                    />
                  </g>
                </svg>
                <span>QUALITY</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Carousel
        autoPlay={true}
        interval={3000}
        showArrows={false}
        showStatus={false}
        infiniteLoop={true}
        className="into__section"
      >
        <FeatureSectionCarouselEntry
          subHeading="MOBILE"
          heading="APPLICATIONS"
          buttonLabel="View Our Work"
          toPath="/"
          svg={mobileApplicationSvg}
          features={mobileApplicationFeatures}
        />
        <FeatureSectionCarouselEntry
          subHeading="WEB"
          heading="APPLICATIONS"
          buttonLabel="View Our Work"
          toPath="/"
          svg={webApplicationSvg}
          features={mobileApplicationFeatures}
        />
      </Carousel>
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
                stroke-linecap="round"
                stroke-width="3"
              />
              <path
                id="Path_8532"
                data-name="Path 8532"
                d="M743.7,4309.731s228.353,1.3,387.208,0,125.76-25.433,248.21-5.191,201.878,33.254,350.8,21.688,284.614-36.146,284.614-36.146"
                transform="translate(-743.698 -4290.082)"
                fill="none"
                stroke="#54bd96"
                stroke-linecap="round"
                stroke-width="3"
              />
            </g>
          </svg>
        </div>
        <div className="work__section__content">
          <div className="work__section__content__project">
            <div className="work__section__content__project__image">
              <img src={aidaProImg} alt="" />
            </div>
            <div className="work__section__content__project__about">
              <div className="work__section__content__project__about__heading">
                <div className="work__section__content__project__about__heading__top">
                  CHECKOUT
                </div>
                <div className="work__section__content__project__about__heading__bottom">
                  OUR WORK
                </div>
              </div>
              <div className="work__section__content__project__about__info">
                AIDApro a community where Data/AI professionals and companies
                meet. A platform to share experiences, knowledge, ask questions,
                and find the latest Data and AI vacancies and projects. It will
                be an international specialized career and freelance platform
                for data science, artificial intelligence, data analytics, data
                engineering, and business intelligence jobs. Idea is to match
                Top AI-DATA rarefied talent with top companies. AIDApro a
                community where Data/AI professionals and companies meet. A
                platform to share experiences, knowledge, ask questions, and
                find the latest Data and AI vacancies and projects. It will be
                an international specialized career and freelance platform for
                data science, artificial intelligence, data analytics, data
                engineering, and business intelligence jobs. Idea is to match
                Top AI-DATA rarefied talent with top companies.
              </div>
            </div>
          </div>
          <div className="work__section__content__selection">
            {projectSelection.map((project) => (
              <div className="work__section__content__selection__entry">
                <input
                  type="radio"
                  name="work__section__content__selection__entry__input"
                  className="work__section__content__selection__entry__input"
                  onClick={() => {
                    setProject(project.title);
                  }}
                />
                <img
                  src={project.image}
                  alt=""
                  className="work__section__content__selection__entry__img"
                />
              </div>
            ))}
          </div>
          <Link to="/" className="button__reverse">
            View Complete Portfolio
          </Link>
        </div>
      </div>
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
            <button type="submit" className="button" style={{ width: "80%" }}>
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
