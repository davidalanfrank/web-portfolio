import React from "react";
import "./billboard.scss";

export default function Billboard() {
  return (
    <div className="billboard" id="billboard">
      <div className="container">
        <div className="article-pad-l"></div>
        <div className="article">
          <h1>Billboard Mangagement System</h1>
          <h2>Design Patterns and TDD </h2>
          <div className="heading-date">Completed on 31 May, 2020</div>

          <p>
            There is some debate about the relivance of Design Patterns. Their
            original utility stemming from the wide understanding in the
            software industry enabling more effective commnication of
            architecural ideas. This falls over when the tradition of new
            pracitioners no longer study these. For better or for worse, I have
            this book on my shelf.
            <br></br>
            <br></br>
            The development of this Billboard Management System offered a
            facility to implement some of these design patterns, in addition to
            exploring test driven development (TDD). I worked on this project as
            a team member with three other CS students. <br></br>
            Here are my official contributions to the project (as per the paper
            work):
            <ul type="circle">
              <li>Test Driven Development of Billboard.Java</li>
              <li>Design, writing and refactor of Billboard class</li>
              <li>
                Wiring design, implementation and refactor of GUIBillboardPanel
                class
              </li>
              <li>Writing and testing of XMLFileOpener class</li>
              <li>Writing and testing of IMGFileOpener class</li>
              <li>Writing and testing of URL Handler class</li>
              <li>Writing of report walk through</li>
            </ul>
            Students were given a requirement spec in addition to an overiew
            "scenario" the business case. In essence:
            <div className="bussiness-case-container">
              <p>
                a client coporation contracted our development team to create a
                system for handling their electronic billboards. They many
                screens displayed around their offices across the country, used
                to show annoucements, advertising and motivational content.
              </p>
            </div>
            This corportation requires three separate applications:
            <ul type="circle"> </ul>
            <li>Billboard Viewer</li>
            details
            <li>Billboard Server</li>
            details
            <ul>Billboard Control Panel</ul>
            These applications were to be connected via the corporations
            intranet, such that, the Billboard viewer and control pannel never
            directly communicate. The billboard viewer will only display
            content, based on the instructions given by the Billboard server.
            The figure below outlines the network architecure at a high-level.
            <br></br>
            <br></br>
            <img alt="hl network architecture diagram"></img>
            <br></br>
            <br></br>
            Model-View-Controller is architectural design pattern used in this
            project. In this pattern, the user can make changes to the model via
            the controller. The model acts as a "single source of truth" that
            updates the viewer which the user can see. Think of a painter in
            their studio who paints using the individual colours on their
            pallate (the model). This painter has a concept or an idea that will
            govern how they use the paints on the canvas and how these will be
            executed (the controller). These ideas are then painted on to the
            cavnas for both the painter and other people to see (the viewer).
            <br></br>
            <br></br>
            MVC provided the team with 3 main benefits:
            <br></br>
            <br></br>
            1. Model-View Cardinality
            <br></br>MVC provides the ability to easily scale the amount of
            viewers since only an instance of each viewer needs to be created
            for display on a new screen. This one to many relalationship was
            essential to our business case. <br></br>
            <br></br>
            2. Asynchronicity <br></br>The ability to develop each application
            separately allowed our team to be self-managing and fast.
            <br></br>
            <br></br>
            3. Unit testing <br></br>The inherent modularity that comes with
            developing using MVC allowed us an easier push for test coverage
            across each application.
            <br></br>
            <br></br>I welcome the reader to explore the repo to get a detailed
            understanding of how this system is constructed. The following will
            discuss my expierence using Driven Develpment (TDD), our use of
            mocking and finally Tracer-bullets.
            <h2>Test-driven development</h2>
            <br></br>
            <br></br>
            <h2>Requests, Reponses and Mocking</h2>
            <br></br>
            <br></br>
            <h2>Tracer-bullets</h2>
          </p>
          <body></body>
        </div>
        <div className="article-pad-r"></div>
      </div>
    </div>
  );
}
