import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import { useState } from "react";
import { ContactSuccess } from "./ContactSuccess";

export const Contact = () => {
  const [form, setForm] = useState({});
  const [message, setMessage] = useState("");
  const [elementModal, setElementModal] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  function openModal() {
    setElementModal(!elementModal);
  }

  const onSubmit = async() => {
    try {
      await emailjs
        .sendForm(
          "service_l6mtjye",
          "template_agy11ge",
          form.current,
          // data.target,
          "VnyvSqK5POqi1Lolm"
        )
        .then((res) => {
          console.log(res);
        })
        .catch((error) => console.log(error));
      reset(setForm({}), setMessage(""));
      openModal();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <section className="contact__section" id="contact">
        <div>
          <h1 className="contact__title">Contact me</h1>
        </div>
        <div className="contact__content">
          <p>
            I'm currently looking for new opportunities to expand my knowledge
            and experience, if you have any questions or want to work together,
            don't doubt to contact me.
          </p>
        </div>
        <div className="contact__form">
          <form autoComplete="off" onSubmit={handleSubmit(onSubmit)} ref={form}>
            <div className="contact__div-grid">
              <div>
                <input
                  {...register("name", { required: "*Required field" })}
                  className="contact__input"
                  type="text"
                  placeholder="Name"
                  name="name"
                  value={form.nombre}
                  onChange={handleChange}
                />
                {errors.name && (
                  <div className="contact__span-error">
                    <span>{errors.name.message}</span>
                  </div>
                )}
              </div>
              <div>
                <input
                  {...register("email", { required: "*Required field" })}
                  className="contact__input"
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                />
                {errors.email && (
                  <div className="contact__span-error">
                    <span>{errors.email.message}</span>
                  </div>
                )}
              </div>
            </div>
            <input
              {...register("subject", { required: "*Required field" })}
              className="contact__input"
              type="text"
              placeholder="Subject"
              name="subject"
              value={form.subject}
              onChange={handleChange}
            />
            {errors.subject && (
              <div className="contact__span-error">
                <span>{errors.subject.message}</span>
              </div>
            )}
            <textarea
              {...register("message", { required: "*Required field" })}
              id="message"
              className="contact__textarea"
              placeholder="Message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            {errors.message && (
              <div className="contact__span-error">
                <span>{errors.message.message}</span>
              </div>
            )}
            <div className="contact__success-message">
              <input
                type="submit"
                className="contact__submit"
                value=" Send message!"
              />
            </div>
          </form>
        </div>
      </section>
      {elementModal && (
        <ContactSuccess
          elementModal={elementModal}
          setElementModal={setElementModal}
        />
      )}
    </>
  );
};
