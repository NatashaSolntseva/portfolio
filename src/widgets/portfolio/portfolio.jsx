import React from "react";
import { Element } from "react-scroll";

import "./portfolio.css";

import { Header } from "../../shared/header/header";
import { Paragraph } from "../../shared/paragraph/paragraph";

export const Portfolio = ({ data }) => {
  return (
    <Element name="portfolio" className="portfolio">
      <Header header={data.header} />
      <Paragraph aling="center" text={data.title} />
      <nav>
        <ul className="portfolio__nav">
          <li className="portfolio__nav-item">All categories</li>
          <li className="portfolio__nav-item">UI Design</li>
          <li className="portfolio__nav-item">Web Templates</li>
          <li className="portfolio__nav-item">Logo</li>
          <li className="portfolio__nav-item">Branding</li>
        </ul>
      </nav>
    </Element>
  );
};
