import React from "react";

export const ElementPreview = ({ elementModal, setElementModal }) => {
  const imgHomeRubits = "/assets/img/imgProyects/rubitsWorks/Home.jpg";
  const imgHowRubits = "/assets/img/imgProyects/rubitsWorks/HowItWorks.jpg";
  const imgProyectRubits = "/assets/img/imgProyects/rubitsWorks/Proyects.jpg";

  function closeModal() {
    setElementModal(!elementModal);
  }
  window.onclick = function (event) {
    const modal = document.getElementById("myModal");
    event.target === modal && closeModal();
  };

  let slideIndex = 1;
  showSlides(slideIndex);

  function plusSlide(n) {
    // showSlides(slideIndex += n)
    console.log(n);
  }
  function currentSlide(n) {
    // showSlides(slideIndex = n)
    console.log(n);
  }
  function showSlides(n) {
    // let slides = document.querySelectorAll(".experience__carousel-slide");
    // let quadrates = document.querySelectorAll(".experience__carousel-quadrate");
    // n > slides.length && (slideIndex = 1);
    // n < 1 && (slideIndex = slideIndex.length)
    // for(let i = 0; i < slides.length; i++){
    //   slides[i].style.display = "none"
    // }
    // for(let i = 0; i < quadrates.length; i++){
    //   quadrates[i].className = quadrates[i].className.replace("active", "")
    // }
    // slides[slideIndex-1].style.display = "block";
    // quadrates[slideIndex-1].className += "active";
  }

  return (
    <div className="experience__element-modal" id="myModal">
      <div className="experience__modal-container">
        <button className="experience__modal-close" onClick={closeModal}>
          x
        </button>

        <div className="experience__carousel">
          <div>
            <span className="experience__carousel-prev" onClick={plusSlide(-1)}>
              &#10094;
            </span>
          </div>
          <div>
            <div className="experience__carousel-slide fade">
              <img src={imgHomeRubits} alt="Home-RubitsWorks" />
            </div>
            <div className="experience__carousel-slide fade hidden">
              <img src={imgHowRubits} alt="How-RubitsWorks" />
            </div>
            <div className="experience__carousel-slide fade hidden">
              <img src={imgProyectRubits} alt="Proyects-RubitsWorks" />
            </div>
          </div>

          <div>
            <span className="experience__carousel-next" onClick={plusSlide(1)}>
              &#10095;
            </span>
          </div>
        </div>

        <div className="experience__carousel-selector">
          <span
            className="experience__carousel-quadrate"
            onClick={currentSlide(1)}
          ></span>
          <span
            className="experience__carousel-quadrate"
            onClick={currentSlide(2)}
          ></span>
          <span
            className="experience__carousel-quadrate"
            onClick={currentSlide(3)}
          ></span>
        </div>
        <div className="experience__paragraph">Descripcion del proyecto</div>
      </div>
    </div>
  );
};
