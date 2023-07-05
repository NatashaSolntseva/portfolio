import React from "react";
import { ContactForm } from "../../widgets/contactForm/contactForm";
import { Education } from "../../widgets/education/education";
import { Footer } from "../../widgets/footer/footer";
import { Header } from "../../widgets/header/header";
import { Information } from "../../widgets/information/information";
import { Navigation } from "../../widgets/navigation/navigation";
import { Portfolio } from "../../widgets/portfolio/portfolio";
import { WorkHistory } from "../../widgets/workHistory/workHistory";

import "./homePage.css";

export const HomePage = () => {
  return (
    <div className="container">
      <Information />
      <div className="inner">
        <Header />
        <Education />
        <WorkHistory />
        <Portfolio />
        <ContactForm />
        <Footer />
      </div>
      <Navigation />
    </div>
  );
};
