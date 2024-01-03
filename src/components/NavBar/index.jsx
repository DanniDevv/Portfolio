import React from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";

import "./navbar.css";

export const NavBar = () => {
  return (
    <>
      <header>
        <div className="conten-logo">
          <h1>
            &lt;
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed once, initially
                " Developer ",
                1000,
                " Backend ",
                1000,
                " Frontend ",
                1000,
                " DaniDev ",
                1000,
              ]}
              speed={50}
              style={{ fontSize: "1em" }}
              repeat={Infinity}
            />
            /&gt;
          </h1>
        </div>
        <nav>
          <ul className="nav-ul">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/proyects">Projects</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
export default NavBar;
