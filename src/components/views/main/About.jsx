import React from "react";

export const About = () => {
  return (
    <section className="">
      <div>
        <h1 className="section-title">About Me</h1>
      </div>
      <div className="about__content">
        <div>
          <p>
            Hello! My name is Javier Rojas y me gusta crear experiecias
            digitales. Tengo como por objetivo trabajar idealmente de manera
            autonoma, acercando la tecnologia a las pymes.
          </p>
          <p>
            Aqui es donde tengo que rellenar con mas texto. Queda pendiente el
            about.
          </p>
          <p>Aqui algunas de las tecnologías con las que trabajo:</p>
          <div className="about__skills-list">
            <div>Html</div>
            <div>Css</div>
            <div>Sass</div>
            <div>JavaScrip</div>
            <div>React</div>
            <div>Node.js</div>
            <div>Tailwind</div>
          </div>
        </div>
        <div className="">
          <img src="" alt="" />
        </div>
      </div>
    </section>
  );
};
