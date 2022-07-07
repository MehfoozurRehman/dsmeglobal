import React, { useEffect, useState } from "react";
import directionPic from "../assets/te-direction.jpg";
import rightAngle from "../assets/chevron-right.svg";
import userPng from "../assets/personIcon.svg";
import PricingFeatureEntry from "../components/PricingFeatureEntry";
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
          id="pricing__getting__started">
          <div className="pricing__fitted__team__header__heading">
            How to Get Started?
          </div>
        </div>
        <div className="pricing__fitted__team__content">
          <div
            className="pricing__fitted__team__content__entry__box__one"
            id="pricing__fitted__team__content__entry">
            <div
              className="pricing__fitted__team__content__entry__sub__heading"
              id="pricing__fitted__team__content__entry__sub__heading">
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
            id="pricing__fitted__team__content__entry">
            <div
              className="pricing__fitted__team__content__entry__sub__heading"
              id="pricing__fitted__team__content__entry__sub__heading">
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
            id="pricing__fitted__team__content__entry">
            <div
              className="pricing__fitted__team__content__entry__sub__heading"
              id="pricing__fitted__team__content__entry__sub__heading">
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
          icon={<Box size={20} strokeWidth={1.5} color="currentColor" />}
          title="Perfect Match"
          content="We perfectly match a dedicated agile team with your technology & product requirements. They can either work using your development processes with your existing in-house (or external) teams or work independently."
        />
        <PricingFeatureEntry
          icon={<Box size={20} strokeWidth={1.5} color="currentColor" />}
          title="Test Before You Hire"
          content="To establish confidence and demonstrate work quality, we offer a no-cost proof of concept to our clients whereby they test our resources with defined tasks. We only move forward, if you like our work during the trial."
        />
        <PricingFeatureEntry
          icon={<Box size={20} strokeWidth={1.5} color="currentColor" />}
          title="Immediate Starts"
          content="You don’t need to go through the stress of recruitment, infrastructure setup, deal with various staffing risks & problems or lose focus on your existing projects. We help you ramp up and get started on your project immediately."
        />
        <PricingFeatureEntry
          icon={<Box size={20} strokeWidth={1.5} color="currentColor" />}
          title="Flexible Team Size"
          content="We provide easy scaling of resources hired based on your needs; thus aiding in cost effectiveness. You can start small with a few developers and scale up by hiring more as you and your needs grow and vice versa."
        />
        <PricingFeatureEntry
          icon={<Box size={20} strokeWidth={1.5} color="currentColor" />}
          title="Skills & Expertise"
          content="Our dedicated developers are the perfect blend of hard and soft skills with years of specialized domain expertise, even covering the latest emerging technologies like AR/VR, Blockchain, Big Data, IoT, etc."
        />
        <PricingFeatureEntry
          icon={<Box size={20} strokeWidth={1.5} color="currentColor" />}
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
                  key={JSON.stringify(item)}>
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
                  key={JSON.stringify(item)}>
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
                  key={JSON.stringify(item)}>
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
          id="pricing__success__stories__team__header">
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
            pagination={!showNavigation ? { clickable: true } : false}>
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
