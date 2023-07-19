import React from "react";

import "./portfolioTabs.css";

import { CATEGORIES } from "../../constants/portfolio";

export const PortfolioTabs = ({ onClick }) => {
  const tabs = CATEGORIES.map((item, index) => (
    <li className="portfolioTabs__tab" key={item} onClick={() => onClick(item)}>
      {item}
    </li>
  ));

  return (
    <nav>
      <ul className="portfolioTabs">{tabs}</ul>
    </nav>
  );
};
