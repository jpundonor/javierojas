import React, { useState } from "react";
import { ElementPreview } from "./ElementPreview";

export const ExperienceElement = ({
  title,
  link,
  paragraph,
  experiences = [],
  detail,
  imgs
}) => {
  const [elementModal, setElementModal] = useState(false);
  const OpenInNew = "/assets/icons/open_in_new.svg";
  const Folder = "/assets/icons/folder.svg";

  function openModal() {
    setElementModal(!elementModal);
  }

  return (
    <>
      <div className="experience__element">
        <header className="experience__header-container">
          <span>
            <img
              onClick={openModal}
              className="experience__icon-folder"
              src={Folder}
              alt="Open Preview"
            />
          </span>
          {link && (
            <a
              href={link}
              aria-label="External Link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="experience__icon-external-link"
                src={OpenInNew}
                alt="External Link"
              />
            </a>
          )}
        </header>
        <h3>{title}</h3>
        <p>{paragraph}</p>
        <div>
          <footer className="experience__footer">
            {experiences.map((exp, index) => (
              <span key={index}>{exp}</span>
            ))}
          </footer>
        </div>
      </div>
      {elementModal && <ElementPreview elementModal={elementModal} setElementModal={setElementModal} detail={detail} imgs={imgs}/>}
    </>
  );
};
