import React from "react";
import "./blueprint.scss";
import SyntaxHighLighter from "react-syntax-highlighter";
import { useHistory } from "react-router-dom";
import TableComponent from "../components/table/Table";

export default function Blueprint() {
  const history = useHistory();
  const goBack = () => {
    history.push("#portfolio");
  };

  function openHoverOver() {

  }
  return (
    <div className="blueprint" id="blueprint">
      <div className="container">
        <div className="article-pad-l"></div>
        <div className="article">
          <h1>Why Blueprint?</h1>
          <h2>
            Building individualised systems against unhealthy social
            philosophies
          </h2>
          <div className="heading-date">Completed on 16 Oct, 2023</div>
          <div style={{ display: "flex" }}></div>
          <h3>What is Project Blueprint ?</h3>
          <p>
            If you haven’t heard of Bryan Johnson, he’s a tech entrepreneur,
            having founded, sold the payments company
            <a href="https://en.wikipedia.org/wiki/Braintree_(company)">
              Braintree-venmo
            </a>
            . Johnson initially came across my radar when I encountered his more
            recent company{" "}
            <a href-="https://en.wikipedia.org/wiki/Kernel_(neurotechnology_company)">
              Kernel
            </a>
            , a non-intrusive brain-machine interface with the goal of enhancing
            human cognition and improving our understanding of neurological
            disorders.
            <br></br>
            <br></br>
            Right now, most of the world knows him as the founder and main test
            subject in Project Blueprint, a lifestyle and philosophy that aims
            to increase human health span, as well as overall longevity.
            <br></br>
            <br></br>I recently read a book by entrepreneur Balaji Siravasan
            called ‘The Network State’. This book presented a novel idea, and
            novel ideals require definitions with varying degrees of
            resolution.I’m going to take a technique by Siravasan and define
            Blueprint using one sentence, one paragraph and one essay. The
            latter I'll outsource to the recent article discussing this topic by
            Time magazine which provides a thorough albeit cynical view of the
            project.
            <br></br>
            <br></br>
            Project Blueprint in one sentence:
            <br></br>
            <br></br>
            "Blueprint Protocol" is a lifestyle approach devised by tech
            entrepreneur Brian Johnson to promote health and longevity by
            encouraging the monitoring of specific biological indicators, or
            biomarkers, from various human body systems, enabling the tailoring
            of diet, exercise, and health therapies for optimal longevity.
            <br></br>
            <br></br>
            Project Blueprint in one paragraph:
            <br></br>
            <br></br>
            The Blueprint Protocol, developed by centimillionaire tech
            entrepreneur Johnson, is an intricate life-extension system aiming
            to significantly reduce biological age through an intensive regimen
            overseen by a team of doctors. Using a wealth of data, the protocol
            prescribes Johnson with 111 daily pills, various health-monitoring
            gadgets, and a strict diet and exercise routine, all with the
            objective of keeping his body in a youthful state. This meticulous
            approach extends to a belief in achieving a form of immortality by
            transforming the human body through a combination of technology,
            science, and data. The underlying philosophy of Blueprint is goal
            alignment, which seeks to align trillions of body cells for optimal
            health and youth by automating important health functions and
            eliminating self-destructive behaviours. Johnson’s approach and the
            Blueprint Protocol signify a broader interest in and pursuit of
            age-reversal and life-extension technologies, although they face
            scepticism and controversy within the scientific community.
            <br></br>
            <br></br>
            Project Blueprint in one essay, via{" "}
            <a href="https://time.com/6315607/bryan-johnsons-quest-for-immortality/">
              Times.
            </a>
            <br></br>
            <br></br>
            The guiding principles of this project, taken straight from
            <a href="https://blueprint.bryanjohnson.co/">
              blueprint.bryanjohnson.co
            </a>{" "}
            are as follows:
            <div style={{ display: "flex" }}>
              <ul style={{ minWidth: "20rem" }} className="list-style">
                <h3>Embrace:</h3>
                <li>- Systems over willpower</li>
                <li>- Data over human opinion</li>
                <li>- Harmony over addiction</li>
                <li>- Compounded rates of self-improvement</li>
                <br></br>
                <h3>Rebel Against:</h3>
                <li>- Addictive algorithms</li>
                <li>- Corporate profiteering at your detriment</li>
                <li>- Social norms encouraging bad behaviour</li>
                <li>- Self-aided destruction (SAD)</li>
              </ul>
              <div className="gallery-container">
                <div>
                  <img
                    className="hl-bb figure"
                    src="../assets/super-vege.jpg"
                  ></img>
                       <p  style={{ color: "#d48cba" }}>Super vege, aka breakfast.</p>
         
                </div>

                <div>
                  <img
                    className="hl-bb figure"
                    src="../assets/green-nut.jpg"
                  ></img>
              <p style={{ color: "#d48cba" }}>Nutty pudding and green giant (dry mix).</p>
                </div>

                <div>
                  <img
                    className="hl-bb figure"
                    src="../assets/pills-1.jpg"
                  ></img>
                    
                    <p style={{ color: "#d48cba" }}>Daily pills (taken upon waking).</p>

                </div>
              </div>
            </div>
            <h3>The journey so far</h3>
            Initially, I approached Project Blueprint with a degree of
            scepticism, but several intriguing prospects prompted me to delve
            deeper into understanding its core objectives and workings. Firstly,
            my preliminary research into Johnson’s prior endeavors quickly
            revealed his aptitude for tackling challenging, high-impact problems
            within the field of engineering. His history of establishing
            successful companies served as compelling evidence of his
            capabilities.
            <br></br>
            <br></br>
            <div className="mobile-gallery-container">
              <img className="hl-bb figure" src="../assets/pills-1.jpg"></img>
              <span className="figure-desc">
                Daily pills (taken upon waking).
              </span>
              <img
                className="hl-bb figure"
                src="../assets/super-vege.jpg"
              ></img>

              <span className="figure-desc">Super vege, aka breakfast.</span>
              <img className="hl-bb figure" src="../assets/green-nut.jpg"></img>
              <span className="figure-desc">
                Nutty pudding and green giant (dry mix)
              </span>
              <br></br>
            <br></br>
            </div>
       
            Lastly, I've always been drawn to systems that could make my life
            both more convenient and higher quality. This interest has honed my
            ability to sniff out false promises and scams. Initially, my "snake
            oil" radar did ping when I first came across Blueprint. However, as
            I dug deeper and discovered the rigorous, data-driven approach
            behind the protocol, my scepticism gradually faded. Eventually, I
            found myself eager and willing to give Blueprint a genuine try.
            <br></br>
            <br></br>
            To analyse my own reasons for why this approach is attractive to me,
            I’d like to discuss why I decided to follow this protocol, albeit,
            falling short of the full protocol due to the resource requirements
            needed to participate fully. Thus I shall refer to my implementation
            of this system as ≈Blueprint, since this is an approximation of this
            system due to resource limitations.
            <br></br>
            <br></br>
            Before diving into the main topic, I want to note that I've been
            following ≈Blueprint for about four months now. In this blog post,
            I'll share how these principles have manifested in my day-to-day
            life. But before we get into that, allow me to open my thought
            processes behind this journey.
            <br></br>
            <br></br>
            There are several choices in life that are more like choosing a game
            to play rather than what one morally should do.
            <br></br>
            <br></br>
            Obviously, some games clearly go against what is good for the
            individual, at least in a Darwinian sense. Depending on the value
            hierarchy of the person; the community or state may also play a role
            in which game a person is likely to play. Let’s say for example, for
            whatever reason, Russian Roulette is a game with which someone
            decides to play. It would be wise for that player to consider the
            likely longevity that game might be enjoyed. This scenario lends
            itself to the popular philosophy of ‘Live fast, die young’ or ‘you
            can sleep when you’re dead’ or perhaps ‘I’d rather eat custard than
            live longer because food is life’. When acted out, these
            philosophies and related games may lead to a shorter in-game
            experience.
            <br></br>
            <br></br>
            Let's take a playful yet pointed look at who really benefits from
            these live-fast philosophies. Let’s consider that their margins of
            these entities may be positively correlated to the detriment of the
            players. What of the moment the bars and club owners, the drug
            dealers, who’s pockets are lined by the cries of ‘one more drink’
            and ‘another bag?’. The CEO’s and shareholders of some large
            companies foster a perfect incubator for overwork - rewarding those
            who couple their self-worth to their ability to sacrifice well-being
            for the corporation (under the guise of slogans for ‘team’ and
            ‘camaraderie’).Lastly, consider the fast-food industry, the leading
            purveyors of the 'Eat Death' philosophy. They're clearly coming out
            on top in the battle between our natural cravings for carb-rich
            foods and healthier options.
            <br></br>
            <br></br>I am not proclaiming that these entities are inherently
            evil. Rather, they each represent an ecosystem that has been built
            up over years due to the profitability that comes from exploiting
            human need to be social, feel good, achieve status and lower
            anxiety. Blueprint serves as a platform for staging a personal
            rebellion against these exploitative practices and behaviours. It
            encourages us to engage in life choices that run counter to these
            harmful societal norms, all while aligning with our long-term goals
            and natural biological systems.
            <br></br>
            <br></br>A long life does not equal a rich life; but a short life
            can be both rich and a missed opportunity.
            <br></br>
            <br></br>I chose to develop an approximate Blueprint protocol
            because it is a game I want to play and it conveniently serves as a
            complement to the other games I enjoy to play.
            <br></br>
            <br></br>The goal of this protocol is to make it an automated
            process, like brushing your teeth and having a shower. It's
            something that just happens, not that you actively do. You set up
            the system, which requires some initiatlistion effort and
            acquisition cost. But once it's set up, you just run the algorithm,
            like brushing your teeth and having a shower.
            <br></br>
            <br></br>
            If there is a sense in this half-baked rationale that I am not
            susceptible to the social pressure to abandon this routine due to
            flow against the social norm, it is then necessary to note that this
            is not the case. There is negative emotion that I experience when
            following this protocol and I do care about people not liking that I
            do this, because I am human. I forgive myself for this. Where it is
            difficult is when I do not follow the actions that I want to take,
            modifying my behaviours in reaction to this societal pressure.
            <br></br>
            <br></br>
            Now that the manifesto is out of the way. Onto something a little
            bit more pragmatic. Following Blueprint for me is more of fitting a
            new map to a pre-existing and similar territory. It offers a
            validated and reproducible apparatus for a person who naturally
            leans to the side of all or nothing in comparison to a happy middle.
            The following table breaks down some pre-existing activities and
            behaviours that I use to align myself with this protocol.
            <br></br>
            <br></br>
            <TableComponent /> {/* Use the imported table component */}
            During editing of this blog i've tried to reduce the usage of tech
            'buzz words', which made it difficult to covey certain concepts for
            how I think about blueprint. But briefly, for software people,
            Blueprint to me is like an Abstract Class where the implementation
            is dependent on the context of an individuals biological needs.
            <br></br>
            <br></br>
          </p>
          <br></br>
        </div>
      </div>
    </div>
  );
}
