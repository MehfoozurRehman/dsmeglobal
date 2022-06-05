import React from "react";
import { HomeJumbotron } from "./HomeJumbotron";
import { ClientsSection } from "./ClientsSection";
import { ServicesSection } from "./ServicesSection";
import { NewsletterSection } from "./NewsletterSection";
import { BlogSection } from "./BlogSection";

export default function Home() {
  return (
    <div className="container">
      <HomeJumbotron />
      <ClientsSection />
      <ServicesSection />
      <BlogSection />
      <div className="container__testimonials">
        <img src="" alt="" className="container__testimonials__img" />
        <div className="container__testimonials__overlay">
          <div className="container__testimonials__overlay__content"></div>
        </div>
      </div>
      <NewsletterSection />
    </div>
  );
}
