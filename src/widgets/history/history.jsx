import React from "react";
import { Element } from "react-scroll";

import "./history.css";

import { Header } from "../../shared/header/header";
import { Paragraph } from "../../shared/paragraph/paragraph";
import { HistoryCard } from "../../features/historyCard/historyCard";

export const History = ({ name, data }) => {
  const tabeInfo = data.history.map((work, index) => (
    <HistoryCard data={work} key={`work_${index}`} />
  ));

  return (
    <Element name={name} className="history">
      <section className="history__conteiner">
        <div className="history__info">
          <Header header={data.header} />
          <Paragraph aling="center" text={data.title} />
        </div>
        <div className="history__table-container">{tabeInfo}</div>
      </section>
    </Element>
  );
};
