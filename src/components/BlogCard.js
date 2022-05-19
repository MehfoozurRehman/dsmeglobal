import React from "react";
import { useNavigate } from "react-router-dom";

function BlogsCardContent({ data }) {
  const navigate = useNavigate();
  function getText(html) {
    var divContainer = document.createElement("div");
    divContainer.innerHTML = html;
    return divContainer.textContent || divContainer.innerText || "";
  }
  return (
    <button
      onClick={() => {
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }, 300);
        navigate("/blog-details");
        window.localStorage.setItem("blogsData", JSON.stringify(data));
      }}
      className="blog__card"
    >
      <img
        src={
          "https://res.cloudinary.com/mehfoozurrehman/image/upload/" +
          data.image
        }
        alt=""
        className="blog__card__img"
      />
      <div className="blog__card__content">
        <div className="blog__card__content__title">{data.title}</div>
        <div className="blog__card__content__info">
          {getText(data.content).length < 100
            ? getText(data.content)
            : getText(data.content).substring(0, 100) + "..."}
        </div>
      </div>
    </button>
  );
}

export default function BlogsCard({ data, filter }) {
  let doesFilter;
  let categoryList = [];
  data.categories.map((item) => {
    categoryList.push(item.label);
  });
  for (var i = 0; i <= categoryList.length; i++) {
    doesFilter = categoryList.includes(filter);
  }
  console.log(data);
  return (
    <>
      {filter === "" ? (
        <BlogsCardContent data={data} />
      ) : doesFilter ? (
        <BlogsCardContent data={data} />
      ) : null}
    </>
  );
}
