import React from "react";
import { HomeJumbotron } from "./HomeJumbotron";
import bannerImage1 from "../assets/bannerImage1.svg";
import ServicesCard from "../components/ServicesCard";

export default function Services() {
  const data = [
    {
      logo: "v1652870358/dsme_global/th4v090zeauzrq7poavv.png",
      title: "Mobile App Development",
      image: "v1652870398/dsme_global/igmowytszkh6lxlfkak8.png",
      description:
        "Our team builds nimble and elegant apps for all smartphone platforms. Our engineers work closely with you to understand your specifications and develop apps that provide an intuitive end-user experience. Our ongoing support ensures your app is ever-ready for your users.",
      categories: [
        { value: "Mobile App Development", label: "Mobile App Development" },
      ],
      shortDescription:
        "Our team builds nimble and elegant apps for all smartphone platforms",
      link: "/services/mob-dev",
    },
    {
      logo: "v1652870714/dsme_global/cm8id1phjrizro7729or.png",
      title: "Web App Development",
      image: "v1652871460/dsme_global/xpajuhaxddo1oevnejmy.png",
      description:
        "Our web development team creates intuitive user experiences wrapped up in beautiful designs. Using the latest tools & technologies, we provide a wide range of customized web design and solution developments for customers ranging from interactive pages, E-Commerce solutions, or complex integrated portals precisely made to your specification.",
      categories: [
        { value: "Web App Development", label: "Web App Development" },
      ],
      link: "/services/web-dev",
    },
    {
      logo: "v1652870775/dsme_global/lyoh6lcgwybtqb6e7qvt.png",
      title: "Custom Software Development",
      image: "v1652871579/dsme_global/kb5xhjjcu3nstq2xccul.png",
      description:
        "Helping startups to get off the ground through a single-stop partner.",
      categories: [{ value: "Startup Services", label: "Startup Services" }],
      link: "/services/customer-software-dev",
    },
    {
      logo: "v1652870830/dsme_global/taxuy0fklzmiwhqfhwmj.png",
      title: "UI/UX Design",
      image: "v1652871615/dsme_global/ihhy1xkxj9mjbk3ll310.png",
      description:
        "Expand business via multifarious digital channels all around the world. Our teams of experts have in-depth knowledge of various E-commerce web development platforms that can not only give a new look to your business but also fuel it to move with amazing pace in today’s cutthroat competition.",
      categories: [
        { value: "Ecommerce Solutions", label: "Ecommerce Solutions" },
      ],
      link: "/services/uiux",
    },
    {
      logo: "v1652870874/dsme_global/cjkmw5aoibcb0rerrfk1.png",
      title: "Ecommerce",
      image: "v1652871767/dsme_global/yuxa6wvumej9dxogzzru.png",
      description:
        "Our design and brand services help you to create brand awareness, stand out from the competition, connect with customers and increase the lead. We make your brand available to your potential customers at the right time and on the right screen.",
      categories: [
        {
          value: "Graphic Designing Services",
          label: "Graphic Designing Services",
        },
      ],
      link: "/services/shopify",
    },
    {
      logo: "v1652870947/dsme_global/jbakacweinj9nsxjqpxu.png",
      title: "Blockchain Consulting",
      image: "v1652871793/dsme_global/dylt6s1hctcvngmi7mt3.png",
      description:
        "Through animation, the only limitations are the limits of your imagination. Our creative heads and animation team will have the expertise to deliver the best work as per your requirement.\n\n",
      categories: [
        { value: "Animation Services", label: "Animation Services" },
      ],
      link: "/services/blockchain-consulting",
    },
    {
      logo: "v1652871286/dsme_global/b0in2qbbibfaefwsn3ks.png",
      title: "Android Development",
      image: "v1652871891/dsme_global/vusbtzheyzszhjhfbgiy.png",
      description:
        "We design and launch digital products that deliver great user experiences. We bring together professional user experience design and top-notch technology to deliver compelling experiences that solve business challenges and make people happy.",
      categories: [{ value: "UI & UX Services", label: "UI & UX Services" }],
      link: "/services/android-dev",
    },
    {
      logo: "v1652871320/dsme_global/eoqvrt2hhu2zc2xbteqr.png",
      title: "IOS Development",
      image: "v1652871923/dsme_global/nvxctba3pblutjl3zbjm.png",
      description:
        "We provide SEO services to optimize your website to get organic or unpaid traffic from the search engines to result in pages.",
      categories: [
        {
          value: "Search Engine Optimizations",
          label: "Search Engine Optimizations",
        },
      ],
      link: "/services/ios-dev",
    },
    {
      logo: "v1652871320/dsme_global/eoqvrt2hhu2zc2xbteqr.png",
      title: "Startup Sercices",
      image: "v1652871923/dsme_global/nvxctba3pblutjl3zbjm.png",
      description:
        "We provide SEO services to optimize your website to get organic or unpaid traffic from the search engines to result in pages.",
      categories: [
        {
          value: "Search Engine Optimizations",
          label: "Search Engine Optimizations",
        },
      ],
      link: "/services/startup",
    },
    {
      logo: "v1652871320/dsme_global/eoqvrt2hhu2zc2xbteqr.png",
      title: "Staff Augmentation",
      image: "v1652871923/dsme_global/nvxctba3pblutjl3zbjm.png",
      description:
        "We provide SEO services to optimize your website to get organic or unpaid traffic from the search engines to result in pages.",
      categories: [
        {
          value: "Search Engine Optimizations",
          label: "Search Engine Optimizations",
        },
      ],
      link: "/services/startup",
    },
  ];
  return (
    <>
      <div className="container">
        <HomeJumbotron
          taglinesLine="Best"
          taglines={["Jobs", "Oppertunities"]}
          info="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore,
            culpa est? Quos iusto dolore culpa, veritatis quas minus quibusdam
            ad? Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Dolore, culpa est? Quos iusto dolore culpa, veritatis quas minus
            quibusdam ad?"
          img={bannerImage1}
        />
      </div>
      <div
        className="services__main__container"
        style={{ position: "sticky", zIndex: 999 }}
      >
        {data.map((item) => (
          <ServicesCard data={item} key={JSON.stringify(item)} />
        ))}
      </div>
    </>
  );
}
