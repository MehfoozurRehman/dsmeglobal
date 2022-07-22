import React, { useState } from "react";
import { Bounce, Zoom } from "react-reveal";
import testimonialBg from "../assets/testimonialBg.webp";

export function TestimonialsSection() {
  const array = [
    {
      img: "https://aigron-web.web.app/assets/clientPic.356d7feb.png",
      name: "Fahad Ayyaz",
      designation: "Designer",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, perferendis! Distinctio ducimus ea illo asperiores molestiae. Non, necessitatibus esse! Perferendis corporis consequatur illo quos inventore consectetur, ab eius velit dicta, dolore animi nisi nesciunt nemo iusto ducimus? Maiores placeat minus blanditiis excepturi, iusto consequatur veritatis tenetur ipsam libero voluptate amet?",
    },
    {
      img: "https://aigron-web.web.app/assets/clientPic.356d7feb.png",
      name: "Bilal Shabbir",
      designation: "Developer",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, perferendis! Distinctio ducimus ea illo asperiores molestiae. Non, necessitatibus esse! Perferendis corporis consequatur illo quos inventore consectetur, ab eius velit dicta, dolore animi nisi nesciunt nemo iusto ducimus? Maiores placeat minus blanditiis excepturi, iusto consequatur veritatis tenetur ipsam libero voluptate amet?",
    },
    {
      img: "https://aigron-web.web.app/assets/clientPic.356d7feb.png",
      name: "Mehfooz",
      designation: "Developer",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, perferendis! Distinctio ducimus ea illo asperiores molestiae. Non, necessitatibus esse! Perferendis corporis consequatur illo quos inventore consectetur, ab eius velit dicta, dolore animi nisi nesciunt nemo iusto ducimus? Maiores placeat minus blanditiis excepturi, iusto consequatur veritatis tenetur ipsam libero voluptate amet?",
    },
    {
      img: "https://aigron-web.web.app/assets/clientPic.356d7feb.png",
      name: "Asim Rasheed",
      designation: "Designer",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, perferendis! Distinctio ducimus ea illo asperiores molestiae. Non, necessitatibus esse! Perferendis corporis consequatur illo quos inventore consectetur, ab eius velit dicta, dolore animi nisi nesciunt nemo iusto ducimus? Maiores placeat minus blanditiis excepturi, iusto consequatur veritatis tenetur ipsam libero voluptate amet?",
    },
    {
      img: "https://aigron-web.web.app/assets/clientPic.356d7feb.png",
      name: "Arslan",
      designation: "Designer",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, perferendis! Distinctio ducimus ea illo asperiores molestiae. Non, necessitatibus esse! Perferendis corporis consequatur illo quos inventore consectetur, ab eius velit dicta, dolore animi nisi nesciunt nemo iusto ducimus? Maiores placeat minus blanditiis excepturi, iusto consequatur veritatis tenetur ipsam libero voluptate amet?",
    },
  ];
  const [selected, setSelected] = useState(0);
  return (
    <div className="container__testimonials">
      <div className="container__testimonials__overlay__heading">
        See what our clients say about us
        <span>
          Not sure if DSME Global Links is the right choice in your case? You
          don’t need to take our word for it. Browse the opinions of our clients
          and discover the benefits of working with us!
        </span>
      </div>

      <img
        loading="lazy"
        src={testimonialBg}
        alt="testimonialBg"
        className="container__testimonials__img"
        id="container__testimonials__img"
      />
      <div className="container__testimonials__overlay">
        <div
          className="container__testimonials__overlay__content"
          id="container__testimonials__overlay__content"
        >
          {array.map((item, i) => (
            <Zoom>
              <button
                key={JSON.stringify(item)}
                className={
                  selected === i
                    ? "container__testimonials__overlay__content__entry container__testimonials__overlay__content__entry__active"
                    : "container__testimonials__overlay__content__entry"
                }
                onClick={() => {
                  setSelected(i);
                }}
              >
                <img
                  loading="lazy"
                  src={item.img}
                  alt={item.name}
                  className="container__testimonials__overlay__content__entry__img"
                />
              </button>
            </Zoom>
          ))}
        </div>
      </div>
      {array
        .filter((item, i) => i === selected)
        .map((item) => (
          <div
            className="container__testimonials__overlay__info"
            key={JSON.stringify(item)}
          >
            <Bounce>
              <div className="container__testimonials__overlay__info__message">
                {item.message}
              </div>
              <div className="container__testimonials__overlay__info__heading">
                {item.name}
              </div>
              <div className="container__testimonials__overlay__info__sub__heading">
                {item.designation}
              </div>
            </Bounce>
          </div>
        ))}
    </div>
  );
}
