import React from "react";
import { HomeJumbotron } from "../components/HomeJumbotron";
import staff from "../assets/staff.svg";
import { Check } from "react-feather";
import { EngagementModelCard } from "./EngagementModelCard";
import { WorkWithUsCard } from "./WorkWithUsCard";

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
    </>
  );
}
