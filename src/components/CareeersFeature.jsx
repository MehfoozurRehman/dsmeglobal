import React from "react";
import { ExperitseCard } from "../components/ExperitseCard";

export function CareeersFeature() {
  return (
    <div
      className="container__web__dev__experties services__startup__second__expertise"
      style={{
        marginBottom: "4em",
        marginTop: "4em",
      }}
    >
      <div className="container__web__dev__experties__header services__startup__third__header">
        <div className="container__web__dev__experties__header__heading">
          We’re not just colleagues. We’re family
        </div>
        <div className="container__web__dev__experties__header__info">
          DSME Global Links is not just a workplace – it’s a lifestyle, and we
          want each of our team members to get the most out of it
        </div>
      </div>
      <div className="container__web__dev__experties__content">
        <ExperitseCard
          label="Work-life balance"
          info="Our main motto is “work hard – play hard” and we live by that principle every day! You won’t see coding monkeys glued to their screens 24/7 in here. Instead, you’ll find driven individuals passionate about what they’re doing."
        />
        <ExperitseCard
          label="Personal growth"
          info="Through conferences, training, and 1-on-1 mentoring, we strongly encourage the personal and professional growth of every member of our DSME Global Links family."
        />
        <ExperitseCard
          label="Feedback & communication"
          info="This works for our own team members, as well as for our clients – feedback is everything! We want to be on the same page and we’d like to address any worries as soon as they arise."
        />
        <ExperitseCard
          label="Career change done simple"
          info="At DSME Global Links, our talents aren’t stuck in one direction. We have developers turned PMs, designers turned sales superstars, and testers turned engineers – the sky really is the limit!"
        />
        <ExperitseCard
          label="Agility & autonomy"
          info="With a flat hierarchy, a careful evaluation of inter-team values during the recruitment process, flexible working hours, and more – DSME Global Links is a place where individuality meets teamwork."
        />
      </div>
    </div>
  );
}
