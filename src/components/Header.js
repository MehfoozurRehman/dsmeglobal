import React, { useEffect, useState } from "react";
import { X } from "react-feather";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import logoDark from "../assets/logoDark.png";

function Nav({ setIsNavOpen }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "auto");
  }, []);

  return (
    <div className="nav animate__animated animate__fadeInDown">
      <Link
        to="/"
        className="nav__link"
        onClick={() => {
          setIsNavOpen(false);
        }}
      >
        Home
      </Link>
      <Link
        to="about-us"
        className="nav__link"
        onClick={() => {
          setIsNavOpen(false);
        }}
      >
        About Us
      </Link>
      <Link
        to="/services"
        className="nav__link"
        onClick={() => {
          setIsNavOpen(false);
        }}
      >
        Services
      </Link>
      <Link
        to="/portfolio"
        className="nav__link"
        onClick={() => {
          setIsNavOpen(false);
        }}
      >
        Portfolio
      </Link>
      <Link
        to="/pricing"
        className="nav__link"
        onClick={() => {
          setIsNavOpen(false);
        }}
      >
        Pricing
      </Link>
      <Link
        to="/blog"
        className="nav__link"
        onClick={() => {
          setIsNavOpen(false);
        }}
      >
        Blog
      </Link>
      <Link
        to="/contact-us"
        className="nav__link"
        onClick={() => {
          setIsNavOpen(false);
        }}
      >
        Contact Us
      </Link>
    </div>
  );
}

export default function Header({ isDark }) {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <div className="header">
      <div className="header__wrapper">
        <Link to="/" className="brand__name">
          {isDark ? (
            <img src={logoDark} alt="logo" className="brand__name__logo" />
          ) : (
            <img src={logo} alt="logo" className="brand__name__logo" />
          )}
        </Link>
        <button
          className="nav__menu__btn"
          onClick={() => {
            isNavOpen ? setIsNavOpen(false) : setIsNavOpen(true);
          }}
        >
          {isNavOpen ? (
            <X color="currentColor" size={30} strokeWidth={3} />
          ) : isDark ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="29.221"
              height="22.522"
              viewBox="0 0 29.221 22.522"
            >
              <g
                id="Group_5"
                data-name="Group 5"
                transform="translate(-1773.279 -41.5)"
              >
                <line
                  id="Line_1"
                  data-name="Line 1"
                  x2="25.221"
                  transform="translate(1775.279 43.5)"
                  fill="none"
                  stroke="#242424"
                  strokeLinecap="round"
                  strokeWidth="4"
                />
                <line
                  id="Line_2"
                  data-name="Line 2"
                  x2="11.869"
                  transform="translate(1788.631 52.761)"
                  fill="none"
                  stroke="#242424"
                  strokeLinecap="round"
                  strokeWidth="4"
                />
                <line
                  id="Line_3"
                  data-name="Line 3"
                  x2="22.254"
                  transform="translate(1778.246 62.022)"
                  fill="none"
                  stroke="#242424"
                  strokeLinecap="round"
                  strokeWidth="4"
                />
              </g>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="29.221"
              height="22.522"
              viewBox="0 0 29.221 22.522"
            >
              <g
                id="Group_5"
                data-name="Group 5"
                transform="translate(-1773.279 -41.5)"
              >
                <line
                  id="Line_1"
                  data-name="Line 1"
                  x2="25.221"
                  transform="translate(1775.279 43.5)"
                  fill="none"
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeWidth="4"
                />
                <line
                  id="Line_2"
                  data-name="Line 2"
                  x2="11.869"
                  transform="translate(1788.631 52.761)"
                  fill="none"
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeWidth="4"
                />
                <line
                  id="Line_3"
                  data-name="Line 3"
                  x2="22.254"
                  transform="translate(1778.246 62.022)"
                  fill="none"
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeWidth="4"
                />
              </g>
            </svg>
          )}
        </button>
        {isNavOpen ? <Nav setIsNavOpen={setIsNavOpen} /> : null}
      </div>
    </div>
  );
}
