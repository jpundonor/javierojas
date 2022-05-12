import React from "react";

export const Navbar = () => {
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
          <div>CV</div>
        </div>
      </nav>
    </header>
  );
};
