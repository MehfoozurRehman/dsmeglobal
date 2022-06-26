import React from "react";
import { HomeJumbotron } from "./HomeJumbotron";
import software from "../assets/software.svg";

export default function ServiceCustomSoft() {
  return (
    <>
      <div className="container">
        <HomeJumbotron
          taglinesLine="Custom software Development"
          info="Web applications that are visually amazing and provide seamless user experience for the desktop, mobile and tablet."
          img={software}
          talk={true}
        />
      </div>
    </>
  );
}
