import React from "react";

export const Navbar = () => {
  const CV = "/assets/pdf/CV-Javier-Rojas.pdf"
  function showScroll() {
    let navScroll = document.querySelector(".navbar__head");
    navScroll.classList.toggle("navbar__head-scroll", window.scrollY > 0);
    console.log("Scroll")
  }
  window.addEventListener('scroll', showScroll)

  return (
    <header className="navbar__head">
      <nav className="navbar__container">
        <div className="navbar__logo">LOGO</div>
        <div className="navbar__content">
          <div>About</div>
          <div>Experience</div>
          <div>Contact</div>
          <div className="navbar__cv"><a href={CV} target="_blank" rel="noreferrer">CV</a></div>
        </div>
      </nav>
    </header>
  );
};
