import React from "react";
import img1 from "../assets/1.png";
import img2 from "../assets/2.png";
import img3 from "../assets/3.png";
import img4 from "../assets/4.png";
import img5 from "../assets/5.png";
import img6 from "../assets/6.png";
import img7 from "../assets/iosandroid.jpg";
import img8 from "../assets/iosswift.jpg";
import img9 from "../assets/iosapplication.png";
import img10 from "../assets/ioscross.png";

export function Youshareyourideawegetitdone() {
  return (
    <div className="ios__mobile__page__container">
      <div className="ios__mobile__share__your__idea__section">
        <div className="ios__mobile__share__your__idea__section__left">
          <div className="ios__mobile__share__your__idea__section__left__heading">
            You share your idea, we get it done
          </div>
        </div>
        <div className="ios__mobile__share__your__idea__section__right">
          <div className="ios__mobile__share__your__idea__section__right__text">
            How can you ensure your iOS app turns into a great success? Trust an
            experienced partner that takes the development effort off your
            hands, and let us create a solution that will astound your users and
            bring measurable business results. While you can focus on your
            business, we combine in-depth research, outstanding design, and
            impeccable development to create an exceptional iOS application that
            fits your needs.
          </div>
        </div>
      </div>
      <div className="ios__mobile__share__your__idea__section__buttons__section">
        <div className="ios__mobile__share__your__idea__section__buttons__section__awards">
          <img loading="lazy" src={img1} alt="/" />
          <img loading="lazy" src={img2} alt="/" />
          <img loading="lazy" src={img3} alt="/" />
          <img loading="lazy" src={img4} alt="/" />
          <img loading="lazy" src={img5} alt="/" />
          <img loading="lazy" src={img6} alt="/" />
        </div>
      </div>
      <div className="ios__mobile__page__container__ios__company__heading">
        What makes DSME Global Links a top iOS development company?
      </div>
      <div className="ios__mobile__page__one__step__ios__development__section">
        <div className="ios__mobile__page__one__step__ios__development__section__left">
          <div className="ios__mobile__page__one__step__ios__development__section__left__heading">
            One-stop iOS development agency
          </div>
          <div className="ios__mobile__page__one__step__ios__development__section__left__text">
            It takes lots of effort, planning, and research to create a mobile
            app that succeeds. Choose our all-in-one iOS services to make sure
            that both your strategy and your digital product are flawless. We
            take good care of your project from start to finish by beginning
            with in-depth research, a data-based strategy, and outstanding
            <a
              href="/"
              className="ios__mobile__page__one__step__ios__development__section__left__text__span"
            >
              product design.
            </a>
            Then, we combine foolproof development and maintenance for the
            excellent stability and performance of your app.
          </div>
        </div>
        <div className="ios__mobile__page__one__step__ios__development__section__right">
          <img loading="lazy" src={img7} alt="img7" />
        </div>
      </div>
      <div className="ios__ios__development__swift__development__section">
        <div className="ios__ios__development__swift__development__section__left">
          <img loading="lazy" src={img8} alt="img8" />
        </div>
        <div className="ios__ios__development__swift__development__section__right">
          <div className="ios__ios__development__swift__development__section__right__heading">
            Swift dashboard
          </div>
          <div className="ios__ios__development__swift__development__section__left__text">
            If you are researching iPhone app development, you’ve probably heard
            of Swift. It’s a powerful, intuitive programming language, created
            and supported by Apple, and used to build applications for iOS.
            Although older applications were often written in ObjC, Swift is the
            go-to choice for new applications, as a faster, more secure, and
            future-proof choice. With each case, our developers choose the stack
            carefully to deliver top-notch applications, made to fit specific
            business needs.
          </div>
        </div>
      </div>
      <div className="ios__mobile__page__one__step__ios__development__section">
        <div className="ios__mobile__page__one__step__ios__development__section__left">
          <div className="ios__mobile__page__one__step__ios__development__section__left__heading">
            iOS applications recognized worldwide
          </div>
          <div className="ios__mobile__page__one__step__ios__development__section__left__text">
            With over 10 years of work in iOS application development, you can
            be sure that you are not putting your project in inexperienced
            hands. Working with world-renowned brands worldwide such as AIDApro,
            Vinvi, SeeVitals, Friendly Face, BFS, or Catering, we’ve gained
            hands-on experience in combining business objectives with
            cutting-edge mobile solutions.
          </div>
        </div>
        <div className="ios__mobile__page__one__step__ios__development__section__right">
          <img loading="lazy" src={img9} alt="img9" />
        </div>
      </div>
      <div className="ios__ios__development__swift__development__section">
        <div className="ios__ios__development__swift__development__section__left">
          <img loading="lazy" src={img10} alt="img10" />
        </div>
        <div className="ios__ios__development__swift__development__section__right">
          <div className="ios__ios__development__swift__development__section__right__heading">
            Cross-platform options
          </div>
          <div className="ios__ios__development__swift__development__section__left__text">
            If you’re thinking about building an app for both Android and iOS,
            there are two approaches to consider. Should you develop two
            separate native apps, or just one that will work on both platforms?
            We’re here to make sure you take the right path! If you pick
            cross-platform over native iOS application development, we can take
            care of that, too. Our team excels in building cross-platform apps
            with the two most popular frameworks:{" "}
            <span
              style={{
                color: "#189366",
              }}
            >
              Flutter
            </span>{" "}
            and{" "}
            <span
              style={{
                color: "#189366",
              }}
            >
              React
            </span>
            ,
            <span
              style={{
                color: "#189366",
              }}
            >
              {" "}
              Native.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
