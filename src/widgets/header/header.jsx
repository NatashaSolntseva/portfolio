import React from "react";
import { Element } from "react-scroll";

import "../../styles/index.css";
import "./header.css";

export const Header = () => {
  return (
    <header className="header">
      <Element name="home" class="header__container">
        <h1 class="page__text header__title">
          I'm Natasha Solntseva{" "}
          <span className="header__text-span-color">Front-end</span> Developer
        </h1>
        <p className="page__text header__text">
          I craft websites with a great attention to details.
        </p>
        <a href="#" className="header__link">
          <span className="header__text-span">Hire me</span>
        </a>
      </Element>
    </header>
  );
};
