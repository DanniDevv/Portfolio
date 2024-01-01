import React from "react";
import NavBar from "../../components/NavBar";
import "./About.css";
function About() {
  return (
    <div>
      <NavBar />
      <div className="about-container">
        <h1>About</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus
          ipsa quod similique voluptates tenetur distinctio vero ratione.
          Quaerat eum exercitationem laborum nobis odit, ipsam quis rem eligendi
          asperiores, sint fugit?
        </p>
      </div>
    </div>
  );
}
export default About;
