import React from "react";

export const ContactSuccess = ({ elementModal, setElementModal }) => {
  const closeView = "/assets/icons/close.svg";
  function closeModal() {
    setElementModal(!elementModal);
  }
  window.onclick = function (event) {
    const modal = document.getElementById("myModal");
    event.target === modal && closeModal();
  };
  return (
    <div className="contact__success-modal" id="myModal">
      <div className="contact__modal-container">
      <span className="contact__modal-close">
            <img
              onClick={closeModal}
              className="contact__icon-close"
              src={closeView}
              alt="Close Preview"
            />
          </span>
        <h3>Message sent successfully</h3>
        <p>
          Thank you for contacting me, I'll do my best to get back to you as
          soon as possible.
        </p>
      </div>
    </div>
  );
};
