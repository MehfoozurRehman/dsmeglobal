import React, { useEffect, useState } from "react";
import blog from "../assets/blog.jpg";
// Import Swiper React components
// Import Swiper styles
import "swiper/css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";
import { getText } from "../utils/functions";

export default function BlogSection() {
  const navigate = useNavigate();
  const [blogData, setBlogData] = useState([]);
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}api/v1/get_blog`).then((res) => {
      setBlogData(res.data);
    });
  }, []);

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
          {blogData.length === 0 ? (
            <Loader />
          ) : (
            blogData.map((blog) => (
              <button
                onClick={() => {
                  setTimeout(() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }, 300);
                  navigate("/blog-details");
                  window.localStorage.setItem(
                    "blogsData",
                    JSON.stringify(blog)
                  );
                }}
                className="blog__card"
              >
                <img
                  src={
                    "https://res.cloudinary.com/mehfoozurrehman/image/upload/" +
                    blog.image
                  }
                  alt=""
                  className="blog__card__img"
                />
                <div className="blog__card__content">
                  <div className="blog__card__content__title">{blog.title}</div>
                  <div className="blog__card__content__info">
                    {getText(blog.content).length < 100
                      ? getText(blog.content)
                      : getText(blog.content).substring(0, 100) + "..."}
                  </div>
                </div>
              </button>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
