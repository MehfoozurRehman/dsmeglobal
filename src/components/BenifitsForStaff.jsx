import React from "react";
import { WorkWithUsCard } from "../components/WorkWithUsCard";

export function BenifitsForStaff() {
  return (
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
  );
}
