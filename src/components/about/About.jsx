import React from "react";

export const About = () => {
  const profileImg = "/assets/img/javi2.jpg";
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
            autonoma
          </p>
          <p>
            Aqui es donde tengo que rellenar con mas texto. Queda pendiente el
            about.
          </p>
          <p>Some of the technologies I work with:</p>
          <div className="about__skills-list">
            <div>Html</div>
            <div>Css</div>
            <div>Sass</div>
            <div>JavaScript</div>
            <div>React</div>
            <div>Next.js</div>
            <div>Tailwind</div>
          </div>
        </div>
        <div className="about__div-img">
          <img className="about__img" src={profileImg} alt="Profile" />
        </div>
      </div>
    </section>
  );
};
