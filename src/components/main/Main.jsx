import React from "react";
import { About } from "../about/About";
import { Contact } from "../contact/Contact";
import { Experience } from "../experience/Experience";
import { Home } from "../home/Home";

export const Main = () => {
  const arrowUp = "/assets/icons/arrow_circle_up.svg";
  return (
    <div className="main__container">
      <Home />
      <About />
      <Experience />
      <Contact />
      <div className="main__arrow-up">
        <a href="/#home">
          <img src={arrowUp} alt="Up" />
        </a>
      </div>
      <footer className="main__footer">{`Designed & Built by Javier Rojas`}</footer>
    </div>
  );
};
