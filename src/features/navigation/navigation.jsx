import React from "react";
import { Tooltip } from "react-tooltip";

import { Link } from "react-scroll";

import { ReactComponent as HomeIcon } from "./images/home.svg";
import { ReactComponent as ContactIcon } from "./images/contact.svg";
import { ReactComponent as EducationIcon } from "./images/cv.svg";
import { ReactComponent as PortfolioIcon } from "./images/portfolio.svg";
import { ReactComponent as WorkIcon } from "./images/work.svg";

import "./navigation.css";

export const Navigation = () => {
  return (
    <nav className="nav">
      <Link
        className="nav__item"
        to="home"
        smooth={true}
        duration={500}
        spy={true}
        activeClass="active"
        data-tooltip-id="tooltip-home"
        data-tooltip-content="Home"
      >
        <HomeIcon className="nav__icon" />
        <Tooltip
          className="tooltip"
          classNameArrow="example-arrow"
          id="tooltip-home"
        />
      </Link>
      <Link
        className="nav__item"
        to="work"
        smooth={true}
        duration={500}
        spy={true}
        activeClass="active"
        data-tooltip-id="tooltip-work"
        data-tooltip-content="Work"
      >
        <WorkIcon className="nav__icon" />
        <Tooltip
          className="tooltip"
          classNameArrow="example-arrow"
          id="tooltip-work"
        />
      </Link>
      <Link
        className="nav__item"
        to="education"
        smooth={true}
        duration={500}
        spy={true}
        activeClass="active"
        data-tooltip-id="tooltip-education"
        data-tooltip-content="Education"
      >
        <EducationIcon className="nav__icon" />
        <Tooltip
          className="tooltip"
          classNameArrow="example-arrow"
          id="tooltip-education"
        />
      </Link>
      <Link
        className="nav__item"
        to="portfolio"
        smooth={true}
        duration={500}
        spy={true}
        activeClass="active"
        data-tooltip-id="tooltip-portfolio"
        data-tooltip-content="Portfolio"
      >
        <PortfolioIcon className="nav__icon" />
        <Tooltip
          className="tooltip"
          classNameArrow="example-arrow"
          id="tooltip-portfolio"
        />
      </Link>
      <Link
        className="nav__item"
        activeClass="active"
        to="contacts"
        smooth={true}
        duration={500}
        spy={true}
        data-tooltip-id="tooltip-contacts"
        data-tooltip-content="Contacts"
      >
        <ContactIcon className="nav__icon" />
        <Tooltip
          className="tooltip"
          classNameArrow="example-arrow"
          id="tooltip-contacts"
        />
      </Link>
    </nav>
  );
};
