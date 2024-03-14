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
    <>
      <div className="flex flex-wrap justify-evenly items-center py-4 opacity-55">
        <div>
          <a href="#main" id="logo-container" className="flex">
            <img src={Logo} alt="Coalition Tech" className="h-16 logo" />
            <img
              src={LogoText}
              alt="Losangeles"
              className="h-16 mx-4"
              style={{
                filter: "brightness(4)",
                visibility: scrolled ? "visible" : "hidden",
              }}
            />
          </a>
        </div>
        <div className={`flex gap-20 ${scrolled ? "blue" : ""}`}>
          <div className="text-white">COPYRIGHT 2016. ALL RIGHTS RESERVED</div>
        </div>
      </div>
    </>
  );
}

export default Header;
