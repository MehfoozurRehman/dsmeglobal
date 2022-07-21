import React from "react";
import deliveryPic from "../assets/delivery.webp";
import { PricingFeatureEntry } from "../components/PricingFeatureEntry";
import { HomeJumbotron } from "../components/HomeJumbotron";
import { ExperienceCard } from "../components/ExperienceCard";
import pricing from "../assets/pricing.svg";
import products from "../assets/products.svg";
import { ExperitseCard } from "../components/ExperitseCard";
import { WorkWithUsCard } from "../components/WorkWithUsCard";

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
          taglinesLine="Less Execution Risk"
          taglines={["More", "trust"]}
          info="We plan and deliver your product over multiple milestones, leveraging a transparent working methodology."
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
                <div className="pricing__process__container__content__bottom__left__middle__button ">
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
                    If we feel that the requirements are enough for us to
                    provide you with a tentative cost/effort estimate - we go
                    down that route. Otherwise, we recommend that you go through
                    our Agile Discovery Workshop to get you development ready.
                  </li>
                  <li>
                    Otherwise, we recommend that you go through our Agile
                    Discovery Workshop to get you development ready.
                  </li>
                </ul>
              </div>
            </div>
            <div className="pricing__process__container__content__bottom__left">
              <div className="pricing__process__container__content__bottom__left__top">
                Develop
              </div>
              <div className="pricing__process__container__content__bottom__left__middle">
                <div className="pricing__process__container__content__bottom__left__middle__button">
                  Detailed Discovery
                </div>
                <div className="pricing__process__container__content__bottom__left__middle__button">
                  Design
                </div>
                <div className="pricing__process__container__content__bottom__left__middle__button">
                  Development & QA
                </div>
                <div className="pricing__process__container__content__bottom__left__middle__button">
                  UAT
                </div>
              </div>
              <div className="pricing__process__container__content__bottom__left__bottom">
                <ul>
                  <li>
                    We start off with doing a detailed discovery as a first
                    milestone, where we revisit the initial requirements and
                    make them more detailed (user stories, wire-frames,
                    non-functional requirements).
                  </li>
                  <li>
                    On the basis of this, we draft a statement of work and
                    provide a detailed project & payment plan
                  </li>
                  <li>
                    The remaining milestones are about delivering the scope of
                    work defined during detailed discovery.
                  </li>
                </ul>
              </div>
            </div>
            <div className="pricing__process__container__content__bottom__left">
              <div className="pricing__process__container__content__bottom__left__top">
                Go Live
              </div>
              <div className="pricing__process__container__content__bottom__left__middle">
                <div className="pricing__process__container__content__bottom__left__middle__button">
                  Pilot
                </div>
                <div className="pricing__process__container__content__bottom__left__middle__button">
                  Support & Transition
                </div>
              </div>
              <div className="pricing__process__container__content__bottom__left__bottom">
                <ul>
                  <li>
                    Once the product has gone through the User Acceptance
                    Testing stage, we successfully launch it while providing
                    ongoing support & maintenance during the Pilot phase.
                  </li>
                  <li>
                    After that, we can either transition everything to your team
                    or move to a monthly Support & Maintenance contract.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container__web__dev__experience__wrapper">
        <div className="container__web__dev__experience">
          <div className="container__web__dev__experience__header">
            <div className="container__web__dev__experience__header__heading">
              Why we Recommend It
            </div>
            <div className="container__web__dev__experience__header__info">
              It's the first step to building a successful and awesome tech
              product. It builds tremendous confidence when moving on to the
              development phase.
            </div>
          </div>
          <div className="container__web__dev__experience__content">
            <ExperienceCard
              label="Reduce Cost"
              info="ADW is the best way to reduce inflated and superficial development costs. Our goal is to arrive at the most critical features that add direct business value and get rid of the fat."
            />
            <ExperienceCard
              label="Speed & Agility"
              info="We have structured this workshop in a way to ensure that we gather and document an in-depth understanding of your product in the shortest time possible."
            />
            <ExperienceCard
              label="Mitigate Risk"
              info="During the workshop, we help you identify problem areas and any technical challenges. The goal is to make sure that any high-risk items are identified and dealt ear"
            />
            <ExperienceCard
              label="Best way to prepare for development"
              info="There is no doubt that 90% of software projects often fail in time, cost or scope. Gathering requirements with ADW is our way of addressing this problem and we have been pretty successful with it."
            />
            <ExperienceCard
              label="Specialized Experts"
              info="We’ve helped launch hundreds of products and our team has been doing this for nearly 15 years. We bring experts to the table and our goal is to make you as educated as possible before making important decisions."
            />
            <ExperienceCard
              label="Stakeholders Involvement  "
              info="All concerned stakeholders of the product are involved in the process from day one. This way businesses get to build a product that does end up getting used."
            />
            {/* <ExperienceCard
              label="Sports & Lifestyle Apps"
              info="Captivate users with the most robust, simple and useful sports and lifestyle apps that will give your competitors tough competition."
            />
            <ExperienceCard
              label="Social Networking Apps"
              info="Reduce the time to market for your amazing social networking apps and cash out on the first movers advantage by leveraging our expertise."
            /> */}
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
                <svg
                  id="Group_12078"
                  data-name="Group 12078"
                  xmlns="http://www.w3.org/2000/svg"
                  width="100.218"
                  height="100.269"
                  viewBox="0 0 100.218 100.269"
                >
                  <path
                    id="Path_11653"
                    data-name="Path 11653"
                    d="M216.151,247.819,202.627,251.1c-.341.083-.678.184-1.022.253a1.537,1.537,0,0,1-2-1.2c-.183-.635-.331-1.28-.523-2.025-2.379.571-4.694,1.124-7.008,1.682-.922.222-1.838.468-2.763.677a1.486,1.486,0,0,1-1.993-1.19c-.279-.971-.507-1.957-.789-3.058-2.078.5-4.084.972-6.087,1.455-1.23.3-2.453.616-3.684.906-1.417.333-2.035-.031-2.389-1.44q-.9-3.578-1.755-7.166a1.535,1.535,0,0,1,1.307-2.107c3.3-.82,6.61-1.616,10-2.441-.222-.974-.428-1.89-.641-2.8-.327-1.405.052-2.006,1.479-2.348q4.405-1.058,8.808-2.124c.167-.041.327-.106.6-.2-.121-.6-.223-1.17-.354-1.738-.316-1.37.045-1.973,1.4-2.3q13.465-3.269,26.932-6.534,13.262-3.21,26.528-6.407c.335-.081.661-.2,1.07-.326-.233-.992-.474-1.94-.674-2.9-.265-1.262.117-1.9,1.321-2.2q3.835-.945,7.681-1.857a1.565,1.565,0,0,1,2.183,1.332c.281,1.089.588,2.174.8,3.277a1.215,1.215,0,0,0,1.057,1.077c5.39,1.524,8.946,4.964,10.222,10.45,1.256,5.4-.37,10.009-4.411,13.756a1.205,1.205,0,0,0-.432,1.364c.3,1.155.586,2.317.842,3.483a1.454,1.454,0,0,1-1.2,1.964q-3.984,1-7.987,1.935a1.509,1.509,0,0,1-2.022-1.285c-.256-.98-.482-1.966-.734-3l-27.37,6.64a7.357,7.357,0,0,1-.755,5.2c-.143.253.085.788.255,1.137q10.2,20.792,20.418,41.573c.837,1.7,1.68,3.4,2.507,5.114,1.144,2.364.436,4.722-1.715,5.75-2.117,1.012-4.368.136-5.514-2.189q-8.458-17.176-16.9-34.36a2.389,2.389,0,0,0-.666-.9v1.083q0,16.335-.005,32.669a3.985,3.985,0,0,1-2.5,3.814,4.032,4.032,0,0,1-4.382-.934,4.19,4.19,0,0,1-1.147-3.074q.024-16.176.009-32.352v-1.159l-.169-.083c-.163.308-.334.611-.487.923q-8.43,17.135-16.858,34.27c-1.058,2.149-2.909,3.108-4.865,2.55a4.029,4.029,0,0,1-2.453-5.913c2.311-4.741,4.65-9.468,6.976-14.2q7.908-16.092,15.835-32.175a2.107,2.107,0,0,0,.027-2.406A5.663,5.663,0,0,1,216.151,247.819Zm-13.986.235c.284-.038.491-.046.689-.094,4.163-1.012,8.32-2.046,12.491-3.024a1.594,1.594,0,0,0,1.271-1.048,6.488,6.488,0,0,1,10.213-2.462,1.509,1.509,0,0,0,1.505.363c7.4-1.819,14.81-3.6,22.217-5.388,1.694-.41,3.383-.838,5.136-1.272-1.749-7.224-3.467-14.315-5.208-21.5l-53.507,12.962Zm57.582-8.9,5.371-1.319c-2.506-10.346-4.985-20.578-7.486-30.9l-5.371,1.3C254.764,218.568,257.246,228.822,259.747,239.15ZM198.4,245.2c-1.173-4.832-2.312-9.526-3.464-14.27l-8.5,2.074,3.456,14.258Zm20.013,9.362c-.118.216-.243.427-.351.647q-10.722,21.821-21.445,43.64c-.343.7-.711,1.423.224,1.892.959.482,1.288-.321,1.64-.98.067-.123.123-.253.185-.379,6.28-12.776,12.509-25.578,18.892-38.3A11.341,11.341,0,0,0,218.412,254.557Zm8.463-.018a11,11,0,0,0,.947,6.735c6.357,12.662,12.55,25.408,18.8,38.124.68,1.385,1.172,1.759,1.84,1.333,1.084-.69.387-1.474.034-2.194q-7.984-16.285-15.987-32.563Q229.7,260.253,226.875,254.539ZM221.618,253c-.015.277-.043.555-.043.833q0,22.721,0,45.442c0,.141,0,.282,0,.422.04.693.411,1.261,1.081,1.134.4-.075.728-.687,1.01-1.11.115-.171.022-.481.022-.727q0-22.457,0-44.914V253Zm40.439-40.532c1.518,6.259,2.965,12.23,4.466,18.424,2.783-3.155,3.848-6.533,2.913-10.41C268.493,216.576,266.025,213.994,262.057,212.471Zm-85.03,32.963,8.814-2.138-1.213-4.931-8.8,2.135Zm45.613,4.553a3.546,3.546,0,1,0-3.6-3.507A3.55,3.55,0,0,0,222.64,249.987Z"
                    transform="translate(-172.529 -203.624)"
                    fill="#329d76"
                  />
                  <path
                    id="Path_11657"
                    data-name="Path 11657"
                    d="M218.412,254.557a11.341,11.341,0,0,1-.855,6.517c-6.383,12.725-12.612,25.527-18.892,38.3-.062.126-.118.256-.185.379-.352.659-.681,1.462-1.64.98-.935-.469-.567-1.194-.224-1.892q10.728-21.817,21.445-43.64C218.169,254.984,218.294,254.773,218.412,254.557Z"
                    transform="translate(-172.529 -203.624)"
                    fill="#329d76"
                  />
                  <path
                    id="Path_11658"
                    data-name="Path 11658"
                    d="M226.875,254.539q2.817,5.717,5.633,11.435,8,16.279,15.987,32.563c.353.72,1.05,1.5-.034,2.194-.668.426-1.16.052-1.84-1.333-6.249-12.716-12.442-25.462-18.8-38.124A11,11,0,0,1,226.875,254.539Z"
                    transform="translate(-172.529 -203.624)"
                    fill="#329d76"
                  />
                  <path
                    id="Path_11659"
                    data-name="Path 11659"
                    d="M221.618,253h2.074v1.08q0,22.456,0,44.914c0,.246.093.556-.022.727-.282.423-.612,1.035-1.01,1.11-.67.127-1.041-.441-1.081-1.134-.008-.14,0-.281,0-.422q0-22.722,0-45.442C221.575,253.558,221.6,253.28,221.618,253Z"
                    transform="translate(-172.529 -203.624)"
                    fill="#329d76"
                  />
                  <path
                    id="Path_11662"
                    data-name="Path 11662"
                    d="M222.64,249.987a3.546,3.546,0,1,1,3.577-3.528A3.56,3.56,0,0,1,222.64,249.987Z"
                    transform="translate(-172.529 -203.624)"
                    fill="#329d76"
                  />
                  <path
                    id="Path_11663"
                    data-name="Path 11663"
                    d="M222.589,225.584c-.766-.143-1.347-.482-1.441-1.319a1.382,1.382,0,0,1,1.134-1.647q2.706-.687,5.419-1.342c1.945-.472,3.891-.946,5.844-1.385a1.485,1.485,0,0,1,1.93.985,1.511,1.511,0,0,1-1.218,1.9c-3.75.928-7.508,1.821-11.263,2.726C222.858,225.535,222.719,225.558,222.589,225.584Z"
                    transform="translate(-172.529 -203.624)"
                    fill="#329d76"
                  />
                  <path
                    id="Path_11664"
                    data-name="Path 11664"
                    d="M244.7,219.431c-.238.231-.6.845-1.128,1.039a22.541,22.541,0,0,1-3.452.872,1.484,1.484,0,0,1-.7-2.883c1.143-.323,2.3-.621,3.463-.843C243.891,217.424,244.669,218.079,244.7,219.431Z"
                    transform="translate(-172.529 -203.624)"
                    fill="#329d76"
                  />
                </svg>
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
                <svg
                  id="Group_12077"
                  data-name="Group 12077"
                  xmlns="http://www.w3.org/2000/svg"
                  width="103.906"
                  height="129.892"
                  viewBox="0 0 103.906 129.892"
                >
                  <path
                    id="Path_11666"
                    data-name="Path 11666"
                    d="M358.812,307.84c-4.2-1.631-3.281-5.344-3.381-8.787-1.914,0-3.718-.006-5.521,0-2.223.01-4.078-.8-4.9-2.915a9.487,9.487,0,0,1,.046-6.926,1.867,1.867,0,0,0,.005-1.739c-1.275-2.548-.838-7.117,1.174-8.467,1.672-1.122,1.677-2.445,1.628-4.039-.043-1.394-.047-2.791,0-4.185a9.505,9.505,0,0,0-4.791-9.008,35.407,35.407,0,0,1-10.731-10.454c-5.449-8.11-7.788-17.029-6.258-26.716,2.455-15.543,11.355-25.88,26.08-31.215a41.486,41.486,0,0,1,6.521-1.489c1.512-.282,2.438.32,2.634,1.469.2,1.182-.588,2.073-2.124,2.3a33.935,33.935,0,0,0-20.556,10.772,32.453,32.453,0,0,0-8.768,18.715c-1.585,14.243,3.626,25.456,15.465,33.5,4.279,2.907,6.46,6.749,6.36,11.916-.044,2.281-.007,4.563-.007,6.95h24.392c0-1.853-.09-3.742.024-5.619a35.1,35.1,0,0,1,.717-6.12,11.6,11.6,0,0,1,4.564-6.363,75.018,75.018,0,0,0,7.075-5.729,33.124,33.124,0,0,0,9.437-18.93,7.981,7.981,0,0,1,.2-.859,1.783,1.783,0,0,1,2.208-1.4,1.853,1.853,0,0,1,1.5,2.168,38.394,38.394,0,0,1-8.655,19.655,40.9,40.9,0,0,1-8.942,7.813,9.208,9.208,0,0,0-4.29,8.144c-.008,2.2.019,4.4-.014,6.6a1.34,1.34,0,0,0,.762,1.414,4.555,4.555,0,0,1,2.555,4.086c.04,1.882.35,3.81-.715,5.571a1.152,1.152,0,0,0,.084.914c1.048,2.138.835,4.39.431,6.581a4.459,4.459,0,0,1-4.16,3.507c-1.684.117-3.379.069-5.069.1-.451.008-.9.041-1.459.067-.121,3.359.846,7.087-3.371,8.716Zm5.012-21.444h12.685c2.892,0,2.892,0,2.887-2.826,0-2-.128-2.127-2.19-2.127H351.2c-2.829,0-2.829,0-2.823,2.888,0,1.894.171,2.062,2.126,2.064Q357.164,286.4,363.824,286.4Zm-.033,8.79H376.35c3.062,0,3.062,0,3.046-3.021-.009-1.738-.139-1.873-1.9-1.873q-13,0-26.005-.006c-3.377-.006-3.122-.13-3.107,3.211.007,1.464.227,1.684,1.711,1.686Q356.941,295.194,363.791,295.186Zm4.684,3.967H359.3c0,1.361-.076,2.632.048,3.884a1.422,1.422,0,0,0,.992.955q3.544.129,7.094,0a1.422,1.422,0,0,0,.991-.957C368.551,301.784,368.475,300.513,368.475,299.153Z"
                    transform="translate(-311.934 -177.948)"
                    fill="#329d76"
                  />
                  <path
                    id="Path_11667"
                    data-name="Path 11667"
                    d="M354.393,211.967l3.409-1.419c0-1.726-.008-3.457,0-5.188.012-2.046.925-3.132,2.919-3.22,2.11-.094,4.23-.094,6.34,0,1.947.088,2.885,1.167,2.9,3.107.016,1.733,0,3.465,0,5.285l3.346,1.416c1.159-1.2,2.309-2.438,3.508-3.627,1.666-1.653,3.042-1.65,4.717-.012q2,1.951,3.946,3.947c1.623,1.658,1.609,3.033-.033,4.708-1.007,1.027-2.069,2-3.022,3.075a1.469,1.469,0,0,0-.219,1.262c1.009,2.523,1.035,2.512,3.829,2.513.93,0,1.862-.027,2.79.017a2.587,2.587,0,0,1,2.753,2.684c.088,2.237.09,4.482.008,6.719a2.7,2.7,0,0,1-2.966,2.776c-1.479.038-2.961.047-4.439-.007a1.146,1.146,0,0,0-1.366.938,22.475,22.475,0,0,1-.994,2.4c1.177,1.13,2.414,2.278,3.606,3.472,1.692,1.7,1.678,3.09-.011,4.8q-1.917,1.939-3.857,3.857c-1.674,1.649-3.045,1.66-4.708.039-.968-.945-1.947-1.883-2.86-2.88-.529-.578-.963-.573-1.733-.39-2.072.493-2.584,1.728-2.319,3.655a16.872,16.872,0,0,1,.011,3.041,2.6,2.6,0,0,1-2.652,2.663q-3.423.078-6.849,0a2.59,2.59,0,0,1-2.639-2.673c-.051-1.562-.049-3.129,0-4.692.023-.737-.272-1.015-.906-1.4-1.769-1.075-3.046-.73-4.228.879a14.791,14.791,0,0,1-2.051,2.069,2.709,2.709,0,0,1-4.062.03q-2.354-2.217-4.575-4.573a2.71,2.71,0,0,1,.091-4.158c1.226-1.281,2.531-2.486,3.819-3.743-.388-.978-.69-1.894-1.125-2.743a1.3,1.3,0,0,0-.956-.542c-1.478-.059-2.959-.013-4.439-.03-2.1-.023-3.174-1-3.231-3.048-.058-2.07-.061-4.145.005-6.214.064-1.96,1.07-2.891,3.049-2.932,1.48-.03,2.961-.046,4.439.009.717.026.936-.318,1.289-.879,1.132-1.8.762-3.115-.909-4.313a13.5,13.5,0,0,1-2.067-2.052,2.654,2.654,0,0,1-.008-3.966c1.472-1.574,3-3.1,4.57-4.578,1.4-1.323,2.8-1.254,4.258.109.647.607,1.275,1.238,1.884,1.883S353.846,211.353,354.393,211.967Zm-5.715,36.4c1.274-1.293,2.571-2.556,3.806-3.877a2.357,2.357,0,0,1,3.072-.534c1.4.661,2.854,1.237,4.312,1.775a2.275,2.275,0,0,1,1.747,2.439c-.065,1.844-.016,3.691-.016,5.553h4.576c0-1.855.061-3.627-.019-5.393a2.367,2.367,0,0,1,1.839-2.63,41.14,41.14,0,0,0,4.2-1.729,2.34,2.34,0,0,1,3.075.5c1.226,1.332,2.5,2.618,3.6,3.756l3.52-3.152c-1.361-1.316-2.655-2.587-3.973-3.832a2.3,2.3,0,0,1-.478-2.975c.631-1.326,1.2-2.688,1.7-4.069.606-1.666.981-2,2.746-2.007s3.523,0,5.321,0v-4.541c-1.831,0-3.6.006-5.359,0-1.626-.007-2.121-.413-2.682-1.954-.489-1.341-1.017-2.673-1.613-3.969-.74-1.608-.708-2.069.579-3.349,1.248-1.24,2.518-2.458,3.8-3.7l-3.306-3.285q-1.993,2.042-3.979,4.079a2.176,2.176,0,0,1-2.756.458c-1.485-.692-3-1.338-4.535-1.9a2.191,2.191,0,0,1-1.682-2.344c.046-1.846.012-3.694.012-5.56H361.6c0,1.821,0,3.548,0,5.274,0,1.75-.337,2.156-1.993,2.758-1.3.472-2.591.993-3.846,1.577-1.649.768-2.131.729-3.455-.605-1.219-1.227-2.414-2.477-3.514-3.608l-3.408,3.151c1.367,1.344,2.675,2.663,4.021,3.943a2.238,2.238,0,0,1,.468,2.864c-.633,1.372-1.224,2.768-1.746,4.186-.589,1.6-1.053,1.98-2.787,1.985-1.756,0-3.513,0-5.241,0v4.542c1.9,0,3.711.035,5.519-.012a2.266,2.266,0,0,1,2.437,1.749c.483,1.388,1.038,2.756,1.654,4.09.768,1.665.733,2.143-.593,3.465-1.22,1.217-2.458,2.417-3.7,3.639Z"
                    transform="translate(-311.934 -177.948)"
                    fill="#329d76"
                  />
                  <path
                    id="Path_11668"
                    data-name="Path 11668"
                    d="M368.512,191.788a35.988,35.988,0,0,1,12.674,3.864,38.079,38.079,0,0,1,20.136,26.205,32.458,32.458,0,0,1,.537,3.242,1.994,1.994,0,0,1-1.6,2.251,1.892,1.892,0,0,1-2.142-1.531,71.162,71.162,0,0,0-2.008-7.94c-4.675-12.147-13.489-19.463-26.272-21.979-.66-.13-1.328-.234-1.975-.413a1.778,1.778,0,0,1-1.4-2.1A1.883,1.883,0,0,1,368.512,191.788Z"
                    transform="translate(-311.934 -177.948)"
                    fill="#329d76"
                  />
                  <path
                    id="Path_11669"
                    data-name="Path 11669"
                    d="M365.834,183.056c0,.97.051,1.943-.013,2.908a2.023,2.023,0,0,1-1.934,2.091,1.994,1.994,0,0,1-1.93-2.089q-.1-2.97,0-5.945a1.926,1.926,0,0,1,1.93-2.073c1.085,0,1.809.769,1.948,2.072a2.375,2.375,0,0,1,.008.253q0,1.391,0,2.783Z"
                    transform="translate(-311.934 -177.948)"
                    fill="#329d76"
                  />
                  <path
                    id="Path_11670"
                    data-name="Path 11670"
                    d="M316.949,231.781c-1.054,0-2.109.036-3.16-.01a1.884,1.884,0,0,1-.064-3.765c2.146-.1,4.3-.1,6.448-.014a1.9,1.9,0,0,1-.063,3.8c-.126.012-.252.024-.378.024q-1.392,0-2.783,0Z"
                    transform="translate(-311.934 -177.948)"
                    fill="#329d76"
                  />
                  <path
                    id="Path_11671"
                    data-name="Path 11671"
                    d="M410.712,231.775c-1.053,0-2.109.046-3.159-.013a1.874,1.874,0,0,1-.085-3.737c2.226-.108,4.466-.1,6.693.008a1.718,1.718,0,0,1,1.678,1.882A1.769,1.769,0,0,1,414,231.768c-1.093.049-2.19.011-3.285.011Z"
                    transform="translate(-311.934 -177.948)"
                    fill="#329d76"
                  />
                  <path
                    id="Path_11672"
                    data-name="Path 11672"
                    d="M335.088,260.758a10.052,10.052,0,0,1-1.013,1.641c-1.307,1.376-2.655,2.713-4.02,4.032-1.018.985-2.069,1.032-2.9.2-.806-.8-.759-1.906.207-2.9q2.067-2.136,4.213-4.2a1.628,1.628,0,0,1,2.179-.369A8.432,8.432,0,0,1,335.088,260.758Z"
                    transform="translate(-311.934 -177.948)"
                    fill="#329d76"
                  />
                  <path
                    id="Path_11673"
                    data-name="Path 11673"
                    d="M394.668,258.67a9.319,9.319,0,0,1,1.655.984c1.408,1.334,2.779,2.709,4.123,4.108a1.918,1.918,0,0,1,.143,2.9,1.871,1.871,0,0,1-2.811-.179c-1.428-1.375-2.886-2.732-4.169-4.236a2.748,2.748,0,0,1-.446-2.149C393.3,259.557,394.1,259.178,394.668,258.67Z"
                    transform="translate(-311.934 -177.948)"
                    fill="#329d76"
                  />
                  <path
                    id="Path_11674"
                    data-name="Path 11674"
                    d="M333.1,201.066a7.864,7.864,0,0,1-1.6-.874c-1.435-1.362-2.834-2.765-4.207-4.191a1.909,1.909,0,1,1,2.646-2.736,59.937,59.937,0,0,1,4.252,4.319,2.71,2.71,0,0,1,.4,2.15C334.454,200.262,333.642,200.611,333.1,201.066Z"
                    transform="translate(-311.934 -177.948)"
                    fill="#329d76"
                  />
                  <path
                    id="Path_11675"
                    data-name="Path 11675"
                    d="M394.617,200.982c-.435-.331-1.173-.618-1.382-1.124a2.256,2.256,0,0,1,.111-1.951,64.838,64.838,0,0,1,4.882-4.927,1.854,1.854,0,0,1,2.572,2.6c-1.568,1.7-3.24,3.3-4.9,4.909C395.649,200.728,395.211,200.763,394.617,200.982Z"
                    transform="translate(-311.934 -177.948)"
                    fill="#329d76"
                  />
                  <path
                    id="Path_11680"
                    data-name="Path 11680"
                    d="M374.059,229.922a10.173,10.173,0,1,1-10.206-10.212A10.189,10.189,0,0,1,374.059,229.922Zm-3.818-.018a6.354,6.354,0,1,0-12.708.052,6.354,6.354,0,0,0,12.708-.052Z"
                    transform="translate(-311.934 -177.948)"
                    fill="#329d76"
                  />
                </svg>
              </div>
              <div className="pricing__understand__container__content__bottom__card__right">
                <div className="pricing__understand__container__content__bottom__card__right__heading">
                  Innovation
                </div>
                <div className="pricing__understand__container__content__bottom__card__right__info">
                  During the initial and detailed discovery stages we help you
                  identify the impact of emerging technologies on your project
                  idea and suggest appropriate changes and modifications to the
                  scope accordingly.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pricing__feature__container">
        This process offers minimum risk and a transparent approach since you
        only pay on the completion of defined deliverables.
      </div>
      <div className="pricing__feature__container__button">
        <button className="btn" style={{ margin: "-6em 0em 0em 0em" }}>
          Let's talk
        </button>
      </div>
      <div className="pricing__feature">
        <div className="pricing__feature__entry__reverse">
          We leverage our across-the-board knowledge base to expertly deliver
          your product on time and within your budget.
        </div>
        <PricingFeatureEntry
          // icon={
          //   <svg
          //     xmlns="http://www.w3.org/2000/svg"
          //     width="56.155"
          //     height="35.123"
          //     viewBox="0 0 56.155 35.123">
          //     <g
          //       id="Group_12098"
          //       data-name="Group 12098"
          //       transform="translate(-565 -2340.123)">
          //       <path
          //         id="Path_11778"
          //         data-name="Path 11778"
          //         d="M13.023,295.638a1.547,1.547,0,0,1,1.607-.766A46.06,46.06,0,0,1,24.5,296.42a11.56,11.56,0,0,1,1.655.707,1.507,1.507,0,0,1,.866,1.816c-.036.175-.053.353-.088.6h.59c2.742,0,5.484.01,8.226-.014a1.73,1.73,0,0,0,.942-.31,7.885,7.885,0,0,1,5.919-1.8,14.59,14.59,0,0,1,3.047.822c2.228.858,4.42,1.807,6.628,2.717.164.068.335.12.575.206-.183-1.086.459-1.479,1.283-1.782a33.262,33.262,0,0,1,8.414-1.869c1.726-.162,3.461-.237,5.193-.314.965-.044,1.423.432,1.423,1.381q0,10.34,0,20.678a1.217,1.217,0,0,1-1.386,1.373c-2.139.006-4.278,0-6.417,0-1.01,0-1.328-.237-1.619-1.194-.067-.221-.14-.44-.227-.71-.573.38-1.1.707-1.594,1.074a.6.6,0,0,0-.165.465,3.961,3.961,0,0,1-3.716,4.212.6.6,0,0,0-.417.243,4.432,4.432,0,0,1-4.365,2.258.585.585,0,0,0-.642.33,4.183,4.183,0,0,1-4.647,1.977.5.5,0,0,0-.349.018c-1.622,1.01-3.275.743-4.949.16a12.122,12.122,0,0,1-3.45-2.09c-3.115-2.452-6.242-4.891-9.308-7.4-1.182-.969-2.213-2.122-3.343-3.221-.07.2-.158.436-.242.678a1.117,1.117,0,0,1-1.1.836c-2.358.011-4.716,0-7.073,0a1.337,1.337,0,0,1-1.147-.8Zm33.8,30.3c-.695-.747-1.26-1.369-1.84-1.977-1.162-1.216-2.341-2.414-3.493-3.639a1.177,1.177,0,0,1,.586-2.037,1.333,1.333,0,0,1,1.241.542c1.745,1.769,3.483,3.546,5.26,5.283a1.865,1.865,0,0,0,2.649-.052c.327-.307.414-.549.022-.937-2.064-2.045-4.1-4.119-6.129-6.2a1.847,1.847,0,0,1-.477-.83,1.055,1.055,0,0,1,.589-1.188,1.085,1.085,0,0,1,1.4.222c.918.917,1.807,1.863,2.723,2.782q1.914,1.924,3.853,3.822a1.024,1.024,0,0,0,1.432.151,1.336,1.336,0,0,0,.532-2.008,14.178,14.178,0,0,0-2.221-2.619c-3.545-3.078-7.152-6.084-10.747-9.1a.642.642,0,0,0-.527-.059c-.57.188-1.112.473-1.69.62a1.818,1.818,0,0,0-.973.624,5.671,5.671,0,0,1-6.246,1.934,2.917,2.917,0,0,1-2.305-3.213,8.319,8.319,0,0,1,1.737-4.307c.427-.624.923-1.2,1.4-1.814H26.55c-.037.186-.059.33-.1.471q-1.459,5.607-2.911,11.217a.842.842,0,0,0,.087.67,48.8,48.8,0,0,0,4.058,4.077c3.417,2.8,6.924,5.5,10.446,8.167a8.566,8.566,0,0,0,2.345,1,4.436,4.436,0,0,0,1.136.067c-.448-.451-.785-.783-1.115-1.123q-1.815-1.869-3.623-3.743a1.171,1.171,0,0,1-.1-1.79,1.214,1.214,0,0,1,1.826.187c.1.105.2.216.3.319q2.667,2.643,5.336,5.282a1.091,1.091,0,0,0,1.41.173A9.525,9.525,0,0,0,46.818,325.936Zm9.865-8.15c.629-.421,1.244-.813,1.83-1.242a.534.534,0,0,0,.15-.474q-2.073-5.76-4.188-11.507a.769.769,0,0,0-.394-.4Q49.294,302.22,44.5,300.3a5.844,5.844,0,0,0-5.931.5,19.069,19.069,0,0,0-4.207,3.976A7.346,7.346,0,0,0,32.81,308c-.1.593.063.849.636,1.018a3.2,3.2,0,0,0,3.343-.767c.339-.329.607-.729.938-1.068a2.148,2.148,0,0,1,.719-.549c1.073-.393,2.17-.722,3.246-1.106a1.385,1.385,0,0,1,1.509.3c1.7,1.474,3.4,2.94,5.124,4.379C51.2,312.6,54.212,314.84,56.683,317.786Zm10.109.445V299.572A39.015,39.015,0,0,0,55.833,301.3L62,318.231Zm-51.389-2.3c1.505,0,2.981-.016,4.457.01a.536.536,0,0,0,.635-.469c1.068-3.882,2.186-7.751,3.216-11.642.422-1.6.665-3.237.995-4.892a39.681,39.681,0,0,0-9.3-1.632Z"
          //         transform="translate(551.977 2045.261)"
          //         fill="#329d76"
          //       />
          //     </g>
          //   </svg>
          // }
          title="Senior Team"
          content="Highly experienced senior-level cross-functional team inclusive of a technical project manager, developers, designers, and QA experts are allocated for the duration of the project."
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
      <div className="container__web__dev__experties">
        <div
          className="container__web__dev__experties__header"
          style={{ margin: "5em 0em 1em 0em" }}
        >
          <div
            className="service__startup__main__container__second"
            style={{
              paddingTop: "0em",
            }}
          >
            <div className="max__width__container">
              <div
                className="service__startup__main__container__first__heading"
                style={{
                  paddingBottom: "1em",
                }}
              >
                All-Inclusive Pricing{" "}
                <span style={{ fontSize: "20px", color: "black" }}>
                  We have no hidden costs. Our transparent pricing approach
                  includes everything below.
                </span>
              </div>
              <div className="service__startup__main__container__second__cards__container">
                <WorkWithUsCard
                  label="Project Management & QA"
                  info="A Project Manager and QA expert are both included in all the fixed price offers we share.   "
                />
                <WorkWithUsCard
                  label="No Overhead Costs"
                  info="You don't have to pay for office space, any tech equipment required, the onboarding process, or trainings - we handle all."
                />
                <WorkWithUsCard
                  label="No Recruitment Fee "
                  info="Neither do you have to hire an in-house team from scratch nor pay headhunters obscene amounts to find you the best fit team."
                />
                <WorkWithUsCard
                  label="Max Flexibility "
                  info="We fully understand how a product at times changes in scope during development and thus offers room for adoption at no cost."
                />
                <WorkWithUsCard
                  label="Flexible Contracts  "
                  info="Scalable contracts with simple billing.  "
                />
                <WorkWithUsCard label="" info="" />
              </div>
            </div>
          </div>

          <div className="container__web__dev__experties__header__heading">
            What You Get
          </div>
        </div>
        <div
          className="container__web__dev__experties__content"
          style={{ margin: "0em 0em -5em 0em" }}
        >
          <ExperitseCard
            svg={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 206.337 187.652"
              >
                <g
                  id="Group_41"
                  data-name="Group 41"
                  transform="translate(-182.155 -1893)"
                >
                  <path
                    id="Union_5"
                    data-name="Union 5"
                    d="M139.021,356.652c-20.909-.09-42.6-.134-66.3-.134-22.911,0-47.2.04-76.455.127h-.227l-1.046,0a31.333,31.333,0,0,1-8.33-.8,12.188,12.188,0,0,1-7.022-4.929c-2-2.881-4.393-7.184-4.423-11.318-.283-40.639-.223-81.957-.166-121.915l.005-3.718a17.427,17.427,0,0,1,4.828-12.132,16.588,16.588,0,0,1,11.939-5.112c12.186-.085,24.812-.128,38.6-.128,13.837,0,28.566.041,46.352.13,1.309.007,2.4.949,3.46,1.859a13.959,13.959,0,0,0,1.215.974l1.055.711-.94.857c-.368.336-.73.738-1.112,1.165a7.061,7.061,0,0,1-3.285,2.491,13.658,13.658,0,0,1-3.3.341c-.765,0-1.539-.037-2.288-.072-.725-.034-1.475-.07-2.192-.07H26.979c-12.9,0-22.816,0-32.163.005-4.385,0-7.222.8-8.929,2.523s-2.5,4.574-2.5,8.986c0,3.264,0,6.529,0,9.991v3.5h78.46c.284,0,.574,0,.855-.005s.581-.005.875-.005c.42,0,.77.005,1.1.018.269.01.547.012.842.014a8.539,8.539,0,0,1,3.444.5,3.668,3.668,0,0,1,2.086,3.549,4.365,4.365,0,0,1-1.067,3.3c-1.227,1.267-3.146,1.372-5.173,1.372h-.1c-15.445-.017-30.939-.02-42.712-.02l-34.653,0h-3.953v28.468c0,22.884,0,46.548,0,69.822,0,3.818.814,6.493,2.488,8.179s4.328,2.5,8.119,2.5c25.038,0,49.674.007,73.224.007,24.89,0,49.5,0,73.132-.008,3.659,0,6.247-.811,7.909-2.476s2.482-4.278,2.489-7.969c.026-13.659.022-27.549.018-40.981,0-5.652,0-11.5,0-17.243,0-.276-.029-.585-.059-.912a4.7,4.7,0,0,1,.282-2.712,15.322,15.322,0,0,1,2.259-2.941c.333-.368.648-.716.947-1.074l.767-.92.769.918a14.255,14.255,0,0,0,1.061,1.085c1,.952,2.026,1.938,2.187,3.232a54.931,54.931,0,0,1,.212,7.883c-.022.983-.043,2-.043,2.99,0,5-.031,10.092-.062,15.011-.072,11.416-.146,23.219.18,34.808.165,5.858-1.621,10.881-5.163,14.524a18.111,18.111,0,0,1-6.541,4.266,23.343,23.343,0,0,1-8.414,1.479ZM-.954,339.663c-2.2-1.521-3.186-2.738-3.2-3.946-.018-1.724,2.328-3.275,3.338-3.861a3.21,3.21,0,0,1,1.667-.38c.363,0,.727.032,1.079.064.32.028.623.055.892.055h86.1q21.362,0,42.725,0l.005,1h0v-1c.307,0,.632-.021.976-.042.362-.023.736-.048,1.111-.048a4.755,4.755,0,0,1,1.839.308c.82.337,3.166,1.668,3.194,3.313a5.6,5.6,0,0,1-2.4,4.222,5.293,5.293,0,0,1-2.9.638c-.271,0-.539-.006-.8-.013s-.482-.012-.707-.012c-23.819.01-49.2.014-82.305.014H2.353c-.229,0-.489.023-.763.048-.311.028-.631.056-.952.056A2.759,2.759,0,0,1-.954,339.663Zm133.792-20.91c-.427-.024-.83-.048-1.2-.048h-.023c-12.744.032-25.462.037-35.119.037l-14.746,0-14.745,0H45.9c-13.563,0-28.123,0-42.7-.005H3.193c-.325,0-.661.017-1.016.034s-.746.036-1.126.036a6.1,6.1,0,0,1-2.157-.334c-1.06-.408-3.118-1.875-3.07-3.42a5.455,5.455,0,0,1,2.57-4.107,6.6,6.6,0,0,1,3.134-.595c.284,0,.569.005.843.012s.521.011.769.011h.009c18.859-.007,39.119-.014,59.487-.014,25.633,0,48.181.012,68.931.035h.012c.359,0,.751-.019,1.165-.04.452-.023.919-.046,1.389-.046a4.949,4.949,0,0,1,3.679,1.178,4.354,4.354,0,0,1,1.038,3.285,3.871,3.871,0,0,1-1.574,3.326,5.349,5.349,0,0,1-3,.714C133.79,318.807,133.306,318.78,132.838,318.753Zm-51.376-22.3a3.988,3.988,0,0,1-1-3.024,3.7,3.7,0,0,1,1.976-3.4A7.807,7.807,0,0,1,86,289.371h.134c3.047.02,6.384.029,10.5.029,2.168,0,4.372,0,6.5,0s4.337,0,6.507,0l6.5,0,6.5,0c4.122,0,7.464,0,10.516-.015,1.749-.006,3.587.055,4.761,1.266a4.046,4.046,0,0,1,1,3.065,3.672,3.672,0,0,1-2.03,3.459,8.131,8.131,0,0,1-3.559.591h-.042c-8.178-.014-16.145-.02-23.682-.02-8,0-15.852.007-23.347.022h-.087C84.5,297.764,82.632,297.662,81.462,296.455Zm-73.04-.1a13.962,13.962,0,0,1-4.64-.761,9.427,9.427,0,0,1-5.819-5.746,13.7,13.7,0,0,1-.8-4.6c-.126-9.025-.126-18.147,0-27.111a11.262,11.262,0,0,1,3.1-8.114,11.509,11.509,0,0,1,8.16-2.985c2.725-.023,5.662-.034,9.239-.034,2.252,0,4.54,0,6.753.008s4.5.009,6.748.009h.367c2.179,0,4.395,0,6.538-.006,2.236,0,4.549-.006,6.825-.006,3.29,0,6.006.006,8.548.021a15.431,15.431,0,0,1,4.979.78,10.287,10.287,0,0,1,3.819,2.3,9.962,9.962,0,0,1,2.4,3.724,14.455,14.455,0,0,1,.839,4.9c.09,8.42.091,17.138,0,25.908a12.005,12.005,0,0,1-3.142,8.546,11.716,11.716,0,0,1-8.5,3.163c-7.78.044-15.469.067-22.855.067C23.332,296.428,15.741,296.4,8.422,296.357Zm-1.945-40.2a4.384,4.384,0,0,0-.8,3.165c.146,8.647.144,16.6,0,24.313-.032,1.654.233,2.711.835,3.326s1.662.892,3.269.879c6.679-.057,13.751-.085,21.019-.085,6.954,0,14.144.025,21.978.076h.085a4.169,4.169,0,0,0,3.032-.821,3.791,3.791,0,0,0,.754-2.763c-.092-8.488-.092-16.932,0-25.1a4.069,4.069,0,0,0-.8-2.963,4.123,4.123,0,0,0-2.984-.835c-.094,0-.193,0-.292,0-2.631.061-5.476.09-8.951.09-2.1,0-4.226-.011-6.286-.02s-4.186-.021-6.278-.021-4.232.01-6.3.02-4.2.019-6.305.019c-3.459,0-6.291-.027-8.912-.085-.085,0-.169,0-.251,0A3.861,3.861,0,0,0,6.477,256.159ZM120.64,275.865a11.8,11.8,0,0,1-4.757-7.131c-.161-.787-.27-1.581-.375-2.349-.113-.816-.219-1.588-.382-2.352-.464-2.178-1.875-3.531-3.684-3.531a4.779,4.779,0,0,0-2.72.958c-.15.106-.3.207-.448.3a7.272,7.272,0,0,0-.764.554c-3.371,2.975-6.377,4.421-9.187,4.421a9.682,9.682,0,0,1-6.163-2.465,38.878,38.878,0,0,1-5.154-5.477,7.9,7.9,0,0,1-1.9-5.439,10.866,10.866,0,0,1,1.861-5.388c.634-1,1.36-1.929,2.061-2.831.43-.553.875-1.125,1.284-1.695a4.3,4.3,0,0,0,.733-4.035,4.16,4.16,0,0,0-3.123-2.459c-.648-.145-1.3-.246-2-.351-.759-.116-1.543-.237-2.319-.421-.274-.065-.559-.129-.835-.19a15.035,15.035,0,0,1-3.942-1.272,8.858,8.858,0,0,1-4.723-5.948,21.878,21.878,0,0,1-.138-6.879c.057-.677.111-1.316.147-1.952a8.218,8.218,0,0,1,2.294-5.42,9.72,9.72,0,0,1,5.453-2.61l.824-.13c1.647-.262,3.351-.532,4.985-.9a4.452,4.452,0,0,0,3.423-2.53,4.555,4.555,0,0,0-.909-4.258c-.307-.427-.641-.859-.964-1.276-.234-.3-.476-.616-.711-.931a13.025,13.025,0,0,1-2.207-12.1,13.4,13.4,0,0,1,9.454-8.4c.425-.117.831-.2,1.5-.343.394-.083.885-.185,1.521-.325l.4-.088.349.224c.583.375,1.232.772,1.918,1.192a63.1,63.1,0,0,1,5.367,3.55,7.35,7.35,0,0,0,4.163,1.783,2.972,2.972,0,0,0,2.334-1.093,8.01,8.01,0,0,0,1.6-3.775c.059-.3.127-.606.192-.9.107-.482.209-.938.275-1.394a13.53,13.53,0,0,1,1.545-4.636,12.7,12.7,0,0,1,2.9-3.541,12.837,12.837,0,0,1,8.3-3.038,13.616,13.616,0,0,1,7.231,2.131,9.273,9.273,0,0,1,3.794,4.623,23.819,23.819,0,0,1,1.2,5.351c.039.266.077.534.117.8.529,3.518,1.721,5.3,3.544,5.3,1.21,0,2.745-.686,4.564-2.039,3.572-2.658,6.7-3.95,9.549-3.95a9.706,9.706,0,0,1,5.828,2.018,21.109,21.109,0,0,1,5.067,5.787c2.183,3.423,2.1,7.162-.232,10.814-.6.94-1.29,1.815-1.955,2.661-.473.6-.96,1.222-1.4,1.846a4.167,4.167,0,0,0-.695,3.928,4.472,4.472,0,0,0,3.321,2.595,2.289,2.289,0,0,1,.245.073l.039.013c6.392.539,9.861,1.814,11.6,4.26,1.669,2.349,1.475,5.428,1.229,9.325-.088,1.4-.188,2.981-.206,4.658-.011,1.111-.7,2.275-2.1,3.561a20.766,20.766,0,0,1-3.5,2.518,12.05,12.05,0,0,1-4.671,1.2c-.765.091-1.487.176-2.173.323a4.661,4.661,0,0,0-3.638,2.636,4.525,4.525,0,0,0,.906,4.274c.246.337.509.679.765,1.008.223.288.454.585.678.887a23.675,23.675,0,0,1,3.037,5.12,8.523,8.523,0,0,1,.643,4.6c-.43,2.662-2.371,5.081-6.292,7.84-1.684,1.184-4.988,3.173-8.192,3.173-.07,0-.14,0-.211,0-1.86-.051-3.538-1.232-5.161-2.375a23.233,23.233,0,0,0-2.107-1.376,9.714,9.714,0,0,1-1.626-1.2,3.8,3.8,0,0,0-2.352-1.255,3.275,3.275,0,0,0-1.323.326c-2.329,1.036-2.66,2.579-3.162,4.917-.043.2-.087.41-.134.618l-.034.156c-.723,3.264-1.542,6.964-3.8,9.241a10.335,10.335,0,0,1-3.656,2.381,11.565,11.565,0,0,1-4.163.75A13.872,13.872,0,0,1,120.64,275.865ZM115.454,252.8a12.215,12.215,0,0,1,6.318,5.088,17,17,0,0,1,2.112,7.506c.013.156.025.311.037.466.184,2.363.3,3.788,3.265,3.794h.032c3,0,3.891-.8,4.166-3.74.04-.42.071-.843.1-1.292a21.057,21.057,0,0,1,.769-4.944,7.122,7.122,0,0,1,3.307-4.193c3.965-2.263,6.532-3.649,9.258-3.65,2.418,0,4.755,1.086,8.065,3.751.273.22.539.454.8.68a6.506,6.506,0,0,0,2.085,1.434,4.7,4.7,0,0,0,1.324.184,2.486,2.486,0,0,0,1.429-.321c1.877-1.487,3.02-2.438,3.083-3.115.068-.725-.963-2.087-2.389-3.974q-.208-.275-.417-.549c-.5-.659-1.018-1.34-1.507-2.035a12.323,12.323,0,0,1,7.974-19.062c.445-.072.889-.17,1.361-.275a13.905,13.905,0,0,1,2.988-.431l.277,0c1.859,0,2.013-.6,2.364-3.137a4.212,4.212,0,0,0-.48-3.239c-.793-.99-2.54-1.211-4.413-1.366a14.034,14.034,0,0,1-6.124-1.721,11.316,11.316,0,0,1-4.449-5.046,13.989,13.989,0,0,1-1.561-8.559,13.8,13.8,0,0,1,4.111-7.409c1.5-1.531,1.621-2.438,1.579-2.987-.066-.87-.694-1.876-1.977-3.163a3.646,3.646,0,0,0-2.3-1.33c-.868,0-1.672.816-2.523,1.681a12.978,12.978,0,0,1-1.372,1.267,15.261,15.261,0,0,1-9.122,3.346,11.232,11.232,0,0,1-7.913-3.171,15.075,15.075,0,0,1-4.226-8.751c-.068-.439-.1-.883-.131-1.312a5.61,5.61,0,0,0-.438-2.222,4.941,4.941,0,0,0-2.483-2.128,5.071,5.071,0,0,0-1.507-.183c-.442,0-.907.028-1.4.057-.282.017-.569.034-.861.047-.078.38-.158.747-.237,1.106a19.89,19.89,0,0,0-.542,3.315,14.5,14.5,0,0,1-1.436,6.239,10.423,10.423,0,0,1-4.957,4.568,15.831,15.831,0,0,1-6.859,1.8,11.519,11.519,0,0,1-8.131-3.537,13.1,13.1,0,0,0-3.28-2.383,2.439,2.439,0,0,0-.948-.173,1.471,1.471,0,0,0-.679.117,34.177,34.177,0,0,0-3.23,3.248c-.229.253-.464.509-.7.765.627.957,1.313,1.882,1.98,2.782,3.01,4.064,6.124,8.266,3.4,14.9a11.4,11.4,0,0,1-5.377,6.122,23.371,23.371,0,0,1-6.775,1.931c-1.235.221-2.411.43-3.541.737-.474,3.2-.723,5.148-.14,5.926s2.511,1.083,5.86,1.543a11.146,11.146,0,0,1,9.28,6.581,12.557,12.557,0,0,1,1.445,8.342,16.137,16.137,0,0,1-3.885,7.258c-1.432,1.694-2.366,2.854-2.3,3.525s1.188,1.739,2.882,3.339a13.39,13.39,0,0,0,1.354,1.064l.193.139q.683-.493,1.344-.966c1.377-.986,2.677-1.916,3.941-2.9a10.794,10.794,0,0,1,6.819-2.51A14.437,14.437,0,0,1,115.454,252.8ZM86.068,276.766c-1.507,0-3.645-.158-4.8-1.524a3.528,3.528,0,0,1-.67-3c.237-1.388,1.595-2.332,3.167-3.425.734-.51,1.493-1.039,2.232-1.661l.716-.6.65.676c.623.648,1.262,1.2,1.88,1.737,1.312,1.135,2.445,2.115,2.589,3.427a3.667,3.667,0,0,1-.787,2.963c-1.146,1.285-3.122,1.4-4.884,1.41Zm41.479-30.818A21.88,21.88,0,0,1,112,239.4a22.253,22.253,0,0,1,15.939-37.98h.154a22.036,22.036,0,0,1,15.725,6.518,22.567,22.567,0,0,1,6.358,16.225,22.037,22.037,0,0,1-22.423,21.787Zm-13.318-22.37a13.92,13.92,0,0,0,13.559,13.849h.119a14.17,14.17,0,0,0,13.756-13.657,13.6,13.6,0,0,0-4.019-9.533,13.886,13.886,0,0,0-9.676-4.247h-.089A13.7,13.7,0,0,0,114.229,223.578ZM9.46,217.894a4.25,4.25,0,0,1,.981-3.26,4.632,4.632,0,0,1,3.529-1.1c.252,0,.5,0,.747.01s.467.01.69.01a5.845,5.845,0,0,0,1.177-.092l.183-.04.184.029a7.665,7.665,0,0,0,1.158.07c.27,0,.555-.007.831-.014s.58-.014.869-.014a4.692,4.692,0,0,1,3.512,1.066,4.084,4.084,0,0,1,1.014,3.064c-.035,4.322-3.748,4.322-4.967,4.322-.506,0-1.01-.026-1.5-.05-.325-.016-.632-.032-.924-.04-.435-.011-.911.015-1.422.042-.461.024-.937.049-1.411.049C13,221.95,9.606,221.95,9.46,217.894ZM26.1,220.727a4.363,4.363,0,0,1-1.055-3.288,3.71,3.71,0,0,1,1.616-3.3,5.691,5.691,0,0,1,2.994-.631c.279,0,.561.006.833.013s.523.013.772.013a6.634,6.634,0,0,0,1.092-.07l.173-.029.172.031a6.487,6.487,0,0,0,1.133.078c.262,0,.527-.007.808-.014s.571-.014.86-.014a4.6,4.6,0,0,1,3.4,1.045,4.135,4.135,0,0,1,1.032,3.081c-.007,4.3-3.565,4.3-4.734,4.3-.46,0-.92-.022-1.364-.044-.415-.02-.806-.039-1.169-.039h-.04c-.372,0-.772.021-1.2.041-.477.023-.969.046-1.463.046A5.226,5.226,0,0,1,26.1,220.727Zm-32.384-2.96a4.177,4.177,0,0,1,1.046-3.134,5.038,5.038,0,0,1,3.719-1.128c.314,0,.631.008.938.015s.59.015.871.015a7.858,7.858,0,0,0,1-.051l.123-.015.124.014a8.477,8.477,0,0,0,1.021.049c.228,0,.458,0,.7-.009s.5-.008.746-.008a4.959,4.959,0,0,1,3.731,1.122,4.1,4.1,0,0,1,.99,3.128,3.942,3.942,0,0,1-1.672,3.459,5.877,5.877,0,0,1-3.175.716c-.456,0-.914-.022-1.356-.041s-.883-.041-1.278-.037c-.338,0-.7.021-1.084.038-.472.022-.96.044-1.451.044C-2.518,221.945-6.247,221.945-6.287,217.767Z"
                    transform="translate(207.155 1724)"
                  />
                </g>
              </svg>
            }
            label="Requirement Document "
            info="A detailed document highlighting all the features of the product that is to be developed. 
            "
          />
          <ExperitseCard
            svg={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 185.915 205.285"
              >
                <path
                  id="Union_6"
                  data-name="Union 6"
                  d="M10.318,369.372c-.04-3.091,2.217-4.181,5.182-4.1,3.573.1,7.151.023,11.008.023.111-1.187.213-2.184.3-3.184a11.8,11.8,0,0,1,11.713-11.263c3.314-.1,6.632-.019,10.5-.019,1.588-6.692,3.109-13.1,4.722-19.9H35.43q-21.136,0-42.271-.006c-11.417-.02-18.135-6.678-18.142-18.04q-.035-49.649,0-99.3c.007-11.379,6.7-18.053,18.122-18.062q51.045-.036,102.089.058c2.986.009,4.849-.743,6.449-3.384,3.161-5.218,6.649-10.245,10.147-15.248,4.332-6.2,11.341-9.066,17.973-7.556,7.591,1.726,12.961,7.192,13.817,15.079.37,3.4-.675,6.96-1.142,10.918,12.474,1.458,17.438,7.032,17.44,19.618q0,48.454,0,96.907,0,19.034-19.171,19.013-27.316.008-54.634,0H81.19c1.621,6.818,3.155,13.278,4.726,19.884,2.763,0,5.161.183,7.524-.033,9.124-.833,14.966,4.691,14.825,14.515,3.785,0,7.587.066,11.384-.022,2.828-.065,4.91,1.094,4.957,3.928s-1.967,4.062-4.82,4.06q-52.242-.038-104.483.007h-.011C12.482,373.271,10.354,372.2,10.318,369.372Zm29.667-10.559c-4.4.01-5.558,1.646-4.715,6.365H99.992c.175-5.071-.816-6.357-5.057-6.366q-13.738-.03-27.475-.03T39.984,358.813ZM57.4,350.458H77.572c-1.624-6.791-3.142-13.133-4.65-19.442H61.944C60.414,337.566,58.926,343.94,57.4,350.458ZM144.06,322.9c3.963-.491,7.178-2.588,7.476-6.558.5-6.671.137-13.407.137-20.385h-5.121q-58.425,0-116.85,0c-1.2,0-2.642.4-3.532-.132-1.406-.834-3.316-2.246-3.389-3.505-.075-1.323,1.507-3.146,2.844-4.016,1.053-.685,2.832-.313,4.288-.313q58.625-.016,117.249-.009h4.769v-3.837c0-24.061.032-48.123-.054-72.185-.014-3.752-1.788-7.06-5.63-7.75-4.331-.777-9.3-2.85-12.947,1.527q-16.844,20.2-33.356,40.683a5.91,5.91,0,0,0-.787,4.249c2.537,14.477-6.768,25.523-20.47,24.715-2.785-.163-5.58-.192-8.371-.21a18.379,18.379,0,0,0-12.176,4.107c-3.356,2.73-6.368,1.721-7.309-2.551a94.82,94.82,0,0,1-2.347-14.108c-1.111-17.13,7.23-30.2,25.482-31.424,1.039-.069,2.275-1.219,2.941-2.192,5.241-7.673,10.375-15.419,15.51-23.163a11.966,11.966,0,0,0,.872-2.186c-.843-.07-1.364-.15-1.884-.15q-49.452-.011-98.9.013c-6.3.008-9.493,3.314-9.5,9.694q-.049,35.892,0,71.785c0,.889.179,1.778.308,2.989,3.489,0,6.788-.021,10.085.006,2.686.023,4.846.931,4.871,4.008s-1.985,4.027-4.783,3.972c-3.3-.066-6.6-.015-10.495-.015,0,5.511,0,10.409,0,15.307,0,9.105,2.55,11.7,11.525,11.7q72.981,0,145.962,0A29.373,29.373,0,0,0,144.06,322.9Zm-86.3-72c-2.072,6.107-1.6,12.238-.243,18.723,2.546-.658,4.676-1.553,6.858-1.7,5.8-.4,11.628-.38,17.434-.714a10.485,10.485,0,0,0,9.394-7.885c1.317-4.857.1-8.815-3.584-11.558-3.185-2.375-6.339-4.8-9.6-7.066a7.242,7.242,0,0,0-3.535-1.39c-.261-.012-.521-.018-.779-.018A16.852,16.852,0,0,0,57.759,250.9Zm25.247-16.553,10.179,7.561,8.663-10.546-11.261-8.351Zm35.279-52.723q-9.542,14.213-19.039,28.454l-4.189,6.265,11.875,8.809c8.2-9.976,16.13-19.612,24.051-29.252,1.012-1.23,2.389-2.34,2.908-3.757.874-2.389,1.845-5.046,1.6-7.474-.406-4.079-3.352-6.622-7.3-7.441a10.249,10.249,0,0,0-2.079-.221C122.879,177.008,120.247,178.7,118.285,181.625Zm24.109,13.758c-.1-.09-.15-.121-.164-.121S142.291,195.356,142.394,195.382ZM6.848,292.258c-.1-1.524,1.679-3.17,2.645-4.764l1.793-.021c1,1.574,2.817,3.183,2.75,4.711-.057,1.3-2.276,3.452-3.562,3.469h-.015C9.18,295.653,6.932,293.548,6.848,292.258Z"
                  transform="translate(25.5 -168.487)"
                  stroke="rgba(0,0,0,0)"
                  stroke-miterlimit="10"
                  strokeWidth="1"
                />
              </svg>
            }
            label="Clickable Prototype  "
            info="An interactive set of UI/UX designs, to help you better understand and visualize what the end product would look like. "
          />
          <ExperitseCard
            svg={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 208.536 208.52"
              >
                <path
                  id="Union_7"
                  data-name="Union 7"
                  d="M74.92,374.861a6.33,6.33,0,0,0-3.859-1.7,6.4,6.4,0,0,0-2.17.436,9.011,9.011,0,0,1-3.079.537,10.325,10.325,0,0,1-5.972-1.992,10.876,10.876,0,0,1-3.918-5.207,5.88,5.88,0,0,0-3.59-3.851,15.733,15.733,0,0,1-6.487-6.7c-.9-1.713-1.508-2.575-3.207-3.074-3.722-1.094-5.269-4.012-6.764-6.835-.328-.619-.668-1.261-1.028-1.879-.758-1.3-2.309-2.2-3.951-3.157a12.7,12.7,0,0,1-4.409-3.5c-.308-.462-.585-.883-.854-1.291-2.916-4.418-3.44-5.213-9.358-8.048a5.663,5.663,0,0,1-4.79,2.4,15.68,15.68,0,0,1-4.452-.873L7,330.121c-7.668-2.314-15.4-4.947-22.877-7.494-2.818-.96-5.732-1.952-8.614-2.919l-.512-.171V249.165l.734-.015c.953-.02,1.925-.078,2.866-.134,1.167-.069,2.374-.141,3.559-.141a17.926,17.926,0,0,1,4.587.513,12.554,12.554,0,0,1,4.5,2.178,27.686,27.686,0,0,0,3.735,2.242,27.026,27.026,0,0,1,4.2,2.578,7.655,7.655,0,0,0,4.959,1.836,20.038,20.038,0,0,0,6.326-1.51l.8-.28a31.485,31.485,0,0,1-9.3-16.249,32.663,32.663,0,0,1-.695-9.405,32.094,32.094,0,0,1,1.922-8.943,26.863,26.863,0,0,1,8.367-11.817,22.118,22.118,0,0,1,6.317-3.5,22.437,22.437,0,0,1,7.423-1.269c-1.774-2.782-2.262-5.351-1.492-7.838.682-2.2,2.348-4.323,5.242-6.67a81.98,81.98,0,0,0,7.312-7.022c1.076-1.121,2.188-2.282,3.311-3.394a2.4,2.4,0,0,1,.671-.432c.111-.056.237-.118.377-.2l.347-.2.356.178a37.655,37.655,0,0,1,3.37,1.991c2.509,1.6,4.88,3.118,7.993,3.118a12.3,12.3,0,0,0,4.688-1.021c5.441-2.228,6.232-5.755,7.147-9.839a30.168,30.168,0,0,1,1.24-4.444l.186-.478H92.3l.179.494a33.674,33.674,0,0,1,1.109,4.1c.913,4.062,1.775,7.9,7.353,10.192a11.905,11.905,0,0,0,4.555,1c3.041,0,5.424-1.5,7.947-3.086a36.178,36.178,0,0,1,3.965-2.262l.481-.224.372.378c1.275,1.3,2.57,2.611,3.822,3.88,3.991,4.044,8.117,8.225,12.06,12.419a4.923,4.923,0,0,1,.713,4.115,29.022,29.022,0,0,1-1.661,4.346q-.221.5-.449,1.019c6.24.694,11.35,2.643,15.2,5.8,4.236,3.474,7,8.447,8.206,14.777,1.228,6.427,1.112,11.939-.354,16.852a26.1,26.1,0,0,1-3.737,7.653,31.116,31.116,0,0,1-5.56,5.912c1.092.277,2.132.526,3.148.77a57.49,57.49,0,0,1,8.134,2.359,13.471,13.471,0,0,0,5.094,1.054,16.191,16.191,0,0,0,8.176-2.577,25.093,25.093,0,0,1,7.373-2.385c1.216-.264,2.472-.536,3.732-.885l.879-.243.068.911c.062.835.122,1.512.175,2.109.094,1.057.162,1.82.163,2.594.005,4.208,0,8.487,0,12.624-.011,9.515-.021,19.354.09,29.027.034,2.962-.949,4.553-3.625,5.872-18.376,9.056-36.472,18.108-53.784,26.906a6.224,6.224,0,0,0-2.862,3.441c-1.23,4.717-3.831,7.6-8.185,9.064a4.347,4.347,0,0,0-2.106,2.393,12.948,12.948,0,0,1-2.936,4.659,13.685,13.685,0,0,1-4.61,2.989,5.042,5.042,0,0,0-2.561,2.44,11.759,11.759,0,0,1-7.625,7.525,4.3,4.3,0,0,0-2.335,2.226,12.862,12.862,0,0,1-4.26,6.091,10.486,10.486,0,0,1-6.408,2.191A11.958,11.958,0,0,1,74.92,374.861Zm4.65-9.475-1.622,1.966c.376.133.741.266,1.1.4a17.061,17.061,0,0,0,4.142,1.156,3.044,3.044,0,0,0,.905-.763,3.3,3.3,0,0,0,.648-.982,18.453,18.453,0,0,0-1.955-3.892c-.2-.337-.406-.68-.615-1.037Zm-8.894-10.729a43.455,43.455,0,0,0-6.747,6.661c-.42.527-.394,2.175.052,3.329.137.352.915.709,1.382.923.166.076.319.146.454.216,1.446-.211,4.625-2.529,7-5.137,1.729-1.9,2.143-2.97,2.119-3.272a3.931,3.931,0,0,0-1.5-2.648,3.322,3.322,0,0,0-1.559-.338h0A2.122,2.122,0,0,0,70.676,354.657ZM49.158,318.822a92.6,92.6,0,0,0,10.854,11.1c1.616,1.466,3.157,3.1,4.648,4.67,1.375,1.453,2.8,2.956,4.295,4.352,1.4,1.3,2.7,2.741,3.965,4.13a39.4,39.4,0,0,0,7.433,6.881,33.867,33.867,0,0,1,5.4,4.738c.964.974,1.961,1.982,2.992,2.881a5.693,5.693,0,0,0,3.471,1.682,2.755,2.755,0,0,0,2.2-1.2,2.164,2.164,0,0,0,.407-2.537,8.851,8.851,0,0,0-2.3-2.471c-3.772-3.1-7.441-6.182-11.326-9.439-1.511-1.267-3.073-2.577-4.633-3.881l-.581-.487.493-.576,2.518-2.944,2.261-2.642.568.473q2.518,2.091,4.976,4.138c4.243,3.531,8.25,6.865,12.339,10.24a5.066,5.066,0,0,0,3.043,1.4,2.893,2.893,0,0,0,2.274-1.288,2.1,2.1,0,0,0,.5-2.424,7.837,7.837,0,0,0-2.083-2.273c-3.885-3.244-7.693-6.439-11.725-9.82l-4.547-3.812-.578-.484,5.262-6.22.572.478c1.711,1.428,3.414,2.853,5.061,4.232,4.227,3.538,8.221,6.88,12.3,10.24a4.811,4.811,0,0,0,2.918,1.282,2.792,2.792,0,0,0,2.163-1.1,2.445,2.445,0,0,0,.669-2.435,5.823,5.823,0,0,0-1.809-2.441c-7.27-6.506-16.85-15.089-26.478-23.776a6.941,6.941,0,0,0-4.7-2.064,7.879,7.879,0,0,0-4.015,1.266c-1.039.625-2.09,1.277-3.106,1.909-2.6,1.615-5.287,3.284-8.081,4.66a16.593,16.593,0,0,1-7.071,1.847c-.182,0-.364,0-.541-.013a11.091,11.091,0,0,1-6.934-2.911,11.82,11.82,0,0,1-3.636-6.389c-1.151-5.751,1.117-10.8,6.068-13.515,3.687-2.019,7.507-3.929,11.2-5.777,1.461-.731,2.967-1.485,4.451-2.238l-.013-.42c-1.6-.181-3.208-.427-4.774-.665a62.655,62.655,0,0,0-9.229-.943,25.062,25.062,0,0,0-2.551.123A154.81,154.81,0,0,0,34.457,288c-1.936.452-3.938.92-5.909,1.355a3.139,3.139,0,0,0-1.813,1.769c-2.253,7.634-4.455,15.466-6.584,23.04q-.834,2.966-1.674,5.947l1,.608c1.19.726,2.313,1.413,3.446,2.094,1.191.715,2.372,1.414,3.622,2.155l1.125.666c.616-.629,1.22-1.258,1.808-1.869,1.613-1.677,3.136-3.259,4.783-4.769a12.279,12.279,0,0,1,8.147-3.3A8.392,8.392,0,0,1,49.158,318.822Zm12.234,25.516a37.934,37.934,0,0,0-8,7.946,1.568,1.568,0,0,0-.088,1.695,3.339,3.339,0,0,0,2.794,1.775h.013c.8,0,2.849-1.254,5.232-3.649,2.307-2.317,3.51-4.3,3.506-5.07a3.01,3.01,0,0,0-2.557-3A1.513,1.513,0,0,0,61.392,344.338Zm-10.43-9.87a35.03,35.03,0,0,0-7.258,7.121,2.392,2.392,0,0,0-.176,2.585,2.988,2.988,0,0,0,2.614,1.7h.04c.765-.012,2.993-1.531,5.4-4.054,2.2-2.309,3.369-4.234,3.348-4.874a3.011,3.011,0,0,0-2.778-2.87A1.979,1.979,0,0,0,50.962,334.468Zm-10.4-9.81a48.538,48.538,0,0,0-6.744,6.682,3.3,3.3,0,0,0-.105,2.789,3.833,3.833,0,0,0,2.592,1.43l.047,0c.794,0,2.773-1.211,5.019-3.525,1.958-2.017,3.349-4.108,3.564-5.329-.088-.142-.175-.3-.267-.458a4,4,0,0,0-1.293-1.612,3.576,3.576,0,0,0-1.48-.287A2.3,2.3,0,0,0,40.562,324.658ZM92.353,303.55l1.795,1.6c7.719,6.893,15.7,14.021,23.406,21.194a4.088,4.088,0,0,0,2.756,1.435,5.224,5.224,0,0,0,2.306-.707c9.19-4.7,18.584-9.378,27.67-13.9,4.519-2.249,9.192-4.574,13.781-6.873,1.13-.567,2.384-1.07,3.6-1.557,2.882-1.157,5.862-2.353,7.123-4.386s1.02-5.242.783-8.34c-.1-1.3-.2-2.649-.2-3.913.033-5.527.027-11.027.02-16.85,0-2.082-.005-4.223-.005-6.405l-.962.471c-1.168.572-2.177,1.065-3.152,1.578-4.022,2.117-8.112,4.267-12.067,6.346-13.839,7.275-28.15,14.8-42.175,22.285a13.5,13.5,0,0,1-6.47,1.718,14.456,14.456,0,0,1-4.145-.636c-1.29-.382-2.6-.779-3.864-1.162-4.8-1.454-9.756-2.957-14.711-3.957a23.3,23.3,0,0,0-4.533-.465,14.363,14.363,0,0,0-5.241.867,155.957,155.957,0,0,0-15.215,7.311c-1.279.673-2.6,1.368-3.906,2.042a4.471,4.471,0,0,0-2.411,2.541,4.078,4.078,0,0,0,.554,3.2,3.385,3.385,0,0,0,3,2.048,5.921,5.921,0,0,0,2.9-.943c1.743-1.02,3.5-2.083,5.2-3.111,1.81-1.094,3.682-2.225,5.543-3.309a16.7,16.7,0,0,1,8.426-2.595C85.65,299.076,88.983,300.54,92.353,303.55ZM8.584,301.663,3.869,320.521l5.425,1.822,12.4-43.41-6.478-3.784Zm-25.659-36.176c0,16.1-.006,31.3.085,46.719a2.846,2.846,0,0,0,1.419,1.783c2.825,1.081,5.654,2,8.648,2.967.886.287,1.8.582,2.706.881l.116-.147c.073-.092.155-.2.184-.242q.733-2.908,1.467-5.814c3.262-12.921,6.634-26.284,9.806-39.458a2.056,2.056,0,0,0-.363-1.192,3.5,3.5,0,0,0-1.032-1.2c-6.832-4.169-13.855-8.19-19.823-11.574a10.23,10.23,0,0,0-2.451-.841c-.24-.063-.5-.13-.761-.2Q-17.073,261.35-17.075,265.487Zm78.29,10.8c9.728,2.188,19.517,4.834,28.984,7.393,3.527.953,7.175,1.94,10.766,2.887l.019.005c2.686.708,5.462,1.441,8.162,2.29a4.89,4.89,0,0,0,1.408.266.987.987,0,0,0,.788-.257c.217-.227.463-.787.4-2.164-.08-1.785-.062-3.592-.045-5.341.011-1.174.022-2.388,0-3.577-.089-5.81-2.433-8.779-8.091-10.248-2.009-.522-4.064-1.013-6.052-1.49-2.64-.631-5.368-1.283-8.033-2.017a14.4,14.4,0,0,1-2.532-.979c-1.207-.617-1.75-1.187-1.757-1.847-.007-.578-.032-1.21-.057-1.877a37.564,37.564,0,0,1,.017-4.788c.185-1.9.679-3.071,1.554-3.687,9.341-6.571,9.21-15.67,7.848-23.7-1.138-6.714-5.33-11.282-11.8-12.864a17.365,17.365,0,0,0-4.114-.517c-4.561,0-8.53,1.978-11.8,5.88-3.18,3.8-4.63,9.715-3.882,15.831.746,6.089,3.558,11.448,7.521,14.337a6.438,6.438,0,0,1,2.669,3.787,41.021,41.021,0,0,1,.157,6.13c-.02.843-.04,1.715-.04,2.591v.587l-.57.141c-1.91.473-3.814.941-5.656,1.394-4.19,1.03-8.147,2-12.164,3.027-5.326,1.355-7.852,4.027-8.1,8.617,1.375-.022,2.756-.1,4.1-.17,1.559-.085,3.169-.172,4.726-.172A24.974,24.974,0,0,1,61.215,276.286Zm61.505-59.2a14.531,14.531,0,0,0-4.8,7.3,29.121,29.121,0,0,0-1.353,10.469c.347,6.863,2.958,12.356,6.984,14.694a6.541,6.541,0,0,1,3.076,3.994,34.439,34.439,0,0,1,.184,6.124c-.024.84-.049,1.708-.049,2.572v.575l-.554.149-6.691,1.8-3.665.987a15.168,15.168,0,0,1,3.37,6.549,39.8,39.8,0,0,1,.842,8.15c.046,1.326.093,2.687.2,4.037l12.607-6.647L153.8,266.817c-.793-.2-1.559-.382-2.311-.564-3.12-.757-5.815-1.411-8.488-2.233a12.96,12.96,0,0,1-2.6-1.149c-1.148-.68-1.717-1.345-1.74-2.032-.014-.385-.032-.794-.05-1.227-.155-3.485-.329-7.435,1.569-8.762,9.555-6.68,9.311-15.912,7.813-24.062a15.613,15.613,0,0,0-15.625-12.847h0A16.341,16.341,0,0,0,122.72,217.09ZM14.8,218a15.06,15.06,0,0,0-4.138,7.283,29.787,29.787,0,0,0-1,10.418c.528,6.484,3.126,11.577,7.126,13.973a6.516,6.516,0,0,1,2.939,4.083,35.338,35.338,0,0,1,.174,6.044c-.022.784-.046,1.594-.046,2.374v.556l-6.287,1.906c.847.514,1.665,1.022,2.467,1.519a68.894,68.894,0,0,0,7.771,4.385,11.205,11.205,0,0,1,4.986,3.836,8.161,8.161,0,0,1,1.018,6.061l.083.135.01.016L37.4,278.9c1.521-4.734,2.872-8.942,4.285-13.346l-9.359-2.525-.5-.136-.047-.521a24.96,24.96,0,0,1,.168-8.122,12.117,12.117,0,0,1,4.893-6.983c3.089-2.325,4.984-6.874,5.2-12.482.211-5.434-1.213-10.829-3.81-14.431A15.293,15.293,0,0,0,25.7,213.914h0A16.94,16.94,0,0,0,14.8,218Zm80.212-6.219c5.214,4.366,8.391,12.274,8.5,21.156a34.479,34.479,0,0,1-1.848,11.759,21.841,21.841,0,0,1-5.908,9.2c-.661.581-1.265,1.219-1.965,1.956l-.351.37a31.489,31.489,0,0,0,12.664,2.832,28.2,28.2,0,0,0,12.235-2.865c-.005-.041-.011-.09-.017-.13a30.011,30.011,0,0,1-6.528-7.724,26.464,26.464,0,0,1-3.125-8.67,34.646,34.646,0,0,1-.291-9.266,59.552,59.552,0,0,1,1.791-9.676,4.418,4.418,0,0,0-.436-3.037c-7.18-11.43-17.462-17.225-30.559-17.225h-.087c-13.2.027-23.476,5.863-30.556,17.343a5.67,5.67,0,0,0-.266,3.821c1.83,7.33,2.246,13.164,1.31,18.361a25.626,25.626,0,0,1-3.062,8.394,28.947,28.947,0,0,1-6.456,7.524,2.7,2.7,0,0,0-.087.313,28.262,28.262,0,0,0,12.169,2.83A32.452,32.452,0,0,0,65.09,256.14a25.51,25.51,0,0,1-8.635-12.008c-1.46-4.283-1.924-9.121-1.461-15.223a26.3,26.3,0,0,1,4.177-12.925,23.433,23.433,0,0,1,10.621-8.421,24.6,24.6,0,0,1,9.527-2.035C84.777,205.527,90.058,207.63,95.012,211.778ZM39.451,191.759c-2.042,2.1-4.154,4.272-6.1,6.59a4.589,4.589,0,0,0-.422,3.176c.856,5.186,4.883,7.894,9.269,10.638a55.373,55.373,0,0,1,7.022-8.109,44.145,44.145,0,0,1,8.687-6.413,41.015,41.015,0,0,1,9.984-3.962,46.328,46.328,0,0,1,11.3-1.352h.019c15.024.005,27.391,6.59,36.768,19.571,4.344-2.356,8.533-5.2,9.521-10.7a3.75,3.75,0,0,0-.2-2.509c-2.113-2.416-4.384-4.766-6.789-7.256q-1.054-1.091-2.164-2.246a13.919,13.919,0,0,1-3.975,3.478,9.505,9.505,0,0,1-4.735,1.216c-3.033,0-6.17-1.27-9.491-2.614l-.59-.238c-2.963-1.2-6.036-2.534-8.188-4.587a10.25,10.25,0,0,1-2.479-3.6,13.408,13.408,0,0,1-.91-5.026,1.932,1.932,0,0,0-.274-.621l-.027-.049h-13.5a12.839,12.839,0,0,1-.426,4.8,9.592,9.592,0,0,1-2.37,3.983c-2.075,2.137-5.1,3.536-8.3,5.017l-.925.429c-3.655,1.7-6.434,2.464-9.01,2.464-3.29,0-6.188-1.27-9.113-3.994l-.216-.017c-.122-.009-.273-.02-.452-.038C40.745,190.428,40.114,191.077,39.451,191.759Z"
                  transform="translate(25 -169)"
                />
              </svg>
            }
            label="Technical Evaluation"
            info="Identifies high-risk technical challenges and deals with them early on. Proposes the best possible technology stack and architecture."
          />
          <ExperitseCard
            svg={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 175.885 175.884"
              >
                <path
                  id="Union_8"
                  data-name="Union 8"
                  d="M62.2,343.884A86.4,86.4,0,0,1,.529,318.147,87.393,87.393,0,0,1-25,256.1,86.284,86.284,0,0,1,.777,194.482,87.482,87.482,0,0,1,62.751,169h.125c48.036.065,87.068,39.526,87.008,87.964-.059,47.929-39.394,86.92-87.687,86.919ZM49.4,334.238H75.526V307.888H49.4Zm62.428-55.416a5.175,5.175,0,0,0-3.855,2.553A54.255,54.255,0,0,1,87.32,302.013a5.211,5.211,0,0,0-2.5,3.892c-.111,5.984-.1,11.864-.088,18.089q.005,2.854.006,5.791v1.968l1.854-.661c24.913-8.89,41.438-25.407,50.52-50.494l.674-1.859h-1.978c-1.975,0-3.914,0-5.826-.007h-.424c-1.762,0-3.5-.006-5.21-.006C120.1,278.725,115.977,278.743,111.831,278.822ZM-11.913,280.5c6.52,22.916,28.637,44.9,50.352,50.048l1.707.4V329.2q0-2.708.006-5.413v-.044h-.346l.346-.043c.011-5.853.023-11.905-.09-17.852a5.157,5.157,0,0,0-2.536-3.867,54.176,54.176,0,0,1-20.646-20.65A5.221,5.221,0,0,0,13,278.819c-6-.111-12.034-.1-17.863-.089h-.14q-2.768,0-5.573.006h-1.837ZM32.67,225.747a42.978,42.978,0,0,0-13.076,30.165c-.415,23.478,18.563,42.925,42.3,43.35.257,0,.508.007.764.007,23.059,0,42.179-18.965,42.62-42.275a42.011,42.011,0,0,0-12.124-30.3,43.021,43.021,0,0,0-30.18-13.085q-.359-.006-.717-.006A42.13,42.13,0,0,0,32.67,225.747Zm-47.981,43.77H11V243.365H-15.311Zm129.2-.035h26.352V243.461H113.889ZM38.428,182.246c-22.267,5.476-45.188,28.469-50.053,50.21l-.377,1.69h1.732q2.564,0,5.122.007l.725,0q2.533.005,5.107.008c3.3,0,7.648-.012,12.032-.1a5.539,5.539,0,0,0,4.173-2.616,53.656,53.656,0,0,1,20.679-20.6,5.181,5.181,0,0,0,2.5-3.894c.111-6.009.1-12.071.089-17.933q-.005-2.707-.007-5.423v-1.769Zm46.31,1.415q0,2.7-.006,5.4c-.011,5.87-.022,11.939.09,17.958a5.156,5.156,0,0,0,2.534,3.871A54.159,54.159,0,0,1,108,231.536a5.15,5.15,0,0,0,3.874,2.526c4.542.085,8.866.1,12.5.1,1.754,0,3.526,0,5.327-.006h.176q2.773-.007,5.583-.007h1.836l-.5-1.767c-6.5-22.909-28.616-44.9-50.344-50.066l-1.709-.407ZM49.4,205H75.526V178.583H49.4Z"
                  transform="translate(25.5 -168.5)"
                  stroke="rgba(0,0,0,0)"
                  stroke-miterlimit="10"
                  strokeWidth="1"
                />
              </svg>
            }
            label="Delivery Plan and Schedule "
            info="Detailed project plan outlining the cost & delivery timeline and the team composition. "
          />
        </div>
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="108.161"
                  height="90.091"
                  viewBox="0 0 108.161 90.091"
                >
                  <g
                    id="Group_12079"
                    data-name="Group 12079"
                    transform="translate(-1489.808 -1291.89)"
                  >
                    <path
                      id="Path_11402"
                      data-name="Path 11402"
                      d="M244.914,188.1H239.04c-.021.407-.058.768-.059,1.129,0,6.519.01,13.036-.018,19.555a1.5,1.5,0,0,0,.913,1.551c1.659.9,3.252,1.915,4.985,2.951.018-.4.049-.79.05-1.173,0-3.465,0-6.928.009-10.392,0-.439-.054-1.021.189-1.285a3.067,3.067,0,0,1,1.638-1.057,1.4,1.4,0,0,1,1.512,1.34,8.469,8.469,0,0,1,.067,1.225c0,4.4.052,8.792-.029,13.184a3.068,3.068,0,0,0,1.534,2.77v-1.32q0-10.393,0-20.784c0-2.289.874-3.161,3.186-3.172q3.24-.017,6.481,0c2.26.015,3.1.852,3.1,3.112q.008,21.174,0,42.349v1.546l1.525.072V205.052c0-2.439.857-3.306,3.275-3.311,2.123-.005,4.247-.009,6.369,0,2.248.01,3.107.864,3.108,3.105q.008,16.7,0,33.41v1.37h1.543v-44.9c0-2.444.839-3.283,3.28-3.285,2.2,0,4.4-.011,6.593,0,1.946.013,2.864.929,2.865,2.882q.013,11.734,0,23.466c0,1.336-.587,2.086-1.614,2.122-1.06.039-1.741-.776-1.741-2.123q-.008-10.781,0-21.565v-1.276h-5.928V239.6H287.8v-1.143c0-4.1-.01-8.193.009-12.29a1.682,1.682,0,1,1,3.348.045c.011.3,0,.6,0,.894v12.577c.891,0,1.729-.005,2.566,0,1.406.009,2.131.6,2.108,1.721-.021,1.065-.722,1.628-2.078,1.629q-17.04.006-34.08,0h-1.374a31.121,31.121,0,0,1-2.736,10.95c-1.367,2.747-3.083,5.324-4.7,7.942a1.586,1.586,0,0,1-2.248.568,1.549,1.549,0,0,1-.792-1.9,2.794,2.794,0,0,1,.551-.954,31.149,31.149,0,0,0,6.578-20.159c-.212-12.17-9.163-24.3-20.7-27.934a5.149,5.149,0,0,0-.575-.1l-.416,3.882c8.094,3.2,13.766,8.823,16.474,17.16a25.877,25.877,0,0,1-1.287,19.555,26.854,26.854,0,0,1-49-21.962,8.812,8.812,0,0,1-1.966-.033,9.876,9.876,0,0,1-1.92-.974c-.541,1.957-1.217,3.873-1.592,5.846a30.647,30.647,0,0,0,20.642,34.9c9.752,3.153,18.94,1.677,27.407-4.131.308-.21.593-.456.918-.636a1.677,1.677,0,0,1,1.962,2.706,5.622,5.622,0,0,1-.524.419c-19.291,14.45-47.94,3.95-53.373-19.557a33.778,33.778,0,0,1,1.769-21.3,1.377,1.377,0,0,0-.168-1.608,2.816,2.816,0,0,1,.249-4.021c.431-.464.875-.918,1.343-1.343s.972-.808,1.369-1.137c-.867-2.365-.867-2.365-3.081-2.365-4.051,0-4.791-.725-4.808-4.831a22.234,22.234,0,0,1,.214-3.557,2.715,2.715,0,0,1,2.752-2.3c1.042-.03,2.088-.05,3.128.008.676.038,1.06-.181,1.2-.841s.918-1.236.01-1.96a20.533,20.533,0,0,1-2.14-2.122,2.785,2.785,0,0,1-.141-4.1,36.172,36.172,0,0,1,3.544-3.548c1.445-1.253,2.866-1.114,4.261.24.668.649,1.341,1.294,1.969,1.98.4.438.783.673,1.335.29.572-.395,1.623-.207,1.512-1.418a25.936,25.936,0,0,1-.009-3.127,2.678,2.678,0,0,1,2.563-2.84,39.808,39.808,0,0,1,5.338-.015c1.758.119,2.677,1.227,2.753,3.047a25.129,25.129,0,0,1,0,3.015c-.091,1.145.878,1.051,1.473,1.3a1.412,1.412,0,0,0,1.206-.217c.8-.663,1.477-1.468,2.243-2.176a2.771,2.771,0,0,1,4.022-.148,39.617,39.617,0,0,1,3.63,3.621,2.851,2.851,0,0,1-.161,4.116c-.876.908-1.828,1.745-2.628,2.5a2.2,2.2,0,0,0,0,.334c.8,2.058.8,2.066,3.042,2.056,1.6-.008,3.157-.141,4.352,1.4.41.528,1.486.538,2.4.83v-1.3q0-9.61,0-19.219c0-2.33.841-3.173,3.142-3.174s4.619-.008,6.928,0a2.388,2.388,0,0,1,2.7,2.571c.053,1.9.04,3.8.005,5.7a1.727,1.727,0,0,1-1.73,1.915,1.8,1.8,0,0,1-1.666-2C244.9,191.327,244.914,189.766,244.914,188.1ZM205.3,227.334c-1.774,1.106-4.581,8.018-4.329,11.637,1.472,0,2.954-.019,4.437.008a1.35,1.35,0,0,1,1.482,1.232,2.728,2.728,0,0,1-.622,1.732c-.27.313-.943.361-1.442.38-1.315.048-2.634.016-4.008.016a23.028,23.028,0,0,0,2.284,8.411c1.016-.273,1.931-.294,2.469.732.508.969.026,1.706-.9,2.552l6.2,6.178c.793-1.089,1.589-1.411,2.522-.923,1.012.531.992,1.457.6,2.726l8.543,2.278c0-1.682-.006-3.016,0-4.349.008-1.3.636-2.072,1.666-2.073s1.671.782,1.678,2.068c.009,1.334,0,2.668,0,4.351l8.52-2.271c-.337-1.22-.424-2.112.518-2.678,1-.6,1.818-.16,2.678.842l6.143-6.173c-.967-.818-1.4-1.574-.905-2.533.531-1.035,1.455-1,2.467-.725a22.42,22.42,0,0,0,2.267-8.416c-1.535,0-2.98.03-4.423-.011a1.728,1.728,0,0,1-1.75-1.678,1.689,1.689,0,0,1,1.724-1.681c.518-.038,1.041-.019,1.563-.02.944,0,1.888,0,3.2,0l-2.325-8.546c-1.217.443-2.079.416-2.653-.483-.645-1.011-.131-1.813.83-2.693l-6.143-6.119c-.832.881-1.5,1.393-2.464.937-1.162-.548-1.055-1.544-.786-2.78-2.135-.59-4.18-1.243-6.267-1.7-1.715-.376-1.737-.273-2.377,1.61.834.792,1.746,1.614,2.606,2.488a2.852,2.852,0,0,1,.22,4.19,36.868,36.868,0,0,1-3.544,3.547,2.817,2.817,0,0,1-4.19-.175,21.936,21.936,0,0,1-2.04-2.063c-.712-.88-1.31-.176-1.974-.019-.681.161-.84.573-.81,1.216.044.928.036,1.862,0,2.791a2.907,2.907,0,0,1-3.009,3.164,36.549,36.549,0,0,1-4.56.009c-2.234-.151-3.085-1.138-3.1-3.371C205.29,229.78,205.3,228.612,205.3,227.334Zm-6.945-.576c.583-.674,1.084-1.323,1.654-1.9,2.093-2.122,2.575-2.2,5.274-1.041.409.176.835.311,1.251.471a2.952,2.952,0,0,1,2.127,3.055c.011,1.181,0,2.361,0,3.586h3.87c0-1.284-.015-2.438,0-3.591a3.032,3.032,0,0,1,2.156-3.054c.629-.226,1.251-.474,1.859-.747,1.755-.785,2.724-.611,4.114.767l2.372,2.355,2.991-2.811c-.669-.544-1.177-.924-1.644-1.348s-.911-.88-1.341-1.344a2.825,2.825,0,0,1-.582-3.29c.3-.68.6-1.362.861-2.056.683-1.784,1.437-2.327,3.338-2.343,1.14-.009,2.279,0,3.433,0V209.53c-1.07,0-2.066,0-3.063,0-2.36-.005-3.007-.458-3.816-2.626-.181-.487-.4-.958-.612-1.432a2.945,2.945,0,0,1,.727-3.926c.812-.8,1.693-1.53,2.654-2.39l-3.08-3.061c-.5.636-.918,1.159-1.324,1.69-1.639,2.147-3.584,2.79-5.991,1.24a2.623,2.623,0,0,0-.519-.2c-1.991-.739-2.532-1.519-2.538-3.672,0-1.027,0-2.054,0-3.137H208.8c-.073.16-.1.194-.1.228-.015,1.191-.018,2.381-.042,3.572a2.825,2.825,0,0,1-1.873,2.768c-.652.268-1.313.517-1.955.808-1.912.867-2.839.719-4.3-.744-.756-.753-1.494-1.525-2.36-2.411l-2.858,2.791c.632.6,1.057,1.076,1.555,1.461,2.165,1.675,2.656,3.526,1.324,6.11-1.319,2.558-1.5,2.931-4.42,2.931-3.024,0-3.047.042-2.746,3.1.059.595.251.871.883.846.93-.035,1.862-.019,2.794-.005a2.916,2.916,0,0,1,3.135,2.155q.409,1.037.847,2.061a2.874,2.874,0,0,1-.668,3.652c-.835.847-1.722,1.642-2.643,2.512.669.7,1.218,1.3,1.793,1.878C197.472,226.035,197.822,226.3,198.353,226.758ZM267.6,205.243v34.375h5.822V205.243Zm-14.289-9.14c-.026.3-.057.483-.057.665q0,12.626.008,25.252a2.172,2.172,0,0,0,.246,1.062,34.015,34.015,0,0,1,4.813,15.958c.011.25.383.483.587.724l.235-.2V196.1Z"
                      transform="translate(1302.13 1107.191)"
                      fill="#189366"
                    />
                    <path
                      id="Path_11414"
                      data-name="Path 11414"
                      d="M219.1,231.849c-.986,1.652-1.935,3.239-2.88,4.829-1.026,1.725-2.032,3.46-3.074,5.175a1.751,1.751,0,0,1-2.524.832,1.726,1.726,0,0,1-.387-2.546q3.31-5.616,6.649-11.214a1.748,1.748,0,0,1,2.733-.7q3.966,2.269,7.905,4.581c1.14.67,1.451,1.579.917,2.491s-1.48,1.076-2.612.43C223.61,234.464,221.4,233.177,219.1,231.849Z"
                      transform="translate(1307.836 1118.289)"
                      fill="#189366"
                    />
                    <path
                      id="Path_11415"
                      data-name="Path 11415"
                      d="M208.178,197.093a11.21,11.21,0,1,1-11.214,11.231A11.232,11.232,0,0,1,208.178,197.093Zm-7.767,11.158a7.829,7.829,0,0,0,7.7,7.908,7.838,7.838,0,1,0,.224-15.674A7.751,7.751,0,0,0,200.411,208.251Z"
                      transform="translate(1304.519 1110.379)"
                      fill="#189366"
                    />
                    <path
                      id="Path_11417"
                      data-name="Path 11417"
                      d="M206.9,212.016a5.018,5.018,0,0,1-4.981-4.969,5.084,5.084,0,0,1,5.072-5.021,5,5,0,0,1,4.942,5.112A4.93,4.93,0,0,1,206.9,212.016Zm.041-6.555a1.524,1.524,0,0,0-1.574,1.618,1.548,1.548,0,0,0,1.536,1.56,1.656,1.656,0,0,0,1.667-1.579A1.627,1.627,0,0,0,206.943,205.461Z"
                      transform="translate(1305.794 1111.648)"
                      fill="#189366"
                    />
                  </g>
                </svg>
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="89.627"
                  height="89.616"
                  viewBox="0 0 89.627 89.616"
                >
                  <g
                    id="Group_12080"
                    data-name="Group 12080"
                    transform="translate(-731.829 -1246.219)"
                  >
                    <path
                      id="Path_11682"
                      data-name="Path 11682"
                      d="M314.481,442.64a4.815,4.815,0,0,1-3.362-3.449,5.649,5.649,0,0,1-.126-1.209q-.009-21.473,0-42.944a4.485,4.485,0,0,1,4.674-4.684q16.224-.018,32.448,0a4.538,4.538,0,0,1,4.487,3.118,2.583,2.583,0,0,0,.2.353v45.318a5.315,5.315,0,0,1-3.5,3.5Zm-.506-26.152q0,10.5,0,20.989c0,1.72.461,2.181,2.176,2.181q15.742,0,31.483,0c1.718,0,2.183-.463,2.183-2.175q0-20.946,0-41.89c0-1.782-.418-2.2-2.222-2.2q-15.7,0-31.395,0c-1.846,0-2.226.391-2.226,2.277Q313.975,406.081,313.975,416.488Z"
                      transform="translate(468.655 893.195)"
                      fill="#329d76"
                    />
                    <path
                      id="Path_11683"
                      data-name="Path 11683"
                      d="M290.86,442.64c-1.438-.18-2.881-.333-4.315-.543a29.627,29.627,0,0,1-14.085-5.44,22.261,22.261,0,0,1-8.253-13.291,37.592,37.592,0,0,1,2.149-24c.07-.16.13-.325.212-.479a1.523,1.523,0,0,1,2.055-.767,1.545,1.545,0,0,1,.7,2.01,64.246,64.246,0,0,0-2.294,6.935,32.534,32.534,0,0,0,1.237,19.061c2.325,5.975,6.832,9.64,12.808,11.615a42.9,42.9,0,0,0,16.391,1.8c2.89-.187,5.754-.774,8.625-1.217a1.628,1.628,0,0,1,2.054,1.122,1.5,1.5,0,0,1-1.343,1.8c-2.428.445-4.87.815-7.306,1.217-.312.052-.621.116-.932.175Z"
                      transform="translate(468.655 893.195)"
                      fill="#329d76"
                    />
                    <path
                      id="Path_11684"
                      data-name="Path 11684"
                      d="M349.3,442.64a5.315,5.315,0,0,0,3.5-3.5v3.5Z"
                      transform="translate(468.655 893.195)"
                      fill="#329d76"
                    />
                    <path
                      id="Path_11685"
                      data-name="Path 11685"
                      d="M309.495,375.4a14.675,14.675,0,0,1,1.7.135,5.235,5.235,0,0,1-.918,10.385c-2.215.041-4.431.011-6.646.011q-11.544,0-23.088-.01a1.6,1.6,0,0,0-1.364.565c-1.682,1.973-3.392,3.922-5.09,5.88-.133.154-.243.329-.384.476a1.524,1.524,0,0,1-2.053.224,1.454,1.454,0,0,1-.268-2.1c1.306-1.641,2.667-3.237,4.012-4.846.257-.308.542-.593.838-.914-2.126-1.515-3.061-3.486-2.344-5.957.8-2.751,2.846-3.886,5.752-3.822-.8-1.2-1.55-2.3-2.259-3.421a42.985,42.985,0,0,1-5.483-11.16,7.978,7.978,0,0,1-.291-4.049,3.141,3.141,0,0,1,4.215-2.48c1.035.35,1.96,1.011,2.974,1.439a27.007,27.007,0,0,0,4.3,1.609,5.481,5.481,0,0,0,5.246-1.693,8.559,8.559,0,0,1,10.052-1.719,8.835,8.835,0,0,1,2.26,1.614,5.983,5.983,0,0,0,6.494,1.561,27.21,27.21,0,0,0,3.19-1.374c.894-.418,1.73-.974,2.646-1.328a3.266,3.266,0,0,1,4.641,3.069,13.692,13.692,0,0,1-1.844,7.189c-1.736,3.288-3.708,6.452-5.586,9.665C310.01,374.674,309.783,374.973,309.495,375.4Zm-7.446.054c1.109,0,2.074.051,3.029-.025a1.6,1.6,0,0,0,1.044-.549c.921-1.237,1.8-2.51,2.632-3.808a48.934,48.934,0,0,0,5.547-10.655,10.138,10.138,0,0,0,.454-2.385c.052-.622-.244-1.032-.97-.672-.519.258-1.032.53-1.556.779a35.641,35.641,0,0,1-3.864,1.786,8.807,8.807,0,0,1-9.475-1.917c-2.771-2.626-5.889-2.636-8.662,0a8.6,8.6,0,0,1-3.9,2.219c-3.215.8-6.079-.209-8.842-1.734-.711-.393-1.427-.781-2.153-1.145-.647-.325-1-.017-.915.621a13.487,13.487,0,0,0,.615,2.967c1.943,5.169,4.961,9.732,8.148,14.193a.728.728,0,0,0,.471.306c1.124.027,2.249.014,3.416.014,0-2.459-.01-4.79.005-7.12.007-1.181.578-1.829,1.539-1.821s1.506.669,1.512,1.85c.01,2.04,0,4.081,0,6.121v.925h8.923v-.989c0-2.1-.014-4.2.008-6.3a1.465,1.465,0,0,1,1.8-1.589,1.518,1.518,0,0,1,1.191,1.688C302.055,370.6,302.049,372.984,302.049,375.454Zm-7.49,7.448q7.473,0,14.945,0a7.37,7.37,0,0,0,1.132-.065,2.192,2.192,0,0,0,.31-4.238,4.613,4.613,0,0,0-1.29-.157q-15.076-.012-30.153,0a4.778,4.778,0,0,0-1.375.174,2.127,2.127,0,0,0-1.449,2.07,2.158,2.158,0,0,0,1.464,2.068,5.638,5.638,0,0,0,1.471.144Q287.085,382.91,294.559,382.9Z"
                      transform="translate(468.655 893.195)"
                      fill="#329d76"
                    />
                    <path
                      id="Path_11686"
                      data-name="Path 11686"
                      d="M296.13,430.655c-.141,1.241.358,2.98-1.559,2.986-1.938.007-1.384-1.762-1.522-2.761a44.08,44.08,0,0,1-4.908-1.757,9.289,9.289,0,0,1-5.394-6.778,6.463,6.463,0,0,1-.1-1.477,1.391,1.391,0,0,1,1.425-1.357,1.456,1.456,0,0,1,1.523,1.273c.62,3.954,3.2,6.315,7.406,6.737.019-.251.054-.5.054-.751,0-3.908-.009-7.816.014-11.723,0-.64-.155-.856-.844-.979-3.784-.679-6.945-2.377-8.765-5.941a8.312,8.312,0,0,1,2.288-10.109,12.346,12.346,0,0,1,6.506-2.951c.62-.087.888-.3.811-.935a3.692,3.692,0,0,1,.022-.872,1.422,1.422,0,0,1,1.425-1.368,1.5,1.5,0,0,1,1.561,1.343c0,.029.005.058.008.087.06.531-.057,1.216.232,1.548.271.313.976.234,1.482.361,3.886.98,6.944,2.978,8.327,6.941a8.227,8.227,0,0,1,.392,2.312,1.471,1.471,0,0,1-1.421,1.577,1.45,1.45,0,0,1-1.567-1.337c-.309-4.013-3.005-5.644-6.444-6.562-.2-.053-.4-.1-.6-.135a2.275,2.275,0,0,0-.329,0v13.222c1.178.324,2.38.567,3.517.985a10.849,10.849,0,0,1,5.39,4.133,8.344,8.344,0,0,1-1.813,11.285C301.346,429.262,299.471,430.057,296.13,430.655Zm-3.115-32.566a8.069,8.069,0,0,0-6.843,4.275,5.881,5.881,0,0,0-.435,2.945c.454,3.082,4.011,5.81,7.278,5.75Zm3.107,29.481a9.76,9.76,0,0,0,5.355-2.339,5.385,5.385,0,0,0,1.023-7.312,8.19,8.19,0,0,0-4.522-3.1c-.588-.179-1.2-.279-1.856-.429Z"
                      transform="translate(468.655 893.195)"
                      fill="#329d76"
                    />
                    <path
                      id="Path_11692"
                      data-name="Path 11692"
                      d="M331.889,397.851q5.116,0,10.233,0a2.945,2.945,0,0,1,3.216,3.117q.06,2.841,0,5.684a2.937,2.937,0,0,1-3.2,3.136q-10.232.024-20.465,0a2.939,2.939,0,0,1-3.21-3.209q-.03-2.755,0-5.51a2.958,2.958,0,0,1,3.284-3.219Q326.817,397.848,331.889,397.851Zm-10.377,8.873h20.732v-5.848H321.512Z"
                      transform="translate(468.655 893.195)"
                      fill="#329d76"
                    />
                    <path
                      id="Path_11693"
                      data-name="Path 11693"
                      d="M332.7,423.221c-.755,0-1.51.018-2.264,0a1.484,1.484,0,1,1,.014-2.964c1.48-.019,2.961-.022,4.441,0a1.48,1.48,0,0,1-.014,2.96C334.152,423.241,333.426,423.221,332.7,423.221Z"
                      transform="translate(468.655 893.195)"
                      fill="#329d76"
                    />
                    <path
                      id="Path_11694"
                      data-name="Path 11694"
                      d="M343.085,435.171c-.756,0-1.513.038-2.265-.01a1.473,1.473,0,0,1-1.474-1.514,1.52,1.52,0,0,1,1.534-1.474q2.221-.051,4.445,0a1.5,1.5,0,0,1,.025,3,1.662,1.662,0,0,1-.173.011h-2.092Z"
                      transform="translate(468.655 893.195)"
                      fill="#329d76"
                    />
                    <path
                      id="Path_11695"
                      data-name="Path 11695"
                      d="M332.592,414.285c.784,0,1.569-.027,2.351.008a1.4,1.4,0,0,1,1.417,1.445,1.427,1.427,0,0,1-1.449,1.514q-2.264.046-4.528,0a1.483,1.483,0,1,1,.032-2.966c.725-.026,1.452-.006,2.177-.006Z"
                      transform="translate(468.655 893.195)"
                      fill="#329d76"
                    />
                    <path
                      id="Path_11696"
                      data-name="Path 11696"
                      d="M332.646,426.2c.726,0,1.452-.019,2.177.005a1.459,1.459,0,0,1,1.536,1.525,1.4,1.4,0,0,1-1.5,1.452q-2.22.047-4.441,0a1.486,1.486,0,0,1-1.526-1.464,1.548,1.548,0,0,1,1.58-1.517c.029,0,.058,0,.087,0Z"
                      transform="translate(468.655 893.195)"
                      fill="#329d76"
                    />
                    <path
                      id="Path_11697"
                      data-name="Path 11697"
                      d="M322.234,414.287c.758,0,1.517-.029,2.274.007a1.478,1.478,0,0,1,0,2.954q-2.318.054-4.635,0a1.478,1.478,0,0,1,0-2.953C320.659,414.258,321.448,414.287,322.234,414.287Z"
                      transform="translate(468.655 893.195)"
                      fill="#329d76"
                    />
                    <path
                      id="Path_11698"
                      data-name="Path 11698"
                      d="M322.172,429.188c-.758,0-1.517.03-2.273-.008a1.4,1.4,0,0,1-1.426-1.451,1.434,1.434,0,0,1,1.465-1.515c1.486-.033,2.973-.029,4.459,0a1.478,1.478,0,0,1,1.53,1.469,1.461,1.461,0,0,1-1.482,1.5c-.756.034-1.515.007-2.273.007Z"
                      transform="translate(468.655 893.195)"
                      fill="#329d76"
                    />
                    <path
                      id="Path_11699"
                      data-name="Path 11699"
                      d="M342.982,429.188c-.726,0-1.453.029-2.178-.007a1.459,1.459,0,0,1-1.457-1.434,1.49,1.49,0,0,1,1.462-1.531c1.51-.036,3.021-.033,4.531,0a1.49,1.49,0,1,1-.005,2.979q-.087.006-.174.006h-2.179Z"
                      transform="translate(468.655 893.195)"
                      fill="#329d76"
                    />
                    <path
                      id="Path_11700"
                      data-name="Path 11700"
                      d="M343.113,417.261c-.755,0-1.511.023-2.265-.006a1.507,1.507,0,0,1-1.5-1.492,1.466,1.466,0,0,1,1.507-1.473q2.265-.039,4.53,0a1.438,1.438,0,0,1,1.454,1.43,1.491,1.491,0,0,1-1.459,1.529C344.625,417.287,343.868,417.26,343.113,417.261Z"
                      transform="translate(468.655 893.195)"
                      fill="#329d76"
                    />
                    <path
                      id="Path_11701"
                      data-name="Path 11701"
                      d="M322.1,423.219c-.728,0-1.458.025-2.186-.006a1.478,1.478,0,0,1,.006-2.956q2.273-.04,4.547,0a1.478,1.478,0,0,1-.006,2.955C323.676,423.243,322.888,423.219,322.1,423.219Z"
                      transform="translate(468.655 893.195)"
                      fill="#329d76"
                    />
                    <path
                      id="Path_11702"
                      data-name="Path 11702"
                      d="M343.042,423.22c-.726,0-1.452.02-2.177,0a1.48,1.48,0,1,1-.028-2.96q2.265-.038,4.53,0a1.478,1.478,0,0,1,.027,2.955C344.611,423.243,343.826,423.219,343.042,423.22Z"
                      transform="translate(468.655 893.195)"
                      fill="#329d76"
                    />
                    <path
                      id="Path_11703"
                      data-name="Path 11703"
                      d="M322.2,432.164c.728,0,1.458-.027,2.185.006a1.5,1.5,0,0,1,1.535,1.475,1.448,1.448,0,0,1-1.472,1.515q-2.27.069-4.544,0a1.4,1.4,0,0,1-1.434-1.448,1.469,1.469,0,0,1,1.457-1.535C320.686,432.131,321.446,432.165,322.2,432.164Z"
                      transform="translate(468.655 893.195)"
                      fill="#329d76"
                    />
                    <path
                      id="Path_11704"
                      data-name="Path 11704"
                      d="M332.647,435.173c-.755,0-1.512.037-2.263-.009a1.5,1.5,0,0,1-1.5-1.5,1.518,1.518,0,0,1,1.525-1.488q2.219-.056,4.441,0a1.465,1.465,0,0,1,1.507,1.476,1.423,1.423,0,0,1-1.451,1.513C334.159,435.21,333.4,435.172,332.647,435.173Z"
                      transform="translate(468.655 893.195)"
                      fill="#329d76"
                    />
                  </g>
                </svg>
              </div>
              <div className="pricing__all__inclusive__container__content__bottom__card__title">
                No Overhead Costs
              </div>
              <div className="pricing__all__inclusive__container__content__bottom__card__info">
                You don't have to pay for office space, any tech equipment
                required, the onboarding process, or trainings - we handle all.
              </div>
            </div>
            <div className="pricing__all__inclusive__container__content__bottom__card">
              <div className="pricing__all__inclusive__container__content__bottom__card__icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="80.268"
                  height="84.862"
                  viewBox="0 0 80.268 84.862"
                >
                  <g
                    id="Group_12081"
                    data-name="Group 12081"
                    transform="translate(-1024.546 -1263.53)"
                  >
                    <path
                      id="Path_11710"
                      data-name="Path 11710"
                      d="M460.081,392.638c0,3.783.052,7.26-.012,10.736a10,10,0,0,1-9.859,9.714q-15.879.046-31.757-.023a2.955,2.955,0,0,1-1.872-.788q-8.235-8.127-16.354-16.367a3.431,3.431,0,0,1-.893-2.177q-.074-27.506-.034-55.009a10.135,10.135,0,0,1,10.529-10.475q19.9-.008,39.81,0a10.048,10.048,0,0,1,10.454,10.4c.026,3.251-.018,6.5.029,9.754a3.237,3.237,0,0,0,.5,1.659q7.983,12,1.843,25.016a1.107,1.107,0,0,0,.289,1.523q7.326,7.269,14.609,14.583c2.96,2.964,2.9,6.066-.025,9.1-1.819,1.889-3.852,2.976-6.465,2.109a7.081,7.081,0,0,1-2.537-1.617c-2.459-2.35-4.832-4.79-7.241-7.194C460.841,393.325,460.564,393.085,460.081,392.638Zm-40.4,17.191a2.777,2.777,0,0,0,.445.094c9.983,0,19.966.047,29.949-.02a6.885,6.885,0,0,0,6.84-7.018c.02-2.912.01-5.824,0-8.735,0-1.587.4-3.353-.167-4.711s-2.148-2.274-3.211-3.451c-.545-.6-.961-.571-1.64-.222a24.176,24.176,0,0,1-13.136,2.64c-13.884-1.046-24.315-13.956-22.152-27.7,1.445-9.192,6.545-15.813,15.217-19.2,8.7-3.4,16.9-1.993,24.308,3.748.212.164.453.289.783.5,0-2.289,0-4.406,0-6.523,0-4.99-2.806-7.8-7.784-7.8h-38.8c-4.989,0-7.816,2.809-7.817,7.783q-.006,26.092,0,52.184v1.356h1.342q4.368,0,8.735,0c4.415.009,7.08,2.658,7.084,7.04C419.679,403.105,419.676,406.431,419.676,409.829Zm36.518-31.366a21.117,21.117,0,1,0-31.231-28.426c-7.9,8.8-6.435,21.787.35,28.362a13.754,13.754,0,0,1,8.512-10.379c-4.909-6.01-5.111-11.768-.628-16.1a10.869,10.869,0,0,1,14.639-.423,10.333,10.333,0,0,1,3.59,6.619,10.83,10.83,0,0,1-3.84,9.873A13.81,13.81,0,0,1,456.194,378.463Zm-15.4,6.795a20.966,20.966,0,0,0,11.548-3.426,1.482,1.482,0,0,0,.766-1.472,9.975,9.975,0,0,0-8.012-9.671,35.069,35.069,0,0,0-6.318-.269,10.173,10.173,0,0,0-10.412,9.807,1.494,1.494,0,0,0,.773,1.575A21.124,21.124,0,0,0,440.789,385.258Zm-.044-18.123a7.536,7.536,0,1,0-7.469-7.5A7.5,7.5,0,0,0,440.745,367.135Zm15.033,16.622c1.813,1.8,3.8,3.769,5.78,5.744,3,2.991,5.982,5.994,8.986,8.978,1.388,1.38,2.632,1.366,4.03.005.19-.184.375-.373.562-.561,1.6-1.611,1.6-2.823-.018-4.44q-6.975-6.98-13.956-13.953c-.26-.26-.539-.5-.81-.748l.251.357Zm-39.305,23.562v-2.276c0-1.848.032-3.7-.009-5.545a3.189,3.189,0,0,0-3.437-3.48c-.981-.023-1.962-.006-2.942-.006-1.642,0-3.283,0-4.863,0Z"
                      transform="translate(625.253 935.285)"
                      fill="#329d76"
                    />
                    <path
                      id="Path_11717"
                      data-name="Path 11717"
                      d="M436.54,394.433c3.441,0,6.882-.006,10.323,0,1.476,0,2.121.514,2.1,1.617-.017,1.057-.73,1.6-2.158,1.6q-10.323.006-20.645,0c-1.485,0-2.4-.87-2.087-1.985a1.706,1.706,0,0,1,1.916-1.236C429.507,394.442,433.024,394.433,436.54,394.433Z"
                      transform="translate(625.253 935.285)"
                      fill="#329d76"
                    />
                  </g>
                </svg>
              </div>
              <div className="pricing__all__inclusive__container__content__bottom__card__title">
                No Recruitment Fee
              </div>
              <div className="pricing__all__inclusive__container__content__bottom__card__info">
                Neither do you have to hire an in-house team from scratch nor
                pay headhunters obscene amounts to find you the best fit team.
              </div>
            </div>
            <div className="pricing__all__inclusive__container__content__bottom__card">
              <div className="pricing__all__inclusive__container__content__bottom__card__icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="87.47"
                  height="86.85"
                  viewBox="0 0 87.47 86.85"
                >
                  <g
                    id="Group_12082"
                    data-name="Group 12082"
                    transform="translate(-1361.115 -1270.071)"
                  >
                    <path
                      id="Path_11707"
                      data-name="Path 11707"
                      d="M341.24,465.94a38.06,38.06,0,0,1,2.254-3.144c2.623-3,5.3-5.953,7.989-8.889a4.136,4.136,0,0,1,5.756-.608,3.778,3.778,0,0,1,1.6,2.891c.058,1.221.043,2.445.059,3.668,0,.307,0,.614,0,1.034.429,0,.762,0,1.094,0,4.524.033,9.052-.025,13.57.147a27.746,27.746,0,0,1,4.892,1.038c.216.049.422.138.719.237v-19.26c0-.228-.006-.456,0-.683a1.378,1.378,0,0,1,1.3-1.506,1.335,1.335,0,0,1,1.293,1.491c.017,3.329.008,6.659.009,9.989v1.029c.873-1.086,1.574-2.118,2.437-2.99a33.529,33.529,0,0,1,3.283-2.838,1.4,1.4,0,0,0,.654-1.25q-.029-9.519-.011-19.039c0-1.617.335-1.948,1.947-1.949s3.244-.015,4.866.006a1.668,1.668,0,0,0,1.176-3.02c-3.263-2.925-6.513-5.865-9.777-8.789-1.073-.962-1.728-.948-2.823.035-3.24,2.908-6.468,5.829-9.713,8.732a1.679,1.679,0,0,0-.61,2.038,1.7,1.7,0,0,0,1.8,1.005c1.735-.024,3.472-.013,5.208,0,1.057.005,1.545.443,1.551,1.48q.028,5.037,0,10.075c-.005.951-.509,1.461-1.311,1.447-.775-.014-1.273-.568-1.277-1.5-.013-2.647-.005-5.294-.005-7.94v-1.007c-1.6,0-3.106.025-4.606-.007a3.934,3.934,0,0,1-3.621-2.288,3.976,3.976,0,0,1,.332-4.345,5.687,5.687,0,0,1,.871-.932q4.944-4.461,9.9-8.906a4.119,4.119,0,0,1,5.6-.17q5.282,4.659,10.467,9.426a4.182,4.182,0,0,1-2.419,7.189c-1.215.107-2.446.036-3.67.044-.392,0-.784,0-1.232,0v17.709c1.348-.338,2.674-.739,4.028-.987a19.933,19.933,0,0,1,3.389-.309c3.927-.036,7.855-.014,11.782-.014h1.022c0-1.416-.027-2.748.006-4.078a4.156,4.156,0,0,1,3.9-4.364,3.93,3.93,0,0,1,3.373,1.314c3.134,3.458,6.27,6.915,9.355,10.416a4.062,4.062,0,0,1-.049,5.526c-1.118,1.289-2.268,2.552-3.421,3.812a1.313,1.313,0,0,1-1.955.238,1.339,1.339,0,0,1,.045-1.97c1.057-1.192,2.136-2.365,3.194-3.557a1.678,1.678,0,0,0,.012-2.629q-4.388-4.895-8.794-9.772a2.49,2.49,0,0,0-1.094-.749,1.544,1.544,0,0,0-1.958,1.548c-.027,1.707-.006,3.415-.012,5.123,0,1.293-.439,1.744-1.742,1.746-4.554.01-9.108-.043-13.661.016a15.933,15.933,0,0,0-14.708,8.955,15.145,15.145,0,0,0-1.714,7.312,1.049,1.049,0,0,0,.363.767,19.978,19.978,0,0,1,5.887,6.111c.046-.38.09-.577.09-.774.005-1.936-.012-3.871.007-5.806.056-5.975,4.152-10.14,10.131-10.218,4.552-.059,9.107-.018,13.66-.008,1.247,0,1.683.463,1.687,1.713.007,1.793.017,3.586,0,5.379a1.626,1.626,0,0,0,1.071,1.745,1.6,1.6,0,0,0,1.893-.58c.667-.739,1.322-1.49,2-2.221a1.33,1.33,0,0,1,1.956-.23A1.283,1.283,0,0,1,420.5,461c-.751.855-1.5,1.713-2.3,2.52a3.947,3.947,0,0,1-4.4.979,3.884,3.884,0,0,1-2.735-3.66c-.067-1.335-.035-2.674-.045-4.011,0-.306,0-.612,0-.991h-.862c-3.956,0-7.912-.01-11.868,0a7.217,7.217,0,0,0-7.544,7.577q-.01,15.839,0,31.676c0,1.6-.351,1.952-1.947,1.953-2.647,0-5.294.006-7.941,0-1.249,0-1.676-.441-1.677-1.707q-.006-7.6,0-15.2c-.005-4.629-3.077-7.712-7.69-7.718q-5.805-.007-11.611,0H358.9c0,.355,0,.657,0,.959-.012,1.366.023,2.734-.05,4.1a4.173,4.173,0,0,1-7.145,2.633c-3.216-3.5-6.382-7.042-9.532-10.6a8.583,8.583,0,0,1-.929-1.694Zm46.845,28.49c.018-.287.048-.536.048-.786,0-4.553.009-9.105-.005-13.658a18.014,18.014,0,0,0-.149-2.469A16.281,16.281,0,0,0,371.565,463.5c-4.493.1-8.991.021-13.486.016-1.335,0-1.784-.461-1.788-1.8,0-1.65-.011-3.3,0-4.951a1.578,1.578,0,0,0-1.085-1.648,1.558,1.558,0,0,0-1.83.537q-4.514,5.009-9.014,10.03a1.593,1.593,0,0,0-.015,2.431q4.5,5.025,9.011,10.034a1.615,1.615,0,0,0,1.914.52,1.6,1.6,0,0,0,1.023-1.693c-.022-1.85-.017-3.7,0-5.549.009-1.1.471-1.556,1.565-1.557,4.78,0,9.56-.03,14.34.017a9.634,9.634,0,0,1,9.489,9.044c.182,4.83.07,9.672.086,14.509,0,.328,0,.655,0,.995Z"
                      transform="translate(1019.875 859.868)"
                      fill="#329d76"
                    />
                  </g>
                </svg>
              </div>
              <div className="pricing__all__inclusive__container__content__bottom__card__title">
                Max Flexibility
              </div>
              <div className="pricing__all__inclusive__container__content__bottom__card__info">
                We fully understand how a product at times changes in scope
                during development and thus offers room for adoptions at no
                cost.
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
          loading="lazy"
          src={deliveryPic}
          alt="deliveryPic"
          className="pricing__delivery__section__img"
        />
        <div
          className="pricing__delivery__section__content"
          style={{ marginBottom: "2em" }}
        >
          <div className="pricing__delivery__section__content__card">
            <div className="pricing__delivery__section__content__card__heading">
              Discovery
            </div>
            {DeliveryCardEntry1.map((item) => (
              <div
                className="pricing__delivery__section__content__card__para"
                key={JSON.stringify(item)}
              >
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
                key={JSON.stringify(item)}
              >
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
                key={JSON.stringify(item)}
              >
                {item.para}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="container__web__dev__experience__wrapper">
        <div className="container__web__dev__experience">
          <div className="container__web__dev__experience__header">
            <div className="container__web__dev__experience__header__heading">
              DISCOVERY WORKSHOP
            </div>
            <div className="container__web__dev__experience__header__info">
              During this workshop, our Product Strategists, Technical & UI/UX
              Experts collaborate with our clients, to
            </div>
          </div>
          <div
            className="container__web__dev__experience__content"
            style={{ justifyContent: "center" }}
          >
            <div
              className="container__web__dev__experience__content__entry"
              style={{ width: "47%", marginBottom: "1em" }}
            >
              <div
                className="container__web__dev__experience__content__entry__heading 
              "
                style={{ marginBottom: "0em" }}
              >
                Map & understand client vision
              </div>
            </div>
            <div
              className="container__web__dev__experience__content__entry"
              style={{ width: "47%", marginBottom: "1em" }}
            >
              <div
                className="container__web__dev__experience__content__entry__heading 
              "
                style={{ marginBottom: "0em" }}
              >
                Visualize the idea
              </div>
            </div>
            <div
              className="container__web__dev__experience__content__entry"
              style={{ width: "47%", marginBottom: "1em" }}
            >
              <div
                className="container__web__dev__experience__content__entry__heading 
              "
                style={{ marginBottom: "0em" }}
              >
                Quantify business value (ROI)
              </div>
            </div>
            <div
              className="container__web__dev__experience__content__entry"
              style={{ width: "47%", marginBottom: "1em" }}
            >
              <div
                className="container__web__dev__experience__content__entry__heading 
              "
                style={{ marginBottom: "0em" }}
              >
                Assess technical viability
              </div>
            </div>
            <div
              className="container__web__dev__experience__content__entry"
              style={{ width: "47%", marginBottom: "1em" }}
            >
              <div
                className="container__web__dev__experience__content__entry__heading 
              "
                style={{ marginBottom: "0em" }}
              >
                Define the scope for budgeting
              </div>
            </div>
            <div
              className="container__web__dev__experience__content__entry"
              style={{ width: "47%", marginBottom: "1em" }}
            >
              <div
                className="container__web__dev__experience__content__entry__heading 
              "
                style={{ marginBottom: "0em" }}
              >
                Develop a comprehensive plan
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container__web__dev__experties"
        style={{ paddingBottom: "0" }}
      >
        <div
          className="container__web__dev__experties__header"
          style={{ margin: "3em 0" }}
        >
          <div className="container__web__dev__experties__header__heading">
            At the end of this workshop, our clients get
          </div>
        </div>
        <div className="container__web__dev__experties__content">
          <ExperitseCard
            label="User Stories Document
            "
            info="A detailed document that highlights all features of the product.
            "
          />
          <ExperitseCard
            label="Technical Evaluation
            "
            info="Early identifies high-risk technical challenges & optimal solutions.
            "
          />
          <ExperitseCard
            label="Interactive Prototype
            "
            info="Interactive UI/UX designs to visualize the end product.
            "
          />
          <ExperitseCard
            label="Delivery Plan & Schedule
            "
            info="Project plan outlining the cost & delivery timeline.
            "
          />
        </div>
      </div>
    </>
  );
}
