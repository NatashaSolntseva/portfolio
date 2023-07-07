import React from "react";
import { ContactForm } from "../../widgets/contactForm/contactForm";
import { Footer } from "../../widgets/footer/footer";
import { Header } from "../../widgets/header/header";
import { Information } from "../../widgets/information/information";
import { RightPanel } from "../../widgets/rightPanel/rightPanel";
import { Portfolio } from "../../widgets/portfolio/portfolio";
import { History } from "../../widgets/history/history";

import "./homePage.css";

export const HomePage = () => {
  return (
    <div className="container">
      <Information />
      <div className="inner">
        <Header />
        <History name="education" />
        <History name="work" />
        <Portfolio />
        <ContactForm />
        <Footer />
      </div>
      <RightPanel />
    </div>
  );
};
