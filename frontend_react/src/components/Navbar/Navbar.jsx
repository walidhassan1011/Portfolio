import React from "react";
import { images } from "../../constants";
import "./Navbar.scss";
const Navbar = () => {
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" />
      </div>
      <ul className="app__navbar-links">
        {["Home", "About", , "Work", "Skills", "Contact"].map((item, index) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item.toLowerCase()}`}>{item}</a>
          </li>
        ))}
      </ul>
      <div className="app__navbar-menu"></div>
    </nav>
  );
};

export default Navbar;
