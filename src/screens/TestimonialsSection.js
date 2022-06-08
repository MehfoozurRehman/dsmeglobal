import React, { useState } from "react";
import testimonialBg from "../assets/testimonialBg.jpg";

export function TestimonialsSection({}) {
  const array = [
    {
      img: "https://aigron-web.web.app/assets/clientPic.356d7feb.png",
      name: "Fahad Ayyaz",
      designation: "Designer",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, perferendis! Distinctio ducimus ea illo asperiores molestiae. Non, necessitatibus esse! Perferendis corporis consequatur illo quos inventore consectetur, ab eius velit dicta, dolore animi nisi nesciunt nemo iusto ducimus? Maiores placeat minus blanditiis excepturi, iusto consequatur veritatis tenetur ipsam libero voluptate amet?",
      top: "20%",
      left: "5%",
    },
    {
      img: "https://aigron-web.web.app/assets/clientPic.356d7feb.png",
      name: "Bilal Shabbir",
      designation: "Developer",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, perferendis! Distinctio ducimus ea illo asperiores molestiae. Non, necessitatibus esse! Perferendis corporis consequatur illo quos inventore consectetur, ab eius velit dicta, dolore animi nisi nesciunt nemo iusto ducimus? Maiores placeat minus blanditiis excepturi, iusto consequatur veritatis tenetur ipsam libero voluptate amet?",
      top: "45%",
      left: "25%",
    },
    {
      img: "https://aigron-web.web.app/assets/clientPic.356d7feb.png",
      name: "Mehfooz",
      designation: "Developer",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, perferendis! Distinctio ducimus ea illo asperiores molestiae. Non, necessitatibus esse! Perferendis corporis consequatur illo quos inventore consectetur, ab eius velit dicta, dolore animi nisi nesciunt nemo iusto ducimus? Maiores placeat minus blanditiis excepturi, iusto consequatur veritatis tenetur ipsam libero voluptate amet?",
      top: "30%",
      left: "50%",
    },
    {
      img: "https://aigron-web.web.app/assets/clientPic.356d7feb.png",
      name: "Asim Rasheed",
      designation: "Designer",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, perferendis! Distinctio ducimus ea illo asperiores molestiae. Non, necessitatibus esse! Perferendis corporis consequatur illo quos inventore consectetur, ab eius velit dicta, dolore animi nisi nesciunt nemo iusto ducimus? Maiores placeat minus blanditiis excepturi, iusto consequatur veritatis tenetur ipsam libero voluptate amet?",
      top: "20%",
      left: "65%",
    },
    {
      img: "https://aigron-web.web.app/assets/clientPic.356d7feb.png",
      name: "Arslan",
      designation: "Designer",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, perferendis! Distinctio ducimus ea illo asperiores molestiae. Non, necessitatibus esse! Perferendis corporis consequatur illo quos inventore consectetur, ab eius velit dicta, dolore animi nisi nesciunt nemo iusto ducimus? Maiores placeat minus blanditiis excepturi, iusto consequatur veritatis tenetur ipsam libero voluptate amet?",
      top: "40%",
      left: "80%",
    },
  ];
  const [selected, setSelected] = useState(0);
  return (
    <div className="container__testimonials">
      <div className="container__testimonials__overlay__heading">
        See what our clients say about us
      </div>
      <img
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
            <button
              className={
                selected === i
                  ? "container__testimonials__overlay__content__entry container__testimonials__overlay__content__entry__active"
                  : "container__testimonials__overlay__content__entry"
              }
              style={
                selected === i
                  ? {
                      top: item.top,
                      left: item.left,
                    }
                  : { top: item.top, left: item.left }
              }
              onClick={() => {
                setSelected(i);
              }}
            >
              <img
                src={item.img}
                alt={item.name}
                className="container__testimonials__overlay__content__entry__img"
              />
            </button>
          ))}
        </div>
      </div>
      {array
        .filter((item, i) => i === selected)
        .map((item) => (
          <div className="container__testimonials__overlay__info">
            <div className="container__testimonials__overlay__info__message">
              {item.message}
            </div>
            <div className="container__testimonials__overlay__info__heading">
              {item.name}
            </div>
            <div className="container__testimonials__overlay__info__sub__heading">
              {item.designation}
            </div>
          </div>
        ))}
    </div>
  );
}
