import React from "react";
import { HomeJumbotron } from "./HomeJumbotron";
import staff from "../assets/staff.svg";

export default function ServiceStaff() {
  return (
    <>
      <div className="container">
        <HomeJumbotron
          taglinesLine="Staff Automation"
          info="Web applications that are visually amazing and provide seamless user experience for the desktop, mobile and tablet."
          img={staff}
          talk={true}
        />
      </div>
    </>
  );
}
