import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { fetcher, getText } from "../utils/functions";
import useSWR from "swr";
import { Bounce, Zoom } from "react-reveal";

export function BlogSection() {
  const navigate = useNavigate();

  const { data, error } = useSWR(
    `${import.meta.env.VITE_REACT_APP_API_URL}api/v1/get_blog`,
    fetcher,
    { suspense: true }
  );

  return (
    <div className="blog__section">
      <div className="blog__section__heading">
        Thirsty for tech & business tips?
      </div>
      <div className="blog__section__content">
        {error ? (
          <div>failed to load</div>
        ) : (
          data
            ?.filter((blog, i) => i < 3)
            .map((blog) => (
              <Zoom>
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
                  <img
                    loading="lazy"
                    src={
                      "https://res.cloudinary.com/mehfoozurrehman/image/upload/q_50/" +
                      blog.image
                    }
                    alt={blog.title}
                    className="blog__card__img"
                  />

                  <div className="blog__card__content">
                    <Bounce>
                      <div className="blog__card__content__heading">
                        {blog.title}
                      </div>
                      <div className="blog__card__content__info">
                        {getText(blog.content).length < 260
                          ? getText(blog.content)
                          : getText(blog.content).substring(0, 260) + "..."}
                      </div>
                    </Bounce>
                  </div>
                </button>
              </Zoom>
            ))
        )}
      </div>
      <div className="blog__section__link__wrapper">
        <Link to="/blog" className="blog__section__link">
          Load more
        </Link>
      </div>
    </div>
  );
}
