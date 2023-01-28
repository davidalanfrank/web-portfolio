import React from "react";
import "./dusty.scss";

export default function dusty() {
  return (
    <div className="dusty" id="dusty">
      <div className="container">
        <div className="article-pad-l"></div>
        <div className="article">
          <h1>Dusty Garage</h1>
          <h2>Unit: Rapid Web Application Development</h2>

          <div className="heading-date">Completed on 20 October, 2019</div>

          <body>
            <p>
              I've always loved markets. My family and I would often visit the
              Yungabarra rural market, about 2 hours away from our family home
              in Cairns. On reflection of what I enjoyed most the buzz felt from
              the attendees from some equal exchange of value.
              <br></br>
              <br></br>A pottery designs and spins several pieces in her
              workshop, packs them and takes to the marketplace, sets up her
              stall to present her merchandise. People pass by, impressed and
              filled with a sense of pleasure from the beautify revealed
              craftswomanship. A couple that have recently purchased their first
              home fall in love with the works and decide to inspect and then
              purchase one of his chairs. The potters efforts are rewarded and
              both the people viewing the chairs and couple receive some a
              degree of value.
              <br></br>
              <br></br>
              In the online marketplace world, users are attracted to the
              potential of discovering value, either as a buyer or a seller.
              They are satisfied when they acquire this value and are willing to
              stay in the ecosystem if there is this 'buzz' amongst users in the
              marketplace. I've often wondered what the experience of using ebay
              in the 90's would be like and if this same sense of excitement
              would be present.
            </p>
            <br></br>
            <br></br>
            <h2>Motivation</h2>
            The development of the dirty garage was an exercise in rapid
            development of the architecture behind a p2p marketplace. During the
            semester, individual students were asked to come up with an idea,
            complete the front-end design (wireframing) and then develop them as
            static webpages. In the final four weeks of semester, students
            formed groups together for the final assignment, decide on a
            marketplace with the most potential and then design, develop and
            deploy the application before the end of semester.
            <br></br>
            <br></br>
            The dusty garage is a marketplace for users to buy and sell tools.
            Users can register with the marketplace and list a tool that they
            would like to sell. Other users can then make Bids on those tools
            with dollar values of how much they would like to pay; the winner
            will be the receiver of the tool. Users can be both buyers and
            sellers without changing their account status.
            <br></br>
            <br></br>
            The deployed application[LINK] is near to fully functional, mainly,
            transactional functionality were deemed out of scope. Some of the
            functionalities of the marketplace include:
            <ol>
              <li>User login/register</li>
              <li>Listing tools</li>
              <li>Tool search</li>
              <li>Making bids</li>
              <li>User dashboard</li>
            </ol>
            <br></br>
            <br></br>
            <h2>Tech choices for rapid development</h2>
            <p>
              The premise of this project was to build the marketplace rapidly.
              As a developer, it is exciting to have the POWER(button that says
              power from myhero) to execute on business ideas quickly and
              inexpensively to get some idea of the feasibility of an MVP. To
              shorten the time between the birth of the idea from the stream of
              consciousness to the first user on the platform, the choice of
              technologies one should use will greatly impact this. Though there
              is often a trade off in speed for robustness and that is so
              context dependant that I'll consider that discussion out of scope
              for this writing. Thus, we shall continue this discussion using
              this ficitisous business case as a scope for the project. It
              follows:
            </p>
            <div className="business-case-container">
              <p>
                A friend of a friend has a small amount of capital they wish to
                use to develop a (you guessed it) MVP for a tools buy/sell
                marketplace. They want to receive some indication of the
                viability of this idea in 6 months time. Therefore, they need a
                useable application online in just 4 weeks. Some front-end
                design has already been developed as static html (bootstrap)
                pages.
              </p>
            </div>
            <p>
              The main technologies we chose to use for this project were: -
              Flask framework (python) - Syntactically python is fairly
              straightforward to understand and can be self-taught easily to
              people who are relatively non-techincal. Application frameworks
              also offer an existing architecture pattern to follow that allows
              the developer to abstract away from lower-level mechincs of the
              application. Some frameworks also offer a development server that
              runs on the developers [localhost](http://localhost), allowing
              them to see very close to what they application will look like
              after deployment *(*eg. Gunicorn- WSGI HTTP server for flask or
              Create-react-app for react.jsj). - Heroku - There aren't many
              cloud services that offer an ongoing free server instance, thus,
              heroku offers a solution since our customer has only a small
              amount of capital. Using a cloud services also offers an option to
              upgrade the resources to that instance, say for example the
              marketplace was a major success, there would be an opportunity to
              scale up the application to support a higher amount of users.
              <br></br>
              <br></br>
              The dusty garage is deployed on a Heroku Postgres Free Plan
              (LINK). This cloud server instance is designed to for running web
              applications that follow a general model-view-controller
              architecture. In our case, model is the database, the view is the
              actual marketplace that the user sees, including all query results
              to the db that are initiated by the user and controller is the
              functions associated to actions that can be made on the
              marketplace that modify rows in the model (see fig1).
            </p>
            <p></p>
            {/* <img src="../assets/dusty_garage.png" alt="dusty garage" className="fig1"></img> */}
            <p>Caption about the figure</p>
            <h2>Developmment workflow</h2>
            <h3>What we did</h3>
            <p>
              Dusty garage developed started locally in a modular way by adding
              pages to the "base" application via flask @app.routes. By doing
              this, we were able to order the project containing related routes
              in the same python files. Flask offers a library for handling user
              session management via the flask_login module. This allowed us
              easy implementation of an authentication that covered the context
              of the entire application. To do this, all that @login_required to
              a route that can only be accessed when a user is currently logged
              in. Our strategy was to develop the application as long as
              possible locally, as to shorten the feedback loop of discovering
              what we still needed to work on. To do this, we mocked the cloud
              database locally using a local sqllite database with Flasks SQL
              Alchemy. By halfway through the third week, we were ready to
              deploy the application and thus, had our first interaction with
              the heroku CLI. Using this terminal style interface was
              straightforward, since it uses shell language with syntax similar
              to UNIX shell. Though the CLI was familiar, the deployment process
              was the first time for all of the members in our team. We found
              configuring the database via the CLI wasn't as easy as we expected
              due to a more complicated process to ensure we had the right
              configuration for the postgres DB in our application code aswell
              as the configuration on the heroku instance. This stretched out
              the deployment for 2 days before we had the application working as
              we expected.
            </p>
            <h3>What were the results</h3>
            {/* <link>check it</link> */}
            <h3>Summary</h3>
            <p>
              At risk of sounding like a heroku shill, the free deployment
              service made for an easily manageable and accessible web
              application. All team were able to access the heroku CLI remotely
              which mean that we weren't required to be together during the
              development process (althoguh this is by no means a unique
              features to heroku). In hindsight, deploying the application
              sooner to develop the marketplace as it stands on the cloud
              service would have been advantageous because it would minimise the
              unknown compatibility issues that arose when we tried to switch
              from our SQLlite local database to the one hosted on the heroku
              instance. This might have been different if the service had costs
              associated with it since our stakeholders had only small amount of
              capital. But heroku is free. We should have exploited that sooner.
              The rapid development process we followed allowed us to get a
              deployed application that stayed true to our business case in
              terms of time, costs and functionality. However, aside from the
              marketplace not having any way to process transactions, it was
              also not released with a test suite. Though testing was not a
              requirement for the business cases, I would not feel comfortable
              putting an application in the hands of users without having some
              coverage of unit testing. My final thoughts would be that the
              process we followed works great for developing an MVP, but
              potentially expensive re-design if you wanted to scale
              considerably.
            </p>
          </body>
        </div>
      </div>
    </div>
  );
}
