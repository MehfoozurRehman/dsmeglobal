import React from "react";
import ProjectCardContent from "./ProjectCardContent";

export default function ProjectCard({
  setShowImage,
  data,
  setShowImageData,
  filter,
}) {
  let isOurProduct;
  let doesFilter;
  let categoryList = [];
  data.categories.map((item) => {
    categoryList.push(item.label);
  });
  for (var i = 0; i <= categoryList.length; i++) {
    doesFilter = categoryList.includes(filter);
  }

  data.isOur.map((item) => {
    isOurProduct = item.value;
  });
  return (
    <>
      {filter === "" ? (
        <ProjectCardContent
          image={data.image}
          url={data.url}
          title={data.title}
          setShowImage={setShowImage}
          setShowImageData={setShowImageData}
        />
      ) : doesFilter ? (
        <ProjectCardContent
          image={data.image}
          url={data.url}
          title={data.title}
          setShowImage={setShowImage}
          setShowImageData={setShowImageData}
        />
      ) : filter === "our product" && isOurProduct ? (
        <ProjectCardContent
          image={data.image}
          url={data.url}
          title={data.title}
          setShowImage={setShowImage}
          setShowImageData={setShowImageData}
        />
      ) : null}
    </>
  );
}
