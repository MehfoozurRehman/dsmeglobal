import React from "react";

export default function EcomereceRoleSelector({
  svg,
  label,
  selected,
  setSelected,
}) {
  return (
    <div className="ecommerce__screen__container__role__entry">
      <input
        type="radio"
        defaultChecked={selected === label}
        onChange={() => {
          setSelected(label);
        }}
        name="ecommerce__screen__container__role__entry"
        className="ecommerce__screen__container__role__entry__input"
      />
      <div className="ecommerce__screen__container__role__entry__content">
        {svg}
        <div className="ecommerce__screen__container__role__entry__content__heading">
          {label}
        </div>
      </div>
    </div>
  );
}
