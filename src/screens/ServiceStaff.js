import React from "react";
import { HomeJumbotron } from "../components/HomeJumbotron";
import staff from "../assets/staff.svg";
import { Check } from "react-feather";
import { EngagementModelCard } from "./EngagementModelCard";
import { WorkWithUsCard } from "./WorkWithUsCard";
import ServicesStartupCard from "../components/ServicesStartupCard";

export default function ServiceStaff() {
  const TalentFeatures = [
    "Frontend Developers",
    "Backend Developers",
    "UI/UX Designers",
    "Project Manager",
    "Business Analysts",
    "DevOps Engineers",
    "Cloud Developers",
    "QA & Test automation engineers",
    "Al/ML Engineers",
    "Deep Learning Engineers",
  ];
  return (
    <>
      <div className="container">
        <HomeJumbotron
          taglinesLine="Staff Automation"
          info="Web applications that are visually amazing and provide seamless user experience for the desktop, mobile and tablet."
          img={staff}
          talk={true}
        />
      </div>
      <div className="staff__talent">
        <div className="staff__talent__heading">
          IT Staff Augmentation to Extend Your Team with Top Class Tech Talent
        </div>
        <div className="staff__talent__sub__heading">
          Upscale and Up Skill Your Enterprise with our Staff Augmentation
          Services
        </div>
        <div className="staff__talent__info">
          Looking for an extended arm to augment your existing team as per the
          evolving project needs? We are considered as one of the best staff
          augmentation forms offering staff augmentation and managed services to
          scale your internal development teams quickly in minimal time,
          fulfilling your unique business requirements. Being the most prominent
          IT staff augmentation company in India, we ensure to offer 100% "Peace
          of mind with our top-notch team augmentation solutions.
        </div>
        <div className="staff__talent__info">
          We have experts of various IT professionals for your specific project
          needs.
        </div>
        <div className="staff__talent__features">
          {TalentFeatures.map((feature) => (
            <div
              className="staff__talent__features__entry"
              key={JSON.stringify(feature)}
            >
              <Check size={20} color="currentColor" />
              {feature}
            </div>
          ))}
        </div>
      </div>
      <div
        className="service__startup__main__container__second"
        style={{ paddingTop: "0em" }}
      >
        <div className="max__width__container">
          <div
            className="service__startup__main__container__first__heading"
            style={{ paddingBottom: "1em" }}
          >
            Scale-up Your Team the Way You Need
          </div>
          <div className="service__startup__main__container__second__cards__container">
            <EngagementModelCard
              label="Build a Successful Team from Scratch"
              info="Build your own custom development team with the varied skill set to convert your potential business idea into a viable product from scratch."
            />
            <EngagementModelCard
              label="Add Resources in Your Existing Project"
              info="Add extra talent into your existing team to scale quickly and grow faster. Hire dedicated software developers from us to enhance the development efficiency of your ongoing project"
            />
            <EngagementModelCard
              label="Vendor Transition"
              info="Facing issues with your ongoing project development partner? We are the right ship to sail your sinking midway project transition with an Agile transformation."
            />
          </div>
        </div>
      </div>

      <div
        className="service__startup__main__container__second"
        style={{ paddingTop: "0em" }}
      >
        <div className="max__width__container">
          <div
            className="service__startup__main__container__first__heading"
            style={{ paddingBottom: "1em" }}
          >
            Our IT Staff <span>Augmentation Process</span>
          </div>
          <div className="service__startup__main__container__second__cards__container service__startup__main__container__second__cards__container__augmantation">
            <EngagementModelCard
              label="Tell your requirements"
              info="Share your augmentation needs, including relevant tech stack, team size, and staffing period. The more details we have, the faster we'll connect you with the ideal candidates"
            />
            <EngagementModelCard
              label="Choose developers"
              info="We provide ready-to-go teams for urgent staff needs. However, if you want to get a custom-recruited developer for long-lasting collaboration, you can participate in selecting and interviewing."
            />
            <EngagementModelCard
              label="Onboard remote programmers"
              info="Staff augmentation includes full integration with your inhouse team, thus ensuring successful collaboration. Brief your hires on project details and assign responsibilities to each team member."
            />
            <EngagementModelCard
              label="Manage extended team"
              info="The extended team adjusts to your internal schedule and shares the same project management tools as your on-site team. If you want to hand over team management, we can offer part-time or full-time Project Manager"
            />
            <EngagementModelCard
              label="Get your project delivered"
              info="We monitor the project's success to make sure your requirements are met. The result of our collaboration is a robust digital solution delivered timely."
            />
          </div>
        </div>
      </div>
      <div
        className="service__startup__main__container__second"
        style={{ paddingTop: "0em" }}
      >
        <div className="max__width__container">
          <div
            className="service__startup__main__container__first__heading"
            style={{ paddingBottom: "1em" }}
          >
            Cooperation <span>Models</span>
          </div>
          <div className="service__startup__main__container__second__cards__container">
            <EngagementModelCard
              label="Time & Material"
              info={
                <>
                  <div>Negotiable budget</div>
                  <div>Specific requirements</div>
                  <div>Large and long-term projects</div>
                  <div>Change-friendlyt</div>
                </>
              }
            />
            <EngagementModelCard
              label="Fixed Price"
              info={
                <>
                  <div>Clear deliverables</div>
                  <div>Set budget</div>
                  <div>Full control over the project</div>
                  <div>No changes needed</div>
                </>
              }
            />
            <EngagementModelCard
              label="Monthly Salary+Fee"
              info={
                <>
                  <div>Ideal for any project duration</div>
                  <div>Direct management</div>
                  <div>Dedicated team</div>
                  <div>Budget-friendlyt</div>
                </>
              }
            />
          </div>
        </div>
      </div>
      <div
        className="service__startup__main__container__second"
        style={{ paddingTop: "0em" }}
      >
        <div className="max__width__container">
          <div
            className="service__startup__main__container__first__heading"
            style={{ paddingBottom: "1em" }}
          >
            Technologies <span>We Use</span>
          </div>
          <div className="service__startup__main__container__second__cards__container service__startup__main__container__second__cards__container__techonologies">
            <ServicesStartupCard
              svg={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="#189366"
                  viewBox="0 0 166.178 166.099"
                >
                  <g
                    id="Group_49"
                    data-name="Group 49"
                    transform="translate(-193.985 -8398.595)"
                  >
                    <g id="Group_48" data-name="Group 48">
                      <g id="Group_47" data-name="Group 47">
                        <path
                          id="Path_277"
                          data-name="Path 277"
                          d="M914.331,176.561A83.056,83.056,0,0,0,824.555,48.227c-44.462,12.591-69.813,57.5-57.714,102.235.476,1.761.968,3.583-1.108,5.287-1.544,1.266-3.038,3.356-1.39,6.122,1.413,2.374,3.491,2.888,6.548,1.619l.542-.226.842,1.525c.355.637.671,1.2.97,1.781a82.97,82.97,0,0,0,141.087,9.991Zm-52.2,24.023a68.263,68.263,0,0,1-15.157,1.689c-28.433,0-56.262-17.262-67.443-43.638a4.4,4.4,0,0,1,.451-4.044c4.637-4.825,9.44-9.621,14.084-14.26q2.028-2.026,4.049-4.049l.344-.345.43.232c20.74,11.179,39.307,8.285,50.94-7.942a35.811,35.811,0,0,0-4.28-46.816c-13.313-12.528-33.171-13.5-47.219-2.321-13.067,10.4-19.62,30.673-6.862,49.283l.307.448-16.648,16.671-.29-1.1a64.014,64.014,0,0,1-1.865-21.009c2.332-32.142,24.038-58.323,55.3-66.7a73.952,73.952,0,0,1,91.192,58.353,73.836,73.836,0,0,1-57.335,85.545Zm-68.35-93.465a26.95,26.95,0,0,1,26.892-26.644h.128a26.832,26.832,0,0,1-.249,53.663h-.127a26.944,26.944,0,0,1-26.644-27.019Z"
                          transform="translate(-569.639 8353.445)"
                        />
                      </g>
                    </g>
                    <path
                      id="Path_278"
                      data-name="Path 278"
                      d="M938.552,147.237a15.2,15.2,0,0,0,15.254-14.965A15.26,15.26,0,0,0,939,117.175l-.207,0a15.212,15.212,0,0,0-15.048,14.966A15.26,15.26,0,0,0,938.552,147.237Zm.223-20.912c.06,0,.12,0,.181,0a5.883,5.883,0,0,1-.187,11.761c-.12,0-.239,0-.359-.011a5.882,5.882,0,0,1,.364-11.753Z"
                      transform="translate(-624.993 8328.546)"
                    />
                    <path
                      id="Path_279"
                      data-name="Path 279"
                      d="M895.091,221.171c-9.188-.038-19-.039-30.006,0-3.252.01-5.247,1.663-5.336,4.42a4.239,4.239,0,0,0,1.127,3.158,5.752,5.752,0,0,0,4.223,1.539c3.508.029,7.075.022,10.525.016q2.237,0,4.475-.006t4.5.007c3.443.008,7,.017,10.5-.02,3.148-.033,5.18-1.824,5.177-4.561S898.234,221.185,895.091,221.171Z"
                      transform="translate(-602.869 8292.604)"
                    />
                    <path
                      id="Path_280"
                      data-name="Path 280"
                      d="M842.819,117.176h-.041A15.26,15.26,0,0,0,827.742,132a15.212,15.212,0,0,0,14.987,15.233h.041a15.26,15.26,0,0,0,15.035-14.83,15.206,15.206,0,0,0-14.985-15.233Zm0,20.909h-.043a5.88,5.88,0,0,1-.22-11.755,5.938,5.938,0,0,1,6.1,5.93A5.91,5.91,0,0,1,842.815,138.085Z"
                      transform="translate(-591.805 8328.545)"
                    />
                  </g>
                </svg>
              }
              label="Top Talent"
            />
            <ServicesStartupCard
              svg={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="#189366"
                  viewBox="0 0 166.178 166.099"
                >
                  <g
                    id="Group_49"
                    data-name="Group 49"
                    transform="translate(-193.985 -8398.595)"
                  >
                    <g id="Group_48" data-name="Group 48">
                      <g id="Group_47" data-name="Group 47">
                        <path
                          id="Path_277"
                          data-name="Path 277"
                          d="M914.331,176.561A83.056,83.056,0,0,0,824.555,48.227c-44.462,12.591-69.813,57.5-57.714,102.235.476,1.761.968,3.583-1.108,5.287-1.544,1.266-3.038,3.356-1.39,6.122,1.413,2.374,3.491,2.888,6.548,1.619l.542-.226.842,1.525c.355.637.671,1.2.97,1.781a82.97,82.97,0,0,0,141.087,9.991Zm-52.2,24.023a68.263,68.263,0,0,1-15.157,1.689c-28.433,0-56.262-17.262-67.443-43.638a4.4,4.4,0,0,1,.451-4.044c4.637-4.825,9.44-9.621,14.084-14.26q2.028-2.026,4.049-4.049l.344-.345.43.232c20.74,11.179,39.307,8.285,50.94-7.942a35.811,35.811,0,0,0-4.28-46.816c-13.313-12.528-33.171-13.5-47.219-2.321-13.067,10.4-19.62,30.673-6.862,49.283l.307.448-16.648,16.671-.29-1.1a64.014,64.014,0,0,1-1.865-21.009c2.332-32.142,24.038-58.323,55.3-66.7a73.952,73.952,0,0,1,91.192,58.353,73.836,73.836,0,0,1-57.335,85.545Zm-68.35-93.465a26.95,26.95,0,0,1,26.892-26.644h.128a26.832,26.832,0,0,1-.249,53.663h-.127a26.944,26.944,0,0,1-26.644-27.019Z"
                          transform="translate(-569.639 8353.445)"
                        />
                      </g>
                    </g>
                    <path
                      id="Path_278"
                      data-name="Path 278"
                      d="M938.552,147.237a15.2,15.2,0,0,0,15.254-14.965A15.26,15.26,0,0,0,939,117.175l-.207,0a15.212,15.212,0,0,0-15.048,14.966A15.26,15.26,0,0,0,938.552,147.237Zm.223-20.912c.06,0,.12,0,.181,0a5.883,5.883,0,0,1-.187,11.761c-.12,0-.239,0-.359-.011a5.882,5.882,0,0,1,.364-11.753Z"
                      transform="translate(-624.993 8328.546)"
                    />
                    <path
                      id="Path_279"
                      data-name="Path 279"
                      d="M895.091,221.171c-9.188-.038-19-.039-30.006,0-3.252.01-5.247,1.663-5.336,4.42a4.239,4.239,0,0,0,1.127,3.158,5.752,5.752,0,0,0,4.223,1.539c3.508.029,7.075.022,10.525.016q2.237,0,4.475-.006t4.5.007c3.443.008,7,.017,10.5-.02,3.148-.033,5.18-1.824,5.177-4.561S898.234,221.185,895.091,221.171Z"
                      transform="translate(-602.869 8292.604)"
                    />
                    <path
                      id="Path_280"
                      data-name="Path 280"
                      d="M842.819,117.176h-.041A15.26,15.26,0,0,0,827.742,132a15.212,15.212,0,0,0,14.987,15.233h.041a15.26,15.26,0,0,0,15.035-14.83,15.206,15.206,0,0,0-14.985-15.233Zm0,20.909h-.043a5.88,5.88,0,0,1-.22-11.755,5.938,5.938,0,0,1,6.1,5.93A5.91,5.91,0,0,1,842.815,138.085Z"
                      transform="translate(-591.805 8328.545)"
                    />
                  </g>
                </svg>
              }
              label="Project Management"
            />
            <ServicesStartupCard
              svg={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="#189366"
                  viewBox="0 0 166.178 166.099"
                >
                  <g
                    id="Group_49"
                    data-name="Group 49"
                    transform="translate(-193.985 -8398.595)"
                  >
                    <g id="Group_48" data-name="Group 48">
                      <g id="Group_47" data-name="Group 47">
                        <path
                          id="Path_277"
                          data-name="Path 277"
                          d="M914.331,176.561A83.056,83.056,0,0,0,824.555,48.227c-44.462,12.591-69.813,57.5-57.714,102.235.476,1.761.968,3.583-1.108,5.287-1.544,1.266-3.038,3.356-1.39,6.122,1.413,2.374,3.491,2.888,6.548,1.619l.542-.226.842,1.525c.355.637.671,1.2.97,1.781a82.97,82.97,0,0,0,141.087,9.991Zm-52.2,24.023a68.263,68.263,0,0,1-15.157,1.689c-28.433,0-56.262-17.262-67.443-43.638a4.4,4.4,0,0,1,.451-4.044c4.637-4.825,9.44-9.621,14.084-14.26q2.028-2.026,4.049-4.049l.344-.345.43.232c20.74,11.179,39.307,8.285,50.94-7.942a35.811,35.811,0,0,0-4.28-46.816c-13.313-12.528-33.171-13.5-47.219-2.321-13.067,10.4-19.62,30.673-6.862,49.283l.307.448-16.648,16.671-.29-1.1a64.014,64.014,0,0,1-1.865-21.009c2.332-32.142,24.038-58.323,55.3-66.7a73.952,73.952,0,0,1,91.192,58.353,73.836,73.836,0,0,1-57.335,85.545Zm-68.35-93.465a26.95,26.95,0,0,1,26.892-26.644h.128a26.832,26.832,0,0,1-.249,53.663h-.127a26.944,26.944,0,0,1-26.644-27.019Z"
                          transform="translate(-569.639 8353.445)"
                        />
                      </g>
                    </g>
                    <path
                      id="Path_278"
                      data-name="Path 278"
                      d="M938.552,147.237a15.2,15.2,0,0,0,15.254-14.965A15.26,15.26,0,0,0,939,117.175l-.207,0a15.212,15.212,0,0,0-15.048,14.966A15.26,15.26,0,0,0,938.552,147.237Zm.223-20.912c.06,0,.12,0,.181,0a5.883,5.883,0,0,1-.187,11.761c-.12,0-.239,0-.359-.011a5.882,5.882,0,0,1,.364-11.753Z"
                      transform="translate(-624.993 8328.546)"
                    />
                    <path
                      id="Path_279"
                      data-name="Path 279"
                      d="M895.091,221.171c-9.188-.038-19-.039-30.006,0-3.252.01-5.247,1.663-5.336,4.42a4.239,4.239,0,0,0,1.127,3.158,5.752,5.752,0,0,0,4.223,1.539c3.508.029,7.075.022,10.525.016q2.237,0,4.475-.006t4.5.007c3.443.008,7,.017,10.5-.02,3.148-.033,5.18-1.824,5.177-4.561S898.234,221.185,895.091,221.171Z"
                      transform="translate(-602.869 8292.604)"
                    />
                    <path
                      id="Path_280"
                      data-name="Path 280"
                      d="M842.819,117.176h-.041A15.26,15.26,0,0,0,827.742,132a15.212,15.212,0,0,0,14.987,15.233h.041a15.26,15.26,0,0,0,15.035-14.83,15.206,15.206,0,0,0-14.985-15.233Zm0,20.909h-.043a5.88,5.88,0,0,1-.22-11.755,5.938,5.938,0,0,1,6.1,5.93A5.91,5.91,0,0,1,842.815,138.085Z"
                      transform="translate(-591.805 8328.545)"
                    />
                  </g>
                </svg>
              }
              label="Start Immediately"
            />
            <ServicesStartupCard
              svg={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="#189366"
                  viewBox="0 0 166.178 166.099"
                >
                  <g
                    id="Group_49"
                    data-name="Group 49"
                    transform="translate(-193.985 -8398.595)"
                  >
                    <g id="Group_48" data-name="Group 48">
                      <g id="Group_47" data-name="Group 47">
                        <path
                          id="Path_277"
                          data-name="Path 277"
                          d="M914.331,176.561A83.056,83.056,0,0,0,824.555,48.227c-44.462,12.591-69.813,57.5-57.714,102.235.476,1.761.968,3.583-1.108,5.287-1.544,1.266-3.038,3.356-1.39,6.122,1.413,2.374,3.491,2.888,6.548,1.619l.542-.226.842,1.525c.355.637.671,1.2.97,1.781a82.97,82.97,0,0,0,141.087,9.991Zm-52.2,24.023a68.263,68.263,0,0,1-15.157,1.689c-28.433,0-56.262-17.262-67.443-43.638a4.4,4.4,0,0,1,.451-4.044c4.637-4.825,9.44-9.621,14.084-14.26q2.028-2.026,4.049-4.049l.344-.345.43.232c20.74,11.179,39.307,8.285,50.94-7.942a35.811,35.811,0,0,0-4.28-46.816c-13.313-12.528-33.171-13.5-47.219-2.321-13.067,10.4-19.62,30.673-6.862,49.283l.307.448-16.648,16.671-.29-1.1a64.014,64.014,0,0,1-1.865-21.009c2.332-32.142,24.038-58.323,55.3-66.7a73.952,73.952,0,0,1,91.192,58.353,73.836,73.836,0,0,1-57.335,85.545Zm-68.35-93.465a26.95,26.95,0,0,1,26.892-26.644h.128a26.832,26.832,0,0,1-.249,53.663h-.127a26.944,26.944,0,0,1-26.644-27.019Z"
                          transform="translate(-569.639 8353.445)"
                        />
                      </g>
                    </g>
                    <path
                      id="Path_278"
                      data-name="Path 278"
                      d="M938.552,147.237a15.2,15.2,0,0,0,15.254-14.965A15.26,15.26,0,0,0,939,117.175l-.207,0a15.212,15.212,0,0,0-15.048,14.966A15.26,15.26,0,0,0,938.552,147.237Zm.223-20.912c.06,0,.12,0,.181,0a5.883,5.883,0,0,1-.187,11.761c-.12,0-.239,0-.359-.011a5.882,5.882,0,0,1,.364-11.753Z"
                      transform="translate(-624.993 8328.546)"
                    />
                    <path
                      id="Path_279"
                      data-name="Path 279"
                      d="M895.091,221.171c-9.188-.038-19-.039-30.006,0-3.252.01-5.247,1.663-5.336,4.42a4.239,4.239,0,0,0,1.127,3.158,5.752,5.752,0,0,0,4.223,1.539c3.508.029,7.075.022,10.525.016q2.237,0,4.475-.006t4.5.007c3.443.008,7,.017,10.5-.02,3.148-.033,5.18-1.824,5.177-4.561S898.234,221.185,895.091,221.171Z"
                      transform="translate(-602.869 8292.604)"
                    />
                    <path
                      id="Path_280"
                      data-name="Path 280"
                      d="M842.819,117.176h-.041A15.26,15.26,0,0,0,827.742,132a15.212,15.212,0,0,0,14.987,15.233h.041a15.26,15.26,0,0,0,15.035-14.83,15.206,15.206,0,0,0-14.985-15.233Zm0,20.909h-.043a5.88,5.88,0,0,1-.22-11.755,5.938,5.938,0,0,1,6.1,5.93A5.91,5.91,0,0,1,842.815,138.085Z"
                      transform="translate(-591.805 8328.545)"
                    />
                  </g>
                </svg>
              }
              label="Fixed Price"
            />
            <ServicesStartupCard
              svg={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="#189366"
                  viewBox="0 0 166.178 166.099"
                >
                  <g
                    id="Group_49"
                    data-name="Group 49"
                    transform="translate(-193.985 -8398.595)"
                  >
                    <g id="Group_48" data-name="Group 48">
                      <g id="Group_47" data-name="Group 47">
                        <path
                          id="Path_277"
                          data-name="Path 277"
                          d="M914.331,176.561A83.056,83.056,0,0,0,824.555,48.227c-44.462,12.591-69.813,57.5-57.714,102.235.476,1.761.968,3.583-1.108,5.287-1.544,1.266-3.038,3.356-1.39,6.122,1.413,2.374,3.491,2.888,6.548,1.619l.542-.226.842,1.525c.355.637.671,1.2.97,1.781a82.97,82.97,0,0,0,141.087,9.991Zm-52.2,24.023a68.263,68.263,0,0,1-15.157,1.689c-28.433,0-56.262-17.262-67.443-43.638a4.4,4.4,0,0,1,.451-4.044c4.637-4.825,9.44-9.621,14.084-14.26q2.028-2.026,4.049-4.049l.344-.345.43.232c20.74,11.179,39.307,8.285,50.94-7.942a35.811,35.811,0,0,0-4.28-46.816c-13.313-12.528-33.171-13.5-47.219-2.321-13.067,10.4-19.62,30.673-6.862,49.283l.307.448-16.648,16.671-.29-1.1a64.014,64.014,0,0,1-1.865-21.009c2.332-32.142,24.038-58.323,55.3-66.7a73.952,73.952,0,0,1,91.192,58.353,73.836,73.836,0,0,1-57.335,85.545Zm-68.35-93.465a26.95,26.95,0,0,1,26.892-26.644h.128a26.832,26.832,0,0,1-.249,53.663h-.127a26.944,26.944,0,0,1-26.644-27.019Z"
                          transform="translate(-569.639 8353.445)"
                        />
                      </g>
                    </g>
                    <path
                      id="Path_278"
                      data-name="Path 278"
                      d="M938.552,147.237a15.2,15.2,0,0,0,15.254-14.965A15.26,15.26,0,0,0,939,117.175l-.207,0a15.212,15.212,0,0,0-15.048,14.966A15.26,15.26,0,0,0,938.552,147.237Zm.223-20.912c.06,0,.12,0,.181,0a5.883,5.883,0,0,1-.187,11.761c-.12,0-.239,0-.359-.011a5.882,5.882,0,0,1,.364-11.753Z"
                      transform="translate(-624.993 8328.546)"
                    />
                    <path
                      id="Path_279"
                      data-name="Path 279"
                      d="M895.091,221.171c-9.188-.038-19-.039-30.006,0-3.252.01-5.247,1.663-5.336,4.42a4.239,4.239,0,0,0,1.127,3.158,5.752,5.752,0,0,0,4.223,1.539c3.508.029,7.075.022,10.525.016q2.237,0,4.475-.006t4.5.007c3.443.008,7,.017,10.5-.02,3.148-.033,5.18-1.824,5.177-4.561S898.234,221.185,895.091,221.171Z"
                      transform="translate(-602.869 8292.604)"
                    />
                    <path
                      id="Path_280"
                      data-name="Path 280"
                      d="M842.819,117.176h-.041A15.26,15.26,0,0,0,827.742,132a15.212,15.212,0,0,0,14.987,15.233h.041a15.26,15.26,0,0,0,15.035-14.83,15.206,15.206,0,0,0-14.985-15.233Zm0,20.909h-.043a5.88,5.88,0,0,1-.22-11.755,5.938,5.938,0,0,1,6.1,5.93A5.91,5.91,0,0,1,842.815,138.085Z"
                      transform="translate(-591.805 8328.545)"
                    />
                  </g>
                </svg>
              }
              label="Top Talent"
            />
            <ServicesStartupCard
              svg={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="#189366"
                  viewBox="0 0 166.178 166.099"
                >
                  <g
                    id="Group_49"
                    data-name="Group 49"
                    transform="translate(-193.985 -8398.595)"
                  >
                    <g id="Group_48" data-name="Group 48">
                      <g id="Group_47" data-name="Group 47">
                        <path
                          id="Path_277"
                          data-name="Path 277"
                          d="M914.331,176.561A83.056,83.056,0,0,0,824.555,48.227c-44.462,12.591-69.813,57.5-57.714,102.235.476,1.761.968,3.583-1.108,5.287-1.544,1.266-3.038,3.356-1.39,6.122,1.413,2.374,3.491,2.888,6.548,1.619l.542-.226.842,1.525c.355.637.671,1.2.97,1.781a82.97,82.97,0,0,0,141.087,9.991Zm-52.2,24.023a68.263,68.263,0,0,1-15.157,1.689c-28.433,0-56.262-17.262-67.443-43.638a4.4,4.4,0,0,1,.451-4.044c4.637-4.825,9.44-9.621,14.084-14.26q2.028-2.026,4.049-4.049l.344-.345.43.232c20.74,11.179,39.307,8.285,50.94-7.942a35.811,35.811,0,0,0-4.28-46.816c-13.313-12.528-33.171-13.5-47.219-2.321-13.067,10.4-19.62,30.673-6.862,49.283l.307.448-16.648,16.671-.29-1.1a64.014,64.014,0,0,1-1.865-21.009c2.332-32.142,24.038-58.323,55.3-66.7a73.952,73.952,0,0,1,91.192,58.353,73.836,73.836,0,0,1-57.335,85.545Zm-68.35-93.465a26.95,26.95,0,0,1,26.892-26.644h.128a26.832,26.832,0,0,1-.249,53.663h-.127a26.944,26.944,0,0,1-26.644-27.019Z"
                          transform="translate(-569.639 8353.445)"
                        />
                      </g>
                    </g>
                    <path
                      id="Path_278"
                      data-name="Path 278"
                      d="M938.552,147.237a15.2,15.2,0,0,0,15.254-14.965A15.26,15.26,0,0,0,939,117.175l-.207,0a15.212,15.212,0,0,0-15.048,14.966A15.26,15.26,0,0,0,938.552,147.237Zm.223-20.912c.06,0,.12,0,.181,0a5.883,5.883,0,0,1-.187,11.761c-.12,0-.239,0-.359-.011a5.882,5.882,0,0,1,.364-11.753Z"
                      transform="translate(-624.993 8328.546)"
                    />
                    <path
                      id="Path_279"
                      data-name="Path 279"
                      d="M895.091,221.171c-9.188-.038-19-.039-30.006,0-3.252.01-5.247,1.663-5.336,4.42a4.239,4.239,0,0,0,1.127,3.158,5.752,5.752,0,0,0,4.223,1.539c3.508.029,7.075.022,10.525.016q2.237,0,4.475-.006t4.5.007c3.443.008,7,.017,10.5-.02,3.148-.033,5.18-1.824,5.177-4.561S898.234,221.185,895.091,221.171Z"
                      transform="translate(-602.869 8292.604)"
                    />
                    <path
                      id="Path_280"
                      data-name="Path 280"
                      d="M842.819,117.176h-.041A15.26,15.26,0,0,0,827.742,132a15.212,15.212,0,0,0,14.987,15.233h.041a15.26,15.26,0,0,0,15.035-14.83,15.206,15.206,0,0,0-14.985-15.233Zm0,20.909h-.043a5.88,5.88,0,0,1-.22-11.755,5.938,5.938,0,0,1,6.1,5.93A5.91,5.91,0,0,1,842.815,138.085Z"
                      transform="translate(-591.805 8328.545)"
                    />
                  </g>
                </svg>
              }
              label="Project Management"
            />
            <ServicesStartupCard
              svg={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="#189366"
                  viewBox="0 0 166.178 166.099"
                >
                  <g
                    id="Group_49"
                    data-name="Group 49"
                    transform="translate(-193.985 -8398.595)"
                  >
                    <g id="Group_48" data-name="Group 48">
                      <g id="Group_47" data-name="Group 47">
                        <path
                          id="Path_277"
                          data-name="Path 277"
                          d="M914.331,176.561A83.056,83.056,0,0,0,824.555,48.227c-44.462,12.591-69.813,57.5-57.714,102.235.476,1.761.968,3.583-1.108,5.287-1.544,1.266-3.038,3.356-1.39,6.122,1.413,2.374,3.491,2.888,6.548,1.619l.542-.226.842,1.525c.355.637.671,1.2.97,1.781a82.97,82.97,0,0,0,141.087,9.991Zm-52.2,24.023a68.263,68.263,0,0,1-15.157,1.689c-28.433,0-56.262-17.262-67.443-43.638a4.4,4.4,0,0,1,.451-4.044c4.637-4.825,9.44-9.621,14.084-14.26q2.028-2.026,4.049-4.049l.344-.345.43.232c20.74,11.179,39.307,8.285,50.94-7.942a35.811,35.811,0,0,0-4.28-46.816c-13.313-12.528-33.171-13.5-47.219-2.321-13.067,10.4-19.62,30.673-6.862,49.283l.307.448-16.648,16.671-.29-1.1a64.014,64.014,0,0,1-1.865-21.009c2.332-32.142,24.038-58.323,55.3-66.7a73.952,73.952,0,0,1,91.192,58.353,73.836,73.836,0,0,1-57.335,85.545Zm-68.35-93.465a26.95,26.95,0,0,1,26.892-26.644h.128a26.832,26.832,0,0,1-.249,53.663h-.127a26.944,26.944,0,0,1-26.644-27.019Z"
                          transform="translate(-569.639 8353.445)"
                        />
                      </g>
                    </g>
                    <path
                      id="Path_278"
                      data-name="Path 278"
                      d="M938.552,147.237a15.2,15.2,0,0,0,15.254-14.965A15.26,15.26,0,0,0,939,117.175l-.207,0a15.212,15.212,0,0,0-15.048,14.966A15.26,15.26,0,0,0,938.552,147.237Zm.223-20.912c.06,0,.12,0,.181,0a5.883,5.883,0,0,1-.187,11.761c-.12,0-.239,0-.359-.011a5.882,5.882,0,0,1,.364-11.753Z"
                      transform="translate(-624.993 8328.546)"
                    />
                    <path
                      id="Path_279"
                      data-name="Path 279"
                      d="M895.091,221.171c-9.188-.038-19-.039-30.006,0-3.252.01-5.247,1.663-5.336,4.42a4.239,4.239,0,0,0,1.127,3.158,5.752,5.752,0,0,0,4.223,1.539c3.508.029,7.075.022,10.525.016q2.237,0,4.475-.006t4.5.007c3.443.008,7,.017,10.5-.02,3.148-.033,5.18-1.824,5.177-4.561S898.234,221.185,895.091,221.171Z"
                      transform="translate(-602.869 8292.604)"
                    />
                    <path
                      id="Path_280"
                      data-name="Path 280"
                      d="M842.819,117.176h-.041A15.26,15.26,0,0,0,827.742,132a15.212,15.212,0,0,0,14.987,15.233h.041a15.26,15.26,0,0,0,15.035-14.83,15.206,15.206,0,0,0-14.985-15.233Zm0,20.909h-.043a5.88,5.88,0,0,1-.22-11.755,5.938,5.938,0,0,1,6.1,5.93A5.91,5.91,0,0,1,842.815,138.085Z"
                      transform="translate(-591.805 8328.545)"
                    />
                  </g>
                </svg>
              }
              label="Start Immediately"
            />
            <ServicesStartupCard
              svg={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="#189366"
                  viewBox="0 0 166.178 166.099"
                >
                  <g
                    id="Group_49"
                    data-name="Group 49"
                    transform="translate(-193.985 -8398.595)"
                  >
                    <g id="Group_48" data-name="Group 48">
                      <g id="Group_47" data-name="Group 47">
                        <path
                          id="Path_277"
                          data-name="Path 277"
                          d="M914.331,176.561A83.056,83.056,0,0,0,824.555,48.227c-44.462,12.591-69.813,57.5-57.714,102.235.476,1.761.968,3.583-1.108,5.287-1.544,1.266-3.038,3.356-1.39,6.122,1.413,2.374,3.491,2.888,6.548,1.619l.542-.226.842,1.525c.355.637.671,1.2.97,1.781a82.97,82.97,0,0,0,141.087,9.991Zm-52.2,24.023a68.263,68.263,0,0,1-15.157,1.689c-28.433,0-56.262-17.262-67.443-43.638a4.4,4.4,0,0,1,.451-4.044c4.637-4.825,9.44-9.621,14.084-14.26q2.028-2.026,4.049-4.049l.344-.345.43.232c20.74,11.179,39.307,8.285,50.94-7.942a35.811,35.811,0,0,0-4.28-46.816c-13.313-12.528-33.171-13.5-47.219-2.321-13.067,10.4-19.62,30.673-6.862,49.283l.307.448-16.648,16.671-.29-1.1a64.014,64.014,0,0,1-1.865-21.009c2.332-32.142,24.038-58.323,55.3-66.7a73.952,73.952,0,0,1,91.192,58.353,73.836,73.836,0,0,1-57.335,85.545Zm-68.35-93.465a26.95,26.95,0,0,1,26.892-26.644h.128a26.832,26.832,0,0,1-.249,53.663h-.127a26.944,26.944,0,0,1-26.644-27.019Z"
                          transform="translate(-569.639 8353.445)"
                        />
                      </g>
                    </g>
                    <path
                      id="Path_278"
                      data-name="Path 278"
                      d="M938.552,147.237a15.2,15.2,0,0,0,15.254-14.965A15.26,15.26,0,0,0,939,117.175l-.207,0a15.212,15.212,0,0,0-15.048,14.966A15.26,15.26,0,0,0,938.552,147.237Zm.223-20.912c.06,0,.12,0,.181,0a5.883,5.883,0,0,1-.187,11.761c-.12,0-.239,0-.359-.011a5.882,5.882,0,0,1,.364-11.753Z"
                      transform="translate(-624.993 8328.546)"
                    />
                    <path
                      id="Path_279"
                      data-name="Path 279"
                      d="M895.091,221.171c-9.188-.038-19-.039-30.006,0-3.252.01-5.247,1.663-5.336,4.42a4.239,4.239,0,0,0,1.127,3.158,5.752,5.752,0,0,0,4.223,1.539c3.508.029,7.075.022,10.525.016q2.237,0,4.475-.006t4.5.007c3.443.008,7,.017,10.5-.02,3.148-.033,5.18-1.824,5.177-4.561S898.234,221.185,895.091,221.171Z"
                      transform="translate(-602.869 8292.604)"
                    />
                    <path
                      id="Path_280"
                      data-name="Path 280"
                      d="M842.819,117.176h-.041A15.26,15.26,0,0,0,827.742,132a15.212,15.212,0,0,0,14.987,15.233h.041a15.26,15.26,0,0,0,15.035-14.83,15.206,15.206,0,0,0-14.985-15.233Zm0,20.909h-.043a5.88,5.88,0,0,1-.22-11.755,5.938,5.938,0,0,1,6.1,5.93A5.91,5.91,0,0,1,842.815,138.085Z"
                      transform="translate(-591.805 8328.545)"
                    />
                  </g>
                </svg>
              }
              label="Fixed Price"
            />
          </div>
        </div>
      </div>
      <div
        className="service__startup__main__container__second"
        style={{ paddingTop: "0em" }}
      >
        <div className="max__width__container">
          <div
            className="service__startup__main__container__first__heading"
            style={{ paddingBottom: "1em" }}
          >
            Benefits Of Our <span>IT Staff Augmentation Services</span>
          </div>
          <div className="service__startup__main__container__second__cards__container">
            <WorkWithUsCard
              label="No Recruitment Hassles"
              info="Our IT augmentation services save your company the hassle of searching and recruiting vetted development talent. We take over the screening process and send you approved CVS."
            />
            <WorkWithUsCard
              label="Lower Operational Costs"
              info="Reduce your company spending by eliminating the costs of office space, equipment, and taxes. Pay for what drives the most value for your company."
            />
            <WorkWithUsCard
              label="Fewer Legal Hassles"
              info="Within our IT augmentation services, we remain the official employers of your hires. Our company takes care of all legal responsibilities and documentation."
            />
            <WorkWithUsCard
              label="Access to Vetted Talent"
              info="Devox Software offers you immediate access to a vast talent pool at affordable costs. Amplify your team with certified software specialists."
            />
            <WorkWithUsCard
              label="Aggressive Deadlines"
              info="Ramp up your technical capacity, when chasing a stringent deadline. Our team of developers dedicates their efforts to delivering the project in time."
            />
            <WorkWithUsCard
              label="Full Control"
              info="We encourage you to cherry-pick your team members and participate in the screening process. Manage your project success and stay updated on all changes."
            />
          </div>
        </div>
      </div>
    </>
  );
}
