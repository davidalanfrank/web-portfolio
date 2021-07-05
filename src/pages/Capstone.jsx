import React from "react";
import "./capstone.scss";

export default function Capstone() {
  return (
    <div className="capstone" id="capstone">
      <div className="container">
        <div className="article-pad-l"></div>
        <div className="article">
          <h1>Capstone Project</h1>
          <h2>Queensland Police Service</h2>

          <div className="heading-date">Completed on 22 June, 2021</div>
          <body>
            <p>
              This project undertaken with the Queenland Police Service started
              during the 1st semester of my period. The initally proposal by our
              client outlined a system that would use NLP techniques to identify
              instances of fraud over text communications.
            </p>
            <img
              src="network_trust_diagram_for_azure.png"
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
