import React from "react";
import "./menu.scss";
import { Home, Mail, Work} from "@material-ui/icons"
import GitHubIcon from "@material-ui/icons/GitHub";





export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#intro"> <Home/>&nbsp;Home</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#about"><Work/>
          &nbsp;About</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="/projects"><Work/>
          &nbsp;Projects</a>
        </li>
        <li>
        <a href="https://github.com/davidalanfrank/" className="icon">
            <div className="itemContainer">
              <GitHubIcon className="icon" />
              <span>&nbsp;Github</span>
            </div>
          </a>
        </li>
        <li>
        <div  style={{display: "flex"}} >
            <Mail className="icon" />&nbsp;
            <span style={{fontSize: 18}}>davidfrankwebster
              <p>@gmail.com</p></span>
          </div>
        </li>

      </ul>
    </div>
  );
}
