import React, { useEffect } from "react";
import missionSvg from "../assets/missionSvg.svg";
import visionSvg from "../assets/visionSvg.svg";
import { HomeJumbotron } from "../components/HomeJumbotron";
import about from "../assets/about.svg";
import ceo from "../assets/ceo.png";
import { Box } from "react-feather";
import { PromiseEntry } from "../components/PromiseEntry";
import { CoreValueEntry } from "../components/CoreValueEntry";
import { KeyDifferenceEntry } from "../components/KeyDifferenceEntry";

export default function AboutUs() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <div className="container">
        <HomeJumbotron
          taglinesLine="Lets Get to"
          taglines={["Know Us", "Know Our Story"]}
          info="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore,
            culpa est? Quos iusto dolore culpa, veritatis quas minus quibusdam
            ad? Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Dolore, culpa est? Quos iusto dolore culpa, veritatis quas minus
            quibusdam ad?"
          img={about}
        />
      </div>
      <div className="about__ceo__message">
        <div className="about__ceo__message__left">
          <img src={ceo} alt="ceo" className="about__ceo__message__left__img" />
        </div>
        <div className="about__ceo__message__right">
          <div className="about__ceo__message__right__heading">
            Message from our <span>ceo</span>
          </div>
          <div className="about__ceo__message__right__info">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel fugiat
            labore magnam assumenda dolore, quos eaque quisquam fugit aliquam ad
            sed quae placeat non enim ullam et perferendis sint itaque.
          </div>
        </div>
      </div>
      <div className="about__core__values">
        <div className="about__core__values__header">
          <div className="about__core__values__header__heading">
            Our <span>Core</span> Values
          </div>
          <div className="about__core__values__header__info">
            From The Last Ten Years, We Have Been Building Great Software
            Products For Our Clients.
          </div>
        </div>
        <div className="about__core__values__content">
          <CoreValueEntry
            svg={<Box size={20} color="currentColor" />}
            label="Be Curious"
            info="Learning never stops. Open your eyes and look around, the more curious you are, the more possibilities you will open throughout your lifetime."
          />
          <CoreValueEntry
            svg={<Box size={20} color="currentColor" />}
            label="Be Empathetic"
            info="We believe in the unique human ability to understand and relate to others. Empathy helps us create more collaborative and respectful workspaces."
          />
          <CoreValueEntry
            svg={<Box size={20} color="currentColor" />}
            label="Take Ownership"
            info="We have established a culture of personal accountability, where our employees possess the freedom and the courage to take initiatives."
          />
          <CoreValueEntry
            svg={<Box size={20} color="currentColor" />}
            label="Keep Promises"
            info="We believe that trust is the key in all our relationships and we take pride in delivering with Quality, precision and integrity."
          />
        </div>
      </div>

      <div className="about__core__values">
        <div className="about__core__values__header">
          <div className="about__core__values__header__heading">
            Our <span>Promise</span>
          </div>
          <div className="about__core__values__header__info">
            The values which we live by
          </div>
        </div>
        <div
          className="about__core__values__content"
          style={{ marginTop: -30 }}
        >
          <PromiseEntry
            svg={<Box size={20} color="currentColor" />}
            label="Empathy"
            info="Bringing the power of empathy to the table"
          />
          <PromiseEntry
            svg={<Box size={20} color="currentColor" />}
            label="High Performance"
            info="Punch above your weight class"
          />
          <PromiseEntry
            svg={<Box size={20} color="currentColor" />}
            label="Together"
            info="Teamwork makes the dream work"
          />
          <PromiseEntry
            svg={<Box size={20} color="currentColor" />}
            label="Transparency"
            info="Authenticity is everything"
          />
        </div>
      </div>
      <div className="about__key__difference">
        <div className="about__key__difference__heading">Key Differences</div>
        <div className="about__key__difference__content">
          <div className="about__key__difference__content__col">
            <div className="about__key__difference__content__col__info">
              Clear and transparent process that led by a dedicated project
              manager, who also ensures your satisfaction at all times.
              <br /> <br /> We compose teams based on specific product
              requirements to ensure best fit experts are working on your
              project. Domain Expertise Solid business domain experience,
              technical expertise and knowledge of latest industry trends helps
              us deliver exceptional results
            </div>
          </div>
          <div className="about__key__difference__content__col">
            <KeyDifferenceEntry
              svg={<Box size={20} color="currentColor" />}
              label="Specialized Experts"
              info="We compose teams based on specific product requirements to ensure best fit experts are working on your project."
            />
            <KeyDifferenceEntry
              svg={<Box size={20} color="currentColor" />}
              label="Strong IP Protection"
              info='All work is done under standard "Work for Hire" & NDAs. We employ internal safeguards to always ensure confidentiality.'
            />
            <KeyDifferenceEntry
              svg={<Box size={20} color="currentColor" />}
              label="Immediate Starts"
              info="No need for a costly and timeconsuming recruitment process - we can get into action as soon as you get ready to start."
            />
          </div>
          <div className="about__key__difference__content__col">
            <KeyDifferenceEntry
              svg={<Box size={20} color="currentColor" />}
              label="Domain Expertise"
              info="Solid business domain experience, technical expertise and knowledge of latest industry trends helps us deliver exceptional results"
            />
            <KeyDifferenceEntry
              svg={<Box size={20} color="currentColor" />}
              label="Quality Guaranteed"
              info="Our internal QA teams go through what was implemented and compares it to the requirements and ensures everything is spot on."
            />
            <KeyDifferenceEntry
              svg={<Box size={20} color="currentColor" />}
              label="Worry-free Development"
              info="We have standardized development process derived from industry best practices and our learning across projects."
            />
          </div>
          <div className="about__key__difference__content__col">
            <KeyDifferenceEntry
              svg={<Box size={20} color="currentColor" />}
              label="Customer Centric (Full Transparency)"
            />
            <KeyDifferenceEntry
              svg={<Box size={20} color="currentColor" />}
              label="Customer Centric (Full Transparency)"
            />
            <KeyDifferenceEntry
              svg={<Box size={20} color="currentColor" />}
              label="Customer Centric (Full Transparency)"
            />
            <KeyDifferenceEntry
              svg={<Box size={20} color="currentColor" />}
              label="Customer Centric (Full Transparency)"
            />
          </div>
        </div>
      </div>
      <div
        className="our__mission__section__about__us"
        style={{ overflow: "hidden" }}
      >
        <div className="our__mission__section__about__us__content">
          <div className="our__mission__section__about__us__content__left">
            <div
              className="feature__section__entry__content__jumbotron__sub__heading"
              style={{ color: "#ffffff" }}
            >
              Our Mission
            </div>
            <div
              className="our__mission__section__about__us__content__left__para"
              style={{ color: "#ffffff" }}
            >
              DSME’s mission is to solve challenging technical problems in
              partnership with our clients. D.S.M.E Global Links cohorts with
              its customers to disentangle complex technology problems and help
              them acclimatize to a constantly evolving economic and
              technological backdrop. Specializing in mobile, web and other
              smart technologies.
            </div>
          </div>
          <div className="our__mission__section__about__us__content__right">
            <img
              src={missionSvg}
              alt="missionSvg"
              className="our__mission__section__about__us__content__right__img"
            />
          </div>
        </div>
      </div>
      <div
        className="our__vision__section__about__us"
        style={{ overflow: "hidden" }}
      >
        <div className="our__vision__section__about__us__content">
          <div className="our__vision__section__about__us__content__right">
            <img
              src={visionSvg}
              alt="visionSvg"
              className="our__vision__section__about__us__content__right__img"
            />
          </div>
          <div className="our__vision__section__about__us__content__left">
            <div className="feature__section__entry__content__jumbotron__sub__heading">
              Our Vision
            </div>
            <div className="our__vision__section__about__us__content__left__para">
              Our vision is to help businesses and people create a better
              community and social living using technology-enabled solutions. We
              spend our efforts in making the finest educational, commercial
              business software, mobile applications, and next-gen tech-enabled
              solutions to help and improve businesses and lifestyles of the
              community.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
