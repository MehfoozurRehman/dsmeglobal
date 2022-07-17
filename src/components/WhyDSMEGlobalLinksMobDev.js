import React from "react";
import { ServicesFeatureListItem } from "../components/ServicesFeatureListItem";

export function WhyDSMEGlobalLinksMobDev({}) {
  return (
    <div className="container__feature">
      <div className="container__feature__col">
        <div className="container__feature__col__heading">
          Why DSME Global Links?
        </div>
        <div className="container__feature__col__info">
          We create a cross-functional team to find the perfect blend of tech
          teams and tested development processes that ensure the highest quality
          custom-built products on time and within budget.
        </div>
      </div>
      <div className="container__feature__col">
        <ServicesFeatureListItem
          label="Access to Expert Teams"
          info="Don’t know where to find the best iOS and Android developers? Look no further - we have the top talent available for you anytime."
        />
        <ServicesFeatureListItem
          label="Quality Guaranteed"
          info="Our code is sure to be crisp and precise to the point it delivers exactly what you are looking for while maintaining all the code quality standards."
        />
      </div>
      <div className="container__feature__col">
        <ServicesFeatureListItem
          label="Strong IP Protection"
          info="Your idea is Safe! All work is done under standard “Work for Hire” and Non-Disclosure Agreements."
        />
        <ServicesFeatureListItem
          label="Covering All Basis"
          info="We like to go in-depth about things before diving deep into development to avoid any major issues later on."
        />
      </div>
    </div>
  );
}
