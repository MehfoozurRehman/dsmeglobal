import React from "react";
import { HomeJumbotron } from "../components/HomeJumbotron";
import { WhyBlockChainSection } from "../components/WhyBlockChainSection";
import { BlockchainServices } from "../components/BlockchainServices";
import { BlockchainGetReady } from "../components/BlockchainGetReady";
import { BlockchainHowWork } from "../components/BlockchainHowWork";
import { BlockchainTechStack } from "../components/BlockchainTechStack";
import bannerImage1 from "../assets/bannerImage1.svg";
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
