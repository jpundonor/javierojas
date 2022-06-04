import React from "react";
import { ExperienceElement } from "./ExperienceElement";
import { experiences } from "../../data/experience";

export const Experience = () => {
  return (
    <section id="experience">
      <div>
        <h1 className="section-title">Experience</h1>
      </div>
      <div className="experience__container">
        {experiences.map((exp) => (
          <ExperienceElement
            key={exp.id}
            title={exp.title}
            link={exp.link}
            paragraph={exp.description}
            experiences={exp.technologies}
            detail={exp.detail}
            imgs={exp.imgs}
          />
        ))}
      </div>
    </section>
  );
};
