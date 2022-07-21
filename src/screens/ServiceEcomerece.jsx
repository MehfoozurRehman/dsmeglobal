import React, { useState } from "react";
import { HomeJumbotron } from "../components/HomeJumbotron";
import ecommerce from "../assets/ecommerce.svg";
import { EcommerceWhyWork } from "../components/EcommerceWhyWork";
import { EcommerceProcess } from "../components/EcommerceProcess";
import { EcommerceServices } from "../components/EcommerceServices";
import { EcommerceRecentWork } from "../components/EcommerceRecentWork";
import { EcommerceSelling } from "../components/EcommerceSelling";
import { EcommerceRole } from "../components/EcommerceRole";

export default function ServiceEcomerece() {
  const [role, setRole] = useState("Shopify");
  const [process, setProcess] = useState("Discovery");

  return (
    <>
      <div className="container">
        <HomeJumbotron
          taglinesLine="Ecomerece Applications"
          info={`We build functional, state of the art, high-performing results-driven ${role} websites.`}
          img={ecommerce}
          talk={true}
        />
        <div className="ecommerce__screen__container">
          <EcommerceRole role={role} setRole={setRole} />
          <EcommerceSelling />
          <EcommerceRecentWork />
          <EcommerceServices />
          <EcommerceProcess
            role={role}
            process={process}
            setProcess={setProcess}
          />
          <EcommerceWhyWork role={role} />
        </div>
      </div>
    </>
  );
}
