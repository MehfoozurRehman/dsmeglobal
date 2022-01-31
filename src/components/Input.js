import React from "react";

export default function Input({
  variant,
  type,
  placeholder,
  onChange,
  value,
  required,
}) {
  if (variant === "textarea") {
    return (
      <div className="contact__section__content__middle__input">
        <label
          htmlFor={placeholder}
          className="contact__section__content__middle__input__label"
        >
          {placeholder}
        </label>
        <textarea
          type={type}
          id={placeholder}
          placeholder={placeholder}
          className="contact__section__content__middle__input__textarea"
          onChange={onChange}
          value={value}
        />
      </div>
    );
  } else {
    return (
      <div className="contact__section__content__middle__input">
        <label
          htmlFor={placeholder}
          className="contact__section__content__middle__input__label"
        >
          {placeholder}
        </label>
        <input
          type={type}
          id={placeholder}
          placeholder={placeholder}
          className="contact__section__content__middle__input__field"
          onChange={onChange}
          value={value}
          required={required}
        />
      </div>
    );
  }
}
