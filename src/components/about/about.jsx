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
        {" "}
        <br></br>
        <h3>Welcome to my website!</h3>
        <br></br>
      </div>
      {/* <img className="avatar" src="assets/david-avatar.png"></img> */}

      <Table striped bordered hover style={{ width: "90%" }}>
        <tbody className="content-table">
          <tr>
            <td colSpan={1} className="text-td">
              <span>
                <span style={{ lineHeight: "2" }}>
                  A bit about me;
                  <br />
                </span>
                Mon- Fri I build and maintain digital products that help people
                move big things all across Australia.
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
      <Table striped bordered hover style={{ width: "90%" }}>
        <tbody className="remove-section-mobile">
          <tr>
            <td className="icon-td">
              <div>
                <img
                  className="icon-style"
                  src="assets/graduation-hat.png"
                ></img>
              </div>
            </td>
            <td colSpan={1} className="text-td right-align">
              <div></div>
              <span>
                <span style={{ lineHeight: "2" }}>Recent news;</span>
                <br />I graduated from computer science! (sem2, 22).
              </span>
            </td>
          </tr>
        </tbody>
      </Table>
      <Table striped bordered hover style={{ width: "90%" }}>
        <tbody>
          <tr>
            <td colSpan={1} className="text-td">
              <span>
                <span style={{ lineHeight: "2" }}>Right now;</span>
                <br />
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
      <br />
      <br />
      <br />
      <Table striped bordered hover style={{ width: "90%" }}>
        <tbody>
          <tr>Here are some projects i've completed and written about.</tr>
          <tr>
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
              <span className="button-style">See Projects</span>
            </button>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
