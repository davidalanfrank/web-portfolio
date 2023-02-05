import { React, useEffect, useRef } from "react";
import "./about.scss";
import { Home, Mail, Work, LocalShippingOutlined } from "@material-ui/icons";
import { useHistory } from "react-router-dom";

import GitHubIcon from "@material-ui/icons/GitHub";

// const history = useHistory();
export default function About() {
  const history = useHistory();
  const goToProjects = () => {
    console.log("###goBack");
    history.push("/projects");
  };
  return (
    <div className="about" id="about">
      <br></br>
      <h2>Welcome to my website!</h2>
      <br></br>
      <div style={{ textAlign: "center" }}>
        <img style={{ maxWidth: "5rem" }} src="assets/david-avatar.png"></img>
      </div>
      <br></br>
      <div style={{ display: "flex", width: "100%" }}>
        <div
          style={{
            maxWidth: "19rem",
            padding: "1rem",
            justifyContent: "center",
            fontSize: 18,
          }}
        >
          <span>
            <p>
              <b>A bit about me;</b>
            </p>{" "}
            Mon- Fri I build and maintain digital products that help people move
            big things all across Australia.
          </span>
        </div>

        <div>
          <img
            src="assets/box-truck.png"
            style={{ maxWidth: "5rem", paddingTop: "2rem" }}
          ></img>
        </div>
      </div>
      <div style={{ display: "flex", width: "100%" }}>
        <div>
          <img
            src="assets/graduation-hat.png"
            style={{ maxWidth: "5rem", paddingTop: "2rem" }}
          ></img>
        </div>
        <div
          style={{
            maxWidth: "18rem",
            padding: "1rem",
            justifyContent: "center",
            textAlign: "right",
          }}
        >
          <span style={{ fontSize: 20 }}>
            <p>
              {" "}
              <b>Recent news;</b>
            </p>
            I graduated from computer science! (sem2, 22).
          </span>
        </div>
      </div>
      <div style={{ display: "flex", width: "100%" }}>
        <div
          style={{
            maxWidth: "18rem",
            padding: "1rem",
            justifyContent: "center",
          }}
        >
          <span style={{ fontSize: 20 }}>
            <p>
              <b>Right now;</b>
            </p>{" "}
            my main project i'm working on building and writing content for this
            portfolio and exercising.
          </span>
        </div>
        <div>
          <img
            src="assets/web-development.png"
            style={{ maxWidth: "5rem", padding: "1rem" }}
          ></img>
        </div>
      </div>
      <span style={{ fontSize: 20, padding: "1rem", textAlign: "center" }}>
        <p>Here are some projects i've completed and written about. </p>
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
