import React, { useEffect } from "react";
import { getText, parseDate } from "../utils/functions";

export default function BlogDetails({ setIsDark }) {
  useEffect(() => {
    setIsDark(false);
  }, []);
  let blogData = JSON.parse(window.localStorage.getItem("blogsData"));

  return (
    <>
      <div
        className="service__details__jumbotron"
        style={{
          width: "100%",
          height: "500px",
          position: "relative",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img
          src={
            "https://res.cloudinary.com/mehfoozurrehman/image/upload/" +
            blogData.image
          }
          alt="BlogDetailsImg"
          className="service__details__jumbotron__img"
          style={{ height: "100%", width: "100%" }}
        />
        <div
          className="service__details__jumbotron__content"
          style={{
            position: "absolute",
            top: 0,
            padding: 0,
            width: "100%",
            maxWidth: "100%",
            minHeight: "100%",
            height: "100%",
            background: "linear-gradient(transparent,rgba(0,0,0,1))",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
          }}
        >
          <div
            className="service__details__jumbotron__right"
            style={{
              width: "100%",
              maxWidth: "1440px",
              height: "fit-content",
              margin: "0em auto",
              padding: "0em 2em",
              justifyContent: "center",
            }}
          >
            <div
              className="service__details__jumbotron__right__heading"
              style={{ color: "white" }}
            >
              {blogData.title}
            </div>
            <div
              className="service__details__jumbotron__right__info"
              style={{ color: "white" }}
            >
              By {blogData.author} | {parseDate(blogData.updatedAt)}
            </div>
          </div>
        </div>
      </div>
      <div
        className="service__details__jumbotron__content"
        style={{ minHeight: "fit-content", marginTop: 50 }}
      >
        <div
          className="service__details__jumbotron__right__info"
          style={{ width: "100%" }}
        >
          {getText(blogData.content)}
        </div>
      </div>
    </>
  );
}
