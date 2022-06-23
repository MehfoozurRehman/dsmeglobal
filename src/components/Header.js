import React, { useLayoutEffect, useState, useTransition } from "react";
import { X, Menu } from "react-feather";
import { Link, useNavigate } from "react-router-dom";
import logoDark from "../assets/logoDark.svg";
import logo from "../assets/logo.svg";
import OutsideClickHandler from "react-outside-click-handler";

export default function Header({ light }) {
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
    window.addEventListener("scroll", navOpenClose);
  }, []);
  const [isPending, startTransition] = useTransition();
  return (
    <div className={light ? "header header__active" : "header"}>
      <div className="header__content">
        <Link
          to="/"
          onClick={() => {
            document.getElementById("Home").checked = true;
          }}
          className="header__content__logo"
        >
          <img src={light ? logo : logoDark} alt="logo" />
        </Link>
        {isNavOpen ? (
          <OutsideClickHandler
            onOutsideClick={() => {
              if (window.innerWidth < 1000) {
                setIsNavOpen(false);
              }
            }}
          >
            <Nav navigate={navigate} />
          </OutsideClickHandler>
        ) : null}
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
              startTransition(() => {
                document
                  .getElementsByName("header__content__nav__entry")
                  .forEach((item) => {
                    item.checked = false;
                  });
              });
            }}
            className="header__content__button__primary"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}

function NavLink({ children, to, navigate }) {
  const [isPending, startTransition] = useTransition();
  return (
    <div className="header__content__nav__entry">
      <input
        type="radio"
        name="header__content__nav__entry"
        id={children}
        title={children}
        className="header__content__nav__entry__input"
        defaultChecked={window.location.pathname === to}
        onClick={() => {
          startTransition(() => {
            navigate(to);
          });
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
