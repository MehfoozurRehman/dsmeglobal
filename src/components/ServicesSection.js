import React from "react";
import { ServicesCard as ServicesCardNew } from "./ServicesCard";

export function ServicesSection() {
  const data = [
    {
      logo: "v1652870358/dsme_global/th4v090zeauzrq7poavv.png",
      title: "Mobile App Development",
      image: "v1652870398/dsme_global/igmowytszkh6lxlfkak8.png",
      shortDescription:
        "Our team builds nimble and elegant apps for all smartphone platforms",
      link: "/services/mob-dev",
    },
    {
      logo: "v1652870592/dsme_global/lxrl7ibveizqbwjkifcf.png",
      title: "Staff Augmentation",
      image: "v1652870611/dsme_global/egjfhnqu8rkiodik92vv.png",
      shortDescription:
        "Video surveillance solutions from Global Links Security Solutions allow ",
      link: "/services/staff",
    },
    {
      logo: "v1652870714/dsme_global/cm8id1phjrizro7729or.png",
      title: "Web App Development",
      image: "v1652871460/dsme_global/xpajuhaxddo1oevnejmy.png",
      shortDescription:
        "Video surveillance solutions from Global Links Security Solutions allow ",
      link: "/services/web-dev",
    },
    {
      logo: "v1652870775/dsme_global/lyoh6lcgwybtqb6e7qvt.png",
      title: "Startup Services",
      image: "v1652871579/dsme_global/kb5xhjjcu3nstq2xccul.png",
      shortDescription:
        "Video surveillance solutions from Global Links Security Solutions allow ",
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
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus sed
            sequi tempore minus, eum laborum voluptatibus non, est veritatis,
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
