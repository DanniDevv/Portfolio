import React from "react";

import "./navbar.css";

export const NavBar = () => {
  return (
    <>
      <nav>
        <div className="conten-logo">
          <h1>DaniDev</h1>
        </div>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/proyects">Proyects</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
    </>
  );
};
export default NavBar;
