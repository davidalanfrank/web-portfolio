import React from "react";
import "./topbar.scss";
import { Mail } from "@material-ui/icons";
import GitHubIcon from "@material-ui/icons/GitHub";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="/" className="logo">
            dwebs.
          </a>
          <a href="https://github.com/davidalanfrank/" className="icon">
            <div className="itemContainer">
              <GitHubIcon className="icon" />

              <span>Github</span>
            </div>
          </a>

          <div className="itemContainer">
            <Mail className="icon" />
            <span>davidfrankwebster@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
