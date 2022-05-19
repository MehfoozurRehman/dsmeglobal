import axios from "axios";
import React, { useEffect, useState } from "react";
import BlogsCard from "../components/BlogCard";

function BlogsFilter({ title, onChange, defaultChecked }) {
  return (
    <div className="portolio__filter__left__entry">
      <input
        type="radio"
        className="portolio__filter__left__entry__input"
        name="portolio__filter__left__entry__input"
        onChange={onChange}
        defaultChecked={defaultChecked}
      />
      <div className="portolio__filter__left__entry__content">{title}</div>
    </div>
  );
}

export default function Blogs({ setIsDark }) {
  const [showImage, setShowImage] = useState(false);
  const [noOfItems, setNoOfItems] = useState(9);
  const [blogData, setblogData] = useState([]);
  const [filter, setFilter] = useState("");
  if (showImage) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
  useEffect(() => {
    setIsDark(true);
    axios.get(`${process.env.REACT_APP_API_URL}api/v1/get_blog`).then((res) => {
      setblogData(res.data);
      console.log(res.data);
    });
  }, []);
  return (
    <>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          marginTop: "10em",
        }}
      >
        <div className="services__main__container__content__heading">Blogs</div>
      </div>
      <div className="portolio__filter">
        <div className="portolio__filter__left">
          <BlogsFilter
            title="All"
            defaultChecked={true}
            onChange={() => {
              setFilter("");
            }}
          />
          <BlogsFilter
            title="Web Apps"
            onChange={() => {
              setFilter("Web App Development");
            }}
          />
          <BlogsFilter
            title="Mobile Apps"
            onChange={() => {
              setFilter("Mobile App Development");
            }}
          />
          <BlogsFilter
            title="Ecommerce"
            onChange={() => {
              setFilter("Ecommerce Solutions");
            }}
          />
          <BlogsFilter
            title="UI/UX Design"
            onChange={() => {
              setFilter("UI & UX Services");
            }}
          />
        </div>
      </div>
      <div className="service__details__projects">
        {blogData
          .filter((item, i) => (filter === "" ? i < noOfItems : (i = i)))
          .map((item) => (
            <BlogsCard data={item} key={JSON.stringify(item)} filter={filter} />
          ))}
      </div>
      {filter === "" ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "2em",
          }}
        >
          <button
            className="button"
            onClick={() => {
              setNoOfItems(noOfItems + noOfItems);
            }}
          >
            Load More
          </button>
        </div>
      ) : null}
    </>
  );
}
