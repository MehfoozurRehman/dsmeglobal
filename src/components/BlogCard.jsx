import React from "react";
import BlogsCardContent from "./BlogsCardContent";

export default function BlogsCard({ data, filter }) {
  let doesFilter;
  let categoryList = [];
  data.categories.map((item) => {
    categoryList.push(item.label);
  });
  for (var i = 0; i <= categoryList.length; i++) {
    doesFilter = categoryList.includes(filter);
  }

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
