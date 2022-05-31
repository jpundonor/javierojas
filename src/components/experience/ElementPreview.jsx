import React, { useState } from "react";

export const ElementPreview = ({
  elementModal,
  setElementModal,
  detail,
  imgs,
}) => {
  const [slideIndex, setSlideIndex] = useState(0);

  function closeModal() {
    setElementModal(!elementModal);
  }
  window.onclick = function (event) {
    const modal = document.getElementById("myModal");
    event.target === modal && closeModal();
  };

  const nextSlide = () => {
    slideIndex < (imgs.length - 1) && setSlideIndex(slideIndex + 1);
    slideIndex == (imgs.length -1) && setSlideIndex(0)
    console.log("test ",slideIndex)
  };
  const prevSlide = () => {
    slideIndex > 0 && setSlideIndex(slideIndex - 1);
    slideIndex === 0 && setSlideIndex(imgs.length -1)
  };

  return (
    <div className="experience__element-modal" id="myModal">
      <div className="experience__modal-container">
        <button className="experience__modal-close" onClick={closeModal}>
          x
        </button>

        <div className="experience__carousel">
          <div>
            <span className="experience__carousel-prev" onClick={prevSlide}>
              &#10094;
            </span>
          </div>
          <div>
            {imgs.map(
              (img) =>
                img.id == slideIndex && (
                  <div key={img.id} className="experience__carousel-slide">
                    <img src={img.img} alt="RubitsWorks" />
                  </div>
                )
            )}            
          </div>
          <div>
            <span className="experience__carousel-next" onClick={nextSlide}>
              &#10095;
            </span>
          </div>
        </div>

        <div className="experience__carousel-selector">
          {imgs.map((current) => (
            <span
              key={current.id}
              className={"experience__carousel-quadrate " + (current.id == slideIndex && "active")}
              // onClick={() => setSlideIndex(current.id)}
            ></span>
          ))}
        </div>
        <div className="experience__paragraph">{detail}</div>
      </div>
    </div>
  );
};
