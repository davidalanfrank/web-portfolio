import React from "react";
import "./menu.scss";
import { Home, Book, Work, Computer } from "@material-ui/icons";
import GitHubIcon from "@material-ui/icons/GitHub";

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li onClick={() => setMenuOpen(false)}>
          <a href="/">
            {" "}
            <Home />
            &nbsp;Home
          </a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="/#about">
            <Work />
            &nbsp;About
          </a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="/projects">
            <Computer />
            &nbsp;Projects
          </a>
        </li>
        <li>
          <a
            href="https://github.com/davidalanfrank/"
            className="icon"
            target="_blank"
          >
            <div className="itemContainer">
              <GitHubIcon className="icon" />
              <span>&nbsp;Github</span>
            </div>
          </a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="/blog">
            <Book />
            &nbsp;Blog
          </a>
        </li>
      </ul>
    </div>
  );
}
