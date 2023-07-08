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
        <ul>
          <li>All categories</li>
          <li>UI Design</li>
          <li>Web Templates</li>
          <li>Logo</li>
          <li>Branding</li>
        </ul>
      </nav>
    </Element>
  );
};
