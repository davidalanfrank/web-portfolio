import { React, useEffect, useRef, useHistory } from "react";
import "./about.scss";

// const history = useHistory();
export default function About() {
  return (
    <div className="about" id="about">
     <h2 >Welcome to my website!</h2>
      <div >some welcome image or logo</div>
      A bit about me; Monday - Friday I build and maintain digital products
      that help people move big things all across Australia. 
      <div>Truck logo</div>

      Recent news; <p>I graduated from computer science! (sem2, 22).</p>
      <div>Graduation hat</div>
      Right now (outside of work), my main project i'm working on building and writing content for
      this portfolio and exercising.
      <p>Here are some projects i've completed and written about. </p>
      <a href="/projects">
        <span>Projects</span>
      </a>


    </div>
  );
}
