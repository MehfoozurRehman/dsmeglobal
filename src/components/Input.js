import React from "react";

export default function Input({ variant, type, placeholder }) {
  if (variant === "textarea") {
    return (
      <div className="contact__section__content__middle__input">
        <label
          htmlFor=""
          className="contact__section__content__middle__input__label"
        >
          {placeholder}
        </label>
        <textarea
          type={type}
          placeholder={placeholder}
          className="contact__section__content__middle__input__textarea"
        />
      </div>
    );
  } else {
    return (
      <div className="contact__section__content__middle__input">
        <label
          htmlFor=""
          className="contact__section__content__middle__input__label"
        >
          {placeholder}
        </label>
        <input
          type={type}
          placeholder={placeholder}
          className="contact__section__content__middle__input__field"
        />
      </div>
    );
  }
}
