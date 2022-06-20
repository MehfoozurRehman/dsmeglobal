import React from "react";
import { HomeJumbotron } from "./HomeJumbotron";
import bannerImage1 from "../assets/bannerImage1.svg";
import pencilpic from "../assets/pencil-sketch.png";
import imagepng2 from "../assets/high-fidelity-wireframes.png";
import imagepng3 from "../assets/pixel-perfect-mockups.jpg";
import "../styles/ServiceUIUX.scss";

export default function ServiceUIUX() {
  return (
    <>
      <div className="container">
        <HomeJumbotron
          taglinesLine="Web Application Development"
          info="Web applications that are visually amazing and provide seamless user experience for the desktop, mobile and tablet."
          img={bannerImage1}
        />
      </div>
      <div className="june_main_container">
        <div className="june_main_container_first_container">
          <h1 className="june_main_container_first_container_title">
            Our Design capabilites
          </h1>
          <div className="june_main_container_para">
            <p className="june_main_container_first_container_para">
              Creating a beautiful UI/UX is easy but carefully designing a
              visually appealing, exceptionally engaging and consumer
              decision-impulsive site is the real game - that's what we do best.
            </p>
          </div>
        </div>
        <div className="june_second_container_main">
          <div className="june_second_container">
            <div className="june_second_container_svg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-file-text"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
            </div>
            <h2 className="june_second_container_box_title_one">
              Product Design Workshop
            </h2>
            <h3 className="june_second_container_title_two">
              The fastest way to gather & analyse your requirements and take
              your product from concept to the actual design.
            </h3>
          </div>
          <div className="june_second_container">
            <div className="june_second_container_svg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-file-minus"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="9" y1="15" x2="15" y2="15"></line>
              </svg>
            </div>
            <h2 className="june_second_container_box_title_one">
              Rapid Prototyping
            </h2>
            <h3 className="june_second_container_title_two">
              Reduce your time to market by swiftly moving your product design
              from pencil sketches to high-fidelity wireframes and mockups.
            </h3>
          </div>
          <div className="june_second_container">
            <div className="june_second_container_svg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-file"
              >
                <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
                <polyline points="13 2 13 9 20 9"></polyline>
              </svg>
            </div>
            <h2 className="june_second_container_box_title_one">
              UI/UX Design
            </h2>
            <h3 className="june_second_container_title_two">
              We leverage our past UI/UX experience to bring simplicity to
              highly complex designs for user-friendliness and consumer
              engagement.
            </h3>
          </div>
          <div className="june_second_container">
            <div className="june_second_container_svg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-file-plus"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="12" y1="18" x2="12" y2="12"></line>
                <line x1="9" y1="15" x2="15" y2="15"></line>
              </svg>
            </div>
            <h2 className="june_second_container_box_title_one">Web Design</h2>
            <h3 className="june_second_container_title_two">
              We have designed amazing experiences for websites and web
              applications across all platforms (desktop, mobile & tablets)..
            </h3>
          </div>
        </div>
        <div className="june_second_main_container">
          <div className="june_second_main_all_container">
            <div className="june_third_container">
              <h1 className="june_third_container_title">Execution Process</h1>
              <h3 className="june_third_container_para">
                We work with you to make appealing sites, impactful
                applications, and modern enterprise systems individuals love.
                Through your vision and our expertise, our team of business
                analysts, designers, and developers will build experiences that
                keep your customers coming back.
              </h3>
            </div>
            <div className="june_third_container_first_box">
              <div className="june_fourth_container_box_title_on">
                <div className="june_third_container_first_box_svg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-file-text"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                  </svg>
                  <div className="june_third_container_first_box_svg_one">
                    <h2 className="june_third_container_first_box_first_title">
                      Discovery
                    </h2>
                  </div>
                </div>
                <div className="june_third_container_first_box_content">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-check-circle"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <ul>Understand business pain points</ul>
                </div>
                <div className="june_third_container_first_box_content_two">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-check-circle"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <ul>Interviews & observations</ul>
                </div>
                <div className="june_third_container_first_box_content_three">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-check-circle"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <ul>Functional requirements</ul>
                </div>
              </div>
              <div className="june_third_container_second_box_container">
                <div className="june_third_container_second_box_container_svg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-box"
                  >
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                    <line x1="12" y1="22.08" x2="12" y2="12"></line>
                  </svg>
                  <div className="june_third_container_second_box_container_svg_one">
                    <h2 className="june_third_container_second_box_container_title">
                      Wireframes
                    </h2>
                  </div>
                </div>
                <div className="june_third_container_second_box_container_content">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-check-circle"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <ul>Concept sketching</ul>
                </div>
                <div className="june_third_container_second_box_container_content_two">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-check-circle"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <ul>System/Process flow</ul>
                </div>
                <div className="june_third_container_second_box_container_content_three">
                  <div className="june_third_container_second_box_container_content_three_svg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-check-circle"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <ul>Information architecture</ul>
                </div>
              </div>
              <div className="june_third_container_third_box_container">
                <div className="june_third_container_third_box_container_svg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-layout"
                  >
                    <rect
                      x="3"
                      y="3"
                      width="18"
                      height="18"
                      rx="2"
                      ry="2"
                    ></rect>
                    <line x1="3" y1="9" x2="21" y2="9"></line>
                    <line x1="9" y1="21" x2="9" y2="9"></line>
                  </svg>
                  <div className="june_third_container_third_box_container_svg_one">
                    <h2 className="june_third_container_third_container_title">
                      Build & Iterate
                    </h2>
                  </div>
                </div>
                <div className="june_third_container_third_box_content">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-check-circle"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <ul>Interaction design</ul>
                </div>
                <div className="june_third_container_third_box_content_two">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-check-circle"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <ul>High-fidelity mockups</ul>
                </div>
                <div className="june_third_container_third_box_content_three">
                  <div className="june_third_container_third_box_content_three_svg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-check-circle"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <ul>Interactive prototypes</ul>
                </div>
                <div className="june_third_container_third_box_content_four">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-check-circle"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <ul>UI Style guide/brand identity</ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="june_fourth_container_box">
          <div className="june_fourth_container_box_one">
            <h2 className="june_fourth_container_box_title">
              Talk to us about your <span>challenges</span> and{" "}
              <span>we will bring an</span> incredible team.
            </h2>
          </div>
          <div className="june_fourth_container_box_button_cotainer">
            <button className="june_fourth_container_box_button">
              Let's Talk
            </button>
          </div>
        </div>
        <div className="june_main_container_images">
          <div className="june_first_container_images">
            <img
              className="june_first_container_images_one"
              src={pencilpic}
              alt="s"
            />
            <div className="june_main_container_images_content_main">
              <div className="june_second_container_images_one_content_container">
                <h1 className="june_main_container_images_content_One">
                  Pencil sketch
                </h1>
                <p className="june_main_container_images_content_two">
                  Back of the napkin designs
                </p>
              </div>
            </div>
          </div>
          <div className="june_first_container_images">
            <img
              className="june_first_container_images_one"
              src={imagepng2}
              alt="s"
            />
            <div className="june_main_container_images_content_main">
              <div className="june_second_container_images_one_content_container">
                <h1 className="june_main_container_images_content_One">
                High Fidelity Wireframes
                </h1>
                <p className="june_main_container_images_content_two">
                More realistic content closer to the end result.
                </p>
              </div>
            </div>
          </div>
          <div className="june_first_container_images">
            <img
              className="june_first_container_images_one"
              src={imagepng3}
              alt="s"
            />
            <div className="june_main_container_images_content_main">
              <div className="june_second_container_images_one_content_container">
                <h1 className="june_main_container_images_content_One">
                Pixel Perfect Mockups
                </h1>
                <p className="june_main_container_images_content_two">
                Fully visualize the look and feel of your final product.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
