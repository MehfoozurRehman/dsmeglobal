import React from "react";
import deliveryPic from "../assets/delivery.png";
import PricingFeatureEntry from "../components/PricingFeatureEntry";
import { HomeJumbotron } from "../components/HomeJumbotron";
import pricing from "../assets/pricing.svg";
import products from "../assets/products.svg";
import rightAngleIcon from "../assets/rightAngleIcon.svg";
import { ExperienceCard } from "../components/ExperienceCard";
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
            It's the first step to building a successful and awesome tech product. It builds tremendous confidence when moving on to the development phase.
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
        <button className="btn">Let's talk</button>
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
    </>
  );
}
