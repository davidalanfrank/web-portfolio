import Intro from "../components/intro/Intro";
import Portfolio from "../components/portfolio/Portfolio";
import React from "react";

export default function Home() {
  return (
    <div className="sections">
      <Intro />
      <Portfolio />
    </div>
  );
}
