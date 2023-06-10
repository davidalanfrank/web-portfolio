import { React, useState, useEffect } from "react";
import "./portfolio.scss";
import PortfolioRow from "./portfolioRow/PortfolioRow";
import {
  capstonePortfolio,
  bbsystemPortfolio,
  dustygaragePortfolio,
  videorentalsystemPortfolio,
} from "../data";
import { blue } from "@material-ui/core/colors";
import { useHistory } from "react-router-dom";

export default function Portfolio() {
  const [selected, setSelected] = useState([]);
  const [selectedData, setData] = useState([]);
  const projectData = [bbsystemPortfolio];
  const history = useHistory();

  function goToPage(seeMore) {
    //console.log("###goToPage", seeMore);
    //console.log("###did this webhook work?");
    history.push(seeMore);
  }

  useEffect(() => {
    let seeMoreRoute = null;
    switch (selected) {
      // case 1:
      //   setData(capstonePortfolio);
      //   seeMoreRoute = capstonePortfolio.see_more;
      //   break;
      case 1:
        setData(bbsystemPortfolio);
        seeMoreRoute = bbsystemPortfolio.see_more;
        break;
      // case 3:
      //   setData(dustygaragePortfolio);
      //   seeMoreRoute = dustygaragePortfolio.see_more;
      //   break;
      // case 4:
      //   setData(videorentalsystemPortfolio);
      //   seeMoreRoute = videorentalsystemPortfolio.see_more;
      //   break;
      default:
    }

    if (seeMoreRoute) {
      goToPage(seeMoreRoute);
    }
  }, [selected]);
  return (
    <div className="portfolio" id="portfolio">
      <div className="container">
        <div className="article">
          <h1>Projects</h1>
          <table>
            {projectData.map((d) => (
              <PortfolioRow
                date={d.date}
                title={d.title}
                seeMore={d.see_more}
                tech={d.tech}
                active={selected === d.id}
                setSelected={setSelected}
                id={d.id}
              />
            ))}
          </table>
        </div>
      </div>
    </div>
  );
}
