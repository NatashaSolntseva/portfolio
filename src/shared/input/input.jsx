import React from "react";

import "./input.css";

export const Input = ({ name, value, error, label, onChange }) => {
  const handleChange = (evt) => {
    const { name, value } = evt.currentTarget;

    onChange({ name, value });
  };

  return (
    <div>
      <label className="form__label">{label}</label>
      <input
        type="text"
        name={name}
        value={value}
        className="form__input"
        onChange={handleChange}
      ></input>
    </div>
  );
};
