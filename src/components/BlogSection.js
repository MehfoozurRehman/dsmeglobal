import React, { useEffect, useState } from "react";
import "swiper/css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";
import { getText } from "../utils/functions";
import { Fade, LightSpeed } from "react-reveal";

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
          <LightSpeed>
            Our
            <span>Blogs</span>
          </LightSpeed>
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
                key={JSON.stringify(blog)}
                className="blog__card"
              >
                <Fade>
                  <img
                    src={
                      "https://res.cloudinary.com/mehfoozurrehman/image/upload/q_50/" +
                      blog.image
                    }
                    alt={blog.title}
                    className="blog__card__img"
                  />
                </Fade>
                <div className="blog__card__content">
                  <div className="blog__card__content__title">
                    <LightSpeed>{blog.title}</LightSpeed>
                  </div>
                  <div className="blog__card__content__info">
                    <Fade>
                      {getText(blog.content).length < 100
                        ? getText(blog.content)
                        : getText(blog.content).substring(0, 100) + "..."}
                    </Fade>
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
