import React from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./navbar.css";

export const NavBar = () => {
  return (
    <>
      <header>
        <div className="conten-logo">
          <h1>DaniDev</h1>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/proyects">Projects</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
export default NavBar;
