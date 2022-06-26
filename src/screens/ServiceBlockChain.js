import React from "react";
import { HomeJumbotron } from "./HomeJumbotron";
import blockchain from "../assets/blockchain.svg";

export default function ServiceBlockChain() {
  return (
    <>
      <div className="container">
        <HomeJumbotron
          taglinesLine="Blockchain Consulting"
          info="Web applications that are visually amazing and provide seamless user experience for the desktop, mobile and tablet."
          img={blockchain}
          talk={true}
        />
      </div>
    </>
  );
}
