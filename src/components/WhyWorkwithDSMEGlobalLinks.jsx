import React from "react";
import { ServicesFeatureListItem } from "../components/ServicesFeatureListItem";

export function WhyWorkwithDSMEGlobalLinks() {
  return (
    <div className="container__feature">
      <div className="container__feature__col">
        <div className="container__feature__col__heading">
          Why Work with <span>DSME Global Links?</span> 
        </div>
        <div className="container__feature__col__info">
          Our teams are specifically trained to work under these guideline
          principles to take care of every viable aspect of your project.
        </div>
      </div>
      <div className="container__feature__col">
        <ServicesFeatureListItem
          label="Reliable"
          info="Our specialized experts are qualified to build highly reliable and scalable web based applications. 90% client satisfaction – we are happy to provide references"
        />
        <ServicesFeatureListItem
          label="Quality"
          info="Leverage our top talent to build high performing web apps that are polished to perfection by going through our rigorous quality control processes and measures."
        />
        <ServicesFeatureListItem
          label="Covering All Bases"
          info="We like to go in depth of things before diving into development to avoid any major issues later on."
        />
      </div>
      <div className="container__feature__col">
        <ServicesFeatureListItem
          label="Fast"
          info="After extensive scrutinization, we developed the best development process that is lean and swift in making the desired product delivery."
        />
        <ServicesFeatureListItem
          label="Strong IP Protection"
          info="All work is done under standard “Work for Hire” and Non-Disclosure Agreements"
        />
        <ServicesFeatureListItem
          label="Live Demos Every Week"
          info="No more vague “status reports”. We make sure we demo our projects on a weekly basis."
        />
      </div>
    </div>
  );
}
