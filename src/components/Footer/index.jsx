import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import "./footer.css";
function Footer() {
  return (
    <>
      <div className="footer-container">
        <div className="footer-content">
          <h1>Made with ❤️ by DaniDev</h1>
        </div>
        <div className="footer-list">
          <ul className="footer-icon">
            <li className="social-icon">
              <FaGithub />
            </li>
            <li className="social-icon">
              <FaFacebook />
            </li>
            <li className="social-icon">
              <FaLinkedin />
            </li>
            <li className="social-icon">
              <FaInstagram />
            </li>
          </ul>
        </div>
        <div className="footer-end">
          <p>
            © 2024 Todos los derechos reservados. Queda prohibida la
            reproducción total o parcial de los contenidos sin autorización
            expresa
          </p>
        </div>
      </div>
    </>
  );
}
export default Footer;
