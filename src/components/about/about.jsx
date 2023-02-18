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
      <br></br>
      <h2>Welcome to my website!</h2>
      <br></br>
      <img className="avatar" src="assets/david-avatar.png"></img>
      <Table striped bordered hover className="table">
        <tbody>
          <tr>
            <td colSpan={1}>
              <span>
                <p>A bit about me;</p>Mon- Fri I build and maintain digital
                products that help people move big things all across Australia.
              </span>
            </td>
            <td className="icon-td">
              <div>
                <img className="icon-style" src="assets/box-truck.png"></img>
              </div>
            </td>
          </tr>
        </tbody>
      </Table>
      <Table striped bordered hover className="table">
        <tbody>
          <tr>
            <td className="icon-td">
              <div>
                <img
                  className="icon-style"
                  src="assets/graduation-hat.png"
                ></img>
              </div>
            </td>
            <td colSpan={1}>
              <span>
                <p>
                  <b>Recent news;</b>
                </p>
                I graduated from computer science! (sem2, 22).
              </span>
            </td>
          </tr>
        </tbody>
      </Table>
      <Table striped bordered hover className="table">
        <tbody>
          <tr>
            <td colSpan={1}>
              <span>
                <p>
                  <b>Right now;</b>
                </p>
                my main project i'm working on building and writing content for
                this portfolio and exercising.
              </span>
            </td>
            <td className="icon-td">
              <div>
                <img
                  className="icon-style"
                  src="assets/web-development.png"
                ></img>
              </div>
            </td>
          </tr>
        </tbody>
      </Table>
      <div className="projects-cta">
        {" "}
        <h3>Here are some projects i've completed and written about. </h3>
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
    </div>
  );
}
