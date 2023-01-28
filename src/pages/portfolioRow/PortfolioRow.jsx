import React from "react";
import "./portfolioRow.scss";

export default function PortfolioRow({
  id,
  title,
  tech,
  date,
  navOnClick,
  active,
  setSelected,
  see_more
}) {
  return (
    <tr
      className={active ? "portfolioRow active" : "portfolioRow"}
      onClick={() => setSelected(id)}
    >
      <span  >
        <td>
          <div>
            {title}
            <p>
              <b>
                <span className="desc">
                  {date} | {tech.substring(0, 50)}
                </span>
              </b>
            </p>
          </div>
        </td>
      </span>
    </tr>
  );
}
