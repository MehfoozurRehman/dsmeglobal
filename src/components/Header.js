import React, { useLayoutEffect, useState } from "react";
import { X, Menu } from "react-feather";
import { Link, useNavigate } from "react-router-dom";
import logoDark from "../assets/logoDark.png";

export default function Header() {
  const navigate = useNavigate();
  const [isNavOpen, setIsNavOpen] = useState(true);

  function navOpenClose() {
    if (window.innerWidth < 1000) {
      setIsNavOpen(false);
    } else {
      setIsNavOpen(true);
    }
  }
  useLayoutEffect(() => {
    navOpenClose();
    window.addEventListener("resize", navOpenClose);
  }, []);

  return (
    <div className="header">
      <div className="header__content">
        <Link to="/" className="header__content__logo">
          <img src={logoDark} alt="logo" />
        </Link>
        {isNavOpen ? <Nav navigate={navigate} /> : null}
        <div className="header__content__button">
          <button
            className="header__content__button__secondary"
            onClick={() => {
              setIsNavOpen(!isNavOpen);
            }}
          >
            {isNavOpen ? (
              <X size={20} color="currentColor" />
            ) : (
              <Menu size={20} color="currentColor" />
            )}
          </button>
          <Link
            to="/contact-us"
            onClick={() => {
              document
                .getElementsByName("header__content__nav__entry")
                .forEach((item) => {
                  item.checked = false;
                });
            }}
            className="header__content__button__primary"
          >
            Let's Talk
          </Link>
        </div>
      </div>
    </div>
  );
}

function NavLink({ children, to, navigate }) {
  return (
    <div className="header__content__nav__entry">
      <input
        type="radio"
        name="header__content__nav__entry"
        className="header__content__nav__entry__input"
        defaultChecked={window.location.pathname === to}
        onClick={() => {
          navigate(to);
        }}
      />
      <div className="header__content__nav__entry__content">{children}</div>
    </div>
  );
}

function Nav({ navigate }) {
  return (
    <div className="header__content__nav">
      <NavLink to="/" navigate={navigate}>
        Home
      </NavLink>
      <NavLink to="/about-us" navigate={navigate}>
        About Us
      </NavLink>
      <NavLink to="/services" navigate={navigate}>
        Services
      </NavLink>
      <NavLink to="/portfolio" navigate={navigate}>
        Portfolio
      </NavLink>
      <NavLink to="/pricing" navigate={navigate}>
        Pricing
      </NavLink>
      <NavLink to="/careers" navigate={navigate}>
        Careers
      </NavLink>
      <NavLink to="/blog" navigate={navigate}>
        Blog
      </NavLink>
    </div>
  );
}
