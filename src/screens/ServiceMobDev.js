import React, { useState } from "react";
import { HomeJumbotron } from "./HomeJumbotron";
import bannerImage1 from "../assets/bannerImage1.svg";
import { Box, User } from "react-feather";
import { ExperienceCard } from "./ExperienceCard";
import { ExperitseCard } from "./ExperitseCard";
import WebdevArrEntry from "../components/WebdevArrEntry";

export default function ServicesMobDev() {
  const [selected, setSelected] = useState("Wearable Tech");

  const array = [
    {
      label: "Wearable Tech",
      svg: <User size={40} color="currentColor" />,
      info: "We'll help you ideate, design, develop and launch your Wearable app. Apps would be supported by strong back-end, cloud based web systems.",
    },
    {
      label: "Geo Tracking",
      svg: <User size={40} color="currentColor" />,
      info: "We have leveraged GPS technology for apps built for mobile workforce management, fleet tracking to geo-fencing, geo-targeting and location aware in-app messaging.",
    },
    {
      label: "Internet of Things",
      svg: <User size={40} color="currentColor" />,
      info: "We deliver mobile-enabled IoT, solutions for equipment and appliances controlled via mobile, including connected home solutions, real-time tracking and monitoring services, and many more.",
    },
    {
      label: "Location Tracking",
      svg: <User size={40} color="currentColor" />,
      info: "We developed enhanced in-store experiences to capture secure contactless payments, indoor location sensing and contextual coupon delivery leveraging technologies like BLE Beacons, NFC etc.",
    },
    {
      label: "AR/VR Reality",
      svg: <User size={40} color="currentColor" />,
      info: "With the new ARKit coming out from Apple and Android, we are set to deliver compelling AR mobile apps overlaying information and interactivity over real-world scenes.",
    },
  ];
  return (
    <>
      <div className="container">
        <HomeJumbotron
          taglinesLine="Mobile Application Development"
          info="Custom built mobile applications with amazing experiences that help support your business goals."
          img={bannerImage1}
          talk={true}
        />
      </div>
      <div className="container__web__dev__experties">
        <div className="container__web__dev__experties__header">
          <div className="container__web__dev__experties__header__heading">
            Our Expertise
          </div>
          <div className="container__web__dev__experties__header__info">
            Building great business and consumer apps means not only creating
            amazing user experience but also taking architecture, technical
            design and security into account.
          </div>
        </div>
        <div className="container__web__dev__experties__content">
          <ExperitseCard
            svg={<Box size={40} color="currentColor" strokeWidth={1.5} />}
            label="End-to-End Mobile App Development"
            info="We offer end-to-end development services for all things mobile - covering everything from initial concepts to design, development & support."
          />
          <ExperitseCard
            svg={<Box size={40} color="currentColor" strokeWidth={1.5} />}
            label="Web to Mobile App Extension"
            info="We can help you extend your existing web portals and applications to highly functional and beautiful looking mobile apps."
          />
          <ExperitseCard
            svg={<Box size={40} color="currentColor" strokeWidth={1.5} />}
            label="Enterprise Mobility"
            info="We develop trend setting mobile apps for B2B, B2E, and B2C enterprises - easily integrating with your corporate systems."
          />
          <ExperitseCard
            svg={<Box size={40} color="currentColor" strokeWidth={1.5} />}
            label="Discover how Mobile Help Your Business."
            info="Leverage our Agile Discovery Workshop, to formulate winning mobile strategies which help you transform your business, cut down on costs and optimize processes."
          />
        </div>
      </div>
      <div className="container__web__dev__experience__wrapper">
        <div className="container__web__dev__experience">
          <div className="container__web__dev__experience__header">
            <div className="container__web__dev__experience__header__heading">
              Exceptional Domain Expertise
            </div>
            <div className="container__web__dev__experience__header__info">
              Phenomenal domain expertise to help you build and deliver mobile
              applications that can increase productivity, improve engagement
              and boost customer loyalty.
            </div>
          </div>
          <div className="container__web__dev__experience__content">
            <ExperienceCard
              label="Mobile Healthcare"
              info="Patient-friendly, HIPAA compliant mobile healthcare products effectively handling integration challenges with electronic health records."
            />
            <ExperienceCard
              label="Workflow and Asset Management"
              info="We build workflow and asset management apps that help you deliver maximum value by using world-class Digital Asset Management solutions."
            />
            <ExperienceCard
              label="Field Automation"
              info="Our custom built field force apps are fully integrated with a GPS to ensure high efficiency and productivity of your field force."
            />
            <ExperienceCard
              label="Fleet Management"
              info="With our custom built fleet management systems you can minimize vehicle risk, improve productivity and reduce costs of transportation."
            />
            <ExperienceCard
              label="Media Streaming"
              info="Build extensive media streaming apps that are highly interactive, scalable, content rich , highly secure and fast."
            />
            <ExperienceCard
              label="mCommerce Development"
              info="We can help you build fully customized, reliable and secure m-commerce platforms that boosts customer engagement."
            />
            <ExperienceCard
              label="Sports & Lifestyle Apps"
              info="Captivate users with the most robust, simple and useful sports and lifestyle apps that will give your competitors tough competition."
            />
            <ExperienceCard
              label="Social Networking Apps"
              info="Reduce the time to market for your amazing social networking apps and cash out on the first movers advantage by leveraging our expertise."
            />
          </div>
        </div>
      </div>
      <div
        className="container__emerging__technologies"
        style={{ marginTop: "5em" }}
      >
        <div className="container__emerging__technologies__heading__main">
          Emerging Technologies Know-How
        </div>
        <div className="container__emerging__technologies__text__main">
          We understand the potential value of emerging technologies for both
          corporates and consumers and thus help you choose the right set of
          technologies.
        </div>
        <div className="container__emerging__technologies__section">
          {array.map((item) => (
            <WebdevArrEntry
              label={item.label}
              svg={item.svg}
              selected={selected}
              setSelected={setSelected}
            />
          ))}
        </div>
        {array
          .filter((item) => item.label === selected)
          .map((item) => (
            <div className="container__emerging__technologies__section__entry__data">
              <div className="container__emerging__technologies__section__entry__data___heading">
                {item.label}
              </div>
              <div className="container__emerging__technologies__section__entry__data__text">
                {item.info}
              </div>
            </div>
          ))}
      </div>
    </>
  );
}
