import { React, useEffect, useRef } from "react";
import "./intro.scss";
import { init } from "ityped";
export default function Intro() {
  const textRef = useRef();
  // useE ffect will work only once due to the empty array
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 80,
      strings: ["Software Developer", "Intelligent systems builder", "Music enthusiast"],
    });
    console.log(textRef);
  }, []);
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/david_bgrm.png" alt="dwebs"></img>
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi there, i'm</h2>
          <h1>David Webster</h1>
          <h3>
            <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#about">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}
