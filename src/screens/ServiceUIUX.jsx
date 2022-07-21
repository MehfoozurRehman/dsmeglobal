import React from "react";
import { HomeJumbotron } from "../components/HomeJumbotron";
import { BlockchainServices } from "../components/BlockchainServicesUiux";
import { OurDesignCapabilities } from "../components/OurDesignCapabilities";
import { ProductDesignWorkshop } from "../components/ProductDesignWorkshop";
import { ExecutionProcess } from "../components/ExecutionProcess";
import { UIUXLetsTalk } from "../components/UIUXLetsTalk";
import { UIUXFeatures } from "../components/UIUXFeatures";
import { UiUXDesignWork } from "../components/UiUXDesignWork";
import design from "../assets/design.svg";

export default function ServiceUIUX() {
  return (
    <>
      <div className="container">
        <HomeJumbotron
          taglinesLine="User Experience & Design Solutions"
          info="We design and launch digital products that deliver great user experiences. Good user experiences are very important to us for every software we create. By basing our software on human-centered design principles, we ensure your users get the best experience, and you get the best return on investment.."
          img={design}
          talk={true}
        />
      </div>
      <div className="june_main_container">
        <OurDesignCapabilities />
        <ProductDesignWorkshop />
        <BlockchainServices />
        <ExecutionProcess />
        <UIUXLetsTalk />
        <UIUXFeatures />
        <UiUXDesignWork />
      </div>
    </>
  );
}
