import React from "react";
import { HomeJumbotron } from "./HomeJumbotron";
import { ClientsSection } from "./ClientsSection";
import { ServicesSection } from "./ServicesSection";
import { NewsletterSection } from "./NewsletterSection";
import { BlogSection } from "./BlogSection";
import bannerImage1 from "../assets/bannerImage1.svg";
import WorkSection from "../components/WorkSection";
import { StatsSection } from "./StatsSection";
import { TestimonialsSection } from "./TestimonialsSection";
import { Box } from "react-feather";

export default function Home() {
  return (
    <div className="container">
      <HomeJumbotron
        taglinesLine="Quality"
        taglines={["services", "products", "customizations"]}
        matcherLine="you really"
        matchers={["want", "need", "deserve"]}
        info="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore,
            culpa est? Quos iusto dolore culpa, veritatis quas minus quibusdam
            ad? Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Dolore, culpa est? Quos iusto dolore culpa, veritatis quas minus
            quibusdam ad?"
        img={bannerImage1}
        buttons={true}
      />
      <ClientsSection />
      <ServicesSection />
      <StatsSection />
      <WorkSection />
      <QuateSection />
      <BlogSection />
      <TestimonialsSection />
      <NewsletterSection />
    </div>
  );
}

function QuateSection() {
  return (
    <div className="container__stats__wrapper">
      <div className="container__stats__content">
        <div className="container__stats">
          <div className="container__stats__left">
            <div className="container__stats__left__heading">
              Where business meets cutting-edge technology
            </div>
            <div className="container__stats__left__info">
              Choose the tech stack for your next application, or let us pick
              the best solution for you
            </div>
            <button className="container__stats__left__button">
              Get a quote
            </button>
          </div>
          <div className="container__stats__right">
            <QuateSectionCard
              title="Android"
              info="Create a seamless mobile experience with Android app development Our
        software house has been recognised by Google for outstanding Android
        application quality"
            />
            <QuateSectionCard
              title="iOS"
              info="Stay ahead of the curve with a custom iOS app We offer iOS application development services for startups, enterprises, and unicorns around the globe"
            />
            <QuateSectionCard
              title="Cross-platform"
              info="Create a seamless mobile experience with Android app development Our
              software house has been recognised by Google for outstanding Android
              application quality"
            />
            <QuateSectionCard
              title="Frontend"
              info="Create a seamless mobile experience with Android app development Our
        software house has been recognised by Google for outstanding Android
        application quality"
            />
            <QuateSectionCard
              title="Backend"
              info="Create a seamless mobile experience with Android app development Our
        software house has been recognised by Google for outstanding Android
        application quality"
            />
            <QuateSectionCard
              title="Artificial Intelligence"
              info="Create a seamless mobile experience with Android app development Our
        software house has been recognised by Google for outstanding Android
        application quality"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function QuateSectionCard({ title, info }) {
  return (
    <div className="container__stats__right__card">
      <div className="container__stats__right__card__icon">
        <Box size={20} color="currentColor" />
      </div>
      <div className="container__stats__right__card__heading">{title}</div>
      <div className="container__stats__right__card__info">{info}</div>
    </div>
  );
}
