import React from "react";
import { Element } from "react-scroll";

import "./contactForm.css";

import { Header } from "../../shared/header/header";

import { Form } from "../../features/form/form";

import LocationIcon from "./icons/location.svg";
import MailIcon from "./icons/mail.svg";
import MobileIcon from "./icons/mobile.svg";
import { HookForm } from "../../features/hookForm/hookForm";

export const ContactForm = () => {
  return (
    <Element name="contacts" className="contactForm">
      <div className="contactForm__container">
        <Header header="Leave me your info" />

        <HookForm />
      </div>
      <div className="contactForm__container">
        <Header header="Contact information" />
        <div className="contactCards-container">
          <div className="contactCard">
            <div className="contactCard__icon">
              <img src={LocationIcon} alt="locationIcom"></img>
            </div>
            <div className="contactCard__text-container">
              <p className="page__text">Country:</p>
              <p className="page__text">Türkiye</p>
            </div>
            <div className="contactCard__text-container">
              <p className="page__text">City:</p>
              <p className="page__text">Fethiye</p>
            </div>
            <div className="contactCard__text-container">
              <p className="page__text">Streat:</p>
              <p className="page__text">35 vhatara, Badda</p>
            </div>
          </div>
          <div className="contactCard">
            <div className="contactCard__icon">
              <img src={MailIcon} alt="mailIcom"></img>
            </div>
            <div className="contactCard__text-container">
              <p className="page__text">Email:</p>
              <p className="page__text">youremail@gmail.com</p>
            </div>
            <div className="contactCard__text-container">
              <p className="page__text">Skype:</p>
              <p className="page__text">@yourusername</p>
            </div>
            <div className="contactCard__text-container">
              <p className="page__text">Telegram:</p>
              <p className="page__text">@UltraNata</p>
            </div>
          </div>
          <div className="contactCard">
            <div className="contactCard__icon">
              <img src={MobileIcon} alt="mobileIcom"></img>
            </div>
            <div className="contactCard__text-container">
              <p className="page__text">Support services:</p>
              <p className="page__text">15369</p>
            </div>
            <div className="contactCard__text-container">
              <p className="page__text">Office:</p>
              <p className="page__text">+58 (021)356 587 235</p>
            </div>
            <div className="contactCard__text-container">
              <p className="page__text">Personal:</p>
              <p className="page__text">+58 (021)356 587 235</p>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};
