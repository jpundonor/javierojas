import React from "react";
import { About } from "../about/About";
import { Contact } from "../contact/Contact";
import { Experience } from "../experience/Experience";
import { Home } from "../home/Home";

export const Main = () => {
  const arrowUp = "/assets/icons/arrow_circle_up.svg";
  const github = "/assets/icons/icon-github.svg";
  const insta = "/assets/icons/icon-instagram.svg";
  const linked = "/assets/icons/icon-linkedin.svg";
  return (
    <>
      <div className="main__container">
        <Home />
        <About />
        <Experience />
        <div className="main__arrow-up">
          <a href="/#home">
            <img src={arrowUp} alt="Up" />
          </a>
        </div>
      </div>
      <div className="main__separation" />
      <div className="main__container2">
        <Contact />
        <div className="main__social-list">
          <a
            href="https://github.com/jardlml"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github} alt="Up" />
          </a>
          <a
            href="https://www.instagram.com/jardlml/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={insta} alt="Up" />
          </a>
          <a
            href="https://www.linkedin.com/in/javier-rojas-43324b143/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linked} alt="Up" />
          </a>
        </div>
        <footer className="main__footer">{`Designed & Built by Javier Rojas`}</footer>
      </div>
    </>
  );
};
