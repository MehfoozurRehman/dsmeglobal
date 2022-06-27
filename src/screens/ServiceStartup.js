import React from "react";
import { HomeJumbotron } from "../components/HomeJumbotron";
import startup from "../assets/startup.svg";

export default function ServiceStartup() {
  return (
    <>
      <div className="container">
        <HomeJumbotron
          taglinesLine="Startup Services"
          info="Web applications that are visually amazing and provide seamless user experience for the desktop, mobile and tablet."
          img={startup}
          talk={true}
        />
      </div>
    </>
  );
}
