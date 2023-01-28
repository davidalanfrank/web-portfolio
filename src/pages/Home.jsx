import Intro from "../components/intro/Intro";
import Portfolio from "./Portfolio";
import About from "../components/about/about";
import React from "react";

export default function Home() {
  return (
    <div className="sections">
      <Intro />
      <About />
    </div>
  );
}
