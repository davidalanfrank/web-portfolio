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
        <h2>Welcome to my website;</h2>
        <div>
          <p>
            As a software developer, I spend my weekdays building and
            maintaining digital products for Australia's biggest freight
            marketplace. I recently completed my Computer Science degree
            (Semester 2, 2022) and am excited to bring my newfound knowledge and
            skills to my work. Currently in my free time, you'll likely find me
            building and writing content for this portfolio.
          </p>
        </div>
        <div>
          <p>Click below read about some things i've worked on in the past:</p>
          <button
            onClick={goToProjects}
            href="/projects"
            style={{
              padding: "10px 20px",
              borderRadius: "5px",
              margin: "10px 0px",
              fontSize: "20px",
            }}
            className="button-color"
          >
            <span className="button-style">
              <b>See Projects</b>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
