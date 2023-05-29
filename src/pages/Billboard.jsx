import React from "react";
import "./billboard.scss";
import SyntaxHighLighter from "react-syntax-highlighter";
import { useHistory } from "react-router-dom";

export default function Billboard() {
  const history = useHistory();
  const goBack = () => {
    history.push("#portfolio");
  };
  return (
    <div className="billboard" id="billboard">
      <div className="container">
        <div className="article-pad-l"></div>
        <div className="article">
          <h1>Billboard Management System</h1>
          <h2>Design Patterns and TDD </h2>
          <div className="heading-date">Completed on 31 May, 2020</div>
          <p>
            There is some debate about the relevance of Design Patterns. Their
            original utility stemming from the wide understanding in the
            software industry enabling more effective communication of
            architectural ideas. This falls over when the tradition of new
            practitioners no longer study these. For better or for worse, I have
            Erich Gamma Et al. text on my shelf.
            <br></br>
            <br></br>
            The development of this Billboard Management System offered a
            facility to implement some of these design patterns, in addition to
            exploring test driven development (TDD). I worked on this project as
            a team member with three other CS students. Here are my official
            contributions to the project (as per the paper work):
            <div></div>
            <ul className="list-style">
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
            Students were given a requirement spec in addition to an overview
            "scenario" the business case. In essence:
            <div className="business-case-container">
              <div className="business-case-child">
                a client corporation contracted our development team to create a
                system for handling their electronic billboards. They many
                screens displayed around their offices across the country, used
                to show announcements, advertising and motivational content.
              </div>
            </div>
            This corporation requires three separate applications:
            <div className="top-bottom-padding">
              <ol>
                <li className="li-title">
                  <h3>1. Billboard Viewer</h3>
                </li>
                <ul>
                  <li>
                    a client corporation contracted our development team to
                    create a system for handling their electronic billboards.
                    They many screens displayed around their offices across the
                    country, used to show announcements, advertising and
                    motivational content.
                  </li>
                </ul>
                <li className="li-title">
                  <h3>2. Billboard Server</h3>
                </li>
                <ul>
                  <li>
                    a client corporation contracted our development team to
                    create a system for handling their electronic billboards.
                    They many screens displayed around their offices across the
                    country, used to show announcements, advertising and
                    motivational content.
                  </li>
                </ul>
                <li className="li-title">
                  <h3>3. Billboard Control Panel</h3>
                </li>{" "}
                <ul>
                  <li>
                    a client corporation contracted our development team to
                    create a system for handling their electronic billboards.
                    They many screens displayed around their offices across the
                    country, used to show announcements, advertising and
                    motivational content.
                  </li>
                </ul>
              </ol>
            </div>
            These applications were to be connected via the corporations
            intranet, such that, the Billboard viewer and control panel never
            directly communicate. The billboard viewer will only display
            content, based on the instructions given by the Billboard server.
            The figure below outlines the network architecture at a high-level.
            <br></br>
            <br></br>
            <img
              alt="hl network architecture diagram"
              src="../assets/hl-bb.png "
              className="hl-bb figure"
            ></img>
            <br></br>
            <br></br>
            Model-View-Controller is architectural design pattern used in this
            project. In this pattern, the user can make changes to the model via
            the controller. The model acts as a "single source of truth" that
            updates the viewer which the user can see.
            <br></br>
            <br></br>
            MVC provided the team with 3 main benefits:{" "}
            <div className="top-bottom-padding">
              <ol>
                <li className="li-title">
                  <h3>1. Model-View Cardinality</h3>
                </li>
                <ul>
                  <li>
                    MVC provides the ability to easily scale the amount of
                    viewers since only an instance of each viewer needs to be
                    created for display on a new screen. This one to many
                    relationship was essential to our business case.
                  </li>
                </ul>
                <li className="li-title">
                  {" "}
                  <h3>2. Asynchronicity</h3>{" "}
                </li>
                <ul>
                  <li>
                    The ability to develop each application separately allowed
                    our team to be self-managing and fast.
                  </li>
                </ul>
                <li className="li-title">
                  {" "}
                  <h3>3. Unit testing</h3>{" "}
                </li>{" "}
                <ul>
                  <li>
                    The inherent modularity that comes with developing using MVC
                    allowed us an easier push for test coverage across each
                    application.
                  </li>
                </ul>
              </ol>
            </div>
            I welcome the reader to explore the repo to get a detailed
            understanding of how this system is constructed. The following will
            discuss my experience using Driven Development (TDD), our use of
            mocking and finally tracer-bullets.
            <br></br>
            <br></br>
            <h2>Test-driven development</h2>
            <br></br>
            <SyntaxHighLighter language="java" className="figure code-snip">
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
            <br></br>
            TDD is a software development practice that puts emphasis on the
            definition of the functional utility of a method first, rather than
            the method's mechanics. This is done by writing the functional test
            before any code has been written. The advantages of this is to
            produce code with high test coverage, leading to code that is easier
            to maintain and extend.
            <br></br>
            <br></br>Our system makes use of a class named billboard which is
            used to encapsulate all information required to represent a
            billboard object. Our team chose to implement this because it’s
            repeated use across many classes involved with the Control Panel
            Client, thus, getting this right early in the development would
            yield lower risk in the future.
            <br></br>
            <br></br>To follow the TDD principles, we split the test writing and
            fulfillment between myself and one of my team members. Test
            fulfillment was was defined as having the test pass in the Junit
            output window (note: Junit is the test utility available in
            intelliJ).[FIG] add in image with Junit tests passing. Once
            fulfilled, they could be refactored and re-tested to ensure they
            still provided the same functionality. While the application grew
            during the development process, these tests (and any other tests
            that have been written) would be continually run to ensure this
            class was behaving as it was intended.
            <br></br>
            <br></br>My experience using TDD was overwhelmingly positive for
            several reasons. First, the process forces you to think of an entire
            class and it's uses to near completion, before you have the chance
            to write any methods. It acted as a blueprint for what the class
            should do and the requirements were asserted and validated only once
            all tests were passed. Once they did, I one could be sure that the
            functionality was complete, meaning that additional work was making
            the code better. Secondly, (and i'm aware this is hard to quantify)
            it offered piece of mind while working on the problems using that
            class. It was liberating know that as long as the Junit tests were
            passing, it was highly likely that the related methods were working
            as they should be. It enable me to concentrate more deeply by
            allowing me to abstract myself away from exactly how each function
            worked. Finally, TDD offered a new lens to gauge the current
            development speed. Since the tests are written first, it's easier to
            track the progress of method completion, assuming of course the
            project being worked on requires a testing suite. Having the test
            written first makes sure that at the end of each development cycle,
            each method has it's own test(s). This is easier than estimating
            development speed first because efforts may be wasted in writing a
            function that does not fulfil it's requirements only after it's
            implementation.
            <br></br>
            <br></br>
            <h2>Requests, Responses and Mocking</h2>
            <br></br>
            In the MVC pattern, the controller makes changes to the model. In
            the case of the BMS, it is the control panel GUI that allows a user
            to create, edit, import and schedule a billboard on the viewer.
            Thus, the majority of the information exchange is being passed from
            actions made on the control panel to the server. Beyond billboard
            management, users can create and grand privileges to other users to
            use certain features. Due to the large amount of features making
            changes to the model, we needed a uniform way for passing data from
            the control panel to the server. We implemented a <b>request</b>
            and <b>response</b> pattern between these two applications, this
            also extended to the database interface. There were several
            immediate benefits to this:
            <ol>
              <br></br>
              <li>
                <h3>Readable code</h3>{" "}
              </li>
              In the helpers class, we defined constants that would act as
              request "types" that could be referred to throughout the
              application [FIG2]. The code also implemented using response as
              the return variables
              <li>Communication speed </li>
              This project was developed during the first part of 2020 and like
              most software work at that time, distributed teams were the only
              option for some projects. Therefore, ensuring meetings were
              effective relied on clear, concise communication. Whilst talking
              about an exception being thrown during VIEW_SCHEDULE, we all knew
              what we were talking about and where to look.
              <br></br>
              <br></br>
              <li>
                <h3>Extendability</h3>{" "}
              </li>
              Once this pattern was agreed upon and we had a few example
              request/responses to work with, it was easy for other team members
              to add to this list since we knew how it should be implemented. In
              addition, if a team member wanted to refactor someone's "request",
              we knew what to expect in the response. [FIG4] show examples of
              how we encapsulated this data.
              <br></br>
              <br></br>
              This pattern allowed for the development of the control panel and
              server to progress steadily. Though, there was a point where we
              needed to begin receiving some information from the not yet
              implemented database to test the functionality of the server. We
              needed something relatively changeable and temporary since the
              requirements for columns and tables were still being figured out.
              MockDatabase.java is a file we used to simulate a pseudo-database
              that allowed us to continue with testing the server's
              request/responses, since most of the features available on the
              control panel create or modify rows in the database. [Fig5] -
              diagram about how mocking works compared to the normal
              implementation. This allowed for cheaper changes to the design of
              our database before any SQL were written.
            </ol>
            <br></br>
            <br></br>
            <h2>Tracer-bullets</h2>
            <br></br>
            Developing software as an undergraduate student has meant
            encountering a lot of technologies and programming pattern's that
            are unseen. Although I was familiar with OOP and Java before
            undertaking this project, I was not familiar with how one networks
            several java application together; leaving not guarantee that the
            way we designed our data encapsulation would be easily transferable
            across the network. It was risky to make these decisions early on in
            the design process only to figure out later that infact certain
            objects would be cumbersome to handle across the network, resulting
            in writing some parsers (which would be superfluous) or re-design
            this encapsulation and refactoring potentially a lot of code.
            Previous to this project I learned first hand of the expense of
            having to re-work parts of the data-pipeline. A method I pushed for
            to help lower the risk of major refactors later was the use of
            tracer-bullets. As the name suggests, this method is as a guide, a
            way to trace how an application(s) passes data between different
            technologies. Understanding how this works earlier in the
            development process allows for an understanding of how data needs to
            be handled at each point along the pipeline. For examples, it was
            important to know how a user pressing delete on the billboard
            control panel will be translated in an MYSQL command being fired to
            remove a row the billboards table. Using tracer-bullets revealed to
            us that we could not directly pass objects in our request functions
            to the server. Objects had to be explicitly serialized first and
            thus, we created a function that would turn out "request" message
            (which included some encapsulated data) into bytes that could be
            passed across the network to the server[fig6]
            <br></br>
            <br></br>
            <h2>Summary</h2>
            <br></br>
            This project demonstrated the utility of using pre-defined design
            patterns. MVC is by no means a new pattern, though because of it's
            ongoing use in more modern, large scale applications, there is
            evidence to suggest it's had a place in a wide variety of use cases.
            TDD allowed the team to progress in the development process with
            confidence that one of the first classes we develop would work
            exactly how it was expected to. Furthermore, the request and
            response pattern that we used for our client-server interface would
            be easily understood by all software developers, making it safe to
            assume that this code would be easily extendible. Since developing
            the databases early could have been expensive to update and maintain
            through the development process, creating a Mock database enabled
            the team to return pseudo data in place of actual SQL results. This
            presented the opportunity to avoid changes to tables and script
            while the requirements of the database were still being formulated.
            Finally, using tracer-bullets to gain some understanding of how data
            should follow across our applications minimize the risk of
            misunderstanding how we should encapsulate our data.
          </p>
          <br></br>
        </div>
      </div>
    </div>
  );
}
