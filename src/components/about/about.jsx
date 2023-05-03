import { React, useEffect, useRef } from "react";
import "./about.scss";
import { useHistory } from "react-router-dom";
import GitHubIcon from "@material-ui/icons/GitHub";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";

// const history = useHistory();
export default function About() {
  const history = useHistory();
  const goToProjects = () => {
    history.push("/projects");
  };
  return (
    <div className="about" id="about">
      <div className="title">
        <h1>Welcome;</h1>
        <div>
          A bit about me Mon - Fri I build and maintain digital products for
          Australia's largest freight marketplace. Recent New; I graduated from
          computer science! (sem2, 22). My main project i'm working on building
          and writing content for this portfolio and exercising. Right now;
          <button
            onClick={goToProjects}
            style={{
              backgroundColor: "white",
              padding: "10px 20px",
              borderRadius: "5px",
              margin: "10px 0px",
            }}
            href="/projects"
          >
            {/* <Work className="icon" /> */}
            <span className="button-style">See Projects</span>
          </button>
        </div>
      </div>
    </div>
  );
}
