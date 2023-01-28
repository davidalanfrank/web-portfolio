import { React, useEffect, useRef, useHistory } from "react";
import "./about.scss";

// const history = useHistory();
export default function About() {
  return (
    <div className="about" id="about">
      Welcome to my website! 
      <div>some welcome image or logo</div>
      A bit about me; Monday - Friday I build and maintain digital products
      that help people move big things all across Australia. 
      <div>Truck logo</div>

      A recent achievement; I graduated computer science! (sem2, 22).
      <div>Truck logo</div>
      Here are some project that i've completed in the pas
      <a href="/projects">
        <span>Projects</span>
      </a>
      Outside of work i'm working on building and writing content for
      this portfolio and exercising.

    </div>
  );
}
