import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getText } from "../utils/functions";
import { Fade } from "react-reveal";
import axios from "axios";

export function BlogSection() {
  const navigate = useNavigate();
  const [blogData, setBlogData] = useState([]);
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}api/v1/get_blog`).then((res) => {
      setBlogData(res.data);
    });
  }, []);

  return (
    <div className="blog__section">
      <div className="blog__section__heading">
        <Fade>Our Blogs</Fade>
      </div>
      <div className="blog__section__content">
        {blogData &&
          blogData
            .filter((blog, i) => i < 3)
            .map((blog) => (
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
                  <div className="blog__card__content__heading">
                    <Fade>{blog.title}</Fade>
                  </div>
                  <div className="blog__card__content__info">
                    <Fade>
                      {getText(blog.content).length < 260
                        ? getText(blog.content)
                        : getText(blog.content).substring(0, 260) + "..."}
                    </Fade>
                  </div>
                </div>
              </button>
            ))}
      </div>
      <div className="blog__section__link__wrapper">
        <Link to="/blog" className="blog__section__link">
          Load more
        </Link>
      </div>
    </div>
  );
}
