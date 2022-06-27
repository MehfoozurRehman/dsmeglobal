import React from "react";
import { parseDate } from "../utils/functions";

export default function BlogDetails() {
  let blogData = JSON.parse(window.localStorage.getItem("blogsData"));
  return (
    <>
      <div className="blog__jumbotron">
        <img
          src={
            "https://res.cloudinary.com/mehfoozurrehman/image/upload/" +
            blogData.image
          }
          alt="BlogDetailsImg"
          className="service__details__jumbotron__img"
          style={{ height: "100%", width: "100%" }}
        />
        <div className="blog__jumbotron__overlay">
          <div
            className="blog__jumbotron__overlay__heading"
            style={{ color: "white" }}
          >
            {blogData.title}
          </div>
          <div
            className="blog__jumbotron__overlay__info"
            style={{ color: "white" }}
          >
            By {blogData.author} | {parseDate(blogData.updatedAt)}
          </div>
        </div>
      </div>
      <div
        className="blog__jumbotron__content"
        dangerouslySetInnerHTML={{ __html: blogData.content }}
      />
    </>
  );
}
