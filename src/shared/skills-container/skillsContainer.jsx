import React from "react";
import "./skillsContainer.css";

export const SkillsContainer = ({ header }) => {
  return (
    <div className="skills">
      <h4>{header}</h4>
      <div className="skills__item">
        <div className="skills__caption">
          <p>Html</p>
          <p>90%</p>
        </div>
        <div className="skills__bar">
          <div className="skills__bar-inside"></div>
        </div>
      </div>
    </div>
  );
};
