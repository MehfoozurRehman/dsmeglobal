import React from "react";
import { ServicesCard as ServicesCardNew } from "./ServicesCard";

export function ServicesSection() {
  const data = [
    {
      logo: "v1652870358/dsme_global/th4v090zeauzrq7poavv.webp",
      title: "Mobile App Development",
      image: "v1652870398/dsme_global/igmowytszkh6lxlfkak8.webp",
      shortDescription:
        "Leveraging the latest technological tools & industry practices, we build high-performance apps to scale your business. Our team builds nimble and elegant apps for all smartphone platforms. Our engineers work closely with you to understand your specifications and develop apps that provide an intuitive end-user experience.",
      link: "/services/mob-dev",
    },
    {
      logo: "v1652870592/dsme_global/lxrl7ibveizqbwjkifcf.webp",
      title: "Staff Augmentation",
      image: "v1652870611/dsme_global/egjfhnqu8rkiodik92vv.webp",
      shortDescription:
        "Leveraging the latest technological tools & industry practices, we build high-performance apps to scale your business. Our team builds nimble and elegant apps for all smartphone platforms. Our engineers work closely with you to understand your specifications and develop apps that provide an intuitive end-user experience.",
      link: "/services/staff",
    },
    {
      logo: "v1652870714/dsme_global/cm8id1phjrizro7729or.webp",
      title: "Web App Development",
      image: "v1652871460/dsme_global/xpajuhaxddo1oevnejmy.webp",
      shortDescription:
        "We believe in building interactive web applications, To create experiences beyond our clients’ expectations. We create beautifully designed web apps precisely tailored to your situation. From providing Software as a Service to creating custom software to support your customers, our Web App team will get you up and running.",
      link: "/services/web-dev",
    },
    {
      logo: "v1652870775/dsme_global/lyoh6lcgwybtqb6e7qvt.webp",
      title: "Startup Services",
      image: "v1652871579/dsme_global/kb5xhjjcu3nstq2xccul.webp",
      shortDescription:
        "Leveraging the latest technological tools & industry practices, we build high-performance apps to scale your business. Our team builds nimble and elegant apps for all smartphone platforms. Our engineers work closely with you to understand your specifications and develop apps that provide an intuitive end-user experience.",
      link: "/services/startup",
    },
  ];
  return (
    <>
      <div className="container__services">
        <div className="container__services__left">
          <div className="container__services__left__heading">
            How can we help your buisness ?
          </div>
          <div className="container__services__left__info">
            We excel in providing cutting-edge solutions and development
            services that drive business performance, cultivate startups, and
            accelerate growth.
            <br />
            <br />
            We take care of all the technology so you can focus on what you do
            best. From strategy to execution, our winning combination of
            innovative thinking, scientific design, sophisticated development,
            and ongoing analysis ensure we’re delivering value to help you grow.
          </div>
          <div className="container__services__button__container">
            <button className="container__services__button">
              View all services
            </button>
          </div>
        </div>
        <div className="container__services__right">
          {data.map((item) => (
            <ServicesCardNew data={item} key={JSON.stringify(item)} />
          ))}
        </div>
      </div>
    </>
  );
}
