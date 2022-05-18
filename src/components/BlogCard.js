import React from "react";

function getText(html) {
  var divContainer = document.createElement("div");
  divContainer.innerHTML = html;
  return divContainer.textContent || divContainer.innerText || "";
}
function BlogsCardContent({ data }) {
  return (
    <button
      onClick={() => {
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }, 300);
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
