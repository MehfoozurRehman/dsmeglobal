import React, { useState } from "react";
import { Box } from "react-feather";
import { HomeJumbotron } from "./HomeJumbotron";
import bannerImage1 from "../assets/bannerImage1.svg";
import EcomereceRoleSelector from "../components/EcomereceRoleSelector";
import EcomereceProjectsCard from "../components/EcomereceProjectsCard";
import EcomerenceServiceEntry from "../components/EcomerenceServiceEntry";
import EcomereceProcessSelector from "../components/EcomereceProcessSelector";
import EcommerceWorkCodeCard from "../components/EcommerceWorkCodeCard";

export default function ServiceEcomerece() {
  const [role, setRole] = useState("Shopify");
  const [process, setProcess] = useState("Discovery");
  const shopifyPorcess = [
    {
      label: "Discovery",
      list: [
        {
          svg: <Box size={20} color="currentColor" />,
          info: "Identifying your brand identity by defining your market position, competitive offering, and value proposition.",
        },
        {
          svg: <Box size={20} color="currentColor" />,
          info: "Our experts analyzing your websites current performance and propose strategies to achieve goals and targets.",
        },
        {
          svg: <Box size={20} color="currentColor" />,
          info: "Setting realistic short and long term goals, establishing clear deliverables according to your expectations.",
        },
      ],
    },
    {
      label: "Prototyping & Design",
      list: [
        {
          svg: <Box size={20} color="currentColor" />,
          info: "Identifying opportunities, successful e-commerce practices, and strategic solutions for your business.",
        },
        {
          svg: <Box size={20} color="currentColor" />,
          info: "ODesigning a technical ecosystem by leveraging emerging technologies",
        },
        {
          svg: <Box size={20} color="currentColor" />,
          info: "Improving your KPI’s, consumer traffic such as loyalty, CR, email subscribers and etc.",
        },
        {
          svg: <Box size={20} color="currentColor" />,
          info: "Designing an information architecture, engaging your customers, and effectively communicating your brand’s story through visually appealing illustrations.",
        },
      ],
    },
    {
      label: "Shopify Development",
      list: [
        {
          svg: <Box size={20} color="currentColor" />,
          info: "Building an eCommerce platform with the right experts to set up an ecosystem for your Shopify store.",
        },
        {
          svg: <Box size={20} color="currentColor" />,
          info: "Theme development is where our experts shine. You visualize it, we make it come true!",
        },
        {
          svg: <Box size={20} color="currentColor" />,
          info: "We provide you with out of the box custom solutions that cater to your needs.",
        },
      ],
    },
    {
      label: "Migration and Launch",
      list: [
        {
          svg: <Box size={20} color="currentColor" />,
          info: "Our expert Shopify developers make sure your transition from legacy platforms seamlessly, by integrating and syncing all platforms together.",
        },
      ],
    },
    {
      label: "Hyper care and Support",
      list: [
        {
          svg: <Box size={20} color="currentColor" />,
          info: "Throughout any stage of the project, we are here to solve all your problems. Consult with us and we will gladly address your concerns.",
        },
        {
          svg: <Box size={20} color="currentColor" />,
          info: "With our technical support team ready to address any technical issues, we make sure that you won't have to face many challenges along the way.",
        },
        {
          svg: <Box size={20} color="currentColor" />,
          info: "We offer multiple packages to help you maintain your eCommerce store design, development, and integration even after the completion of the project",
        },
      ],
    },
  ];
  return (
    <>
      <div className="container">
        <HomeJumbotron
          taglinesLine="Web Application Development"
          info="Web applications that are visually amazing and provide seamless user experience for the desktop, mobile and tablet."
          img={bannerImage1}
        />
        <div className="ecommerce__screen__container">
          <div className="ecommerce__screen__container__role">
            <EcomereceRoleSelector
              svg={<Box size={40} color="currentColor" />}
              label="Shopify"
              selected={role}
              setSelected={setRole}
            />
            <EcomereceRoleSelector
              svg={<Box size={40} color="currentColor" />}
              label="Wordpress"
              selected={role}
              setSelected={setRole}
            />
          </div>
          <div className="ecommerce__screen__container__selling">
            <div className="ecommerce__screen__container__selling__heading">
              We can help you across multiple stages
            </div>
            <div className="ecommerce__screen__container__selling__content">
              <div className="ecommerce__screen__container__selling__content__left">
                <img
                  src="https://www.codedistrict.com/assets/images/shopify-multi-stage.jpg"
                  alt="ecommerce__screen__container__selling__content__left"
                  className="ecommerce__screen__container__selling__content__left__img"
                />
              </div>
              <div className="ecommerce__screen__container__selling__content__left__right">
                <div className="ecommerce__screen__container__selling__content__left__right__entry">
                  You’re just entering into e-commerce, and need a new platform
                  for your online store. s
                </div>
                <div className="ecommerce__screen__container__selling__content__left__right__entry">
                  You’re already familiar with e-commerce and want to upgrade to
                  a more effective website.
                </div>
                <div className="ecommerce__screen__container__selling__content__left__right__entry">
                  You’re looking to migrate to Shopify and leverage their
                  ecosystem.
                </div>
              </div>
            </div>
          </div>
          <div className="ecommerce__screen__container__recent__work">
            <div className="ecommerce__screen__container__recent__work__heading">
              Recent Works
            </div>
            <div className="ecommerce__screen__container__recent__work__content">
              <div className="ecommerce__screen__container__recent__work__content___row">
                <EcomereceProjectsCard image="https://www.codedistrict.com/assets/images/recent-w-lauren.jpg" />
                <EcomereceProjectsCard image="https://www.codedistrict.com/assets/images/recent-w-skordo.jpg" />
              </div>
              <div className="ecommerce__screen__container__recent__work__content___row ecommerce__screen__container__recent__work__content___row__reverse">
                <EcomereceProjectsCard image="https://www.codedistrict.com/assets/images/recent-w-skordo.jpg" />
                <EcomereceProjectsCard image="https://www.codedistrict.com/assets/images/recent-w-lauren.jpg" />
              </div>
              <div className="ecommerce__screen__container__recent__work__content___row">
                <EcomereceProjectsCard image="https://www.codedistrict.com/assets/images/recent-w-lauren.jpg" />
                <EcomereceProjectsCard image="https://www.codedistrict.com/assets/images/recent-w-skordo.jpg" />
              </div>
              <div className="ecommerce__screen__container__recent__work__content___row ecommerce__screen__container__recent__work__content___row__reverse">
                <EcomereceProjectsCard image="https://www.codedistrict.com/assets/images/recent-w-skordo.jpg" />
                <EcomereceProjectsCard image="https://www.codedistrict.com/assets/images/recent-w-lauren.jpg" />
              </div>
            </div>
          </div>
          <div className="ecommerce__screen__container__services">
            <div className="ecommerce__screen__container__services__heading">
              Shopify Services
            </div>
            <div className="ecommerce__screen__container__services__content">
              <EcomerenceServiceEntry
                svg={<Box size={40} color="currentColor" />}
                label="Shopify Store Setup
                "
                info="Build your online store quickly by leveraging our Shopify theme libraries. We can help you get up & running with a Shopify website pretty quickly.

                "
              />
              <EcomerenceServiceEntry
                svg={<Box size={40} color="currentColor" />}
                label="Development using Shopify Plus
                "
                info="Our Shopify developers know what it takes to build a high volume/transaction eCommerce website. We can build platforms that can handle over 10K+ transactions per minute.

                "
              />
              <EcomerenceServiceEntry
                svg={<Box size={40} color="currentColor" />}
                label="Themes & Customization
                "
                info="Our expert Shopify designers can help your store stand out and ensure that it looks visually amazing on both web and mobile.

                "
              />
              <EcomerenceServiceEntry
                svg={<Box size={40} color="currentColor" />}
                label="Integration with Third Parties
                "
                info="Bring versatility into your e-commerce software by integrating third-party platforms with Shopify to achieve a seamless experience.

                "
              />
              <EcomerenceServiceEntry
                svg={<Box size={40} color="currentColor" />}
                label="Custom Development
                "
                info="Our development services cater to all of your e-commerce development needs, enabling us to build custom Shopify websites as well as adding functionality to the areas that you require.

                "
              />
              <EcomerenceServiceEntry
                svg={<Box size={40} color="currentColor" />}
                label="Migrating to a Shopify Store
                "
                info="Our expert Shopify developers are here to cater to all your transitioning needs. Doesn't matter if you're migrating from a physical store or an online platform.

                "
              />
              <EcomerenceServiceEntry
                svg={<Box size={40} color="currentColor" />}
                label="Maintenance and Support
                "
                info="Our Shopify support and maintenance services ensure your online store runs efficiently and smoothly to achieve zero business loss."
              />
            </div>
          </div>
          <div className="ecommerce__screen__container__process">
            <div className="ecommerce__screen__container__process__heading">
              Our Process
            </div>
            <div className="ecommerce__screen__container__process__content">
              <div className="ecommerce__screen__container__process__content__selector">
                {shopifyPorcess.map((item) => (
                  <EcomereceProcessSelector
                    label={item.label}
                    selected={process}
                    setSelected={setProcess}
                  />
                ))}
              </div>
              {shopifyPorcess
                .filter((item) => item.label === process)
                .map((item) => (
                  <div className="ecommerce__screen__container__process__content__selector__content">
                    {item.list.map((item) => (
                      <div className="ecommerce__screen__container__process__content__selector__content__entry">
                        {item.svg}
                        <div className="ecommerce__screen__container__process__content__selector__content__entry__info">
                          {item.info}
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
            </div>
          </div>
          <div className="ecommerce__screen__container__work__code">
            <div className="ecommerce__screen__container__work__code__header">
              <div className="ecommerce__screen__container__work__code__header__heading">
                Why Work With Code District
              </div>
              <div className="ecommerce__screen__container__work__code__header__info">
                Get access to the top talent of experienced product managers,
                smartest designers, and engineers.
              </div>
            </div>
            <div className="ecommerce__screen__container__work__code__content">
              <EcommerceWorkCodeCard />
              <EcommerceWorkCodeCard />
              <EcommerceWorkCodeCard />
              <EcommerceWorkCodeCard />
              <EcommerceWorkCodeCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

