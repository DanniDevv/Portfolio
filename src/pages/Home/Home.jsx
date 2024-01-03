import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import "./home.css";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { TypeAnimation } from "react-type-animation";
function Home() {
  return (
    <>
      <div className="home-container">
        {/* content */}
        <div className="home-content-general">
          {/* presentation */}
          <div className="home-presentation">
            <div className="home-title">
              <h1>
                <TypeAnimation sequence={["Hi, I'm Dante Rodríguez"]} />
              </h1>
            </div>
            <div className="home-info">
              <p>
                <TypeAnimation
                  sequence={[
                    "Apassionate Developer🚀 having an experience of building Web.",
                  ]}
                  speed={70}
                />
              </p>
            </div>
            <div className="home-contacme">
              <ul className="contact">
                <li className="contact-social">
                  <i className="contact-facebook">
                    <FaFacebook />
                  </i>
                </li>
                <li className="contact-social">
                  <i className="contact-instagram">
                    <FaInstagram />
                  </i>
                </li>
                <li className="contact-social">
                  <i className="contact-linkedin">
                    <FaLinkedin />
                  </i>
                </li>
                <li className="contact-social">
                  <i className="contact-github">
                    <FaGithub />
                  </i>
                </li>
                <li className="contact-social">
                  <i className="contact-gmail">
                    <SiGmail />
                  </i>
                </li>
              </ul>
            </div>
          </div>
          {/* svg */}
          <div className="home-svg">
            <Player
              src="https://lottie.host/aa6870cf-4189-4163-a3ac-d4e4fedd865c/qCGgqKX9JF.json"
              className="player"
              loop
              autoplay
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
