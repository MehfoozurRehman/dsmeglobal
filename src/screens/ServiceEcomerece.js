import React, { useState } from "react";
import { Box } from "react-feather";
import { HomeJumbotron } from "./HomeJumbotron";
import ecommerce from "../assets/ecommerce.svg";
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
  const wordpressPorcess = [
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
          taglinesLine="Ecomerece Applications"
          info={`We build functional, state of the art, high-performing results-driven ${role} websites.`}
          img={ecommerce}
          talk={true}
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
              <div className="ecommerce__screen__container__selling__content__right">
                <div className="ecommerce__screen__container__selling__content__right__entry">
                  You’re just entering into e-commerce, and need a new platform
                  for your online stores.
                </div>
                <div className="ecommerce__screen__container__selling__content__right__entry">
                  You’re already familiar with e-commerce and want to upgrade to
                  a more effective website.
                </div>
                <div className="ecommerce__screen__container__selling__content__right__entry">
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
                <EcomereceProjectsCard image="https://images.unsplash.com/photo-1586880244406-556ebe35f282?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
                <EcomereceProjectsCard image="https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
              </div>
              <div className="ecommerce__screen__container__recent__work__content___row ecommerce__screen__container__recent__work__content___row__reverse">
                <EcomereceProjectsCard image="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=755&q=80" />
                <EcomereceProjectsCard image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1115&q=80" />
              </div>
              <div className="ecommerce__screen__container__recent__work__content___row">
                <EcomereceProjectsCard image="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
                <EcomereceProjectsCard image="https://images.unsplash.com/photo-1502945015378-0e284ca1a5be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
              </div>
              <div className="ecommerce__screen__container__recent__work__content___row ecommerce__screen__container__recent__work__content___row__reverse">
                <EcomereceProjectsCard image="https://images.unsplash.com/photo-1519222970733-f546218fa6d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
                <EcomereceProjectsCard image="https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
              </div>
            </div>
          </div>
          <div className="ecommerce__screen__container__services">
            <div className="ecommerce__screen__container__services__heading">
              Shopify Services
            </div>
            <div className="ecommerce__screen__container__services__content">
              <EcomerenceServiceEntry
                svg={<Box size={40} color="currentColor" strokeWidth={1.5} />}
                label="Shopify Store Setup
                "
                info="Build your online store quickly by leveraging our Shopify theme libraries. We can help you get up & running with a Shopify website pretty quickly.

                "
              />
              <EcomerenceServiceEntry
                svg={<Box size={40} color="currentColor" strokeWidth={1.5} />}
                label="Development using Shopify Plus
                "
                info="Our Shopify developers know what it takes to build a high volume/transaction eCommerce website. We can build platforms that can handle over 10K+ transactions per minute.

                "
              />
              <EcomerenceServiceEntry
                svg={<Box size={40} color="currentColor" strokeWidth={1.5} />}
                label="Themes & Customization
                "
                info="Our expert Shopify designers can help your store stand out and ensure that it looks visually amazing on both web and mobile.

                "
              />
              <EcomerenceServiceEntry
                svg={<Box size={40} color="currentColor" strokeWidth={1.5} />}
                label="Integration with Third Parties
                "
                info="Bring versatility into your e-commerce software by integrating third-party platforms with Shopify to achieve a seamless experience.

                "
              />
              <EcomerenceServiceEntry
                svg={<Box size={40} color="currentColor" strokeWidth={1.5} />}
                label="Custom Development
                "
                info="Our development services cater to all of your e-commerce development needs, enabling us to build custom Shopify websites as well as adding functionality to the areas that you require.

                "
              />
              <EcomerenceServiceEntry
                svg={<Box size={40} color="currentColor" strokeWidth={1.5} />}
                label="Migrating to a Shopify Store
                "
                info="Our expert Shopify developers are here to cater to all your transitioning needs. Doesn't matter if you're migrating from a physical store or an online platform.

                "
              />
              <EcomerenceServiceEntry
                svg={<Box size={40} color="currentColor" strokeWidth={1.5} />}
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
            {role === "Shopify" ? (
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
            ) : (
              <div className="ecommerce__screen__container__process__content">
                <div className="ecommerce__screen__container__process__content__selector">
                  {wordpressPorcess.map((item) => (
                    <EcomereceProcessSelector
                      label={item.label}
                      selected={process}
                      setSelected={setProcess}
                    />
                  ))}
                </div>
                {wordpressPorcess
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
            )}
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
              {role === "Shopify" ? (
                <>
                  <EcommerceWorkCodeCard
                    label="Top Shopify Developers"
                    info="Our highly experienced development team who have been working with Shopify since its origin, thrive in providing top quality services to our clients."
                  />
                  <EcommerceWorkCodeCard
                    label="Mobile-First Approach"
                    info="Mobile devices play a major role in the outburst of e-commerce sales, we make sure to deliver the best Shopify experience which is appealing to consumers."
                  />
                  <EcommerceWorkCodeCard
                    label="Short Time to Market"
                    info="Our Shopify development team understands how important time is to you, to ensure you meet all your launch deadlines, we always go the extra mile."
                  />
                  <EcommerceWorkCodeCard
                    label="Shopify Design Expertise"
                    info="Our Shopify UI/UX engineers who specialize in e-commerce efficiency, help us develop Shopify products that are easy for the consumer to use."
                  />
                  <EcommerceWorkCodeCard
                    label="Technically Diverse Teams"
                    info="Our diverse technologies help us in developing Shopify stores that are fully integrated and work efficiently with all platforms."
                  />
                </>
              ) : (
                <>
                  <EcommerceWorkCodeCard
                    label="Top Wordpress Developers"
                    info="Our highly experienced development team who have been working with Wordpress since its origin, thrive in providing top quality services to our clients."
                  />
                  <EcommerceWorkCodeCard
                    label="Mobile-First Approach"
                    info="Mobile devices play a major role in the outburst of e-commerce sales, we make sure to deliver the best Wordpress experience which is appealing to consumers."
                  />
                  <EcommerceWorkCodeCard
                    label="Short Time to Market"
                    info="Our Wordpress development team understands how important time is to you, to ensure you meet all your launch deadlines, we always go the extra mile."
                  />
                  <EcommerceWorkCodeCard
                    label="Wordpress Design Expertise"
                    info="Our Wordpress UI/UX engineers who specialize in e-commerce efficiency, help us develop Wordpress products that are easy for the consumer to use."
                  />
                  <EcommerceWorkCodeCard
                    label="Technically Diverse Teams"
                    info="Our diverse technologies help us in developing Wordpress stores that are fully integrated and work efficiently with all platforms."
                  />
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
