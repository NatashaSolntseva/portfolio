import React from "react";

import "./portfolioCard.css";

import { ReactComponent as PlusIcon } from "./icons/plus.svg";

export const PortfolioCard = ({ data }) => {
  return (
    <div className="portfolioCard">
      <a href={data.link} className="portfolioCard__container">
        <img className="portfolioCard__img" src={data.img} alt={data.img}></img>
        <div className="portfolioCard__overlay">
          <PlusIcon />
        </div>
      </a>
    </div>
  );
};
