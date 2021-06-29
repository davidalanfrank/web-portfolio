import { React, useState, useEffect } from "react";
import "./portfolio.scss";
import PortfolioList from "../portfolioList/PortfolioList";
import {
  capstonePortfolio,
  bbsystemPortfolio,
  stocksPortfolio,
  dirtygaragePortfolio,
  videorentalsystemPortfolio,
} from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("capstone");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "capstone",
      title: "Capstone",
    },
    {
      id: "bbsystem",
      title: "Billboard System",
    },
    {
      id: "stocks",
      title: "Stocks Client",
    },
    {
      id: "dirtygarage",
      title: "Dirty Garage",
    },
    {
      id: "videorentalsystem",
      title: "Video Rental System",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "capstone":
        setData(capstonePortfolio);
        break;
      case "bbsystem":
        setData(bbsystemPortfolio);
        break;
      case "stocks":
        setData(stocksPortfolio);
        break;
      case "dirtygarage":
        setData(dirtygaragePortfolio);
        break;
      case "videorentalsystem":
        setData(videorentalsystemPortfolio);
        break;
      default:
        setData(capstonePortfolio);
    }
  }, [selected]);
  return (
    <div className="portfolio" id="portfolio">
      <h1>Projects</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      {data.map((d) => (
        <div className="container">
          <div className="left">
            <h2>{d.title}</h2>
            <h3>{d.tech}</h3>
            <body>{d.desc}</body>

            <div className="buttonContainer">
              <button className="button">More details</button>
              <div className="divider"></div>
              <button className="button">View Code</button>
              <div className="divider"></div>
              <button className="button">See Demo</button>
            </div>
          </div>

          <div className="right">
            <div className="imgContainer">
              <img src={d.img} alt="relating to the selected project"></img>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
