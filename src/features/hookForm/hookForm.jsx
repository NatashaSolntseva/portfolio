import React from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

import "./hookForm.css";

export const HookForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    formState: { isSubmitSuccessful },
  } = useForm();

  const onSubmit = (data) => {
    console.log(JSON.stringify(data));
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      Swal.fire({
        title: "Hi!",
        text: "Your message has been successfully sent",
        icon: "success",
        buttonsStyling: false,
        customClass: {
          confirmButton: "form__btn",
        },
      });
      reset({ name: "", email: "", subject: "", message: "" });
    }
  }, [isSubmitSuccessful, reset]);

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
              minLength: {
                value: 2,
                message: "Name must be at least 2 characters.",
              },
              pattern: { value: /^[a-zA-Z]{2,}$/ },
            })}
            className="form__input"
          />
        </label>
        <div className="form__errorWrapper">
          {errors?.name && (
            <p className="form__errorText">{errors?.name?.message}</p>
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
                  "Please enter your e-mail in the format username@example.com.",
              },
            })}
            className="form__input"
          />
        </label>
        <div className="form__errorWrapper">
          {errors?.email && (
            <p className="form__errorText">{errors?.email?.message}</p>
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
          <textarea
            name="message"
            className="form__textarea"
            {...register("message")}
          ></textarea>
        </label>
        <button
          type="submit"
          disabled={errors.email || errors.name}
          className={` form__btn ${
            errors.email || errors.name ? "form__btn_status_disabled" : " "
          }`}
        >
          send message
        </button>
      </fieldset>
    </form>
  );
};
