import "./navBar.css";
import LightLogo from "../../images/logo-white.png";
import DarkLogo from "../../images/logo-dark.png";
import { useState, useEffect } from "react";
import Hamburger from "../../images/burger.svg";
import WhiteBurger from "../../images/whiteBurger.svg";

const NavBar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [activeNav, setActiveNav] = useState("home");
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleShowNavbar() {
    setShowNavbar(!showNavbar);
  }

  function onClickNav(e) {
    setActiveNav(e);
  }

  return (
    <nav className={`${sticky ? "navbar sticky" : "navbar"}`}>
      <div className="container">
        <div className="logo">
          <img
            src={sticky ? LightLogo : DarkLogo}
            alt="logo"
            width="auto"
            height="45px"
          />
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <img
            src={sticky ? WhiteBurger : Hamburger}
            alt="menu"
            width="45"
            height="45"
          />
        </div>
        <div
          className={`nav-elements ${showNavbar ? "active" : ""} ${
            sticky ? "sticky" : ""
          }`}
        >
          <ul>
            <li>
              <a
                href="#home"
                onClick={() => onClickNav("home")}
                className={`${activeNav === "home" ? "active" : ""}`}
              >
                HOME
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={() => onClickNav("about")}
                className={`${activeNav === "about" ? "active" : ""}`}
              >
                ABOUT
              </a>
            </li>
            <li>
              <a
                href="#services"
                onClick={() => onClickNav("services")}
                className={`${activeNav === "services" ? "active" : ""}`}
              >
                SERVICES
              </a>
            </li>
            <li>
              <a
                href="#work"
                onClick={() => onClickNav("work")}
                className={`${activeNav === "work" ? "active" : ""}`}
              >
                WORK
              </a>
            </li>
            <li>
              <a
                href="#culture"
                onClick={() => onClickNav("culture")}
                className={`${activeNav === "culture" ? "active" : ""}`}
              >
                CULTURE
              </a>
            </li>
            <li>
              <a
                href="#inquire"
                onClick={() => onClickNav("inquire")}
                className={`${activeNav === "inquire" ? "active" : ""}`}
              >
                CONTACT US
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
