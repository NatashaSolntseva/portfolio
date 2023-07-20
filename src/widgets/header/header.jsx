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
        <div className="header__background">
          <div className="header__background-item"></div>
          <div className="header__background-item"></div>
          <div className="header__background-item"></div>
          <div className="header__background-item"></div>
          <div className="header__background-item"></div>
          <div className="header__background-item"></div>
          <svg
            className="header__background-item"
            width="14"
            height="12"
            viewBox="0 0 14 12"
            fill="none"
          >
            <path
              d="M1.80385 11L7 2L12.1962 11H1.80385Z"
              stroke="#FF2E00"
              strokeOpacity="0.8"
              strokeWidth="2"
            />
          </svg>
        </div>
      </Element>
    </header>
  );
};
