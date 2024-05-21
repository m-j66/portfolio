import React, { useState } from "react";
import "./Navbar.css";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`navbar ${isOpen ? "open" : ""}`}>
      <div className="navbar-toggle" onClick={toggleNavbar}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={`nav-menu ${isOpen ? "open" : ""}`}>
        <li>
          <AnchorLink className="anchor" href="#intro" onClick={toggleNavbar}>
            Home
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor" href="#skills" onClick={toggleNavbar}>
            Skills
          </AnchorLink>
        </li>
        <li>
          <AnchorLink
            className="anchor"
            href="#projects"
            onClick={toggleNavbar}
          >
            Projects
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor" href="#contact" onClick={toggleNavbar}>
            Contact Me
          </AnchorLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
