import React from "react";
import { HomeJumbotron } from "./HomeJumbotron";
import bannerImage1 from "../assets/bannerImage1.svg";

export default function ServiceBlockChain() {
  return (
    <>
      <div className="container">
        <HomeJumbotron
          taglinesLine="Web Application Development"
          info="Web applications that are visually amazing and provide seamless user experience for the desktop, mobile and tablet."
          img={bannerImage1}
        />
      </div>
    </>
  );
}
