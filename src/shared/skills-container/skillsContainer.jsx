import React from "react";
import { SkillsElement } from "../../features/skillsElement/skillsElement";
import "./skillsContainer.css";

export const SkillsContainer = ({ header, data }) => {
  const skillInfo = data.skills.map((skill, index) => (
    <SkillsElement data={skill} key={`skill_${index}`} />
  ));
  return (
    <div className="skills">
      <h4>{header}</h4>
      <div className="skills__item">{skillInfo}</div>
    </div>
  );
};
