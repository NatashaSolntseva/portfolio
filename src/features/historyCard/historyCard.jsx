import React from "react";
import { Paragraph } from "../../shared/paragraph/paragraph";
import "./historyCard.css";

export const HistoryCard = ({ data }) => {
  return (
    <article className="card">
      <div className="card__info">
        <h3 className="page__text card__title">{data.siteName}</h3>
        <div className="card__position-container">
          <span className="card__position">{data.grade}</span>
          <date className="card__date">{data.date}</date>
        </div>
      </div>
      <div className="card__description">
        <h3 className="page__text card__title">{data.work}</h3>
        <Paragraph text={data.workHistory} />
      </div>
    </article>
  );
};
