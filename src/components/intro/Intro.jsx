import { React, useEffect, useRef } from "react";
import "./intro.scss";
import { ExpandMore } from "@material-ui/icons";
import { init } from "ityped";
export default function Intro() {
  const textRef = useRef();
  // useE ffect will work only once due to the empy array
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 80,
      strings: ["Developer", "Machine learning enthusiast", "Logic X'er"],
    });
    console.log(textRef);
  }, []);
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/david_bgrm.png" alt=""></img>
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi there, I'm</h2>
          <h1>David Webster</h1>
          <h3>
            Software <span ref={textRef}>Developer</span>
          </h3>
        </div>
        <a href="#portfolio">
          <ExpandMore className="icon" fontSize="px" />
        </a>
      </div>
    </div>
  );
}
