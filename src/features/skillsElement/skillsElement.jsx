import React from "react";
import "./skillsElement.css";

export const SkillsElement = ({ data }) => {
  return (
    <>
      <div className="skills__caption">
        <p>{data.skill}</p>
        <p>{data.grade}</p>
      </div>
      <div className="skills__bar">
        <div
          className="skills__bar-inside"
          style={{ width: `${data.grade}` }}
        ></div>
      </div>
    </>
  );
};
