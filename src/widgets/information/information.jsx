import React from "react";
import { Element } from "react-scroll";

import "./information.css";
import ProfilePhoto from "./images/profilePhoto.png";
import { SkillsContainer } from "../../shared/skills-container/skillsContainer";

import FacebookIcon from "./icons/facebook.svg";
import InstagramIcon from "./icons/instagram.svg";
import TwitterIcon from "./icons/twitter.svg";
import LinkedinIcon from "./icons/linkedin.svg";
import TelegramIcon from "./icons/telegram.svg";

import { ReactComponent as BoxIcon } from "./icons/boxes.svg";
import { ReactComponent as DownloadIcon } from "./icons/download.svg";
import { LANGUAGES, PROGRAMMING } from "../../constants/skills";

export const Information = () => {
  const downloadFile = () => {
    fetch("ShmatenkoNataliia.pdf").then((res) => {
      res.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "CV_ShmatenkoNataliia.pdf";
        alink.click();
      });
    });
  };

  return (
    <Element className="information">
      <div className="information__content">
        <div className="information__img-container">
          <img
            className="information__img"
            src={ProfilePhoto}
            alt="ProfilePhoto"
          ></img>
          <span className="information__img-avaliable-circle"></span>
        </div>
        <h4 className="page__text information__title">Natasha Solntseva</h4>
        <p className="page__text information__text">Font-end Developer</p>
        <div className="information__social-icons">
          <div className="information__social-icon">
            <a
              href="https://www.linkedin.com/in/nataliashmatenko/"
              className="information__social-icon"
              target="_blank"
              rel="noreferrer"
            >
              <img src={LinkedinIcon} alt="Linkedin-icon"></img>
            </a>
          </div>
          <div className="information__social-icon">
            <a
              href="https://t.me/UltraNata"
              className="information__social-icon"
              target="_blank"
              rel="noreferrer"
            >
              <img src={TelegramIcon} alt="Telegram-icon"></img>
            </a>
          </div>
          <a
            href="https://www.facebook.com/ultranata/"
            className="information__social-icon"
            target="_blank"
            rel="noreferrer"
          >
            <img src={FacebookIcon} alt="Facebook-icon"></img>
          </a>
          <div className="information__social-icon">
            <a
              href="https://twitter.com/_mrrr"
              className="information__social-icon"
              target="_blank"
              rel="noreferrer"
            >
              <img src={TwitterIcon} alt="Twitter-icon"></img>
            </a>
          </div>
          <div className="information__social-icon">
            <a
              href="https://www.instagram.com/natasha_solntseva/"
              className="information__social-icon"
              target="_blank"
              rel="noreferrer"
            >
              <img src={InstagramIcon} alt="Instagram-icon"></img>
            </a>
          </div>
        </div>
        <div className="information__main-info-container">
          <ul className="information__main-info">
            <li className="information__main-info-item">
              <span className="information__text-marker">Age:</span>
              <span>39</span>
            </li>
            <li className="information__main-info-item">
              <span className="information__text-marker">Residence:</span>
              <span>Türkiye</span>
            </li>
            <li className="information__main-info-item">
              <span className="information__text-marker">Freelance:</span>
              <span className="information__text-span">Available</span>
            </li>
            <li className="information__main-info-item">
              <span className="information__text-marker">Address:</span>
              <span>Muğla, Fethiye</span>
            </li>
          </ul>
        </div>
        <SkillsContainer header="Languages" data={LANGUAGES} />
        <SkillsContainer header="Skills" data={PROGRAMMING} />
        <div className="skills">
          <h4>Extra Skills</h4>
          <ul className="skills__list">
            <li className="skills__list-item">
              <BoxIcon className="skills__list-icon" />
              Bootstrap
            </li>
            <li className="skills__list-item">
              <BoxIcon className="skills__list-icon" />
              Sass
            </li>
            <li className="skills__list-item">
              <BoxIcon className="skills__list-icon" />
              Webpack
            </li>
            <li className="skills__list-item">
              <BoxIcon className="skills__list-icon" />
              GIT Knowledge
            </li>
          </ul>
        </div>
        <button className="information__btn" onClick={downloadFile}>
          <span>Download cv</span>
          <DownloadIcon className="information__btn-icon" />
        </button>
      </div>
    </Element>
  );
};
