import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import "../styles/Form.scss";
import { MdEmail } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import emailjs from "emailjs-com";
import * as yup from "yup";
const user_id = process.env.REACT_APP_EMAILJS_USER_ID;
const service_id = process.env.REACT_APP_SERVICE_ID;

function Form() {
  // used for validation, format we want for form data
  const schema = yup.object().shape({
    name: yup.string().required("Your full name is required."),
    email: yup.string().email().required("Your email address is required."),
    message: yup.string().required("A message is required."),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const form = useRef();

  // form that handles on submit
  function sendEmail(data, e) {
    console.log("submit presseddd");
    console.log(e);
    e.preventDefault();

    emailjs
      .sendForm(service_id, "template_hyzmbwt", form.current, user_id)
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    form.current.reset();
  }

  return (
    <div>
      <section className="contact-form" id="contact">
        <div className="get-in-touch">
          <h3>Get in touch</h3>
          <div>
            <MdEmail />
            <span>alfredo.moreno@sunrun.com</span>
          </div>
          <div>
            <BsTelephoneFill />
            <span>(408)413-8096</span>
          </div>
        </div>
        <form ref={form} onSubmit={handleSubmit(sendEmail)}>
          <div className="form-input-section">
            <label>Name</label>
            <input id="name" name="name" type="text" {...register("name")} />
            <p className="error-message">{errors.name?.message}</p>
          </div>
          <div className="form-input-section">
            <label>Email</label>
            <input
              id="email"
              name="email"
              type="email"
              {...register("email")}
            />
            <p className="error-message">{errors.email?.message}</p>
          </div>
          <div className="form-input-section">
            <label>Message</label>
            <textarea
              id="message"
              name="message"
              type="text"
              {...register("message")}
            />
            <p className="error-message">{errors.message?.message}</p>
          </div>
          <button type="submit">Submit</button>
        </form>
      </section>
    </div>
  );
}

export default Form;
