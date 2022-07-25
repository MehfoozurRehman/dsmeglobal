import React from "react";
import { HomeJumbotron } from "../components/HomeJumbotron";
import { WhyBlockChainSection } from "../components/WhyBlockChainSection";
import { BlockchainServices } from "../components/BlockchainServices";
import { BlockchainGetReady } from "../components/BlockchainGetReady";
import { BlockchainHowWork } from "../components/BlockchainHowWork";
import { BlockchainTechStack } from "../components/BlockchainTechStack";
import bannerImage1 from "../assets/bannerImage1.svg";

export default function ServiceBlockChain() {
  return (
    <>
      <div className="container">
        <HomeJumbotron
          taglinesLine="Delivering Robust Software Systems With Blockchain."
          info="We help businesses leverage decentralized networks and software solutions built on blockchain technology and introduce a whole new level of efficiency, transparency, immutability, and automation into their processes. Our dedicated professionals with deep expertise in this revolutionary technology aim to provide efficient, integrated, and secure solutions for businesses representing different industries. Our wide range of services includes smart contracts, Defi solutions (Staking, liquidity, and farming), ICO, tokens, crypto exchanges, multichain blockchain development, gamification, NFTs, and more."
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
