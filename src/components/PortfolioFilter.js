import React from "react";

export default function PortfolioFilter({ title, onChange, defaultChecked }) {
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
