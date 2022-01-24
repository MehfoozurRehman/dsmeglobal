import React from "react";
import Header from "./components/Header";
import "./styles/App.scss";
import "animate.css";
import { Route, Routes, Link } from "react-router-dom";
import video from "./assets/video.mp4";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function CarouselEntry({ subHeading, heading, buttonLabel, toPath, isRight }) {
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
            We Find
          </div>
          <div className="home__section__carousel__entry__overlay__content__heading">
            OUR UNIQUE WAY
          </div>
          <Link to={toPath ? toPath : "/"} className="button">
            {buttonLabel}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Carousel
                autoPlay={true}
                interval={4000}
                showArrows={false}
                showStatus={false}
                infiniteLoop={true}
              >
                <CarouselEntry
                  subHeading="WE FIND"
                  heading="OUR UNIQUE WAY"
                  buttonLabel="View Our Work"
                  toPath="/"
                />
                <CarouselEntry
                  subHeading="WE THINK"
                  heading="OUT OF THE BOX"
                  isRight={true}
                  buttonLabel="View Our Work"
                  toPath="/"
                />
                <CarouselEntry
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
            </>
          }
        ></Route>
      </Routes>
    </>
  );
}
