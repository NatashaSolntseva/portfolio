import React from "react";
import { Paragraph } from "../../shared/paragraph/paragraph";
import "./historyCard.css";

export const HistoryCard = ({ data }) => {
  return (
    <div className="card">
      <div>
        <h3 className="page__text card__title">{data.siteName}</h3>
        <div className="card__grade-container">
          <p className="card__grade">{data.grade}</p>
          <p className="card__date">{data.date}</p>
        </div>
      </div>
      <div>
        <h3 className="page__text card__title">{data.work}</h3>
        <Paragraph text={data.workHistory} />
      </div>
    </div>
  );
};
