import React from "react";
import { Element } from "react-scroll";

import "./contactForm.css";

import { Header } from "../../shared/header/header";

export const ContactForm = () => {
  return (
    <Element name="contacts" className="contactForm">
      <div>
        <Header header="Leave us your info" />
      </div>
      <div>
        <Header header="Contact information" />
      </div>
    </Element>
  );
};
