import React from "react";
import NavBar from "../../components/NavBar";

import { Player } from "@lottiefiles/react-lottie-player";

import "./Home.css";

function Home() {
  return (
    <>
      <NavBar />
      <div className="home-intro">
        <div className="home-content">
          <p>✌🏻 Hi There! I'm Dante</p>
        </div>
        <div className="home-container">
          <div className="home-content-primary">
            <p>
              A passionate <span>Developer</span> 🚀 having an experience of
              building Web.
            </p>
          </div>
          <div className="home-icon">
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
