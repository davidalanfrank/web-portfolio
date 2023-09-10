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
    console.log("###hoverover here");
  }
  return (
    <div className="blueprint" id="blueprint">
      <div className="container">
        <div className="article-pad-l"></div>
        <div className="article">
          <h1>Why Blueprint?</h1>
          <h2>An anti-pattern to less healthy social philosophies</h2>
          <div className="heading-date">Completed on 31 May, 2020</div>
          <p>
            If you haven’t heard of Bryan Johnson, the{" "}
            <span onMouseOver={openHoverOver}>TLDR</span> of him is that he’s a
            tech entrepreneur, having founded, sold (and by doing so reached
            post-economic status) the payments company{" "}
            <a href="https://en.wikipedia.org/wiki/Braintree_(company)">
              Braintree-venmo
            </a>
            . Johnson initially came across my radar when I encountered his next
            company{" "}
            <a href-="https://en.wikipedia.org/wiki/Kernel_(neurotechnology_company)">
              Kernel
            </a>
            , a non-intrusive brain-machine interface with the goal of enhancing
            human cognition and improving our understanding of neurological
            disorders.
            <br></br>
            <br></br>
            Right now, most of the world knows him as the founder and main test
            subject in Project Blueprint, a health/lifestyle protocol that aims
            to increase human health span, as well as overall longevity. The
            guiding principles of this project, taken straight from{" "}
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
              <div>
                <img
                  className="hl-bb figure"
                  src="../assets/super-vege.jpg"
                ></img>
                <img className="hl-bb figure" src="../assets/bgm.jpg"></img>
                <img className="hl-bb figure" src="../assets/pills-1.jpg"></img>
              </div>
            </div>
            In an attempt to analyse my own reasons as to why this
            approach/lifestyle/choice is attractive to me, I’d like to talk a
            little bit about why I decided to follow this protocol, albeit,
            falling short of the the full protocol due to the resource
            requirements needed to participate fully. Thus I shall refer to my
            implementation of this system as ≈Blueprint, since this is an
            approximation of this system due to resource limitations.
            <br></br>
            <br></br>
            As an aside, i’ve been following this lifestyle for 4 months now. In
            the this post i’ll talk about how these principals looks in my own
            life. But first, let me open source my thinking for a little bit.
            <br></br>
            <br></br>
            There are several choice in life that are more like choosing a game
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
            itself to the philosophy of ‘Live fast, die young’ or ‘you can sleep
            when you’re dead’ or perhaps ‘I’d rather eat custard than live
            longer because food is life’. When acted out, these philosophies and
            related games may lead to a shorter in-game experience.
            <br></br>
            <br></br>
            Let us be bold for a moment to try to associate which entities are
            the real beneficiaries of these philosophies. Let’s consider that
            their margins may be positively correlated to the detriment of the
            players. What of the moment the bars and club owners, the drug
            dealers, who’s pockets are lined by the cries of ‘one more drink’
            and ‘another bag?’. The CEO’s and shareholders of some large
            companies who foster a perfect incubator for overwork - rewarding
            those who couple their self-worth to their ability to sacrifice
            well-being for the corporation (under the guise of slogans for
            ‘team’ and ‘camaraderie’). Finally, the generators of high-fat,
            high-sugar fast food, the main contributors of ‘Eat Death’, clear
            winners in the fight between them and peoples physiological desire
            for carbohydrate rich food.
            <br></br>
            <br></br>I both jokingly, albeit with some commitment, rebel against
            these entities by choosing to play games that act as an anti-pattern
            to these unhealthy cultural norms and serve my own long-term in-game
            experience.
            <br></br>
            <br></br>A long life does not equal a rich life; but a short life
            can be both rich and a missed opportunity.
            <br></br>
            <br></br>I chose to follow blueprint because it is a game I want to
            play and it conveniently serves as a complement to the other games I
            enjoy to play.
            <br></br>
            <br></br>
            You might say that this require too much cognitive effort to be
            worth investing in this longevity pursit. That you'd rather live a
            shorter life and focus on the things that make you happy or that are
            meaningful to you then spend your precious brain cycles on this.
            This blog is in fact a datapoint for how much cognative effort does
            go into this. The goal of this protocol is to make it an automated
            process, like brushing your teeth. It's something that is just
            happens, not that you actively do. You set up the system, which
            requires some initiatlistion effort and aquasition cost. But once
            it's set up, you just run the algorithm, like brushing your teeth
            and having a shower.
            <br></br>
            <br></br>
            If there is a sense in this half-baked rational that I am not
            susceptible to the social pressure to abandon this routine due to
            flow against the social norm, it is then necessary to note that this
            is not the case. There is negative emotion that I experience when
            following this protocol and I do care about people not liking that I
            do this, because I am human. I forgive myself for this. Where it is
            difficult is when I do not follow the actions that I want to take,
            modifying my behaviors in reaction to this societal pressure. That I
            do not forgive.
            <br></br>
            <br></br>
            Now that the manifesto is out of the way. Now onto something a
            little bit more pragmatic. I think in someways, following Blueprint
            for me is more of fitting a new map to a pre-existing and similar
            territory. It offers a validated and reproduceable apparutus for a
            person who naturally leans to the side of all or nothing in
            comparison to a happy middle. The following table breaks down some
            pre-existing and activies, behaviours that I use to align myself
            with this protocol.
            <TableComponent /> {/* Use the imported table component */}
            some common misconcpetions. My take on blueprint, which is an echo
            of the intention of the creator is to derive a system that takes
            care of a persons physical and mental health in a sustainable way
            that uses the measurements from the body rather than oppinion or
            acidotal infomration to drive diet, beahviors and exercise
            requirements. Blueprint to me is not about a zealot following of a
            reasuem, but rather a data driven approach to daily happiness in the
            games I choose to play.
          </p>
          <br></br>
        </div>
      </div>
    </div>
  );
}
