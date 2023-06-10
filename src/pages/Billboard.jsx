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
                  <h3>1. Billboard Control Panel</h3>
                </li>{" "}
                <ul>
                  <li>
                    This application serves as a user interface that enables
                    users to perform Create, Read, Update and Delete (CRUD)
                    operations on Billboards. Additionally, it facilitates the
                    scheduling of a Billboard and allows an admin to create new
                    users and define their permissions over billboard creation
                    and scheduling.
                  </li>
                </ul>
                <li className="li-title">
                  <h3>2. Billboard Viewer</h3>
                </li>
                <ul>
                  <li>
                    This application enables the viewing of a Billboard on a
                    device. While running, this application sends a request for
                    the next scheduled Billboard.{" "}
                  </li>
                </ul>
                <li className="li-title">
                  <h3>3. Billboard Server</h3>
                </li>
                <ul>
                  <li>
                    This application functions as a server for both the
                    Billboard Viewer and Billboard Control Panel applications.
                    It handles incoming requests to carry out various actions,
                    such as creating a new billboard through the Billboard
                    Control Panel and retrieving the next billboard to be
                    displayed through the Billboard Viewer.
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
            <br></br>
            <br></br>
            <ol>
              <li>
                <h3>Readable code</h3>{" "}
              </li>
              In the{" "}
              <a
                href="https://github.com/davidalanfrank/billboard-system/blob/master/src/helpers/Constants.java"
                target="_blank"
              >
                helpers class
              </a>
              we established constants as request "types" to be utilised
              throughout the application. By defining these types early on, we
              were able to create meaningful interfaces between the
              applications, reducing friction during the integration process.
              This approach facilitated the seamless wiring of the applications
              together, enhancing their overall robustness.
              <li>
                <h3>Communication speed </h3>
              </li>
              During the initial months of 2020, this project was undertaken,
              and like many software endeavors during that period, distributed
              teams became the norm for certain projects. As a result, effective
              meetings hinged upon the need for clear and concise communication.
              In discussing a specific exception related to VIEW_SCHEDULE,
              everyone involved had a shared understanding of the context and
              the specific area to investigate, facilitating efficient
              troubleshooting and problem-solving.
              <br></br>
              <br></br>
              <li>
                <h3>Extendability</h3>
              </li>
              After establishing and agreeing upon this pattern, with a few
              initial request/responses as examples, other team members found it
              easy to contribute to the list, as we had a clear understanding of
              its implementation. Furthermore, if a team member desired to
              refactor a specific "request," we had a solid understanding of the
              expected response.
              <br></br>
              <br></br>
              The adoption of this pattern provided a steady progression in the
              development of the control panel and server. However, there came a
              point where it became necessary to receive some data from the
              yet-to-be-implemented database in order to test the server's
              functionality. Given that the requirements for columns and tables
              were still being finalized, we required a flexible and temporary
              solution. To address this, we utilized the MockDatabase.java file,
              which acted as a simulated pseudo-database. This allowed us to
              continue testing the server's request/responses, as most of the
              control panel features involved creating or modifying rows in the
              database.This approach enabled us to make cost-effective changes
              to the database design prior to writing any SQL statements.
            </ol>
            <br></br>
            <br></br>
            <h2>Tracer-bullets</h2>
            <br></br>
            Developing software as an undergraduate student has exposed me to
            various technologies and programming patterns that were previously
            unfamiliar to me. While I had a basic understanding of
            object-oriented programming (OOP) and Java before embarking on this
            project, I lacked knowledge on how to network multiple Java
            applications together. This created uncertainty about whether our
            chosen data encapsulation approach would seamlessly transfer across
            the network. Making critical design decisions early on without
            considering the network implications could result in the need to
            write unnecessary parsers or undertake extensive code refactoring.
            My prior experience had taught me the costliness of reworking
            components within a data pipeline.
            <br></br>
            To mitigate the risks associated with major refactors later on, I
            advocated for the use of tracer bullets. This method served as a
            guide, allowing us to trace how data flows between different
            technologies within the application(s). By understanding this
            process early in the development stage, we could determine how data
            needed to be handled at each point along the pipeline. For instance,
            it was crucial to comprehend how a user's action, such as pressing
            the delete button on the billboard control panel, would translate
            into a MySQL command for removing a row from the billboards table.
            Through the use of tracer bullets, we discovered that we couldn't
            directly pass objects in our request functions to the server.
            Instead, objects had to be explicitly serialized. Consequently, we
            developed a function that would convert our "request" message, which
            included encapsulated data, into bytes that could be transmitted
            across the network to the server.
            <br></br>
            <br></br>
            <h2>Summary</h2>
            <br></br>
            Throughout this project, the value of employing pre-defined design
            patterns became evident. While MVC (Model-View-Controller) is not a
            new pattern, its continued relevance in modern, large-scale
            applications indicates its versatility across a wide range of use
            cases. By embracing Test-Driven Development (TDD), our team
            confidently progressed in the development process, ensuring that the
            first classes we created operated precisely as intended.
            Additionally, our client-server interface utilized a straightforward
            request and response pattern that all software developers could
            easily comprehend, guaranteeing the code's extensibility.
            <br></br>
            Developing the databases early on could have been a costly endeavor,
            considering the potential need for frequent updates and maintenance
            throughout the development process. To address this, we devised a
            clever solution by implementing a Mock database. This allowed us to
            generate pseudo data instead of relying on actual SQL results.
            Consequently, we avoided making changes to tables and scripts while
            the database requirements were still in the formulation phase.
            <br></br>
            Lastly, our utilization of tracer-bullets provided valuable insights
            into how data should flow across our applications, significantly
            reducing the risk of misunderstanding how we should encapsulate our
            data. These tracer-bullets acted as our trusty guides, ensuring our
            data journeyed seamlessly through our system without any confusion
            or misadventures along the way.
          </p>
          <br></br>
        </div>
      </div>
    </div>
  );
}
