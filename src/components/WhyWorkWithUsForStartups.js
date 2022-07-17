import React from "react";
import { WorkWithUsCard } from "../components/WorkWithUsCard";

export function WhyWorkWithUsForStartups({}) {
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
          Why work with us?
        </div>
        <div className="service__startup__main__container__second__cards__container">
          <WorkWithUsCard
            label="User-Centric Approach"
            info="Our team has in-depth knowledge of startup systems and culture, so we focus on your users’ end needs and expectations"
          />
          <WorkWithUsCard
            label="Continuous Delivery & Development"
            info="We understand that product might require new features as the business grows. Therefore, our processes are always geared up for continuous integration and delivery, ensuring on-time releases."
          />
          <WorkWithUsCard
            label="Expertise"
            info="We have deep expertise across different industries and verticals, from designing to building and launching the product. We live in the startup ecosystem and understand what works."
          />
          <WorkWithUsCard
            label="Agile Development"
            info="We break down the work into sprints using the scrum methodology, make continuous improvements, and adjust the project’s scope when needed. Our agile approach helps build software applications with quick turnaround time and a fixed-bid cost model while ensuring your product’s usability."
          />
        </div>
      </div>
    </div>
  );
}
