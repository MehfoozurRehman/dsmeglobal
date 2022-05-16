import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import blog from "../assets/blog.jpg";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import axios from "axios";

export default function BlogSection() {
  return (
    <div className="into__section">
      <div className="into__section__wrapper">
        <div className="into__section__heading">
          Our
          <span>Blogs</span>
        </div>
        <div
          className="into__section__wrapper__content"
          style={{
            marginTop: "3em",
            alignItems: "flex-start",
            justifyContent: "space-between",
          }}
        >
          <button
            onClick={() => {
              setTimeout(() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }, 300);
            }}
            className="blog__card"
          >
            <img src={blog} alt="" className="blog__card__img" />
            <div className="blog__card__content">
              <div className="blog__card__content__title">
                Lorem ipsum dolor sit.
              </div>
              <div className="blog__card__content__info">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi
                dolore, excepturi neque
              </div>
            </div>
          </button>
          <button
            onClick={() => {
              setTimeout(() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }, 300);
            }}
            className="blog__card"
          >
            <img src={blog} alt="" className="blog__card__img" />
            <div className="blog__card__content">
              <div className="blog__card__content__title">
                Lorem ipsum dolor sit.
              </div>
              <div className="blog__card__content__info">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi
                dolore, excepturi neque
              </div>
            </div>
          </button>
          <button
            onClick={() => {
              setTimeout(() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }, 300);
            }}
            className="blog__card"
          >
            <img src={blog} alt="" className="blog__card__img" />
            <div className="blog__card__content">
              <div className="blog__card__content__title">
                Lorem ipsum dolor sit.
              </div>
              <div className="blog__card__content__info">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi
                dolore, excepturi neque
              </div>
            </div>
          </button>
          <button
            onClick={() => {
              setTimeout(() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }, 300);
            }}
            className="blog__card"
          >
            <img src={blog} alt="" className="blog__card__img" />
            <div className="blog__card__content">
              <div className="blog__card__content__title">
                Lorem ipsum dolor sit.
              </div>
              <div className="blog__card__content__info">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi
                dolore, excepturi neque
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}