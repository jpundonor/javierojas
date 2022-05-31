import React from "react";
import { ExperienceElement } from "./ExperienceElement";
import { experiences } from "../../data/experience";

export const Experience = () => {

  return (
    <section className="" id="experience">
      <div>
        <h1 className="section-title">Experience</h1>
      </div>

      {/* <ExperienceElement
        title="Rubits Works Spa."
        link="https://www.rubits.works/"
        paragraph="Internship, support in the front-end development of the Rubits Works
          website."
        experiences={["React.js", "Tailwind"]}
      /> */}
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
    </section>
  );
};
