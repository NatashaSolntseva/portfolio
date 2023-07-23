import React, { useState } from "react";

import "./form.css";

import { isValidValue } from "../../shared/helpers/validator";

import { Input } from "../../shared/input/input";

export const Form = () => {
  const initialFormState = {
    name: { value: "" },
    email: { value: "" },
    subject: { value: "" },
    message: { value: "" },
  };

  const initialFormErrorState = {
    name: { error: false },
    email: { error: false },
  };

  const [formState, setFormState] = useState(initialFormState);
  const [formErrorState, setFormErrorState] = useState(initialFormErrorState);

  const handleChange = (evt) => {
    const { name, value } = evt.target;

    setFormState({ ...formState, [name]: { value: value } });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    let error = 0;
    let updatedFormErrorState = {};

    console.log("ONSBMT");

    for (const [key, value] of Object.entries(formState)) {
      console.log(key, value.value);
      if (!isValidValue({ name: key, value: value.value })) {
        updatedFormErrorState[key] = { error: true };
        console.log("formErrorState", formErrorState);
        error++;
      } else {
        updatedFormErrorState[key] = { error: false };
        console.log("formErrorState", formErrorState);
      }
    }
    console.log(error > 0 ? "ERROR" : "SUCCESS");

    setFormState(initialFormState);
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <label className="form__label">Your Full Name (Required)</label>
      <input
        type="text"
        name="name"
        className={` form__input ${
          formErrorState.name.error ? "form__errorInput" : ""
        }`}
        value={formState.name.value}
        required
        onChange={handleChange}
      ></input>
      <label className="form__label">Your Email (Required)</label>
      <input
        type="email"
        name="email"
        value={formState.email.value}
        required
        className={` form__input ${
          formErrorState.email.error ? "form__errorInput" : ""
        }`}
        onChange={handleChange}
      ></input>
      <label className="form__label">Subject</label>
      <input
        type="text"
        name="subject"
        value={formState.subject.value}
        className="form__input"
        onChange={handleChange}
      ></input>
      <label className="form__label">Your Message</label>
      <textarea
        name="message"
        className="form__textarea"
        onChange={handleChange}
      ></textarea>
      <button type="submit" className="form__btn">
        send message
      </button>
    </form>
  );
};
