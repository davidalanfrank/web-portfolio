import React from "react";
import "./video.scss";

export default function Video() {
  return (
    <div className="video" id="video">
      <div className="container">
        <div className="article-pad-l"></div>
        <div className="article">
          <h1>video Project</h1>
          <h2>Queensland Police Service</h2>

          <div className="heading-date">Completed on 22 June, 2021</div>

          <body>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum,
              facilis ducimus asperiores quam quaerat voluptates dicta provident
              minima tempore ipsum earum! Earum, saepe iste quaerat odit
              molestiae voluptates molestias inventore.
            </p>
            <img
              src="network_trust_diagram_for_azure.png" alt="network trust diagram"
              className="fig1"
            ></img>
            <p>Caption about the figure</p>
          </body>
        </div>
        <div className="article-pad-r"></div>
      </div>
    </div>
  );
}
