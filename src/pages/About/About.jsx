import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNode,
  FaNpm,
  FaAngular,
  FaPython,
  FaDocker,
  FaGithub,
} from "react-icons/fa";
import {
  SiAstro,
  SiTailwindcss,
  SiJavascript,
  SiPostman,
  SiApachenetbeanside,
} from "react-icons/si";
import { DiDjango } from "react-icons/di";
import { TbBrandVscode } from "react-icons/tb";
import { GrAndroid } from "react-icons/gr";
import SkillBar from "../../components/ProgresBar/SkillBar";
import tecsup from "../../assets/img/img-about/tecsup.png";
import "./about.css";
function About() {
  return (
    <>
      <div className="skills-container">
        <div className="skills-content">
          <div className="skills-icon">
            <Player
              src="https://lottie.host/b4f7a0e9-4f23-428d-9acb-93e3a7cda808/78LkaeKQvM.json"
              className="skills-player"
              loop
              autoplay
            />
          </div>
          <div className="skills-info">
            <div className="skills-title">
              <h1>What I do</h1>
            </div>
            <p>
              Enthusiastic Full Stack developer with a zeal for exploring new
              technologies. My passion for programming motivates me to
              constantly learn and adopt innovations to contribute to the
              evolving technological field.
            </p>
          </div>
        </div>
      </div>
      <div className="education-container">
        <div className="education-title">
          <h1>Education</h1>
        </div>
        <div className="education-content">
          <div className="education-icon">
            <img src={tecsup} alt="img-tecsup" className="img-tecsup" />
          </div>
          <div className="education-info">
            <h2 className="edu-title2">
              Tecsup - Institute of Higher Education
            </h2>
            <p className="edu-date">August 2021 - March 2024</p>
            <p className="edu-inf">
              I am currently immersed in the last semester of my studies,
              seeking to improve my skills as a software developer.
            </p>
          </div>
        </div>
      </div>
      <div className="content-general">
        <div className="skills">
          <div className="skills-title2">
            <h1>Skils</h1>
          </div>
          <div className="skills-card">
            <ul className="dev-icons">
              <li className="software-skill">
                <i className="software-icon">
                  <FaHtml5 />
                </i>
                <p className="name">HTML-5</p>
              </li>
              <li className="software-skill">
                <i className="software-icon">
                  <FaCss3Alt />
                </i>
                <p className="name">CSS-3</p>
              </li>
              <li className="software-skill">
                <i className="software-icon">
                  <SiJavascript />
                </i>
                <p className="name">Javascript</p>
              </li>
              <li className="software-skill">
                <i className="software-icon">
                  <FaReact />
                </i>
                <p className="name">React</p>
              </li>
              <li className="software-skill">
                <i className="software-icon">
                  <SiAstro />
                </i>
                <p className="name">Astro</p>
              </li>
              <li className="software-skill">
                <i className="software-icon">
                  <FaNode />
                </i>
                <p className="name">Node.JS</p>
              </li>
              <li className="software-skill">
                <i className="software-icon">
                  <FaNpm />
                </i>
                <p className="name">npm</p>
              </li>
              <li className="software-skill">
                <i className="software-icon">
                  <FaAngular />
                </i>
                <p className="name">Angular</p>
              </li>
              <li className="software-skill">
                <i className="software-icon">
                  <FaPython />
                </i>
                <p className="name">Python</p>
              </li>
              <li className="software-skill">
                <i className="software-icon">
                  <DiDjango />
                </i>
                <p className="name">Django</p>
              </li>
              <li className="software-skill">
                <i className="software-icon">
                  <SiTailwindcss />
                </i>
                <p className="name">Tailwind</p>
              </li>
              <li className="software-skill">
                <i className="software-icon">
                  <FaDocker />
                </i>
                <p className="name">Docker</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="dev-tools">
          <div className="tools-title3">
            <h1>Development Tools</h1>
          </div>
          <div className="dev-card">
            <ul className="dev-icons">
              <li className="software-tools">
                <i className="tools-icon">
                  <TbBrandVscode />
                </i>
                <p className="name">VS Code</p>
              </li>
              <li className="software-tools">
                <i className="tools-icon">
                  <GrAndroid />
                </i>
                <p className="name">Android Studio</p>
              </li>
              <li className="software-tools">
                <i className="tools-icon">
                  <SiPostman />
                </i>
                <p className="name">Postman</p>
              </li>
              <li className="software-tools">
                <i className="tools-icon">
                  <SiApachenetbeanside />
                </i>
                <p className="name">Netbeans</p>
              </li>
              <li className="software-tools">
                <i className="tools-icon">
                  <FaGithub />
                </i>
                <p className="name">GitHub</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="competence-container">
        <div className="competence-content">
          <div className="competence-info">
            <div className="competence-title">
              <h1>Competence</h1>
            </div>
            <div className="competence-progres">
              <SkillBar />
            </div>
          </div>
          <div className="competence-icon">
            <Player
              src="https://lottie.host/90b74fb1-fdae-4e40-aa67-0a7c3372f67c/RQy6zDNBB3.json"
              className="competence-player"
              loop
              autoplay
            />
          </div>
        </div>
      </div>
      <div className="experience-container">
        <div className="experience-title">
          <h1>Experience</h1>
        </div>
        <div className="experience-content">
          <div className="card">
            <div className="card-content">
              <h2 className="card-title">Landing Page in CCIP</h2>
              <p className="card-body">
                I have created a dynamic homepage for a networking company, with
                intuitive interfaces and fluid navigation. Highlights the
                company's innovative solutions through elegant design, improving
                the overall user experience
              </p>
              <a href="#" className="button">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default About;
