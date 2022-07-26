import React, { useState } from "react";

export const ElementPreview = ({
  elementModal,
  setElementModal,
  title,
  link,
  detail,
  imgs,
}) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const closeView = "/assets/icons/close.svg";

  function closeModal() {
    setElementModal(!elementModal);
  }
  window.onclick = function (event) {
    const modal = document.getElementById("myModal");
    event.target === modal && closeModal();
  };

  const nextSlide = () => {
    slideIndex < imgs.length - 1 && setSlideIndex(slideIndex + 1);
    slideIndex == imgs.length - 1 && setSlideIndex(0);
    console.log("test ", slideIndex);
  };
  const prevSlide = () => {
    slideIndex > 0 && setSlideIndex(slideIndex - 1);
    slideIndex === 0 && setSlideIndex(imgs.length - 1);
  };

  return (
    <div className="experience__element-modal" id="myModal">
      <div className="experience__modal-container">
        <div className="experience__carousel-slide">
          {imgs.map(
            (img) =>
              img.id == slideIndex && (
                <img key={img.id} src={img.img} alt={title} />
              )
          )}
          <span className="experience__prev-next left" onClick={prevSlide}>
            &#10094;
          </span>
          <span className="experience__prev-next right" onClick={nextSlide}>
            &#10095;
          </span>
        </div>

        <div className="experience__paragraph">
          <h3>{title}</h3>
          <span />
          {detail}
        </div>

        <footer className="experience__modal-footer">
          {link && (
            <a
              href={link}
              aria-label="External Link"
              target="_blank"
              rel="noopener noreferrer"
              className="expercience__modal-link"
            >
              View site
            </a>
          )}
          <span className="experience__modal-close">
            <img
              onClick={closeModal}
              className="experience__icon-close"
              src={closeView}
              alt="Close Preview"
            />
          </span>
        </footer>
      </div>
    </div>
  );
};
