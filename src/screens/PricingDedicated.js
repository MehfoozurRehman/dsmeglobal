import React from "react";
import deliveryPic from "../assets/delivery.png";
import directionPic from "../assets/te-direction.jpg";
import rightAngle from "../assets/chevron-right.svg";
import userPng from "../assets/user.png";
import PricingFeatureEntry from "../components/PricingFeatureEntry";
import { HomeJumbotron } from "../components/HomeJumbotron";
import teams from "../assets/teams.svg";
import { Box } from "react-feather";

export default function PricingDedicated() {
  const DeliveryCardEntry1 = [
    "Web",
    "Mobile",
    "Enterprise Mobility",
    "Web Portals",
    "Process Automation",
    "UI/UX",
    "DevOps",
    "IoT",
    "Microsoft SharePoint",
    "Salesforce",
    "Blockchain",
    "Big Data & Analytics",
  ];
  const DeliveryCardEntry2 = [
    "Software Architecture",
    "Domain Knowledge",
    "Healthcare",
    "Insurance",
    "Real Estate",
    "Fintech",
    "EdTech",
    "Mobility & Logistics",
    "Media & Entertainment",
    "Field Force Automation",
    "Retail",
    "Technologies We Use",
  ];
  const DeliveryCardEntry3 = [
    "JavaScript",
    "Java",
    "DotNet",
    "PHP",
    "Ruby, Rails",
    "Azure",
    "Google Cloud",
    "React",
    "Angular",
    "Node.js",
    "MySQL",
    "mongoDB",
    "Android",
    "iOS",
    "WPF",
    "GraphQL",
    "IBM Watson",
    "React Native",
    "AWS",
    "VueJS",
    ".NET Core",
    "Xamarin",
    "Objective-C",
  ];
  return (
    <>
      <div className="container">
        <HomeJumbotron
          taglinesLine="Dedicated Development Teams"
          info="Work with a dedicated pool of technical resources for your software development needs. Hire top tech talent and quickly scale your delivery capacity."
          img={teams}
          talk={true}
        />
      </div>
      <div className="pricing__fitted__team">
        <div className="pricing__fitted__team__header">
          <div className="pricing__fitted__team__header__heading">
            Get A Perfectly Fitted Team
          </div>
          <div className="pricing__fitted__team__header__info">
            When you don't want to hire permanent resources, you can rely on our
            dedicated resources to either work as an independent extension or as
            part of your existing team, both on a partime/fulltime basis.
          </div>
        </div>
        <div className="pricing__fitted__team__content">
          <div className="pricing__fitted__team__content__entry">
            <div className="pricing__fitted__team__content__entry__heading">
              Full Service Standalone Team
            </div>
            <ul className="pricing__fitted__team__content__entry__list">
              <li>
                Not looking to build a complete software department but need
                tech resources on demand.
              </li>
              <li>
                Offers a complete setup where you get access to the best tech
                and management talent (developers, UI/UX experts).
              </li>
            </ul>
            <div className="pricing__fitted__team__content__entry__sub__heading">
              Suited best when:
            </div>
            <ul className="pricing__fitted__team__content__entry__list">
              <li>
                Developing new products without defocusing your core team (if
                exists)
              </li>
              <li>
                With evolving specifications based on feedbacks on features
              </li>
              <li>
                Not looking to go through a long-lasting & expensive hiring
                process.
              </li>
            </ul>
          </div>
          <div className="pricing__fitted__team__content__entry">
            <div className="pricing__fitted__team__content__entry__heading">
              Extension of Existing Teams
            </div>
            <ul className="pricing__fitted__team__content__entry__list">
              <li>
                Perfect solution when your current project initiatives need a
                few additional dedicated specialized resources.
              </li>
              <li>
                Our expert team members will consistently and cost effectively
                fill the gaps in your project needs.
              </li>
            </ul>
            <div className="pricing__fitted__team__content__entry__sub__heading">
              Suited best when:
            </div>
            <ul className="pricing__fitted__team__content__entry__list">
              <li>
                With their own in-house IT teams and established processes.
              </li>
              <li>That require extra resources to satisfy ad-hoc demand.</li>
              <li>
                Looking for resources experienced in latest technologies or
                domain-specific expertise.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="pricing__fitted__team">
        <div
          className="pricing__fitted__team__header"
          id="pricing__getting__started">
          <div className="pricing__fitted__team__header__heading">
            How to Get Started?
          </div>
        </div>
        <div className="pricing__fitted__team__content">
          <div
            className="pricing__fitted__team__content__entry"
            id="pricing__fitted__team__content__entry">
            <div
              className="pricing__fitted__team__content__entry__sub__heading"
              id="pricing__fitted__team__content__entry__sub__heading">
              Suited best when:
            </div>
            <ul className="pricing__fitted__team__content__entry__list">
              <li>
                Tell us about your project, tech stack, and the kind of team you
                need.
              </li>
              <li>We will match your needs with the best available members.</li>
              <li>
                Conduct test trials to determine a good fit in-terms of
                technical background & communication skills.
              </li>
            </ul>
          </div>
          <div
            className="pricing__fitted__team__content__entry"
            id="pricing__fitted__team__content__entry">
            <div
              className="pricing__fitted__team__content__entry__sub__heading"
              id="pricing__fitted__team__content__entry__sub__heading">
              Suited best when:
            </div>
            <ul className="pricing__fitted__team__content__entry__list">
              <li>
                Tell us about your project, tech stack, and the kind of team you
                need.
              </li>
              <li>We will match your needs with the best available members.</li>
              <li>
                Conduct test trials to determine a good fit in-terms of
                technical background & communication skills.
              </li>
            </ul>
          </div>
          <div
            className="pricing__fitted__team__content__entry"
            id="pricing__fitted__team__content__entry">
            <div
              className="pricing__fitted__team__content__entry__sub__heading"
              id="pricing__fitted__team__content__entry__sub__heading">
              Suited best when:
            </div>
            <ul className="pricing__fitted__team__content__entry__list">
              <li>
                Tell us about your project, tech stack, and the kind of team you
                need.
              </li>
              <li>We will match your needs with the best available members.</li>
              <li>
                Conduct test trials to determine a good fit in-terms of
                technical background & communication skills.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="pricing__fitted__team">
        <div className="pricing__fitted__team__header">
          <div className="pricing__fitted__team__header__heading">
            Transparent Execution
          </div>
          <div className="pricing__fitted__team__header__info">
            We have entered a new era of uncertainty and unpredictability. To
            keep you well informed and updated regarding the progress of your
            project, we employ agile-based project management, with 100% online
            cloud-based tools to ensure round the clock visibility.
          </div>
        </div>
        <div className="pricing__fitted__team__content">
          <div className="pricing__transparent__execution__content__entry">
            <div className="pricing__transparent__execution__content__entry__box">
              <div className="pricing__transparent__execution__content__entry__box__icons__left">
                <div className="pricing__transparent__execution__content__entry__box__left">
                  <img src={userPng} alt="User Icon" />
                </div>
                <div className="pricing__transparent__execution__content__entry__box__right">
                  <img src={rightAngle} alt="right angle icon" />
                </div>
              </div>
              <div className="pricing__transparent__execution__content__entry__box__icons__middle">
                <div className="pricing__transparent__execution__content__entry__box__icons__middle__top">
                  <div className="pricing__transparent__execution__content__entry__box__icons__middle__top__icon">
                    <img src={directionPic} alt="DirectionPic" />
                  </div>
                  <div className="pricing__transparent__execution__content__entry__box__icons__middle__top__icon">
                    <img src={directionPic} alt="DirectionPic" />
                  </div>
                </div>
                <div className="pricing__transparent__execution__content__entry__box__icons__middle__bottom">
                  Tasks are maintained on a daily basis. This allows you to get
                  a quick overview on where the team stands.
                </div>
              </div>
              <div className="pricing__transparent__execution__content__entry__box__icons__left">
                <div className="pricing__transparent__execution__content__entry__box__right">
                  <img src={rightAngle} alt="right angle icon" />
                </div>
                <div className="pricing__transparent__execution__content__entry__box__left">
                  <img src={userPng} alt="User Icon" />
                </div>
              </div>
            </div>
            <div className="pricing__transparent__execution__content__entry__box">
              <div className="pricing__transparent__execution__content__entry__box__icons__left">
                <div className="pricing__transparent__execution__content__entry__box__left">
                  <img src={userPng} alt="User Icon" />
                </div>
                <div className="pricing__transparent__execution__content__entry__box__right">
                  <img src={rightAngle} alt="right angle icon" />
                </div>
              </div>
              <div className="pricing__transparent__execution__content__entry__box__icons__middle">
                <div className="pricing__transparent__execution__content__entry__box__icons__middle__top">
                  <div className="pricing__transparent__execution__content__entry__box__icons__middle__top__icon">
                    <img src={directionPic} alt="DirectionPic" />
                  </div>
                  <div className="pricing__transparent__execution__content__entry__box__icons__middle__top__icon">
                    <img src={directionPic} alt="DirectionPic" />
                  </div>
                </div>
                <div className="pricing__transparent__execution__content__entry__box__icons__middle__bottom">
                  Tasks are maintained on a daily basis. This allows you to get
                  a quick overview on where the team stands.
                </div>
              </div>
              <div className="pricing__transparent__execution__content__entry__box__icons__left">
                <div className="pricing__transparent__execution__content__entry__box__right">
                  <img src={rightAngle} alt="right angle icon" />
                </div>
                <div className="pricing__transparent__execution__content__entry__box__left">
                  <img src={userPng} alt="User Icon" />
                </div>
              </div>
            </div>
            <div className="pricing__transparent__execution__content__entry__box">
              <div className="pricing__transparent__execution__content__entry__box__icons__left">
                <div className="pricing__transparent__execution__content__entry__box__left">
                  <img src={userPng} alt="User Icon" />
                </div>
                <div className="pricing__transparent__execution__content__entry__box__right">
                  <img src={rightAngle} alt="right angle icon" />
                </div>
              </div>
              <div className="pricing__transparent__execution__content__entry__box__icons__middle">
                <div className="pricing__transparent__execution__content__entry__box__icons__middle__top">
                  <div className="pricing__transparent__execution__content__entry__box__icons__middle__top__icon">
                    <img src={directionPic} alt="DirectionPic" />
                  </div>
                  <div className="pricing__transparent__execution__content__entry__box__icons__middle__top__icon">
                    <img src={directionPic} alt="DirectionPic" />
                  </div>
                </div>
                <div className="pricing__transparent__execution__content__entry__box__icons__middle__bottom">
                  Tasks are maintained on a daily basis. This allows you to get
                  a quick overview on where the team stands.
                </div>
              </div>
              <div className="pricing__transparent__execution__content__entry__box__icons__left">
                <div className="pricing__transparent__execution__content__entry__box__right">
                  <img src={rightAngle} alt="right angle icon" />
                </div>
                <div className="pricing__transparent__execution__content__entry__box__left">
                  <img src={userPng} alt="User Icon" />
                </div>
              </div>
            </div>
            <div className="pricing__transparent__execution__content__entry__box">
              <div className="pricing__transparent__execution__content__entry__box__icons__left">
                <div className="pricing__transparent__execution__content__entry__box__left">
                  <img src={userPng} alt="User Icon" />
                </div>
                <div className="pricing__transparent__execution__content__entry__box__right">
                  <img src={rightAngle} alt="right angle icon" />
                </div>
              </div>
              <div className="pricing__transparent__execution__content__entry__box__icons__middle">
                <div className="pricing__transparent__execution__content__entry__box__icons__middle__top">
                  <div className="pricing__transparent__execution__content__entry__box__icons__middle__top__icon">
                    <img src={directionPic} alt="DirectionPic" />
                  </div>
                  <div className="pricing__transparent__execution__content__entry__box__icons__middle__top__icon">
                    <img src={directionPic} alt="DirectionPic" />
                  </div>
                </div>
                <div className="pricing__transparent__execution__content__entry__box__icons__middle__bottom">
                  Tasks are maintained on a daily basis. This allows you to get
                  a quick overview on where the team stands.
                </div>
              </div>
              <div className="pricing__transparent__execution__content__entry__box__icons__left">
                <div className="pricing__transparent__execution__content__entry__box__right">
                  <img src={rightAngle} alt="right angle icon" />
                </div>
                <div className="pricing__transparent__execution__content__entry__box__left">
                  <img src={userPng} alt="User Icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pricing__feature">
        <div className="pricing__feature__entry__reverse">
          Why Dedicated Teams with DSMEGlobal?
        </div>
        <PricingFeatureEntry
          icon={<Box size={20} strokeWidth={1.5} color="currentColor" />}
          title="Perfect Match"
          content="We perfectly match a dedicated agile team with your technology & product requirements. They can either work using your development processes with your existing in-house (or external) teams or work independently."
        />
        <PricingFeatureEntry
          icon={<Box size={20} strokeWidth={1.5} color="currentColor" />}
          title="Test Before You Hire"
          content="To establish confidence and demonstrate work quality, we offer a no-cost proof of concept to our clients whereby they test our resources with defined tasks. We only move forward, if you like our work during the trial."
        />
        <PricingFeatureEntry
          icon={<Box size={20} strokeWidth={1.5} color="currentColor" />}
          title="Immediate Starts"
          content="You don’t need to go through the stress of recruitment, infrastructure setup, deal with various staffing risks & problems or lose focus on your existing projects. We help you ramp up and get started on your project immediately."
        />
        <PricingFeatureEntry
          icon={<Box size={20} strokeWidth={1.5} color="currentColor" />}
          title="Flexible Team Size"
          content="We provide easy scaling of resources hired based on your needs; thus aiding in cost effectiveness. You can start small with a few developers and scale up by hiring more as you and your needs grow and vice versa."
        />
        <PricingFeatureEntry
          icon={<Box size={20} strokeWidth={1.5} color="currentColor" />}
          title="Skills & Expertise"
          content="Our dedicated developers are the perfect blend of hard and soft skills with years of specialized domain expertise, even covering the latest emerging technologies like AR/VR, Blockchain, Big Data, IoT, etc."
        />
        <PricingFeatureEntry
          icon={<Box size={20} strokeWidth={1.5} color="currentColor" />}
          title="Knowledge & Team Retention"
          content="Due to our well-established development processes, product knowledge is accumulated and retained throughout the project. Proper transition plans are created for knowledge transfer to new team members when needed."
        />
      </div>
      <div className="pricing__delivery__section">
        <div className="pricing__delivery__section__heading">
          Process From Idea Creation to Product Delivery
        </div>
        <div className="pricing__delivery__section__content">
          <div className="pricing__delivery__section__content__card">
            <div className="pricing__delivery__section__content__card__heading">
              Enterprise
            </div>
            <div className="pricing__delivery__section__content__card__content">
              {DeliveryCardEntry1.map((item) => (
                <div
                  className="pricing__delivery__section__content__card__para"
                  key={JSON.stringify(item)}>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="pricing__delivery__section__content__card">
            <div className="pricing__delivery__section__content__card__heading">
              Domain Knowledge
            </div>
            <div className="pricing__delivery__section__content__card__content">
              {DeliveryCardEntry2.map((item) => (
                <div
                  className="pricing__delivery__section__content__card__para"
                  key={JSON.stringify(item)}>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="pricing__delivery__section__content__card">
            <div className="pricing__delivery__section__content__card__heading">
              Technologies We Use
            </div>
            <div className="pricing__delivery__section__content__card__content">
              {DeliveryCardEntry3.map((item) => (
                <div
                  className="pricing__delivery__section__content__card__para"
                  key={JSON.stringify(item)}>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
