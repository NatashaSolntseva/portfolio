import React, { useState } from "react";
import { Element } from "react-scroll";

import "./portfolio.css";

import { Header } from "../../shared/header/header";
import { Paragraph } from "../../shared/paragraph/paragraph";

import { PORTFOLIO__DATA, CATEGORIES } from "../../constants/portfolio";
import { PortfolioTabs } from "../../features/portfolioTabs/portfolioTabs";
import { PortfolioCard } from "../../shared/portfolioCard/portfolioCard";

export const Portfolio = ({ data }) => {
  const [portfolioData, setPortfolioData] = useState(PORTFOLIO__DATA);

  const renderCards = (data) => {
    return data.map((item, index) => (
      <PortfolioCard data={item} key={`${index}_card`} />
    ));
  };

  const handleTabClick = (category) => {
    if (category === CATEGORIES[0]) {
      setPortfolioData(PORTFOLIO__DATA);
    } else {
      const filteredData = PORTFOLIO__DATA.filter(
        (item) => item.category === category
      );
      setPortfolioData(filteredData);
    }
  };

  return (
    <Element name="portfolio" className="portfolio">
      <Header header={data.header} />
      <Paragraph aling="center" text={data.title} />
      <PortfolioTabs onClick={handleTabClick} />
      <div className="portfolio__container">{renderCards(portfolioData)}</div>
    </Element>
  );
};
