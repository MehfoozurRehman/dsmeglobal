import React from "react";
import { HomeJumbotron } from "./HomeJumbotron";
import { ClientsSection } from "./ClientsSection";

export default function Home() {
  return (
    <div className="container">
      <HomeJumbotron />
      <ClientsSection />
      <HomeJumbotron />
    </div>
  );
}
