import React from "react";

export const About = () => {
  const profileImg = "/assets/img/profile.jpg";
  return (
    <section id="about">
      <div>
        <h1 className="section-title">About Me</h1>
      </div>
      <div className="about__content">
        <div>
          <p>
            Hello! My name is Javier Rojas and I like web development focused on
            Frontend. My goal is to acquire experience and enough knowledge to
            ideally work independently.
          </p>
          <p>
            I'm currently learning on my own, although I haven't had any
            professional experience beyond my internship, for now I've kept
            practicing with small projects and courses.
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
