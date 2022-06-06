import axios from "axios";
import React, { useEffect, useState } from "react";
import BlogsCard from "../components/BlogCard";
import BlogsFilter from "../components/BlogsFilter";
import Loader from "../components/Loader";

export default function Blogs({ setIsDark }) {
  const [noOfItems, setNoOfItems] = useState(9);
  const [blogData, setblogData] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    setIsDark(true);
    axios.get(`${process.env.REACT_APP_API_URL}api/v1/get_blog`).then((res) => {
      setblogData(res.data);
      console.log(res.data);
    });
  }, []);
  return (
    <div className="blog__page">
      <div className="blog__page__heading">Blogs</div>
      <div className="blog__page__filter">
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
      <div className="blog__page__content">
        {blogData.length === 0 ? (
          <Loader />
        ) : (
          blogData
            .filter((item, i) => (filter === "" ? i < noOfItems : (i = i)))
            .map((item) => (
              <BlogsCard
                data={item}
                key={JSON.stringify(item)}
                filter={filter}
              />
            ))
        )}
      </div>
      {filter === "" && blogData.length > 6 ? (
        <div className="blog__page__content__button">
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
    </div>
  );
}
