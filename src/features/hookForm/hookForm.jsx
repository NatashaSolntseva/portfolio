import React from "react";
import { useForm } from "react-hook-form";

import "./hookForm.css";

export const HookForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    formState,
  } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <fieldset className="form__fieldset">
        <label className="form__label">
          Your Full Name (Required)
          <input
            placeholder="Name"
            {...register("name", {
              required: "Please, fill out this field",
              maxLength: {
                value: 20,
                message: "Name must be no more than 20 characters.",
              },
              pattern: { value: /^[a-zA-Z]{2,}$/ },
            })}
            className="form__input"
          />
        </label>
        <div className="form__errorWrapper">
          {errors?.name && (
            <p className="form__errorText">{errors?.name.message}</p>
          )}
        </div>
        <label className="form__label">
          Your Email (Required)
          <input
            placeholder="username@example.com"
            {...register("email", {
              required: "Please, fill out this field",
              pattern: {
                value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                message:
                  "Please enter your Email in the format username@example.com.",
              },
            })}
            className="form__input"
          />
        </label>
        <div className="form__errorWrapper">
          {errors?.email && (
            <p className="form__errorText">{errors?.email.message}</p>
          )}
        </div>
        <label className="form__label">
          Subject
          <input
            {...register("subject", {
              maxLength: 30,
            })}
            className="form__input"
          />
        </label>
        <div className="form__errorWrapper"></div>
        <label className="form__label">
          Your Message
          <textarea name="message" className="form__textarea"></textarea>
        </label>
        <button
          type="submit"
          disabled={!formState.isDirty || !formState.isValid}
          className={` form__btn ${
            formState.isDirty || formState.isValid
              ? ""
              : "form__btn_status_disabled"
          }`}
        >
          send message
        </button>
      </fieldset>
    </form>
  );
};
