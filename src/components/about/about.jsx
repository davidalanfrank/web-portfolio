import { React, useEffect, useRef } from "react";
import "./about.scss";
import { useHistory } from "react-router-dom";

import GitHubIcon from "@material-ui/icons/GitHub";

// const history = useHistory();
export default function About() {
  const history = useHistory();
  const goToProjects = () => {
    history.push("/projects");
  };
  return (
    <div className="about" id="about">
      <br></br>
      <h2>Welcome to my website!</h2>
      <br></br>

      <img src="assets/david-avatar.png"></img>

      <div class="container">
        <div class="row">
          <div class="col">
            {" "}
            <span>
              <p>
                <b>A bit about me;</b>
              </p>{" "}
              Mon- Fri I build and maintain digital products that help people
              move big things all across Australia.
            </span>
          </div>
          <div class="col">
            {" "}
            <img src="assets/box-truck.png"></img>
          </div>
        </div>
        <div class="row">
          <div class="col">1 of 3</div>
          <div class="col">2 of 3</div>
          <div class="col">3 of 3</div>
        </div>
      </div>

      <img src="assets/graduation-hat.png"></img>

      <span>
        <p>
          {" "}
          <b>Recent news;</b>
        </p>
        I graduated from computer science! (sem2, 22).
      </span>

      <span>
        <p>
          <b>Right now;</b>
        </p>{" "}
        my main project i'm working on building and writing content for this
        portfolio and exercising.
      </span>

      <img src="assets/web-development.png"></img>

      <span>
        <h3>Here are some projects i've completed and written about. </h3>
      </span>

      <button
        onClick={goToProjects}
        style={{
          backgroundColor: "purple",
          padding: "10px 20px",
          borderRadius: "5px",
          margin: "10px 0px",
        }}
        href="/projects"
      >
        {/* <Work className="icon" /> */}
        <span style={{ color: "white", fontSize: "22px" }}>See Projects</span>
      </button>
    </div>
  );
}
