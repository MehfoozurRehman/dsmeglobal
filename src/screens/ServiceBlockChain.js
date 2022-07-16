import React from "react";
import { HomeJumbotron } from "../components/HomeJumbotron";
import bannerImage1 from "../assets/bannerImage1.svg";
import { WhyBlockChainSection } from "./WhyBlockChainSection";
import { BlockchainServices } from "./BlockchainServices";
import { BlockchainGetReady } from "./BlockchainGetReady";
import { BlockchainHowWork } from "./BlockchainHowWork";
import { BlockchainTechStack } from "./BlockchainTechStack";
import "../styles/ServiceBlockchain.scss";

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
      <WhyBlockChainSection />
      <BlockchainServices />
      <BlockchainGetReady />
      <BlockchainHowWork />
      <BlockchainTechStack />
    </>
  );
}
