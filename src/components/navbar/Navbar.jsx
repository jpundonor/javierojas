import React, { useState } from "react";

export const Navbar = () => {
  const cv = "/assets/pdf/CV-Javier-Rojas.pdf";
  const burgerIcon = "/assets/icons/menu.svg";
  const closeIcon = "/assets/icons/close.svg";
  const logo = "/assets/icons/logo.png";
  const [menuIcon, setMenuIcon] = useState(burgerIcon);
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  // PENDIENTE
  function showScroll() {
    let navScroll = document.querySelector(".navbar__head");
    navScroll.classList.toggle("navbar__head-scroll", window.scrollY > 0);
  }
  window.addEventListener("scroll", showScroll);

  const openMenu = () => {
    let menuNav = document.querySelector(".navbar__content");
    if (!menuIsOpen) {
      menuNav.classList.add("navbar__content-mobile");

      // menuNav.setAttribute("style", "display: flex", "transform: scaleY(1)");
      setMenuIcon(closeIcon);
    } else {
      // menuNav.setAttribute("style", "display: none", "transform: scaleY(0)");
      menuNav.classList.remove("navbar__content-mobile");
      setMenuIcon(burgerIcon);
    }
    setMenuIsOpen(!menuIsOpen);
  };

  window.onclick = function (event) {
    const menu = document.getElementById("menu");
    const button = document.getElementById("button");
    if (
      window.innerWidth < 768 &&
      window.onclick &&
      event.target !== button &&
      event.target !== menu
    ) {
      // menu.setAttribute("style", "display: none", "transform: scaleY(0)");
      menu.classList.remove("navbar__content-mobile");
      setMenuIsOpen(false);
      setMenuIcon(burgerIcon);
    }
  };

  return (
    <header className="navbar__head">
      <nav className="navbar__container">
        <div className="navbar__logo">
          <a href="/#home">
            <img className="navbar__logo-png" src={logo} alt="Logo" />
          </a>
        </div>
        <div className="navbar__content" id="menu">
          <a href="/#about">About</a>
          <a href="/#experience">Experience</a>
          <a href="/#contact">Contact</a>
          <a href={cv} target="_blank" rel="noreferrer">
            CV
          </a>
        </div>
        <div className="navbar__menu-icon">
          <img
            id="button"
            onClick={openMenu}
            className="experience__icon-folder"
            src={menuIcon}
            alt="Open Preview"
          />
        </div>
      </nav>
    </header>
  );
};
