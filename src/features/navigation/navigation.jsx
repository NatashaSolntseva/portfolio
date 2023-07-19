import React from "react";

import { Link } from "react-scroll";

import { ReactComponent as HomeIcon } from "./images/home.svg";
import { ReactComponent as ContactIcon } from "./images/contact.svg";
import { ReactComponent as CVIcon } from "./images/cv.svg";
import { ReactComponent as PortfolioIcon } from "./images/portfolio.svg";

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
        <HomeIcon className="nav__icon" />
      </Link>
      <Link className="nav__item" to="work" smooth={true} duration={500}>
        <CVIcon className="nav__icon" />
      </Link>
      <Link className="nav__item" to="portfolio" smooth={true} duration={500}>
        <PortfolioIcon className="nav__icon" />
      </Link>
      <Link className="nav__item" to="contacts" smooth={true} duration={500}>
        <ContactIcon className="nav__icon" />
      </Link>
    </nav>
  );
};
