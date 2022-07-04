import React from "react";
import deliveryPic from "../assets/delivery.png";
import PricingFeatureEntry from "../components/PricingFeatureEntry";
import { HomeJumbotron } from "../components/HomeJumbotron";
import pricing from "../assets/pricing.svg";
import products from "../assets/products.svg";
import rightAngleIcon from "../assets/rightAngleIcon.svg";
export default function Pricing() {
  const DeliveryCardEntry1 = [
    { para: "Onsite / Offsite Discovery Workshop" },
    { para: "Vision and Goal Mapping" },
    { para: "Stakeholders Interviews" },
    { para: "Requirements Definition" },
    { para: "UI/UX and Visual Prototyping" },
    { para: "High Risk Tech POCs" },
    { para: "Product Roadmap" },
  ];
  const DeliveryCardEntry2 = [
    { para: " Software Architecture and Design" },
    { para: "Development of Web / Mobile / Backend Components" },
    { para: "APIs Development and Integrations" },
    { para: "Continuous Integration/Delivery" },
    { para: "UAQ" },
    { para: "QA Testing" },
  ];
  const DeliveryCardEntry3 = [
    { para: "SLA Based Support" },
    { para: "L3 and Production Support" },
    { para: "Services" },
    { para: "Operational support" },
    { para: "On-going Support" },
  ];
  return (
    <>
      <div className="container">
        <HomeJumbotron
          taglinesLine="Best"
          taglines={["products", "prices"]}
          info="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore,
            culpa est? Quos iusto dolore culpa, veritatis quas minus quibusdam
            ad? Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Dolore, culpa est? Quos iusto dolore culpa, veritatis quas minus
            quibusdam ad?"
          imgs={[products, pricing]}
        />
      </div>
      <div className="pricing__process__container">
        <div className="pricing__process__container__content">
          <div className="pricing__process__container__content__top">
            <div className="pricing__process__container__content__top__heading">
              How the Process Works?
            </div>
            <div className="pricing__process__container__content__top__info">
              We have been successfully delivered over 250+ products on-time and
              within budget for startups, entrepreneurs, businesses and large
              enterprises.
            </div>
          </div>
          <div className="pricing__process__container__content__bottom">
            <div className="pricing__process__container__content__bottom__left">
              <div className="pricing__process__container__content__bottom__left__top">
                Initial Discovery
              </div>
              <div className="pricing__process__container__content__bottom__left__middle">
                <div className="pricing__process__container__content__bottom__left__middle__button pricing__button__1st">
                  Assessment
                </div>
                <div className="pricing__process__container__content__bottom__left__middle__button">
                  Deep Dive
                </div>
              </div>
              <div className="pricing__process__container__content__bottom__left__bottom">
                <ul>
                  <li>
                    We discuss your project requirements over a couple of calls
                    or It will be meetings and assess what you already have.
                  </li>
                  <li>
                    We discuss your project requirements over a couple of calls
                    or It will be meetings and assess what you already have.
                  </li>
                  <li>
                    We discuss your project requirements over a couple of calls
                    or It will be meetings and assess what you already have.
                  </li>
                </ul>
              </div>
            </div>
            <div className="pricing__process__container__content__bottom__left">
              <div className="pricing__process__container__content__bottom__left__top">
                Initial Discovery
              </div>
              <div className="pricing__process__container__content__bottom__left__middle">
                <div className="pricing__process__container__content__bottom__left__middle__button">
                  Assessment
                </div>
                <div className="pricing__process__container__content__bottom__left__middle__button">
                  Deep Dive
                </div>
                <div className="pricing__process__container__content__bottom__left__middle__button">
                  Deep Dive
                </div>
                <div className="pricing__process__container__content__bottom__left__middle__button">
                  Deep Dive
                </div>
              </div>
              <div className="pricing__process__container__content__bottom__left__bottom">
                <ul>
                  <li>
                    We discuss your project requirements over a couple of calls
                    or It will be meetings and assess what you already have.
                  </li>
                  <li>
                    We discuss your project requirements over a couple of calls
                    or It will be meetings and assess what you already have.
                  </li>
                  <li>
                    We discuss your project requirements over a couple of calls
                    or It will be meetings and assess what you already have.
                  </li>
                </ul>
              </div>
            </div>
            <div className="pricing__process__container__content__bottom__left">
              <div className="pricing__process__container__content__bottom__left__top">
                Initial Discovery
              </div>
              <div className="pricing__process__container__content__bottom__left__middle">
                <div className="pricing__process__container__content__bottom__left__middle__button">
                  Assessment
                </div>
                <div className="pricing__process__container__content__bottom__left__middle__button">
                  Deep Dive
                </div>
              </div>
              <div className="pricing__process__container__content__bottom__left__bottom">
                <ul>
                  <li>
                    We discuss your project requirements over a couple of calls
                    or It will be meetings and assess what you already have.
                  </li>
                  <li>
                    We discuss your project requirements over a couple of calls
                    or It will be meetings and assess what you already have.
                  </li>
                  <li>
                    We discuss your project requirements over a couple of calls
                    or It will be meetings and assess what you already have.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pricing__understand__container">
        <div className="pricing__understand__container__content">
          <div className="pricing__understand__container__content__top">
            We understand that each client is unique although a typical fixed
            price project is composed of all the above stages, we tailor our
            process according to your needs. You can also benefit from our
            additional offerings below:
          </div>
          <div className="pricing__understand__container__content__bottom">
            <div className="pricing__understand__container__content__bottom__card">
              <div className="pricing__understand__container__content__bottom__card__left">
                <img src={rightAngleIcon} alt="ICON" />
              </div>
              <div className="pricing__understand__container__content__bottom__card__right">
                <div className="pricing__understand__container__content__bottom__card__right__heading">
                  Discovery Workshop
                </div>
                <div className="pricing__understand__container__content__bottom__card__right__info">
                  When you don’t have precise specifications, we engage you in a
                  discovery workshop to make you ready for development. Post
                  this workshop, you can choose either a fixed price or
                  dedicated team service based on your priorities.
                </div>
                <div className="pricing__understand__container__content__bottom__card__right__btn">
                  <a href="#">
                    Learn More <span>→</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="pricing__understand__container__content__bottom__card">
              <div className="pricing__understand__container__content__bottom__card__left">
                <img src={rightAngleIcon} alt="ICON" />
              </div>
              <div className="pricing__understand__container__content__bottom__card__right">
                <div className="pricing__understand__container__content__bottom__card__right__heading">
                  Discovery Workshop
                </div>
                <div className="pricing__understand__container__content__bottom__card__right__info">
                  When you don’t have precise specifications, we engage you in a
                  discovery workshop to make you ready for development. Post
                  this workshop, you can choose either a fixed price or
                  dedicated team service based on your priorities.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pricing__feature">
        <div className="pricing__feature__entry__reverse">
          We <span>Provide</span> You
        </div>
        <PricingFeatureEntry
          title="Senior Team"
          content="Highly experienced senior level cross-functional team inclusive of technical project manager, developers, designers and QA experts are allocated for the duration of the project."
        />
        <PricingFeatureEntry
          title="Reliable"
          content="Fixed price – no hidden costs. We understand what you need to build and then commit to it.
          95% client satisfaction – we are happy to make intros to our past clients."
        />
        <PricingFeatureEntry
          title="Immediate Starts"
          content="No need to worry about your ideas and code base being stolen, you are fully protected under standard “Work for Hire” agreements and NDAs."
        />
        <PricingFeatureEntry
          title="Flexibility"
          content="We have agile commercial agreements in place, which allow you to modify your product scope as you move forward."
        />
        <PricingFeatureEntry
          title="Full Cycle Services"
          content="Our full spectrum of services range from designing and developing your product to initially engineering your requirements through our Discovery Workshop."
        />
      </div>
      <div className="pricing__all__inclusive__container">
        <div className="pricing__all__inclusive__container__content">
          <div className="pricing__all__inclusive__container__content__top">
            <div className="pricing__all__inclusive__container__content__top__heading">
              All-Inclusive Pricing
            </div>
            <div className="pricing__all__inclusive__container__content__top__info">
              We have no hidden costs. Our transparent pricing approach includes
              everything below.
            </div>
          </div>
          <div className="pricing__all__inclusive__container__content__bottom">
            <div className="pricing__all__inclusive__container__content__bottom__card">
              <div className="pricing__all__inclusive__container__content__bottom__card__icon">
                <img src={rightAngleIcon} alt="Icon" />
              </div>
              <div className="pricing__all__inclusive__container__content__bottom__card__title">
                Project Management & QA
              </div>
              <div className="pricing__all__inclusive__container__content__bottom__card__info">
                A Project Manager and QA expert are both included in all the
                fixed price offers we share.
              </div>
            </div>
            <div className="pricing__all__inclusive__container__content__bottom__card">
              <div className="pricing__all__inclusive__container__content__bottom__card__icon">
                <img src={rightAngleIcon} alt="Icon" />
              </div>
              <div className="pricing__all__inclusive__container__content__bottom__card__title">
                Project Management & QA
              </div>
              <div className="pricing__all__inclusive__container__content__bottom__card__info">
                A Project Manager and QA expert are both included in all the
                fixed price offers we share.
              </div>
            </div>
            <div className="pricing__all__inclusive__container__content__bottom__card">
              <div className="pricing__all__inclusive__container__content__bottom__card__icon">
                <img src={rightAngleIcon} alt="Icon" />
              </div>
              <div className="pricing__all__inclusive__container__content__bottom__card__title">
                Project Management & QA
              </div>
              <div className="pricing__all__inclusive__container__content__bottom__card__info">
                A Project Manager and QA expert are both included in all the
                fixed price offers we share.
              </div>
            </div>
            <div className="pricing__all__inclusive__container__content__bottom__card">
              <div className="pricing__all__inclusive__container__content__bottom__card__icon">
                <img src={rightAngleIcon} alt="Icon" />
              </div>
              <div className="pricing__all__inclusive__container__content__bottom__card__title">
                Project Management & QA
              </div>
              <div className="pricing__all__inclusive__container__content__bottom__card__info">
                A Project Manager and QA expert are both included in all the
                fixed price offers we share.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pricing__delivery__section">
        <div className="pricing__delivery__section__heading">
          Process From Idea Creation to Product Delivery
        </div>
        <img
          src={deliveryPic}
          alt="deliveryPic"
          className="pricing__delivery__section__img"
        />

        <div className="pricing__delivery__section__content">
          <div className="pricing__delivery__section__content__card">
            <div className="pricing__delivery__section__content__card__heading">
              Discovery
            </div>
            {DeliveryCardEntry1.map((item) => (
              <div
                className="pricing__delivery__section__content__card__para"
                key={JSON.stringify(item)}>
                {item.para}
              </div>
            ))}
          </div>

          <div className="pricing__delivery__section__content__card">
            <div className="pricing__delivery__section__content__card__heading">
              Execution
            </div>
            {DeliveryCardEntry2.map((item) => (
              <div
                className="pricing__delivery__section__content__card__para"
                key={JSON.stringify(item)}>
                {item.para}
              </div>
            ))}
          </div>

          <div className="pricing__delivery__section__content__card">
            <div className="pricing__delivery__section__content__card__heading">
              Support
            </div>
            {DeliveryCardEntry3.map((item) => (
              <div
                className="pricing__delivery__section__content__card__para"
                key={JSON.stringify(item)}>
                {item.para}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
