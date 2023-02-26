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
        <h1>Welcome to my website</h1>
        <ul>
          <li className="active">A bit about me</li>
          <li>Recent New;</li>
          <li>Currently;</li>
        </ul>
      </div>
      <div className="container">firmwareLOIUY</div>
    </div>
  );
}
