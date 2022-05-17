// import React, { useEffect, useState } from "react";
// import { useForm } from "react-hook-form";

export const Contact = () => {
  // const [successMessage, setSuccessMessage] = useState("");

  // const {
  //   register,
  //   handleSubmit,
  //   reset,
  //   formState: { errors },
  // } = useForm();

  // const onSubmit = (data) => {
  //   // data.preventDefault();
  //   console.log("data", data)
  //   setSuccessMessage("Message sent successfully!");
  //   reset();
  // };

  return (
    <section className="">
      <div>
        <h1 className="section-title">Contact me</h1>
      </div>
      <div className="contact__content">
        <p>
          I'm currently looking for new opportunities to expand my knowledge and
          experience. If you have any questions or want to work together. Don't
          hesitate to contact me.
        </p>
      </div>
      <div className="contact__form">
        <form action="https://formsubmit.co/ca6d457d32b85df06847a70ae85161aa" method="POST">
          {/* <form onSubmit={handleSubmit(onSubmit)}> */}
          <div className="contact__div-grid">
            <div>
              <input
                // {...register("name", { required: "*Required field" })}
                className="contact__input"
                type="text"
                placeholder="Name"
                name="Name"
                required
              />
              {/* {errors.name && (
                <div className="contact__span-error">
                  <span>{errors.name.message}</span>
                </div>
              )} */}
            </div>
            <div>
              <input
                // {...register("email", { required: "*Required field" })}
                className="contact__input"
                type="email"
                placeholder="Email"
                name="Email"
                required
              />
              {/* {errors.email && (
                <div className="contact__span-error">
                  <span>{errors.email.message}</span>
                </div>
              )} */}
            </div>
          </div>
          <input
            // {...register("subject", { required: "*Required field" })}
            className="contact__input"
            type="text"
            placeholder="Subject"
            name="Subject"
            required
          />
          {/* {errors.subject && (
            <div className="contact__span-error">
              <span>{errors.subject.message}</span>
            </div>
          )} */}
          <textarea
            // {...register("message", { required: "*Required field" })}
            className="contact__textarea"
            placeholder="Message"
            name="Message"
            required
          />
          {/* {errors.message && (
            <div className="contact__span-error">
              <span>{errors.message.message}</span>
            </div>
          )} */}
          <div className="contact__success-message">
            {/* <span>{successMessage}</span> */}
            <input type="submit" className="contact__submit" value=" Send message!" />
          </div>
          <input type="hidden" name="_next" value="http://localhost:3000/" />
          <input type="hidden" name="_captcha" value="false" />
        </form>
      </div>
    </section>
  );
};
