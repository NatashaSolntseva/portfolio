import React from "react";
import { Element } from "react-scroll";

import "./information.css";
import ProfilePhoto from "./images/profilePhoto.png";
import { SkillsContainer } from "../../shared/skills-container/skillsContainer";

import FacebookIcon from "./icons/facebook.svg";

export const Information = () => {
  return (
    <Element className="information">
      <div className="information__content">
        <img
          className="information__img"
          src={ProfilePhoto}
          alt="ProfilePhoto"
        ></img>
        <h4 className="page__text">Natasha Solntseva</h4>
        <p className="page__text ">Font-end Developer</p>
        <div className="information__social">
          <div className="information__social-icon">
            <img src={FacebookIcon} alt="Facebook"></img>
          </div>
          <div className="information__social-icon">
            <img src={FacebookIcon} alt="Instagram"></img>
          </div>
          <div className="information__social-icon">
            <img src={FacebookIcon} alt="Instagram"></img>
          </div>
          <div className="information__social-icon">
            <img src={FacebookIcon} alt="Instagram"></img>
          </div>
          <div className="information__social-icon">
            <img src={FacebookIcon} alt="Instagram"></img>
          </div>
          <div className="information__social-icon">
            <img src={FacebookIcon} alt="Instagram"></img>
          </div>
        </div>
        <div className="information_main-info">
          <ul>
            <li>Age:</li>
            <li>Residence:</li>
            <li>Freelance:</li>
            <li>Address:</li>
          </ul>
        </div>
        <SkillsContainer header="Languages" />
        <SkillsContainer header="Skills" />
        <div className="skills">
          <h4>Extra Skills</h4>
          <ul className="skills__list">
            <li className="skills__list-item">
              <img></img>Bootstrap, Materialize
            </li>
            <li className="skills__list-item">Stylus, Sass, Less</li>
            <li className="skills__list-item">Gulp, Webpack, Grunt</li>
            <li className="skills__list-item">GIT Knowledge</li>
          </ul>
        </div>
        <button className="information__btn">Download cv</button>
      </div>
    </Element>
  );
};
