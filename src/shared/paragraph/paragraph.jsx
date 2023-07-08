import React from "react";
import "./paragraph.css";

export const Paragraph = ({ text, aling }) => {
  const alignText = aling === "center" ? "paragraphCenter" : "";

  return <p className={`page__text paragraph ${alignText}`}>{text}</p>;
};
