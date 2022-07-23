import React, { useState } from "react";
import { HomeJumbotron } from "../components/HomeJumbotron";
import android from "../assets/android.svg";
import img1 from "../assets/1.webp";
import img2 from "../assets/2.webp";
import img3 from "../assets/3.webp";
import img4 from "../assets/4.webp";
import img5 from "../assets/5.webp";
import img6 from "../assets/6.webp";
import img7 from "../assets/iosandroid.jpg";
import img8 from "../assets/iosswift.jpg";
import img9 from "../assets/iosapplication.png";
import img10 from "../assets/ioscross.png";
import { WebdevArrEntry } from "../components/WebdevArrEntry";
import { User } from "react-feather";

export default function ServicesAndroid() {
  const [selected, setSelected] = useState("AR VR");
  const array = [
    {
      label: "AR VR",
      svg: <User size={40} color="currentColor" />,
      info: "We study changes in consumer perspective to build a cost-effective, robust and game-changing AR/VR solutions for a variety of products and services.",
    },
    {
      label: "Blockchain",
      svg: <User size={40} color="currentColor" />,
      info: "We provide blockchain consulting services and customized solutions for businesses, startups and enterprises to transform the way they operate.",
    },
    {
      label: "Internet of things",
      svg: <User size={40} color="currentColor" />,
      info: "Our team of engineers can help you build fully customized products/apps with interconnectivity between all known tech and non-tech devices.      ",
    },
    {
      label: "Artificial intelligence",
      svg: <User size={40} color="currentColor" />,
      info: "Owing to the growing demand for intelligent applications, systems and products our engineers are experienced enough to construct robust artificial intelligent solutions.      ",
    },
    {
      label: "Machine learning",
      svg: <User size={40} color="currentColor" />,
      info: "Incorporate machine learning into your current or planned product development initiatives for better user experience, decision making and consumer retention and loyalty.      ",
    },
    {
      label: "Big data",
      svg: <User size={40} color="currentColor" />,
      info: "Make better and faster data driven decisions to help support your businesses with our capability of building products/applications that rely on big data analytics.      ",
    },
  ];
  return (
    <>
      <div className="container">
        <HomeJumbotron
          taglinesLine="Full-service Android application development company"
          info="Choose an experienced partner to transform your business idea into a top-performing custom Android app"
          img={android}
          talk={true}
        />
      </div>
      <div className="ios__mobile__page__section">
        <div className="ios__mobile__page__container">
          <div className="ios__mobile__share__your__idea__section">
            <div className="ios__mobile__share__your__idea__section__left">
              <div className="ios__mobile__share__your__idea__section__left__heading">
                You share your idea, <span> we get it done</span>
              </div>
            </div>
            <div className="ios__mobile__share__your__idea__section__right">
              <div className="ios__mobile__share__your__idea__section__right__text">
                It takes lots of effort, planning and research to create an app
                that succeeds. We want to take the work off your shoulders. Our
                Android team rated number one on Clutch combines in-depth
                research, outstanding design and impeccable development to
                create applications that astound users and bring measurable
                business results. Focus on what’s important to your business,
                and let us do the rest.
              </div>
            </div>
          </div>
          <div className="ios__mobile__share__your__idea__section__buttons__section">
            <div className="ios__mobile__share__your__idea__section__buttons__section__awards">
              <img loading="lazy" src={img1} alt="imgmunber" />
              <img loading="lazy" src={img2} alt="imgmunber" />
              <img loading="lazy" src={img3} alt="imgmunber" />
              <img loading="lazy" src={img4} alt="imgmunber" />
              <img loading="lazy" src={img5} alt="imgmunber" />
              <img loading="lazy" src={img6} alt="imgmunber" />
            </div>
          </div>
          <div className="ios__mobile__page__container__ios__company__heading">
            What makes DSME Global Links a top{" "}
            <span>Android development company?</span>
          </div>
          <div className="Android__and__ios__boxes__all">
            <div className="Android__and__ios__boxes">
              <div className="Android__and__ios__box__one__and__two">
                <div className="Android__and__ios__box__one">
                  <div className="svg__Android__and__ios__box__two">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="34"
                      height="34"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-smartphone"
                    >
                      <rect
                        x="5"
                        y="2"
                        width="14"
                        height="20"
                        rx="2"
                        ry="2"
                      ></rect>
                      <line x1="12" y1="18" x2="12.01" y2="18"></line>
                    </svg>
                    <div className="Android__and__ios__box__one__heading">
                      One-stop Android development agency
                    </div>
                  </div>
                  <div className="Android__and__ios__box__one__content">
                    A great idea is important, but it takes more to build an
                    excellent mobile app. Choose our all-in-one Android
                    development services and hire a team that takes care of
                    everything that your app needs to succeed. Strategy and
                    market research to sharpen your vision, and outstanding
                    product designs to delight your users. Foolproof app
                    development and maintenance for excellent stability and
                    performance. All in one place.
                  </div>
                </div>
                <div className="Android__and__ios__box__two">
                  <div className="svg__Android__and__ios__box__two">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="34"
                      height="34"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-smartphone"
                    >
                      <rect
                        x="5"
                        y="2"
                        width="14"
                        height="20"
                        rx="2"
                        ry="2"
                      ></rect>
                      <line x1="12" y1="18" x2="12.01" y2="18"></line>
                    </svg>
                    <div className="Android__and__ios__box__two__heading">
                      Experts in Java and Kotlin development
                    </div>
                  </div>
                  <div className="Android__and__ios__box__two__content">
                    When it comes to native Android development, there are two
                    technologies that matter: Java and Kotlin. Older
                    applications are usually written in Java, but most of the
                    new ones are created with Kotlin. Our developers are fluent
                    in both, and with each case, they choose the stack carefully
                    to deliver top-notch applications, made to fit specific
                    business needs. Whether you wish to write a brand new app or
                    spruce up the one you already have, we help you choose the
                    right tech solution.
                  </div>
                </div>
              </div>
              <div className="Android__and__ios__box__one__and__two">
                <div className="Android__and__ios__box__one">
                  <div className="svg__Android__and__ios__box__two">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="34"
                      height="34"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-smartphone"
                    >
                      <rect
                        x="5"
                        y="2"
                        width="14"
                        height="20"
                        rx="2"
                        ry="2"
                      ></rect>
                      <line x1="12" y1="18" x2="12.01" y2="18"></line>
                    </svg>
                    <div className="Android__and__ios__box__one__heading">
                      Android applications recognized worldwide
                    </div>
                  </div>
                  <div className="Android__and__ios__box__one__content">
                    You don’t want to put your project in inexperienced hands.
                    Our Android team is top-rated on Clutch, and with over 10
                    years of practice in Android application development, we
                    have gained the trust of world-renowned brands such as
                    Marhaba Mahal, AIDAPro, Friendly Face, or Gentleman & Co. We
                    create beautiful, top-performing Android apps for industries
                    like e-commerce, banking, music, and travel.
                  </div>
                </div>
                <div className="Android__and__ios__box__two">
                  <div className="svg__Android__and__ios__box__two">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="34"
                      height="34"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-smartphone"
                    >
                      <rect
                        x="5"
                        y="2"
                        width="14"
                        height="20"
                        rx="2"
                        ry="2"
                      ></rect>
                      <line x1="12" y1="18" x2="12.01" y2="18"></line>
                    </svg>
                    <div className="Android__and__ios__box__two__heading">
                      Cross-platform options
                    </div>
                  </div>
                  <div className="Android__and__ios__box__two__content">
                    If you’re thinking about building an app for both Android
                    and iOS, you will face a crucial decision. Should you
                    develop two native apps, or just one that will work on both
                    platforms? We’re here to make sure you choose the right
                    approach! If you pick cross-platform over native Android
                    application development, we can take care of that, too. Our
                    team excels in building apps with the two most popular
                    cross-platform frameworks: Flutter and React Native.Flutter
                    and react Native
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ios__development__tangible">
          <div className="ios__development__tangible__col__one__heading">
            Tangible results, <span>right on schedule</span>
          </div>
          <div className="ios__development__tangible__col__two">
            <button className="ios__development__tangible__col__two__header__middle__button">
              Get a quote
            </button>
          </div>
        </div>
        <div className="ios__development__native__ios">
          <div className="ios__development__native__ios__container">
            <div className="ios__development__native__ios__container__left">
             
                <div className="ios__development__native__ios__container__heading">
                  Why choose native Android app development?
                </div>
              
              <div className="ios__development__native__container__text">
                Why is it worth building a native application for Android? See
                our reasons to make a well-informed choice.
              </div>

              <div className="ios__development__native__impressive__performance">
              <div className="ios__development__native__impressive__performance__svg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="34"
                  height="34"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#189366"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-airplay"
                >
                  <path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"></path>
                  <polygon points="12 15 17 21 7 21 12 15"></polygon>
                </svg>
                
                <div className="ios__development__native__impressive__performance__heading">
                  Unique user experience
                </div>
                </div>
                <div className="ios__development__native__impressive__performance__content">
                  If one of your top goals is to create an Android application
                  that delivers excellent, platform-specific{" "}
                  <span style={{ color: "#189366" }}>user experience</span>,
                  it’s best to pick native development. When it comes to Android
                  native development, it’s easier and faster to develop certain
                  platform-specific features that may affect the UX. Also, keep
                  in mind that the smooth and fast performance of a native
                  application makes the user experience more satisfying.
                </div>
              </div>
              <div className="ios__development__native__impressive__performance">
              <div className="ios__development__native__impressive__performance__svg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="34"
                  height="34"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#189366"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-airplay"
                >
                  <path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"></path>
                  <polygon points="12 15 17 21 7 21 12 15"></polygon>
                </svg>
                
                <div className="ios__development__native__impressive__performance__heading">
                  Native Android features
                </div>
                </div>
                <div className="ios__development__native__impressive__performance__content">
                  Planning to equip your app with functions like biometrics,
                  geolocation, or features based on Bluetooth connection? The
                  more native features your Android app needs, the better to go
                  for the native product. Even seemingly simple functionalities
                  such as push notifications tend to perform better within
                  native applications.
                </div>
              </div>
              <div className="ios__development__native__impressive__performance">
              <div className="ios__development__native__impressive__performance__svg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="34"
                  height="34"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#189366"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-airplay"
                >
                  <path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"></path>
                  <polygon points="12 15 17 21 7 21 12 15"></polygon>
                </svg>
                
                <div className="ios__development__native__impressive__performance__heading">
                  Dependability and support
                </div>
                </div>
                <div className="ios__development__native__impressive__performance__content">
                  As native languages are more mature than cross-platform ones,
                  they are generally more dependable as well, when it comes to
                  community support or available resources. Also, if you’re
                  thinking about expanding your app over the years, native
                  development is a future-proof choice. Both Kotlin and Java are
                  well-supported languages with rich ecosystems, offering a wide
                  variety of open-source libraries, patterns, and articles.
                </div>
              </div>
              <div className="ios__development__native__impressive__performance">
              <div className="ios__development__native__impressive__performance__svg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="34"
                  height="34"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#189366"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-airplay"
                >
                  <path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"></path>
                  <polygon points="12 15 17 21 7 21 12 15"></polygon>
                </svg>
                
                <div className="ios__development__native__impressive__performance__heading">
                  Stability and performance
                </div>
                </div>
                <div className="ios__development__native__impressive__performance__content">
                  Native Android development equals stable performance. Native
                  SDKs and platforms for Android have been around for over 10
                  years, which makes them well-optimized and battle-tested.
                  There are plenty of development and testing tools available,
                  and it’s easy to find solutions to most problems that may
                  arise during the development.
                </div>
              </div>
              <div className="ios__development__native__impressive__performance">
              <div className="ios__development__native__impressive__performance__svg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="34"
                  height="34"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#189366"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-airplay"
                >
                  <path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"></path>
                  <polygon points="12 15 17 21 7 21 12 15"></polygon>
                </svg>
                
                <div className="ios__development__native__impressive__performance__heading">
                  Future-proof and scalable
                </div>
                </div>
                <div className="ios__development__native__impressive__performance__content">
                  Thinking about a product that you can expand over the years?
                  Native iOS development will be a safe bet here. As a mature,
                  well-supported language, Swift is less likely to change as
                  dynamically as cross-platform frameworks. Also, note that
                  native apps are faster to scale, implement changes, and add
                  new features into, as there is only one platform that needs to
                  be configured. Keep that in mind if you’re expecting your iOS
                  app to grow rapidly or change in the future.
                </div>
              </div>
              <div className="ios__development__native__impressive__performance">
              <div className="ios__development__native__impressive__performance__svg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="34"
                  height="34"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#189366"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-airplay"
                >
                  <path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"></path>
                  <polygon points="12 15 17 21 7 21 12 15"></polygon>
                </svg>
                
                <div className="ios__development__native__impressive__performance__heading">
                  In-house transfer options
                </div>
                </div>
                <div className="ios__development__native__impressive__performance__content">
                  If you plan to transfer the project to in-house in the future,
                  it’s a good idea to go for native development. It might be
                  more challenging to find skilled cross-platform developers,
                  while building your own team of native Android developers
                  shouldn’t pose a big problem.
                </div>
              </div>
            </div>
            <div className="ios__development__native__ios__container__right">
              <div className="ios__development__native__ios__container__right__card">
                <a href="#">Unique user experience</a>
                <a href="#">Native Android features</a>
                <a href="#">Dependability and support</a>
                <a href="#">Stability and performance</a>
                <a href="#">In-house transfer options</a>
              </div>
            </div>
          </div>
          <div className="ios__development__native__sound__promising">
            <div className="ios__development__native__sound__promising__heading">
              Sounds promising? Let’s discuss your idea! !
            </div>
            <div className="ios__development__native__sound__promising__button">
              Get in Touch
            </div>
          </div>
          <div className="ios__development__native__cross__plat__development">
            <div className="ios__development__native__cross__plat__development__container">
              <div className="ios__development__native__cross__plat__development__container__left">
                <div className="ios__development__native__cross__plat__development__container__heading">
                  Cross-platform development
                </div>
                <div className="ios__development__native__cross__plat__development__container__text">
                  Cross-platform application development allows you to create
                  apps that run across multiple device platforms, using just one
                  codebase. If you…
                </div>
                <div className="ios__development__native__cross__plat__development__container__text__li">
                  <li>want to build a uniform application</li>
                  <li>have a limited project budget</li>
                  <li>wish to enter the market fast...</li>
                </div>
                <div className="ios__development__native__cross__plat__development__container__text">
                  ...you should consider our cross-platform development
                  services.
                </div>
                <div className="ios__development__native__cross__plat__development__container__text">
                  Learn about Cross-platform development
                </div>
              </div>
              <div className="ios__development__native__cross__plat__development__container__right">
                <img
                  loading="lazy"
                  className="ios__development__native__cross__plat__development__img"
                  src={img8}
                  alt="img8"
                />
              </div>
            </div>
          </div>

          <div className="android__development__our__stack">
            <div className="android__development__our__stack__all">
              <div className="android__development__our__stack__container">
                <div className="android__development__our__stack__container__heading">
                  Our tech <span>stack</span>
                </div>
                <div className="android__development__our__stack__container__col__row">
                  <div className="android__development__our__stack__container__col">
                    <div className="android__development__our__stack__container__col__one__heading">
                      Core
                    </div>
                    <div className="android__development__our__stack__container__col__one__heading__text">
                      <li>MVP or MVVM</li>
                      <li>RxJava 3 or Kotlin Coroutines</li>
                      <li>Dagger 2 or Koin</li>
                      <li>Retrofit and Room</li>
                      <li>Glide or Picasso</li>
                    </div>
                  </div>
                  <div className="android__development__our__stack__container__col">
                    <div className="android__development__our__stack__container__col__one__heading">
                      CI/CD
                    </div>
                    <div className="android__development__our__stack__container__col__one__heading__text">
                      <li>Fastlane</li>
                      <li>Docker</li>
                      <li>TeamCity</li>
                      <li>Gitlab</li>
                      <li>AWS</li>
                    </div>
                  </div>
                  <div className="android__development__our__stack__container__col">
                    <div className="android__development__our__stack__container__col__one__heading">
                      Testing
                    </div>
                    <div className="android__development__our__stack__container__col__one__heading__text">
                      <li>Testing</li>
                      <li>Espresso</li>
                      <li>Charles</li>
                    </div>
                  </div>
                  <div className="android__development__our__stack__container__col">
                    <div className="android__development__our__stack__container__col__one__heading">
                      Debugging
                    </div>
                    <div className="android__development__our__stack__container__col__one__heading__text">
                      <li>LeakCanary</li>
                      <li>Firebase Crashlytics</li>
                    </div>
                  </div>
                  <div className="android__development__our__stack__container__col">
                    <div className="android__development__our__stack__container__col__one__heading">
                      Design
                    </div>
                    <div className="android__development__our__stack__container__col__one__heading__text">
                      <li>Sketch</li>
                      <li>InVision</li>
                      <li>InVision</li>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container__emerging__technologies">
            <div className="container__emerging__technologies__heading__main">
              Emerging <span>Technologies</span>
            </div>
            <div className="container__emerging__technologies__text__main">
              We constantly push our limits and explore emerging technologies to
              build a solution that you help our clients stay ahead of the game.
            </div>
            <div className="container__emerging__technologies__section">
              {array.map((item) => (
                <WebdevArrEntry
                  label={item.label}
                  svg={item.svg}
                  selected={selected}
                  setSelected={setSelected}
                />
              ))}
            </div>
            {array
              .filter((item) => item.label === selected)
              .map((item) => (
                <div className="container__emerging__technologies__section__entry__data">
                  <div className="container__emerging__technologies__section__entry__data___heading">
                    {item.label}
                  </div>
                  <div className="container__emerging__technologies__section__entry__data__text">
                    {item.info}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
