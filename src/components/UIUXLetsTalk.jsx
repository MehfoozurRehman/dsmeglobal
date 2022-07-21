import React from "react";
import { Link } from "react-router-dom";

export function UIUXLetsTalk() {
  return (
    <div className="june_fourth_container_box">
      <div className="june_fourth_container_box_one">
        <div className="june_fourth_container_box_title">
          Talk to us about your <span>challenges</span> and{" "}
          <span>we will bring an</span> incredible team.
        </div>
      </div>
      <div className="june_fourth_container_box_button_cotainer">
        <Link to="/contact-us" className="june_fourth_container_box_button">
          Let's Talk
        </Link>
      </div>
    </div>
  );
}
