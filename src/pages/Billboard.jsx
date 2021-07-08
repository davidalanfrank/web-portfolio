import React from "react";
import "./billboard.scss";
import SyntaxHighLighter from "react-syntax-highlighter";

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
            <img
              alt="hl network architecture diagram"
              src="../assets/hl-bb.png "
              className="hl-bb"
            ></img>
            <br></br>
            <br></br>
            Model-View-Controller is architectural design pattern used in this
            project. In this pattern, the user can make changes to the model via
            the controller. The model acts as a "single source of truth" that
            updates the viewer which the user can see.
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
            <SyntaxHighLighter language="java">
              {`public class Billboard {

                  private String createdBy;
                  private String message;
                  private String information;
                  private String picture;
                  private String bgColour;
                  private String messageColour;
                  private String informationColour;
                  private String name;

            `}
            </SyntaxHighLighter>
            TDD is software development practice that puts emphasis on the
            definition of the functional utility of a method first, rather than
            the method's mechanics. This is done by programming the functional
            test before any code has been built. The advantages of this is to
            produce code with high test coverage, leading to code that is easier
            to maintain and extend.
            <br></br>
            <br></br>Our system makes use of a class named billboard which is
            used to encapsulate all the information required to represent a
            billboard object. Our team chose to implement this because it’s
            repeated use across many classes involved with the Control Panel
            Client, thus, getting this right would early in the development
            would leverage off more risk in the future.
            <br></br>
            <br></br>To follow the TDD principles, we split the test writing and
            fulfilment between myself and one of my team members. Test
            fulfilment was was defined as having the test pass in the Junit
            output window(testing utility available in intelliJ).#add in image
            with junit tests passing Once fulfilled, they could be refactored
            and re-tested to ensure the still provided the same functionality.
            While the application grew during the development process, these
            tests (and any other tests that have been written) would be
            continually run to ensure this class was behaving as it was
            intended.
            <br></br>
            <br></br>My experience using TDD was overwhelmingly positive for
            several reasons. First, the process forces you to think of an entire
            class and it's uses to near completion, before you have the chance
            to write any methods. It acted as a blueprint for what the class
            should do and the requirements were asserted and only met once all
            tests were passed; once they did so, I could be sure that the
            functionality was complete, meaning that additional work was making
            the code better. Secondly, (and i'm aware this is hard to quantify)
            it made my mind more clear for working on the problems at hand. It
            was liberating know that as long as the Junit tests were passing, it
            was highly likely that the related methods were working as they
            should be. It enable me to concentrate more deeply by allowing me to
            abstract myself away from exactly how each function worked. Finally,
            TDD offered a new lens to gauge the current development speed. Since
            the tests are written first, it's easier to track the progress of
            method completion, assuming of course the project being worked on
            requires a testing suite. Having the test written first makes sure
            that at the end of each development cycle, each method has it's own
            test(s). This is easier than estimating development speed first
            because efforts may be wasted in writing a function that does not
            fulfil it's requirements only after it's implementation.
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
