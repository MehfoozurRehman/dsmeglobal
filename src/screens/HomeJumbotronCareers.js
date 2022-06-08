import React, { useEffect, useState } from "react";
import { Fade } from "react-reveal";
import bannerImage1 from "../assets/bannerImage1.svg";

export function HomeJumbotronCareers() {
  const [taglineNo, setTaglineNo] = useState(0);
  const taglines = ["Jobs", "Oppertunities"];
  useEffect(() => {
    setTimeout(() => {
      setTaglineNo(taglineNo < taglines.length - 1 ? taglineNo + 1 : 0);
    }, 4100);
  }, [taglineNo]);

  return (
    <div className="container__jumbotron">
      <div className="container__jumbotron__left">
        <Fade>
          <div className="container__jumbotron__left__heading">
            Best{" "}
            {taglines
              .filter((tagline, i) => i === taglineNo)
              .map((tagline) => (
                <span key={JSON.stringify(tagline)}>{tagline}</span>
              ))}
          </div>
        </Fade>
        <div className="container__jumbotron__left__info">
          <Fade>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore,
            culpa est? Quos iusto dolore culpa, veritatis quas minus quibusdam
            ad? Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Dolore, culpa est? Quos iusto dolore culpa, veritatis quas minus
            quibusdam ad?
          </Fade>
        </div>
      </div>
      <div className="container__jumbotron__right">
        <Fade>
          <img src={bannerImage1} alt="" />
        </Fade>
      </div>
    </div>
  );
}
