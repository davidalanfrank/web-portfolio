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
            The relevance of Design Patterns is a topic of ongoing debate within
            the software industry. Initially, these patterns were highly
            valuable as they facilitated effective communication of
            architectural ideas among professionals. However, with the decline
            in the tradition of studying Design Patterns among new
            practitioners, their utility has been called into question. Whether
            this shift is beneficial or detrimental, the fact remains that I
            have the esteemed text by Erich Gamma et al. on my shelf, which
            serves as a valuable resource for understanding and applying these
            patterns
            <br></br>
            <br></br>
            As part of a team of four computer science students, I had the
            opportunity to contribute to the development of the Billboard
            Management System. Throughout the project, we leveraged various
            design patterns to improve the system's architecture and also delved
            into the practice of test-driven development (TDD). My official
            contributions to the project, as documented in the paperwork,
            include actively implementing design patterns to enhance the
            system's functionality and advocating for the adoption of TDD
            principles, ensuring robust code quality and facilitating future
            modifications.
            <div></div>
            <ul className="list-style">
              <li>- Test Driven Development of Billboard.Java</li>
              <li>- Design, writing and refactor of Billboard class</li>
              <li>
                - Wiring design, implementation and refactor of
                GUIBillboardPanel class
              </li>
              <li>- Writing and testing of XMLFileOpener class</li>
              <li>- Writing and testing of IMGFileOpener class</li>
              <li>- Writing and testing of URL Handler class</li>
              <li>- Writing of report walk through</li>
            </ul>
            In this project, students were provided with a requirement
            specification document along with an overview of the business case,
            commonly referred to as the "scenario.". In essence, this was:
            <div className="business-case-container">
              <div className="business-case-child">
                Our development team was contracted by a client corporation to
                create a comprehensive system for managing their electronic
                billboards. The client, with multiple screens spread across
                their offices nationwide, required a solution that would
                facilitate the display of announcements, advertising, and
                motivational content. Our task was to design and develop a
                robust system that would streamline the management and
                scheduling of content across these electronic billboards,
                ensuring efficient and impactful communication within the
                client's organisation.
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
            The applications in question were intended to be interconnected
            through the corporation's intranet, ensuring that the Billboard
            viewer and control panel would not communicate directly. The primary
            function of the billboard viewer was to display content according to
            the instructions provided by the Billboard server. The high-level
            network architecture, depicted in the figure below, illustrates the
            overall connectivity and flow of information within the system.
            <br></br>
            <br></br>
            <img
              alt="hl network architecture diagram"
              src="../assets/hl-bb.png "
              className="hl-bb figure"
            ></img>
            <br></br>
            <br></br>
            The Model-View-Controller (MVC) architectural design pattern is
            employed in this project. In MVC, the user interacts with the
            controller to make changes to the model. The model serves as the
            authoritative data source, updating the viewer to reflect these
            changes for the user to observe.
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
                    One of the key benefits of the Model-View-Controller (MVC)
                    pattern is its inherent scalability, particularly when it
                    comes to accommodating multiple viewers. With MVC, only a
                    single instance of each viewer needs to be created, which
                    can then be displayed on multiple screens. This one-to-many
                    relationship between the viewers and screens proved to be
                    crucial in fulfilling our business case requirements.
                  </li>
                </ul>
                <li className="li-title">
                  {" "}
                  <h3>2. Asynchronicity</h3>{" "}
                </li>
                <ul>
                  <li>
                    The advantage of asynchronous development is that it
                    empowers our team to be autonomous and efficient by enabling
                    independent development of each application.
                  </li>
                </ul>
                <li className="li-title">
                  {" "}
                  <h3>3. Unit testing</h3>{" "}
                </li>{" "}
                <ul>
                  <li>
                    The built-in modularity provided by MVC development allows
                    us to achieve better test coverage across each application
                    with greater ease.
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
            <br></br>
            Test-Driven Development (TDD) is a software development practice
            that prioritizes defining the functional utility of a method before
            its mechanics. This approach involves writing functional tests prior
            to writing any code. The benefits of TDD are significant, as it
            results in code with extensive test coverage, leading to easier
            maintenance and scalability.
            <br></br>
            <br></br>
            In our system, we employ a class called "billboard" to encapsulate
            all the necessary information for representing a billboard object.
            This decision was made due to its frequent usage across multiple
            classes involved with the Control Panel Client. By addressing this
            early in the development process, we aimed to mitigate future risks
            effectively.
            <br></br>
            <br></br>
            To adhere to TDD principles, our team divided the test writing and
            fulfillment responsibilities between myself and a team member. Test
            fulfillment was considered achieved when the tests passed in the
            JUnit output window (note: JUnit is the testing utility available in
            IntelliJ). Once fulfilled, the tests could be refactored and
            re-tested to ensure they maintained the same functionality.
            Throughout the development process, as the application grew, these
            tests, along with others, were continuously run to ensure the
            desired behavior of the class.
            <br></br>
            <br></br>
            My personal experience with TDD was overwhelmingly positive for
            several reasons. Firstly, the process compelled me to conceptualize
            and plan the entire class and its uses before writing any methods.
            It served as a blueprint, allowing me to assert and validate
            requirements only after all tests had passed. This ensured that once
            the tests were successful, the functionality was considered
            complete, and any additional work focused on improving the code.
            <br></br>
            <br></br>
            Secondly, TDD provided a sense of peace of mind while working on the
            class. Knowing that the JUnit tests were passing gave me confidence
            that the related methods were functioning as intended. It allowed me
            to concentrate deeply on the problem at hand by abstracting myself
            from the exact inner workings of each function.
            <br></br>
            <br></br>
            Lastly, TDD offered a new perspective for gauging development
            progress. Since tests are written first, it becomes easier to track
            the completion of each method, assuming the project requires a
            testing suite. Having tests written beforehand ensures that at the
            end of each development cycle, each method has its own test(s). This
            approach is more efficient than estimating development speed
            upfront, as it avoids the potential waste of efforts in implementing
            a function that fails to meet its requirements.
            <br></br>
            <br></br>
            In summary, TDD not only improved the overall quality of the
            codebase but also provided a structured and focused approach to
            development. It encouraged thoughtful planning, instilled confidence
            through passing tests, and offered valuable insights into
            development progress.
            <br></br>
            <br></br>
            <h2>Requests, Responses and Mocking</h2>
            <br></br>
            In the MVC pattern, the controller assumes the responsibility of
            modifying the model. In the context of the BMS (Billboard Management
            System), it is the control panel GUI that empowers users to perform
            actions such as creating, editing, importing, and scheduling
            billboards on the viewer. Consequently, a significant portion of the
            information exchange occurs from user interactions on the control
            panel, which is then transmitted to the server. Apart from billboard
            management, users also have the ability to create and assign
            privileges to other users for specific features. Given the extensive
            range of features that involve modifying the model, it became
            imperative for us to establish a standardized approach for passing
            data from the control panel to the server. To address this
            requirement, we implemented a <b>request</b> and <b>response</b>{" "}
            pattern between these two applications, extending its implementation
            to the database interface as well. This pattern facilitated
            consistent and structured data exchange, offering several immediate
            benefits to our system's functionality and performance.
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
