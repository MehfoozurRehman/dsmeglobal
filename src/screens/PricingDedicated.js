import React, { useEffect, useState } from "react";
import directionPic from "../assets/te-direction.jpg";
import rightAngle from "../assets/chevron-right.svg";
import userPng from "../assets/personIcon.svg";
import { PricingFeatureEntry } from "../components/PricingFeatureEntry";
import { HomeJumbotron } from "../components/HomeJumbotron";
import teams from "../assets/teams.svg";
import { Box } from "react-feather";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import StoryPic from "../assets/fw-airlines.jpg";
import brandLogo from "../assets/6.png";
import clutch from "../assets/top-clutch.png";
import topSoftwarePic from "../assets/top-software.png";
import topMobileAppCompany from "../assets/top-mobile-app-development-company-badge-1.png";
import subtractPng from "../assets/subtract.png";
import softwareUsa from "../assets/software-usa.png";
import itrateco from "../assets/itrateco.png";
import fastestGrowingApp from "../assets/fastest-growing-app.png";
import designrush from "../assets/designrush.png";
import designWorkImageMob from "../assets/design-work-image-mob.png";
import appfuturaBadge from "../assets/appfutura-badge.jpg";
import softwaredev from "../assets/softwaredev.png";
import sdappfuturaBadge from "../assets/sdappfutura-badge.jpg";
import webappusfuturaBadge from "../assets/webappusfutura-badge.jpg";
import webappfuturaBadge from "../assets/webappfutura-badge.jpg";
import logoDark from "../assets/logoDark.svg";
import topAppPic from "../assets/topapp.jpg";
import teAvatar from "../assets/te-avatar.svg";
import teGoogle from "../assets/te-google-mailer.svg";
import teFigma from "../assets/te-figma-logo.svg";
import teZoom from "../assets/te-zoom-logo.svg";

export default function PricingDedicated() {
  const [slidesPerView, setSlidesPerView] = useState(3);
  const [slidesPerViewLogo, setSlidesPerViewLogo] = useState(4);
  const [showNavigation, setShowNavigation] = useState(true);

  function getSlidesPerView() {
    if (window.innerWidth < 400) {
      setSlidesPerView(1);
      setSlidesPerViewLogo(1);
    } else if (window.innerWidth < 500) {
      setSlidesPerView(1);
      setSlidesPerViewLogo(1);
    } else if (window.innerWidth < 750) {
      setSlidesPerView(2);
      setSlidesPerViewLogo(2);
    } else if (window.innerWidth < 1000) {
      setShowNavigation(false);
      setSlidesPerViewLogo(3);
    } else {
      setSlidesPerView(3);
      setSlidesPerViewLogo(4);
      setShowNavigation(true);
    }
  }
  useEffect(() => {
    getSlidesPerView();
    window.addEventListener("resize", getSlidesPerView);

    return () => {
      window.removeEventListener("resize", getSlidesPerView);
    };
  }, []);
  const DeliveryCardEntry1 = [
    "Web",
    "Mobile",
    "Enterprise Mobility",
    "Web Portals",
    "Process Automation",
    "UI/UX",
    "DevOps",
    "IoT",
    "Microsoft SharePoint",
    "Salesforce",
    "Blockchain",
    "Big Data & Analytics",
  ];
  const DeliveryCardEntry2 = [
    "Software Architecture",
    "Domain Knowledge",
    "Healthcare",
    "Insurance",
    "Real Estate",
    "Fintech",
    "EdTech",
    "Mobility & Logistics",
    "Media & Entertainment",
    "Field Force Automation",
    "Retail",
    "Technologies We Use",
  ];
  const DeliveryCardEntry3 = [
    "JavaScript",
    "Java",
    "DotNet",
    "PHP",
    "Ruby, Rails",
    "Azure",
    "Google Cloud",
    "React",
    "Angular",
    "Node.js",
    "MySQL",
    "mongoDB",
    "Android",
    "iOS",
    "WPF",
    "GraphQL",
    "IBM Watson",
    "React Native",
    "AWS",
    "VueJS",
    ".NET Core",
    "Xamarin",
    "Objective-C",
  ];
  return (
    <>
      <div className="container">
        <HomeJumbotron
          taglinesLine="Dedicated Development Teams"
          info="Work with a dedicated pool of technical resources for your software development needs. Hire top tech talent and quickly scale your delivery capacity."
          img={teams}
          talk={true}
        />
      </div>
      <div className="pricing__fitted__team">
        <div className="pricing__fitted__team__header">
          <div className="pricing__fitted__team__header__heading">
            Get A Perfectly Fitted Team
          </div>
          <div className="pricing__fitted__team__header__info">
            When you don't want to hire permanent resources, you can rely on our
            dedicated resources to either work as an independent extension or as
            part of your existing team, both on a partime/fulltime basis.
          </div>
        </div>
        <div className="pricing__fitted__team__content">
          <div className="pricing__fitted__team__content__entry">
            <div className="pricing__fitted__team__content__entry__heading">
              Full Service Standalone Team
            </div>
            <ul className="pricing__fitted__team__content__entry__list">
              <li>
                Not looking to build a complete software department but need
                tech resources on demand.
              </li>
              <li>
                Offers a complete setup where you get access to the best tech
                and management talent (developers, UI/UX experts).
              </li>
            </ul>
            <div className="pricing__fitted__team__content__entry__sub__heading">
              Suited best when:
            </div>
            <ul className="pricing__fitted__team__content__entry__list">
              <li>
                Developing new products without defocusing your core team (if
                exists)
              </li>
              <li>
                With evolving specifications based on feedbacks on features
              </li>
              <li>
                Not looking to go through a long-lasting & expensive hiring
                process.
              </li>
            </ul>
          </div>
          <div className="pricing__fitted__team__content__entry">
            <div className="pricing__fitted__team__content__entry__heading">
              Extension of Existing Teams
            </div>
            <ul className="pricing__fitted__team__content__entry__list">
              <li>
                Perfect solution when your current project initiatives need a
                few additional dedicated specialized resources.
              </li>
              <li>
                Our expert team members will consistently and cost effectively
                fill the gaps in your project needs.
              </li>
            </ul>
            <div className="pricing__fitted__team__content__entry__sub__heading">
              Suited best when:
            </div>
            <ul className="pricing__fitted__team__content__entry__list">
              <li>
                With their own in-house IT teams and established processes.
              </li>
              <li>That require extra resources to satisfy ad-hoc demand.</li>
              <li>
                Looking for resources experienced in latest technologies or
                domain-specific expertise.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="pricing__fitted__team">
        <div
          className="pricing__fitted__team__header"
          id="pricing__getting__started"
        >
          <div className="pricing__fitted__team__header__heading">
            How to Get Started?
          </div>
        </div>
        <div className="pricing__fitted__team__content">
          <div
            className="pricing__fitted__team__content__entry__box__one"
            id="pricing__fitted__team__content__entry"
          >
            <div
              className="pricing__fitted__team__content__entry__sub__heading"
              id="pricing__fitted__team__content__entry__sub__heading"
            >
              Suited best when:
            </div>
            <ul className="pricing__fitted__team__content__entry__list">
              <li>
                Tell us about your project, tech stack, and the kind of team you
                need.
              </li>
              <li>We will match your needs with the best available members.</li>
              <li>
                Conduct test trials to determine a good fit in-terms of
                technical background & communication skills.
              </li>
            </ul>
          </div>
          <div
            className="pricing__fitted__team__content__entry__box__one"
            id="pricing__fitted__team__content__entry"
          >
            <div
              className="pricing__fitted__team__content__entry__sub__heading"
              id="pricing__fitted__team__content__entry__sub__heading"
            >
              Suited best when:
            </div>
            <ul className="pricing__fitted__team__content__entry__list">
              <li>
                Tell us about your project, tech stack, and the kind of team you
                need.
              </li>
              <li>We will match your needs with the best available members.</li>
              <li>
                Conduct test trials to determine a good fit in-terms of
                technical background & communication skills.
              </li>
            </ul>
          </div>
          <div
            className="pricing__fitted__team__content__entry__box__one"
            id="pricing__fitted__team__content__entry"
          >
            <div
              className="pricing__fitted__team__content__entry__sub__heading"
              id="pricing__fitted__team__content__entry__sub__heading"
            >
              Suited best when:
            </div>
            <ul className="pricing__fitted__team__content__entry__list">
              <li>
                Tell us about your project, tech stack, and the kind of team you
                need.
              </li>
              <li>We will match your needs with the best available members.</li>
              <li>
                Conduct test trials to determine a good fit in-terms of
                technical background & communication skills.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="pricing__fitted__team">
        <div className="pricing__fitted__team__header">
          <div className="pricing__fitted__team__header__heading">
            Transparent Execution
          </div>
          <div className="pricing__fitted__team__header__info">
            We have entered a new era of uncertainty and unpredictability. To
            keep you well informed and updated regarding the progress of your
            project, we employ agile-based project management, with 100% online
            cloud-based tools to ensure round the clock visibility.
          </div>
        </div>
        <div className="pricing__fitted__team__content">
          <div className="pricing__transparent__execution__content__entry">
            <div className="pricing__transparent__execution__content__entry__box">
              <div className="pricing__transparent__execution__content__entry__box__icons__left">
                <div className="pricing__transparent__execution__content__entry__box__left">
                  <img src={userPng} alt="User Icon" />
                </div>
                <div className="pricing__transparent__execution__content__entry__box__right">
                  <img src={rightAngle} alt="right angle icon" />
                </div>
              </div>
              <div className="pricing__transparent__execution__content__entry__box__icons__middle">
                <div className="pricing__transparent__execution__content__entry__box__icons__middle__top">
                  <div className="pricing__transparent__execution__content__entry__box__icons__middle__top__icon">
                    <img src={directionPic} alt="DirectionPic" />
                  </div>
                  <div className="pricing__transparent__execution__content__entry__box__icons__middle__top__icon">
                    <img src={teAvatar} alt="DirectionPic" />
                  </div>
                </div>
                <div className="pricing__transparent__execution__content__entry__box__icons__middle__bottom">
                  Tasks are maintained on a daily basis. This allows you to get
                  a quick overview on where the team stands.
                </div>
              </div>
              <div className="pricing__transparent__execution__content__entry__box__icons__left">
                <div className="pricing__transparent__execution__content__entry__box__right">
                  <img src={rightAngle} alt="right angle icon" />
                </div>
                <div className="pricing__transparent__execution__content__entry__box__left">
                  <img src={logoDark} alt="User Icon" />
                </div>
              </div>
            </div>
            <div className="pricing__transparent__execution__content__entry__box">
              <div className="pricing__transparent__execution__content__entry__box__icons__left">
                <div className="pricing__transparent__execution__content__entry__box__left">
                  <img src={userPng} alt="User Icon" />
                </div>
                <div className="pricing__transparent__execution__content__entry__box__right">
                  <img src={rightAngle} alt="right angle icon" />
                </div>
              </div>
              <div className="pricing__transparent__execution__content__entry__box__icons__middle">
                <div className="pricing__transparent__execution__content__entry__box__icons__middle__top">
                  <div className="pricing__transparent__execution__content__entry__box__icons__middle__top__icon">
                    <img src={teGoogle} alt="GoogleMailerLogo" />
                  </div>
                  <div className="pricing__transparent__execution__content__entry__box__icons__middle__top__icon">
                    <img src={teFigma} alt="FigmaLogo" />
                  </div>
                </div>
                <div className="pricing__transparent__execution__content__entry__box__icons__middle__bottom">
                  Each team member posts a daily update on email/slack. This
                  includes tasks done today, tasks planned for tomorrow and
                  blockers.
                </div>
              </div>
              <div className="pricing__transparent__execution__content__entry__box__icons__left">
                <div className="pricing__transparent__execution__content__entry__box__right">
                  <img src={rightAngle} alt="right angle icon" />
                </div>
                <div className="pricing__transparent__execution__content__entry__box__left">
                  <img src={logoDark} alt="User Icon" />
                </div>
              </div>
            </div>
            <div className="pricing__transparent__execution__content__entry__box">
              <div className="pricing__transparent__execution__content__entry__box__icons__left">
                <div className="pricing__transparent__execution__content__entry__box__left">
                  <img src={userPng} alt="User Icon" />
                </div>
                <div className="pricing__transparent__execution__content__entry__box__right">
                  <img src={rightAngle} alt="right angle icon" />
                </div>
              </div>
              <div className="pricing__transparent__execution__content__entry__box__icons__middle">
                <div className="pricing__transparent__execution__content__entry__box__icons__middle__top">
                  <div className="pricing__transparent__execution__content__entry__box__icons__middle__top__icon">
                    <img src={teZoom} alt="ZoomLogo" />
                  </div>
                </div>
                <div className="pricing__transparent__execution__content__entry__box__icons__middle__bottom">
                  Depending on how involved the client wants to be, daily or
                  weekly scrum calls are set up to stay on top of what's going
                  on within the project.
                </div>
              </div>
              <div className="pricing__transparent__execution__content__entry__box__icons__left">
                <div className="pricing__transparent__execution__content__entry__box__right">
                  <img src={rightAngle} alt="right angle icon" />
                </div>
                <div className="pricing__transparent__execution__content__entry__box__left">
                  <img src={logoDark} alt="User Icon" />
                </div>
              </div>
            </div>
            <div className="pricing__transparent__execution__content__entry__box">
              <div className="pricing__transparent__execution__content__entry__box__icons__left">
                <div className="pricing__transparent__execution__content__entry__box__left">
                  <img src={userPng} alt="User Icon" />
                </div>
                <div className="pricing__transparent__execution__content__entry__box__right">
                  <img src={rightAngle} alt="right angle icon" />
                </div>
              </div>
              <div className="pricing__transparent__execution__content__entry__box__icons__middle">
                <div className="pricing__transparent__execution__content__entry__box__icons__middle__top">
                  <div className="pricing__transparent__execution__content__entry__box__icons__middle__top__icon">
                    <img src={teZoom} alt="GoogleMailerLogo" />
                  </div>
                </div>
                <div className="pricing__transparent__execution__content__entry__box__icons__middle__bottom">
                  On every Friday, we give you a live demo of work done during
                  that sprint.
                </div>
              </div>
              <div className="pricing__transparent__execution__content__entry__box__icons__left">
                <div className="pricing__transparent__execution__content__entry__box__right">
                  <img src={rightAngle} alt="right angle icon" />
                </div>
                <div className="pricing__transparent__execution__content__entry__box__left">
                  <img src={logoDark} alt="User Icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pricing__feature">
        <div className="pricing__feature__entry__reverse">
          Why Dedicated Teams with DSMEGlobal?
        </div>
        <PricingFeatureEntry
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="62.013"
              height="98.116"
              viewBox="0 0 62.013 98.116"
            >
              <g
                id="Group_12072"
                data-name="Group 12072"
                transform="translate(-891.301 -220.236)"
              >
                <path
                  id="Path_11649"
                  data-name="Path 11649"
                  d="M454.907,110.8a6.022,6.022,0,0,1-3.573-2.532,8.082,8.082,0,0,1-.958-2.953,7.078,7.078,0,0,0-1.337-3.721c-3.527-4.651-6.99-9.356-10.675-13.881a16.5,16.5,0,0,1-3.626-9.137c-.512-4.935-1.409-9.831-2.142-14.743a30.873,30.873,0,0,1-.451-3.119c-.131-2.84,1.349-4.7,4.409-5.7,4.354-1.415,8.578.372,10.856,4.628,1.628,3.041,2.242,6.413,3.075,9.708.281,1.111.481,2.242.754,3.354a6.285,6.285,0,0,0,4.379,3.843,3.134,3.134,0,0,0,2.57-.777c1.343-1.18,2.733-2.312,4-3.566a2.657,2.657,0,0,0,.751-1.734q-.088-5.553-.394-11.1a4.018,4.018,0,0,0-.844-2.072c-1.575-2.048-3.237-4.031-4.893-6.015-.876-1.05-1.614-1.123-2.988-.641a86.349,86.349,0,0,1-8.232,2.722,7.569,7.569,0,0,1-9.348-6.2,7.317,7.317,0,0,1,1.942-5.717,16.925,16.925,0,0,1,6.289-4.575,1.44,1.44,0,0,1,2.038.623c.372.753.071,1.464-.78,1.994-1.455.906-2.952,1.764-4.319,2.791a5.625,5.625,0,0,0-2.212,3.378,4.395,4.395,0,0,0,4.519,4.962A17.1,17.1,0,0,0,448,49.762c1.669-.512,3.28-1.219,4.91-1.854a4.963,4.963,0,0,1,6.222,1.627q2.336,2.853,4.672,5.7a6.706,6.706,0,0,1,1.674,4.078c.139,3.8.288,7.591.406,11.387a4.465,4.465,0,0,1-1.635,3.624c-1.49,1.3-2.946,2.648-4.485,3.89a5.27,5.27,0,0,1-5.3,1.053c-3.135-1.175-5.571-3.049-6.292-6.676a89.065,89.065,0,0,0-2.5-9.7c-.851-2.67-2.44-4.883-5.47-5.445A5.692,5.692,0,0,0,435.8,58.63a2.234,2.234,0,0,0-.71,2.356c.51,2.949,1.148,5.877,1.578,8.837.477,3.279.825,6.577,1.136,9.876a10.2,10.2,0,0,0,2.259,5.473Q445.488,92.1,450.839,99.1a10.457,10.457,0,0,1,2.426,6.112,2.74,2.74,0,0,0,2.974,2.724c.447.012.894.018,1.341,0,.8-.033,1.559.032,1.911.912s-.166,1.435-.752,1.962Z"
                  transform="translate(459.163 207.548)"
                  fill="#329d76"
                />
                <path
                  id="Path_11650"
                  data-name="Path 11650"
                  d="M464.394,110.851c-.027-.054-.04-.131-.085-.16a1.407,1.407,0,0,1-.646-1.81,1.514,1.514,0,0,1,1.629-.908q7.328.021,14.658.007c2.307,0,3.23-.929,3.231-3.253,0-2.938.02-5.875-.013-8.813a15.166,15.166,0,0,1,1.442-6.265,86.881,86.881,0,0,0,6.074-18.267,43.471,43.471,0,0,0-.123-15.7c-.15-.847-.324-1.691-.453-2.541a1.5,1.5,0,0,1,1.211-1.853c.817-.116,1.432.388,1.637,1.368a51.041,51.041,0,0,1,.921,17.305,61.094,61.094,0,0,1-3.691,13.417c-1.087,2.888-2.365,5.7-3.378,8.617a14.866,14.866,0,0,0-.727,4.288c-.106,2.806-.014,5.618-.018,8.428,0,3.306-1.023,4.778-4.116,6-.05.02-.079.091-.118.139Z"
                  transform="translate(459.063 207.501)"
                  fill="#329d76"
                />
                <path
                  id="Path_11651"
                  data-name="Path 11651"
                  d="M456.76,33.376c-1.964-1.606-3.545-3.293-3.691-5.836a6.339,6.339,0,0,1,1.106-4.072c2.108-3.059,5.144-3.719,9.566-2.093a17.943,17.943,0,0,1,.163-2.919,6.96,6.96,0,0,1,5.324-5.56,7.327,7.327,0,0,1,7.7,2.4,52.742,52.742,0,0,1,10.155,16.644c1.676,4.356,2.953,8.867,4.372,13.32a1.5,1.5,0,0,1-.98,2.139c-.829.214-1.51-.275-1.8-1.4a93.408,93.408,0,0,0-4.591-13.85,54.662,54.662,0,0,0-9.259-14.874,4.672,4.672,0,0,0-5.448-1.387,4.158,4.158,0,0,0-2.682,4.308,6.842,6.842,0,0,0,1.011,2.631,59.812,59.812,0,0,1,7.641,18.956c.492,2.3.706,4.657,1.1,6.98a10.541,10.541,0,0,0,.685,2.357c1.014,2.374,2.087,4.725,2.21,7.362.046.972-.395,1.564-1.19,1.669a1.363,1.363,0,0,1-1.654-1.319,17.866,17.866,0,0,0-2.445-7.277,36.3,36.3,0,0,0-13.873-14.306,6.5,6.5,0,0,0-5.058-.607c-.929.222-1.865.412-2.8.612-1.073.229-1.838-.144-2.072-1-.225-.823.3-1.56,1.378-1.8C453.26,34.085,454.909,33.762,456.76,33.376Zm15.89,10.853.188-.073c-.047-.31-.08-.623-.143-.93a57.792,57.792,0,0,0-3.5-11.18,12.143,12.143,0,0,0-1.834-3.639,38.381,38.381,0,0,0-5.231-4.462,4.036,4.036,0,0,0-5.407.919,3.692,3.692,0,0,0,.692,5.2q2.366,2.165,4.748,4.309c2.73,2.442,5.493,4.849,8.2,7.319C471.2,42.459,471.891,43.38,472.65,44.229Z"
                  transform="translate(459.105 207.624)"
                  fill="#329d76"
                />
              </g>
            </svg>
          }
          title="Perfect Match"
          content="We perfectly match a dedicated agile team with your technology & product requirements. They can either work using your development processes with your existing in-house (or external) teams or work independently."
        />
        <PricingFeatureEntry
          icon={
            <svg
              id="Group_12074"
              data-name="Group 12074"
              xmlns="http://www.w3.org/2000/svg"
              width="89.852"
              height="90.007"
              viewBox="0 0 89.852 90.007"
            >
              <path
                id="Path_11631"
                data-name="Path 11631"
                d="M234.61,118.9a1.932,1.932,0,0,1-.889-1.856q.025-35.329.014-70.656a3.409,3.409,0,0,1,.026-.7,1.257,1.257,0,0,1,1.282-1.107,1.224,1.224,0,0,1,1.321,1.145,8.321,8.321,0,0,1,.041,1.139q0,34.054,0,68.107v1.187h64.948V107.4c-.57.514-1.071.963-1.572,1.414-.477.432-.933.892-1.436,1.293a1.3,1.3,0,0,1-2.239-.916c-.148-1.573-.208-3.154-.293-4.734-.123-2.309-.272-4.619-.328-6.931a5.728,5.728,0,0,1,.376-2.209c1.734-4.34,3.534-8.654,5.293-12.985a3.483,3.483,0,0,0,.253-1.269q.021-15.509.008-31.021c0-.256-.027-.513-.047-.867h-1.076q-7.208,0-14.413,0c-1.68,0-2.042-.375-2.044-2.079V31.654H236.453c-.015.309-.044.618-.044.927,0,2.489,0,4.98-.007,7.47a2.65,2.65,0,0,1-.12,1.037,1.232,1.232,0,0,1-1.42.788,1.284,1.284,0,0,1-1.124-1.362c0-3.4-.011-6.8.005-10.193a1.3,1.3,0,0,1,1.362-1.4c.233-.014.468,0,.7,0q24.3,0,48.6-.021a3.092,3.092,0,0,1,2.387,1.009q8.174,8.231,16.4,16.406a3.028,3.028,0,0,1,.971,2.325q-.033,12.392-.012,24.782v1.026l.159.037c.13-.271.275-.535.39-.812q3.006-7.341,6.006-14.682,1.541-3.765,5.261-2.246Q318.488,57.766,321,58.8c2.355.974,3.128,2.748,2.179,5.084q-3.519,8.644-7.065,17.278c-.023.055-.053.105-.078.159-.443,1-1.112,1.358-1.9,1.012-.754-.331-.979-1.05-.595-2.012.663-1.655,1.347-3.3,2.019-4.95.584-1.429,1.164-2.86,1.775-4.365l-7.382-3.023c-3.8,9.286-7.58,18.516-11.4,27.838l7.36,3.013c.138-.3.279-.577.4-.866q2.474-6.042,4.946-12.086a4.3,4.3,0,0,1,.376-.788,1.311,1.311,0,0,1,2.41.885,3.6,3.6,0,0,1-.25.833c-1.864,4.571-3.69,9.16-5.641,13.695a5.8,5.8,0,0,1-1.924,2.312,4.952,4.952,0,0,0-2.117,4.858c.174,3.037.027,6.089.056,9.136a2.442,2.442,0,0,1-.833,2.086Zm52.031-85.037V46.442h12.595Zm24.333,31.614,7.39,3.02c.823-2.015,1.6-3.935,2.392-5.846a.835.835,0,0,0-.536-1.247c-1.892-.771-3.787-1.535-5.674-2.318a.778.778,0,0,0-1.141.458C312.6,61.48,311.813,63.426,310.975,65.481ZM298.249,98.632l.387,7.559,5.564-5.129Z"
                transform="translate(-233.721 -28.896)"
                fill="#329d76"
              />
              <path
                id="Path_11632"
                data-name="Path 11632"
                d="M240.293,71.333c0-1.611-.007-3.221,0-4.832.008-1.25.51-1.759,1.766-1.763,3.046-.01,6.091-.026,9.136.015a1.51,1.51,0,0,0,1.453-.729,6.874,6.874,0,0,1,.889-1.083,1.313,1.313,0,0,1,2.049,1.632c-.484.729-1.09,1.379-1.574,2.108a2.335,2.335,0,0,0-.4,1.183c-.034,2.723-.015,5.447-.019,8.17,0,1.54-.464,2.008-1.978,2.011q-4.655,0-9.312,0c-1.557,0-2.005-.442-2.008-1.967Q240.29,73.705,240.293,71.333Zm2.789-3.811v7.7h7.682V70.792c-.616.776-1.105,1.433-1.639,2.053a1.359,1.359,0,0,1-2.257.116c-.763-.726-1.5-1.477-2.238-2.235a1.4,1.4,0,0,1-.185-2.028c.59-.618,1.327-.581,2.09.123.44.4.863.829,1.332,1.282l1.994-2.58Z"
                transform="translate(-231.305 -16.536)"
                fill="#329d76"
              />
              <path
                id="Path_11633"
                data-name="Path 11633"
                d="M240.292,58.527c0-1.581,0-3.162,0-4.744,0-1.406.481-1.883,1.911-1.888,2.928-.008,5.857-.038,8.783.021a1.8,1.8,0,0,0,1.8-.911,4.718,4.718,0,0,1,.6-.758,1.389,1.389,0,0,1,1.952-.275,1.364,1.364,0,0,1,.13,1.964c-.443.618-.975,1.175-1.383,1.814a2.737,2.737,0,0,0-.472,1.335c-.044,2.692-.019,5.386-.023,8.08,0,1.593-.44,2.027-2.037,2.027q-4.7,0-9.4,0c-1.383,0-1.857-.471-1.862-1.836C240.288,61.746,240.292,60.137,240.292,58.527Zm9.568-3.815h-6.78v7.682h7.7V57.951c-.357.442-.611.755-.863,1.071s-.5.654-.762.963a1.362,1.362,0,0,1-2.256.157c-.785-.743-1.548-1.51-2.3-2.29a1.39,1.39,0,0,1-.122-2.03,1.341,1.341,0,0,1,2.022.134c.434.417.793.912,1.247,1.444Z"
                transform="translate(-231.304 -21.25)"
                fill="#329d76"
              />
              <path
                id="Path_11634"
                data-name="Path 11634"
                d="M240.294,83.645c0-1.639-.008-3.277,0-4.915.008-1.256.5-1.748,1.764-1.751q4.871-.01,9.74,0c1.256,0,1.781.494,1.786,1.738q.027,4.916,0,9.829c-.007,1.2-.525,1.711-1.73,1.718q-4.916.029-9.829,0c-1.241-.007-1.725-.535-1.732-1.795C240.287,86.862,240.294,85.253,240.294,83.645Zm10.509-3.9h-7.716v7.734H250.8Z"
                transform="translate(-231.305 -11.212)"
                fill="#329d76"
              />
              <path
                id="Path_11635"
                data-name="Path 11635"
                d="M270.471,52.823h13.515a4.759,4.759,0,0,1,.874.038,1.293,1.293,0,0,1,1.178,1.319,1.25,1.25,0,0,1-1.167,1.312,6.417,6.417,0,0,1-.959.064q-13.517,0-27.032,0c-1.48,0-2.1-.424-2.082-1.407.022-.934.632-1.327,2.068-1.327Z"
                transform="translate(-225.968 -20.096)"
                fill="#329d76"
              />
              <path
                id="Path_11636"
                data-name="Path 11636"
                d="M270.446,81.177H256.913a6.468,6.468,0,0,1-.964-.034,1.214,1.214,0,0,1-1.146-1.308,1.233,1.233,0,0,1,1.165-1.3,4.911,4.911,0,0,1,.791-.018q13.664,0,27.327,0a5.073,5.073,0,0,1,.791.019,1.249,1.249,0,0,1,1.16,1.32,1.224,1.224,0,0,1-1.18,1.293,9.475,9.475,0,0,1-.966.03Z"
                transform="translate(-225.967 -10.648)"
                fill="#329d76"
              />
              <path
                id="Path_11637"
                data-name="Path 11637"
                d="M270.415,65.665q6.847,0,13.692,0a3.63,3.63,0,0,1,.873.045,1.277,1.277,0,0,1,1.059,1.328,1.218,1.218,0,0,1-1.109,1.264,6.823,6.823,0,0,1-.96.063q-13.56.006-27.12,0c-1.449,0-2.039-.391-2.05-1.335s.61-1.369,2.013-1.369Z"
                transform="translate(-225.968 -15.373)"
                fill="#329d76"
              />
              <path
                id="Path_11638"
                data-name="Path 11638"
                d="M268.344,85.912q-5.884,0-11.769,0c-1.046,0-1.626-.375-1.756-1.1a1.253,1.253,0,0,1,.973-1.525,4.193,4.193,0,0,1,1.038-.109q11.463-.008,22.923,0a4.657,4.657,0,0,1,1.04.115,1.054,1.054,0,0,1,.923,1.2,2.432,2.432,0,0,1-.855,1.262c-.243.2-.725.153-1.1.155Q274.053,85.919,268.344,85.912Z"
                transform="translate(-225.971 -8.933)"
                fill="#329d76"
              />
              <path
                id="Path_11639"
                data-name="Path 11639"
                d="M267.649,60.207c-3.744,0-7.489.026-11.232-.033a2.108,2.108,0,0,1-1.444-.728,1.232,1.232,0,0,1,.9-1.86,5.51,5.51,0,0,1,.963-.049q10.794,0,21.59,0c.205,0,.41,0,.614.011a1.332,1.332,0,1,1-.067,2.654c-3.511.012-7.022.005-10.532.007Z"
                transform="translate(-225.98 -18.362)"
                fill="#329d76"
              />
              <path
                id="Path_11640"
                data-name="Path 11640"
                d="M262.794,42.247q-3.773,0-7.548,0a7.061,7.061,0,0,1-.963-.041,1.222,1.222,0,0,1-1.124-1.252,1.27,1.27,0,0,1,1.04-1.338,2.316,2.316,0,0,1,.61-.038q7.942,0,15.884,0c1.075,0,1.717.509,1.717,1.334s-.629,1.328-1.718,1.334C268.06,42.256,265.427,42.247,262.794,42.247Z"
                transform="translate(-226.572 -24.968)"
                fill="#329d76"
              />
              <path
                id="Path_11641"
                data-name="Path 11641"
                d="M260.351,73.065c-1.317,0-2.636.011-3.953,0-1.026-.01-1.6-.5-1.6-1.345,0-.811.517-1.34,1.5-1.353q4.083-.045,8.167,0a1.4,1.4,0,0,1,1.547,1.342c0,.8-.635,1.345-1.624,1.356C263.044,73.076,261.7,73.065,260.351,73.065Z"
                transform="translate(-225.968 -13.651)"
                fill="#329d76"
              />
            </svg>
          }
          title="Test Before You Hire"
          content="To establish confidence and demonstrate work quality, we offer a no-cost proof of concept to our clients whereby they test our resources with defined tasks. We only move forward, if you like our work during the trial."
        />
        <PricingFeatureEntry
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="127.524"
              height="98.593"
              viewBox="0 0 127.524 98.593"
            >
              <g
                id="Group_12054"
                data-name="Group 12054"
                transform="translate(-951.791 -616.706)"
              >
                <path
                  id="Path_11390"
                  data-name="Path 11390"
                  d="M74.74,218.544a3.156,3.156,0,0,1,3.249-1.762c9,.05,18.006.011,27.007.047a1.488,1.488,0,0,0,1.687-1.138c.8-2.081,1.793-4.089,2.713-6.123.165-.365.354-.717.61-1.235h-1.494q-8.709,0-17.422,0c-1.829,0-2.906-.939-2.9-2.5s1.079-2.469,2.924-2.471c7.01,0,14.021-.013,21.033.014a2.105,2.105,0,0,0,1.873-.882c8.258-10.383,18.907-16.708,32.078-18.569a49.323,49.323,0,0,1,55.28,39.626c5.006,25.8-11.766,51.714-37.446,57.168-20.126,4.275-36.824-1.975-49.946-17.789a2.04,2.04,0,0,0-1.773-.839c-11.407.025-22.815,0-34.224.041a3.163,3.163,0,0,1-3.251-1.762v-1.492a3.154,3.154,0,0,1,3.248-1.764c10.2.048,20.4.025,30.6.023.431,0,.861-.038,1.446-.063a50,50,0,0,1-6.4-21.854h-1.288c-2.695,0-5.389.016-8.084-.007a2.483,2.483,0,1,1,.032-4.96c.539-.013,1.079,0,1.618,0h7.622l1.161-8.474h-1.331c-8.458,0-16.916-.027-25.372.025a3.159,3.159,0,0,1-3.249-1.764Zm78.16,58.511a44.32,44.32,0,1,0-44.3-44.365A44.479,44.479,0,0,0,152.9,277.056Z"
                  transform="translate(877.051 433.269)"
                  fill="#329d76"
                />
                <path
                  id="Path_11392"
                  data-name="Path 11392"
                  d="M74.74,218.865a3.128,3.128,0,0,1,3.249-1.764c4.1.073,8.211.021,12.317.029,1.8,0,2.881.979,2.849,2.543-.032,1.5-1.1,2.419-2.849,2.423-4.1.007-8.211-.047-12.316.027a3.136,3.136,0,0,1-3.251-1.762Z"
                  transform="translate(877.051 459.837)"
                  fill="#329d76"
                />
                <path
                  id="Path_11394"
                  data-name="Path 11394"
                  d="M96.87,228.016a38.578,38.578,0,1,1,38.495,38.572A38.607,38.607,0,0,1,96.87,228.016Zm4.985-.095A33.592,33.592,0,1,0,135.5,194.415,33.728,33.728,0,0,0,101.855,227.921Z"
                  transform="translate(894.518 437.997)"
                  fill="#329d76"
                />
                <path
                  id="Path_11396"
                  data-name="Path 11396"
                  d="M137.345,217.945c-3.026,0-6.051.014-9.079-.011a1.728,1.728,0,0,0-1.56.712,4.892,4.892,0,0,1-5.613,1.476,4.8,4.8,0,0,1-3.133-4.747,2.579,2.579,0,0,0-.932-2.253c-1.158-1.066-2.255-2.2-3.346-3.335a2.515,2.515,0,1,1,3.528-3.561c1.258,1.2,2.437,2.489,3.722,3.663a2.339,2.339,0,0,0,1.487.574,5.389,5.389,0,0,1,4.489,1.966,1.989,1.989,0,0,0,1.362.522c6.051.034,12.1.016,18.156.029a2.475,2.475,0,0,1,.966,4.806,4.3,4.3,0,0,1-1.342.152C143.148,217.953,140.248,217.945,137.345,217.945Z"
                  transform="translate(907.065 450.544)"
                  fill="#329d76"
                />
                <path
                  id="Path_11397"
                  data-name="Path 11397"
                  d="M117.043,225.268a2.483,2.483,0,0,1,4.965-.014,2.483,2.483,0,1,1-4.965.014Z"
                  transform="translate(910.44 464.352)"
                  fill="#329d76"
                />
                <path
                  id="Path_11398"
                  data-name="Path 11398"
                  d="M119.578,201.349a2.432,2.432,0,0,1-2.535-2.451,2.483,2.483,0,0,1,4.965-.107A2.437,2.437,0,0,1,119.578,201.349Z"
                  transform="translate(910.44 443.489)"
                  fill="#329d76"
                />
                <path
                  id="Path_11399"
                  data-name="Path 11399"
                  d="M108.79,212.08a2.431,2.431,0,0,1-2.5,2.487,2.483,2.483,0,0,1-.007-4.965A2.431,2.431,0,0,1,108.79,212.08Z"
                  transform="translate(900.01 453.92)"
                  fill="#329d76"
                />
              </g>
            </svg>
          }
          title="Immediate Starts"
          content="You don’t need to go through the stress of recruitment, infrastructure setup, deal with various staffing risks & problems or lose focus on your existing projects. We help you ramp up and get started on your project immediately."
        />
        <PricingFeatureEntry
          icon={
            <svg
              id="Group_12076"
              data-name="Group 12076"
              xmlns="http://www.w3.org/2000/svg"
              width="106.32"
              height="115.446"
              viewBox="0 0 106.32 115.446"
            >
              <path
                id="Path_11611"
                data-name="Path 11611"
                d="M82.945,62.892a120.612,120.612,0,0,1-46.719-9.434q-1.159-.5-2.294-1.053a5.8,5.8,0,1,1,4.812-10.55A100.6,100.6,0,0,0,64.9,49.73a117.1,117.1,0,0,0,25.421,1.3,107.041,107.041,0,0,0,29.2-5.575c3.065-1.061,6.044-2.373,9.045-3.615a5.814,5.814,0,0,1,8.095,4,5.631,5.631,0,0,1-3.459,6.638c-5.181,2.05-10.364,4.164-15.694,5.754A121.419,121.419,0,0,1,82.945,62.892Zm-1.328-2.84c15.117-.015,27.942-1.879,40.371-6.117,3.43-1.169,6.768-2.622,10.112-4.031a2.832,2.832,0,0,0,1.754-3.369,2.783,2.783,0,0,0-2.734-2.342,6.109,6.109,0,0,0-2.288.621,105.35,105.35,0,0,1-33.152,8.628,119.836,119.836,0,0,1-25.354-.164,107.791,107.791,0,0,1-26.165-6.148c-2.216-.836-4.37-1.833-6.563-2.73a3.009,3.009,0,0,0-3.983,1.451,2.966,2.966,0,0,0,1.435,3.984c.3.163.617.3.931.445A114.4,114.4,0,0,0,81.617,60.052Z"
                transform="translate(-30.514 -11.416)"
                fill="#329d76"
              />
              <path
                id="Path_11612"
                data-name="Path 11612"
                d="M30.531,81.233c.067-1.833,1.317-3.607,3.608-4.668a105.958,105.958,0,0,1,21.145-7.143,126.906,126.906,0,0,1,34.324-3.041,118.745,118.745,0,0,1,40.9,9c.951.4,1.9.815,2.823,1.271a5.8,5.8,0,1,1-4.9,10.513,97.789,97.789,0,0,0-19.419-6.522,115.764,115.764,0,0,0-32.061-2.573,107.3,107.3,0,0,0-32.974,6.947c-1.852.718-3.644,1.589-5.492,2.317C34.587,88.87,30.528,86.107,30.531,81.233ZM87.844,69.05c-14.893-.005-25.419,1.3-35.755,4.049a102.879,102.879,0,0,0-16.705,5.977,3.137,3.137,0,0,0-2.1,2.759c-.134,2.446,2.231,3.835,4.686,2.7a104.477,104.477,0,0,1,33.541-8.865,119.189,119.189,0,0,1,25.458.135,107.446,107.446,0,0,1,25.079,5.753c2.58.945,5.091,2.08,7.639,3.115a3.013,3.013,0,0,0,4-1.4,2.955,2.955,0,0,0-1.379-4c-.639-.343-1.309-.629-1.975-.919A112.234,112.234,0,0,0,87.844,69.05Z"
                transform="translate(-30.508 -2.248)"
                fill="#329d76"
              />
              <path
                id="Path_11613"
                data-name="Path 11613"
                d="M83.669,57.415q23.392,0,46.783,0c3.3,0,5.5,1.615,6.21,4.517a5.77,5.77,0,0,1-5.132,7.028c-.5.033-1,.038-1.494.038q-46.381,0-92.762.007a7.03,7.03,0,0,1-4.172-.968A5.8,5.8,0,0,1,30.736,61.7a5.622,5.622,0,0,1,5.229-4.253c1.531-.062,3.065-.034,4.6-.034Zm-.04,8.8h46.452c2.5,0,3.932-1.09,3.938-3S132.59,60.2,130.091,60.2h-92.9c-.345,0-.691-.012-1.034.012a3,3,0,0,0-.352,5.953,7.942,7.942,0,0,0,1.376.048Z"
                transform="translate(-30.509 -5.494)"
                fill="#329d76"
              />
              <path
                id="Path_11614"
                data-name="Path 11614"
                d="M66.184,39.346c-.083-3.29-.394-6.682,3.29-8.483-3.065-2.437-3.964-4.76-2.974-7.556a5.811,5.811,0,0,1,5.685-3.852,5.638,5.638,0,0,1,5.333,4.14c.59,2.121.527,4.949-3.027,7.217A5.535,5.535,0,0,1,77.5,34.483c.275,1.568.263,3.186.384,4.878.224.044.516.083.8.16a3.829,3.829,0,0,1,2.559,5.441Q78.358,50.319,75.147,55.5a3.763,3.763,0,0,1-6.384-.042c-2.087-3.385-4.072-6.839-5.986-10.328a3.856,3.856,0,0,1,2.648-5.638C65.642,39.436,65.863,39.4,66.184,39.346ZM74.99,38.19c0-.614.007-1.227,0-1.84a3.011,3.011,0,1,0-6.007-.026c-.018,1.418.015,2.837-.011,4.254-.021,1.107-.52,1.578-1.632,1.621-.345.012-.692-.021-1.034.011a1.114,1.114,0,0,0-.979,1.774q2.774,4.893,5.634,9.739c.559.942,1.464.963,2.015.034q2.9-4.883,5.689-9.836a1.1,1.1,0,0,0-.964-1.71c-.3-.033-.613-.005-.919-.011-1.3-.027-1.766-.5-1.786-1.826C74.982,39.646,74.991,38.918,74.99,38.19Zm-.005-12.814a3.009,3.009,0,1,0-6.009.005,3,3,0,1,0,6.009-.005Z"
                transform="translate(-18.826 -19.454)"
                fill="#329d76"
              />
              <path
                id="Path_11615"
                data-name="Path 11615"
                d="M77.772,94.456c.01,3.06.462,6.286-2.976,8.251a6.081,6.081,0,0,1,2.919,6.1,5.559,5.559,0,0,1-2.034,3.736,5.826,5.826,0,0,1-8.144-.7,6.183,6.183,0,0,1,1.558-9.129c-3.294-1.912-3-5.1-2.889-8.27A4.235,4.235,0,0,1,62.539,91.7a3.7,3.7,0,0,1-.209-.886,1.292,1.292,0,0,1,1.042-1.546,1.253,1.253,0,0,1,1.658,1,1.485,1.485,0,0,0,1.692,1.321c1.989.008,2.24.289,2.243,2.254,0,1.226-.022,2.452.007,3.677a3,3,0,1,0,6,0c.029-1.379,0-2.758.01-4.136.014-1.34.462-1.785,1.782-1.807a6.648,6.648,0,0,0,1.033-.03,1.105,1.105,0,0,0,.863-1.7q-2.8-4.941-5.683-9.833c-.549-.925-1.379-.874-2.027.008-.159.215-.252.584-.447.644-.565.174-1.321.483-1.708.25a1.761,1.761,0,0,1-.585-1.6,3.756,3.756,0,0,1,3.032-2.666,3.587,3.587,0,0,1,3.912,1.587c2.1,3.469,4.155,6.965,6.087,10.528a3.785,3.785,0,0,1-2.309,5.37C78.574,94.255,78.206,94.337,77.772,94.456Zm-2.8,13.517a3,3,0,1,0-6.007-.068,3.008,3.008,0,1,0,6.007.068Z"
                transform="translate(-18.815 1.557)"
                fill="#329d76"
              />
              <path
                id="Path_11616"
                data-name="Path 11616"
                d="M63.572,84.582a33.5,33.5,0,0,1,2.273-3.264c.193-.223,1.182-.075,1.5.224a1.723,1.723,0,0,1,.32,1.514,6.989,6.989,0,0,1-1.309,2.266,1.8,1.8,0,0,1-1.479.494C64.443,85.722,64.118,85.129,63.572,84.582Z"
                transform="translate(-18.355 3.26)"
                fill="#329d76"
              />
            </svg>
          }
          title="Flexible Team Size"
          content="We provide easy scaling of resources hired based on your needs; thus aiding in cost effectiveness. You can start small with a few developers and scale up by hiring more as you and your needs grow and vice versa."
        />
        <PricingFeatureEntry
          icon={
            <svg
              id="Group_12075"
              data-name="Group 12075"
              xmlns="http://www.w3.org/2000/svg"
              width="102.468"
              height="130.485"
              viewBox="0 0 102.468 130.485"
            >
              <path
                id="Path_11625"
                data-name="Path 11625"
                d="M234.118,126.453c-.241-.168-.494-.32-.718-.506a2.54,2.54,0,0,1,1.483-4.578c2.038-.016,4.075,0,6.113-.008,3.054-.019,4.849-1.795,4.85-4.815q.008-18.777,0-37.556V77.785h-1.394c-4.2,0-8.4-.021-12.606.012a2.757,2.757,0,0,1-2.677-1.35,2.651,2.651,0,0,1,.282-2.972,6.785,6.785,0,0,0-.114-7.861,6.8,6.8,0,0,0-12.2,3.166,6.208,6.208,0,0,0,1.081,4.59,2.687,2.687,0,0,1-2.478,4.426c-3.99-.033-7.98-.012-11.97-.012h-1.5v1.35c0,3.946-.021,7.894.012,11.84.01,1.286-.048,2.488-1.375,3.156-1.288.648-2.344.137-3.395-.642a6.292,6.292,0,0,0-5.626-1.216,6.741,6.741,0,0,0-1.919,12.366,6.764,6.764,0,0,0,7.537-.342,5.367,5.367,0,0,1,1.615-.962,2.534,2.534,0,0,1,3.146,2.682c.014,4.582,0,9.166,0,13.749v1.595h9.277c2,0,2.926.52,3.333,1.871.356,1.178-.146,2.158-1.65,3.22h-57.07c-.81-.334-1.651-.606-2.424-1.011a8.85,8.85,0,0,1-5.2-8.13c-.066-13.964-.04-27.929-.03-41.895,0-1.905.99-2.737,3.158-2.738q19.424-.008,38.846,0h21.745c-.882-4.622.176-8.562,3.534-11.722a11.471,11.471,0,0,1,8.954-3.228c6.422.46,12.41,6.349,10.743,14.95h1.345c3.693,0,7.388-.011,11.081,0,2.16.01,3.039.87,3.041,2.991q.01,20.5,0,41c-.007,4.817-2.584,8.148-7.245,9.527a1.858,1.858,0,0,0-.409.25ZM197.139,77.876H153.6v1.35q0,18.525,0,37.053c0,3.372,1.711,5.081,5.1,5.081q18.593.006,37.187,0c.409,0,.817-.038,1.221-.057V110.3c-5.7,1.293-10.394-.176-13.636-5.042a10.921,10.921,0,0,1-.138-12.589c3.214-5.076,8-6.6,13.812-5.243Z"
                transform="translate(-148.489 4.032)"
                fill="#329d76"
              />
              <path
                id="Path_11626"
                data-name="Path 11626"
                d="M203.355,109.332c-.914-.748-1.9-1.481-1.677-2.86a2.553,2.553,0,1,1,4.211,2.234c-.239.222-.5.419-.751.626Z"
                transform="translate(-128.937 21.153)"
                fill="#329d76"
              />
              <path
                id="Path_11627"
                data-name="Path 11627"
                d="M185.008,73.8c-3.145,5-7.408,7.321-13.041,6.252A11.111,11.111,0,0,1,162.8,71.54c-1.593-6.033.785-10.561,5.972-13.92-2.82-2.809-5.585-5.556-8.344-8.307-2.063-2.059-2.071-3.093-.045-5.117l28.189-28.184c4.592-4.589,10.081-4.6,14.666-.015q14.145,14.132,28.279,28.274c1.9,1.9,1.889,3.026-.03,4.945-3.6,3.6-7.217,7.192-10.8,10.815a3.03,3.03,0,0,1-3.026,1.182c-1.269-.327-1.726-1.306-2.016-2.511a6.723,6.723,0,0,0-7.434-5.328,6.816,6.816,0,0,0-5.936,6.189,6.7,6.7,0,0,0,5.347,7.177,2.879,2.879,0,0,1,2.465,1.908,2.935,2.935,0,0,1-1.071,3.054c-3.625,3.578-7.211,7.2-10.819,10.793-1.663,1.659-2.918,1.658-4.579-.01C190.772,79.635,187.945,76.768,185.008,73.8Zm-19.828-27.08c.357.379.663.721.986,1.044,2.97,2.974,5.929,5.958,8.922,8.909a2.888,2.888,0,0,1,1.1,3.041c-.4,1.3-1.406,1.722-2.712,1.9a6.628,6.628,0,0,0-5.958,5.861,6.8,6.8,0,1,0,13.529,1.425,2.552,2.552,0,0,1,1.741-2.421,2.738,2.738,0,0,1,2.986.873c3.011,3.053,6.055,6.072,9.09,9.1.323.323.665.626,1.127,1.059,1.171-1.2,2.269-2.375,3.414-3.5,1.172-1.149,2.391-2.251,3.629-3.41-7.712-5.35-6.871-14.117-2.866-18.464a11.488,11.488,0,0,1,7.771-3.87A11.857,11.857,0,0,1,219.2,53.769l7.372-7.393a8.734,8.734,0,0,1-.974-.765q-12.979-12.957-25.943-25.928c-2.644-2.643-4.85-2.628-7.526.047q-13.018,13.01-26.031,26.021C165.8,46.044,165.524,46.356,165.181,46.723Z"
                transform="translate(-144.672 -12.566)"
                fill="#329d76"
              />
            </svg>
          }
          title="Skills & Expertise"
          content="Our dedicated developers are the perfect blend of hard and soft skills with years of specialized domain expertise, even covering the latest emerging technologies like AR/VR, Blockchain, Big Data, IoT, etc."
        />
        <PricingFeatureEntry
          icon={
            <svg
              id="Group_12073"
              data-name="Group 12073"
              xmlns="http://www.w3.org/2000/svg"
              width="91.815"
              height="91.995"
              viewBox="0 0 91.815 91.995"
            >
              <path
                id="Path_11590"
                data-name="Path 11590"
                d="M350.827,28.06h5.029c1.444.207,2.9.372,4.33.628a57.73,57.73,0,0,1,15.281,5.162,1.659,1.659,0,0,0,1.655.011,57.489,57.489,0,0,1,15.106-5.121c1.4-.253,2.811-.454,4.217-.68h5.568c.73.123,1.461.239,2.191.369,8.578,1.521,14.418,6.232,17.017,14.675.383,1.246.609,2.541.907,3.813V55.36a2.115,2.115,0,0,0-.148.417,57.657,57.657,0,0,1-5.56,17.691,1.716,1.716,0,0,0,.067,1.308,61.846,61.846,0,0,1,4.649,12.857c.387,1.681.665,3.388.992,5.083v8.262c-.123.581-.252,1.161-.368,1.743-1.384,6.88-5,12.105-11.46,15.088-5.765,2.662-11.819,2.643-17.929,1.562a57.505,57.505,0,0,1-15.3-5.179,1.491,1.491,0,0,0-1.5-.018c-1.142.581-2.313,1.115-3.5,1.606-7.121,2.95-14.44,4.856-22.239,4.041a21.546,21.546,0,0,1-12.029-4.858c-5.061-4.287-7.111-9.98-7.427-16.407a43.93,43.93,0,0,1,2.934-17.021,1.07,1.07,0,0,0-.323-1.357,8.412,8.412,0,0,1-1.042-11.1c.5-.692,1.334-1.331,1.428-2.07.1-.8-.5-1.68-.765-2.535-1.956-6.295-3.056-12.689-1.695-19.252,1.771-8.541,6.827-14.093,15.358-16.289C347.77,28.546,349.31,28.346,350.827,28.06ZM344.19,71.4c-2.239-3.024-4.934-3.932-7.714-2.664a5.812,5.812,0,0,0,2.578,11.1,5.594,5.594,0,0,0,3.614-1.368,6.106,6.106,0,0,0,2.094-4.977l2.633-.2a8.653,8.653,0,0,1-3.577,7.8c.155.239.264.417.382.591A94.046,94.046,0,0,0,361.462,100.7a81.663,81.663,0,0,0,14.118,9.654c.308.164.8.335,1.046.2,1.788-.953,3.533-1.985,5.267-2.976-1.137-3.716-.989-6.267.458-8.193l2.2,1.31c-1.312,3.7-.574,6.442,2.13,8.039a5.824,5.824,0,0,0,7.579-8.557c-1.881-2.474-4.722-2.881-8.267-1.137l-1.566-2c2.6-2.469,6.786-2.432,10.7.06a1.19,1.19,0,0,0,.223-.134A88.226,88.226,0,0,0,412.724,74.6a1.428,1.428,0,0,0-.055-1.2c-1.8-2.961-3.592-5.931-5.515-8.811-1.242-1.857-2.7-3.57-4.042-5.322-4.738,2.028-8.156,1.645-10.927-1.164s-3.132-6.146-1.128-10.778c-.1-.093-.2-.2-.309-.294a81.993,81.993,0,0,0-13.863-9.394,1.591,1.591,0,0,0-1.283.086,89.177,89.177,0,0,0-26.077,21.652c-2.024,2.422-3.868,4.994-5.7,7.377l2.878,3.389Zm70.472-.624c.45-1.063,1.011-2.282,1.488-3.532,2.51-6.576,4.162-13.306,3.1-20.409-.981-6.568-4.272-11.528-10.487-14.28a22.887,22.887,0,0,0-9.624-1.785,41.57,41.57,0,0,0-13.167,2.4c-2.22.765-4.391,1.673-6.457,2.468l13.675,9.53a8.213,8.213,0,0,1,9.4-.345l-1.309,2.183c-3.642-1.34-6.462-.579-8.048,2.135a5.825,5.825,0,0,0,8.647,7.505c2.446-1.957,2.826-4.834,1.044-8.2l2.063-1.6a7.973,7.973,0,0,1,1.781,4.279,8.522,8.522,0,0,1-1.587,6.024Zm-78.816-4.843a22.292,22.292,0,0,1,2.324-.412,6.912,6.912,0,0,1,2.134.107c.817.205,1.2-.088,1.636-.73A94.96,94.96,0,0,1,372.7,36.171c.161-.093.312-.205.6-.4-1.462-.611-2.764-1.2-4.1-1.706-6.5-2.45-13.138-3.931-20.164-2.98a17.75,17.75,0,0,0-15.118,13.1,29.663,29.663,0,0,0-.056,14.295C334.413,61.005,335.186,63.478,335.847,65.936ZM336,82.1c-2.379,6.747-3.894,13.554-2.347,20.674a16.986,16.986,0,0,0,9.847,12.555,25.283,25.283,0,0,0,13.433,1.767,50.324,50.324,0,0,0,15.429-4.408c.278-.126.548-.269.91-.449-.279-.163-.432-.253-.585-.341A91.811,91.811,0,0,1,354.96,98.534,96.365,96.365,0,0,1,341.75,82.96c-.189-.278-.655-.607-.919-.554A9.277,9.277,0,0,1,336,82.1Zm43.461,30.092-.011.26c2.54.94,5.046,1.989,7.628,2.8,5.734,1.793,11.583,2.752,17.575,1.535,6.7-1.361,11.393-5.163,13.677-11.7a26.253,26.253,0,0,0,1.072-11.6A51.45,51.45,0,0,0,414.892,77.8a8.009,8.009,0,0,0-.4-.693,94.036,94.036,0,0,1-17.527,22.116,8.623,8.623,0,0,1-1.7,10.923,8.367,8.367,0,0,1-4.853,2.1,8.622,8.622,0,0,1-6.9-2.5Z"
                transform="translate(-330.314 -28.06)"
                fill="#329d76"
              />
              <path
                id="Path_11600"
                data-name="Path 11600"
                d="M380.705,68.5l-.729,2.585c-.873-.233-1.7-.449-2.521-.674s-1.658-.51-2.5-.68a1.355,1.355,0,0,0-1,.212,6.119,6.119,0,0,1-8.13.008,1.286,1.286,0,0,0-1-.226q-4.282,1.145-8.536,2.38a3.664,3.664,0,0,0-2.934,3.354c-.141,2.38-.034,4.774-.034,7.236h4.715V79.178h2.748v3.571h3.311v2.742H347.83V82.779h2.68c0-2.276,0-4.454,0-6.63a6.874,6.874,0,0,1,5.177-6.723c2.7-.754,5.4-1.535,8.1-2.262.569-.152.833-.391.743-.977a.991.991,0,0,1,0-.269,3.974,3.974,0,0,0-1.513-3.95,6.862,6.862,0,0,1-2.462-5.127,34.631,34.631,0,0,1,.241-7.576,9.2,9.2,0,0,1,9.687-7.122,9.3,9.3,0,0,1,8.724,8.4,36.8,36.8,0,0,1-.185,7.144A7.871,7.871,0,0,1,375.8,62.9a1.367,1.367,0,0,0-.584,1.291c.053.892-.261,2.027.176,2.613s1.6.6,2.455.862C378.759,67.936,379.674,68.2,380.705,68.5ZM363.195,52.059c0,1.444-.062,2.729.012,4a6.678,6.678,0,0,0,5.581,6.137,6.815,6.815,0,0,0,7.36-4.188,1.152,1.152,0,0,0-.17-1.3c-1.059-1.332-2.039-2.729-3.116-4.047a1.757,1.757,0,0,0-1.163-.583c-2.031-.057-4.065-.026-6.1-.026Zm13.277.8a6.764,6.764,0,0,0-5.4-7.887c-3.362-.506-6.99,1.61-7.368,4.341,3.113,0,6.221.011,9.327-.011a1.262,1.262,0,0,1,1.193.577C374.909,50.858,375.657,51.789,376.472,52.861Zm-4.021,12.023H367.33c.207,1-.6,2.262.562,3.2a3.386,3.386,0,0,0,3.708.194C373.121,67.394,372.165,65.98,372.451,64.884Z"
                transform="translate(-323.872 -22.888)"
                fill="#329d76"
              />
              <path
                id="Path_11601"
                data-name="Path 11601"
                d="M376.573,75.427h4.741c.016-.338.047-.652.048-.967q.006-2.649,0-5.295c-.008-2.454-.955-3.719-3.32-4.458-.167-.052-.327-.129-.6-.234l.681-2.459a6.755,6.755,0,0,1,6,6.719c.033,1.883.007,3.768.007,5.653v1.067h2.7v2.718H361.756V75.483h12.007V71.866h2.811Z"
                transform="translate(-318.75 -15.571)"
                fill="#329d76"
              />
              <path
                id="Path_11602"
                data-name="Path 11602"
                d="M367.107,64.105l3.813,1.067-.733,2.623-3.809-1.081Z"
                transform="translate(-317.05 -14.802)"
                fill="#329d76"
              />
              <path
                id="Path_11604"
                data-name="Path 11604"
                d="M375.371,82.426v2.625h-2.659V82.426Z"
                transform="translate(-314.72 -8.063)"
                fill="#329d76"
              />
              <path
                id="Path_11605"
                data-name="Path 11605"
                d="M373.664,68.774l-2.611-.744.721-2.6,2.606.706Z"
                transform="translate(-315.33 -14.315)"
                fill="#329d76"
              />
              <path
                id="Path_11606"
                data-name="Path 11606"
                d="M381.676,47.286h-2.643v-2.63h2.643Z"
                transform="translate(-312.395 -21.956)"
                fill="#329d76"
              />
            </svg>
          }
          title="Knowledge & Team Retention"
          content="Due to our well-established development processes, product knowledge is accumulated and retained throughout the project. Proper transition plans are created for knowledge transfer to new team members when needed."
        />
      </div>
      <div className="pricing__delivery__section">
        <div className="pricing__delivery__section__heading">
          Process From Idea Creation to Product Delivery
        </div>
        <div className="pricing__delivery__section__content">
          <div className="pricing__delivery__section__content__card">
            <div className="pricing__delivery__section__content__card__heading">
              Enterprise
            </div>
            <div className="pricing__delivery__section__content__card__content">
              {DeliveryCardEntry1.map((item) => (
                <div
                  className="pricing__delivery__section__content__card__para"
                  key={JSON.stringify(item)}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="pricing__delivery__section__content__card">
            <div className="pricing__delivery__section__content__card__heading">
              Domain Knowledge
            </div>
            <div className="pricing__delivery__section__content__card__content">
              {DeliveryCardEntry2.map((item) => (
                <div
                  className="pricing__delivery__section__content__card__para"
                  key={JSON.stringify(item)}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="pricing__delivery__section__content__card">
            <div className="pricing__delivery__section__content__card__heading">
              Technologies We Use
            </div>
            <div className="pricing__delivery__section__content__card__content">
              {DeliveryCardEntry3.map((item) => (
                <div
                  className="pricing__delivery__section__content__card__para"
                  key={JSON.stringify(item)}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="pricing__fitted__team">
        <div
          className="pricing__fitted__team__header"
          id="pricing__success__stories__team__header"
        >
          <div className="pricing__fitted__team__header__heading">
            Success Stories
          </div>
        </div>
        <div className="pricing__fitted__team__content">
          <Swiper slidesPerView={slidesPerView} autoplay>
            <SwiperSlide>
              <div className="pricing__success__stories__slide">
                <div className="pricing__success__stories__slide__image">
                  <img src={StoryPic} alt="Story Image" />
                </div>
                <div className="pricing__success__stories__slide__logo">
                  <img src={brandLogo} alt="Brand Logo" />
                </div>
                <div className="pricing__success__stories__slide__info">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Repellat exercitationem architecto error a sequi officiis nam
                  excepturi repudiandae aliquid ipsam.
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="pricing__success__stories__slide">
                <div className="pricing__success__stories__slide__image">
                  <img src={StoryPic} alt="Story Image" />
                </div>
                <div className="pricing__success__stories__slide__logo">
                  <img src={brandLogo} alt="Brand Logo" />
                </div>
                <div className="pricing__success__stories__slide__info">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Repellat exercitationem architecto error a sequi officiis nam
                  excepturi repudiandae aliquid ipsam.
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="pricing__success__stories__slide">
                <div className="pricing__success__stories__slide__image">
                  <img src={StoryPic} alt="Story Image" />
                </div>
                <div className="pricing__success__stories__slide__logo">
                  <img src={brandLogo} alt="Brand Logo" />
                </div>
                <div className="pricing__success__stories__slide__info">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Repellat exercitationem architecto error a sequi officiis nam
                  excepturi repudiandae aliquid ipsam.
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="pricing__success__stories__slide">
                <div className="pricing__success__stories__slide__image">
                  <img src={StoryPic} alt="Story Image" />
                </div>
                <div className="pricing__success__stories__slide__logo">
                  <img src={brandLogo} alt="Brand Logo" />
                </div>
                <div className="pricing__success__stories__slide__info">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Repellat exercitationem architecto error a sequi officiis nam
                  excepturi repudiandae aliquid ipsam.
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="pricing__fitted__team">
        <div className="pricing__fitted__team__header">
          <div className="pricing__fitted__team__header__heading">
            Awards & Achievements
          </div>
          <div className="pricing__fitted__team__header__info">
            We are proud to be recognized as a top service provider by these
            platforms.
          </div>
        </div>
        <div className="pricing__fitted__team__content">
          <Swiper
            slidesPerView={slidesPerViewLogo}
            modules={[Navigation, Pagination]}
            // loop
            // spaceBetween={30}
            navigation={showNavigation ? true : false}
            pagination={!showNavigation ? { clickable: true } : false}
          >
            <SwiperSlide>
              <div className="pricing__awards__achievements__slide__logo">
                <img src={clutch} alt="Brand Logo" />
              </div>
              <div className="pricing__awards__achievements__slide__logo">
                <img src={designWorkImageMob} alt="Brand Logo" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="pricing__awards__achievements__slide__logo">
                <img src={topSoftwarePic} alt="Brand Logo" />
              </div>
              <div className="pricing__awards__achievements__slide__logo">
                <img src={topMobileAppCompany} alt="Brand Logo" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="pricing__awards__achievements__slide__logo">
                <img src={clutch} alt="Brand Logo" />
              </div>
              <div className="pricing__awards__achievements__slide__logo">
                <img src={subtractPng} alt="Brand Logo" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="pricing__awards__achievements__slide__logo">
                <img src={fastestGrowingApp} alt="Brand Logo" />
              </div>
              <div className="pricing__awards__achievements__slide__logo">
                <img src={designrush} alt="Brand Logo" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="pricing__awards__achievements__slide__logo">
                <img src={softwareUsa} alt="Brand Logo" />
              </div>
              <div className="pricing__awards__achievements__slide__logo">
                <img src={itrateco} alt="Brand Logo" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="pricing__awards__achievements__slide__logo">
                <img src={appfuturaBadge} alt="Brand Logo" />
              </div>
              <div className="pricing__awards__achievements__slide__logo">
                <img src={softwaredev} alt="Brand Logo" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="pricing__awards__achievements__slide__logo">
                <img src={webappfuturaBadge} alt="Brand Logo" />
              </div>
              <div className="pricing__awards__achievements__slide__logo">
                <img src={topAppPic} alt="Brand Logo" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="pricing__awards__achievements__slide__logo">
                <img src={webappusfuturaBadge} alt="Brand Logo" />
              </div>
              <div className="pricing__awards__achievements__slide__logo">
                <img src={softwaredev} alt="Brand Logo" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="pricing__awards__achievements__slide__logo">
                <img src={sdappfuturaBadge} alt="Brand Logo" />
              </div>
              <div className="pricing__awards__achievements__slide__logo">
                <img src={softwaredev} alt="Brand Logo" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}
