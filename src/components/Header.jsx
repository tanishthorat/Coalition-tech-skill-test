import React, { useEffect, useState } from "react";
import Logo from "/src/images/logo.png";
import LogoText from "/src/images/logotext.png";
import Nav from "./Nav";

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const mainSection = document.getElementById("main");
      const isScrolled = window.scrollY > mainSection.offsetTop;

      // Update the state to trigger the fade-out effect
      setScrolled(isScrolled);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full nav-container z-10 ${
        scrolled ? "scrolled" : ""
      }`}
    >
      <div className="flex flex-wrap justify-evenly items-center py-4 ">
        <div>
          <a href="#main" id="logo-container" className="flex">
            <img src={Logo} alt="Coalition Tech" className="h-10 logo" />
            <img
              src={LogoText}
              alt="Losangeles"
              className="h-10 mx-4"
              style={{ visibility: scrolled ? "visible" : "hidden" }}
            />
          </a>
        </div>
        <div className={`navSpace flex gap-20 ${scrolled ? "blue" : ""}`}>
          <Nav scrolled={scrolled}>
            <a href="#history">01. HISTORY</a>
          </Nav>
          <Nav scrolled={scrolled}>
            <a href="#team">02. TEAM</a>
          </Nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
