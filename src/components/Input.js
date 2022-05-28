import React from "react";

export default function Input({
  variant,
  type,
  placeholder,
  onChange,
  value,
  required,
  errorMessage,
  isError,
  disabled,
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
        {isError ? (
          <label
            htmlFor={placeholder}
            className="contact__section__content__middle__input__error__message"
          >
            {errorMessage}
          </label>
        ) : null}
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
        {isError ? (
          <label
            htmlFor={placeholder}
            className="contact__section__content__middle__input__error__message"
          >
            {errorMessage}
          </label>
        ) : null}
        <input
          type={type}
          id={placeholder}
          placeholder={placeholder}
          className="contact__section__content__middle__input__field"
          onChange={onChange}
          value={value}
          required={required}
          disabled={disabled}
        />
      </div>
    );
  }
}
