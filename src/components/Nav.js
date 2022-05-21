import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Nav({ setIsNavOpen }) {
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
        to="/careers"
        className="nav__link"
        onClick={() => {
          setIsNavOpen(false);
        }}
      >
        Careers
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
