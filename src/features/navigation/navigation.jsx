import React from "react";

import { Link } from "react-scroll";

import HomeIcon from "./images/home.svg";
import ContactIcon from "./images/contact.svg";
import CVIcon from "./images/cv.svg";
import PortfolioIcon from "./images/portfolio.svg";

import "./navigation.css";

export const Navigation = () => {
  return (
    <nav className="nav">
      <Link
        className="nav__item"
        activeClass="active"
        to="home"
        smooth={true}
        duration={500}
      >
        <img src={HomeIcon} alt="HomeIcon" />
      </Link>
      <Link className="nav__item" to="work" smooth={true} duration={500}>
        <img src={CVIcon} alt="CVIcon" />
      </Link>
      <Link className="nav__item" to="portfolio" smooth={true} duration={500}>
        <img src={PortfolioIcon} alt="PortfolioIcon" />
      </Link>
      <Link className="nav__item" to="contacts" smooth={true} duration={500}>
        <img src={ContactIcon} alt="ContactIcon" />
      </Link>
    </nav>
  );
};
