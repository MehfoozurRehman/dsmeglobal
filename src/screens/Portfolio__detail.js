import React from "react";
import Portfolio__section from "../components/Portfolio__section";
import { HomeJumbotron } from "./HomeJumbotron";
import bannerImage from "../assets/bannerImage2.png";

export default function Portfolio__detail() {
  return (
    <div className="container">
      <HomeJumbotron
        taglinesLine="Lets Get to"
        taglines={["Know Us", "Know Our Story"]}
        info="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore,
      culpa est? Quos iusto dolore culpa, veritatis quas minus quibusdam
      ad? Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      Dolore, culpa est? Quos iusto dolore culpa, veritatis quas minus
      quibusdam ad?"
        img={bannerImage}
      />
      <Portfolio__section />
    </div>
  );
}
