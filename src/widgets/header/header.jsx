import React from "react";
import { Element } from "react-scroll";

import "../../styles/index.css";
import "./header.css";

//import ArrowIcon from "./icons/arrow.svg";
import { ReactComponent as ArrowIcon } from "./icons/arrow.svg";

export const Header = () => {
  return (
    <header className="header">
      <Element name="home" class="header__container">
        <h1 className="page__text header__title">
          I'm Natasha Solntseva{" "}
          <span className="header__text-span-color">Front-end</span> Developer
        </h1>
        <p className="page__text header__text">
          I craft websites with a great attention to details.
        </p>
        <div className="links__link">
          <a
            href="https://t.me/UltraNata"
            className="links__container"
            target="_blank"
            rel="noreferrer"
          >
            <span className="links__text">Hire me</span>
            <ArrowIcon className="links__icon" />
          </a>
        </div>
      </Element>
    </header>
  );
};

/*

        <a
          href="https://t.me/UltraNata"
          className="header__link"
          target="_blank"
          rel="noreferrer"
        >
          <span className="header__text-span">Hire me</span>
          <img src={ArrowIcon} alt="arrowIcon" class="header__link-icon" />
        </a>
        
        */
