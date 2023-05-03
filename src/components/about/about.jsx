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
            skills to my work. In my free time, I am currently focused on
            building and writing content for this portfolio, as well as engaging
            in regular exercise. I am passionate about exploring new
            technologies and pushing myself to constantly improve my craft.
          </p>
        </div>
        <div>
          <p>Here are some things i've worked on in the past:</p>
          <button
            onClick={goToProjects}
            href="/projects"
            style={{
              backgroundColor: "white",
              padding: "10px 20px",
              borderRadius: "5px",
              margin: "10px 0px",
              fontSize: "20px",
            }}
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
