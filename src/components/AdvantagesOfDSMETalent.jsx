import React from "react";
import { ExperitseCard } from "../components/ExperitseCard";

export function AdvantagesOfDSMETalent() {
  return (
    <div className="container__web__dev__experties">
      <div
        className="container__web__dev__experties__header"
        style={{ marginBottom: "4em" }}
      >
        <div className="container__web__dev__experties__header__heading">
          Advantages of using <span>DSME’s Talent</span>
        </div>
        <div className="container__web__dev__experties__header__info">
          Our development solution allows you to quickly access a variety of top
          talent to build the software you need
        </div>
      </div>
      <div className="container__web__dev__experties__content">
        <ExperitseCard
          label="Expert"
          info="Top talent ensures specialized, expert development"
        />
        <ExperitseCard
          label="Managed"
          info="Efficient, fully managed, results-driven dream teams"
        />
        <ExperitseCard
          label="Fast"
          info="Expert application development teams assembled in 3-14 days"
        />
        <ExperitseCard
          label="Reliable"
          info="95% of projects are on time and within budget"
        />
      </div>
    </div>
  );
}
