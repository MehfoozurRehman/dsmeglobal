import React from "react";
import { NavLink } from "./NavLink";

export function Nav({ navigate }) {
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
