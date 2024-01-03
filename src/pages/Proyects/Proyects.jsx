import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import "./proyects.css";
import best_movie from "../../assets/img/img-proyects/best_movie.png";
import biblioteca from "../../assets/img/img-proyects/biblioteca.png";
import smartparking from "../../assets/img/img-proyects/smartparking.png";
import ccip from "../../assets/img/img-about/ccip.png";
import portfolio from "../../assets/img/img-proyects/portfolio.png";
const projectsData = [
  {
    id: 1,
    title: "Best Movie",
    description:
      "This was a project carried out in the first cycle as a student of the degree Software design and development.",
    image: best_movie,
    githubLink: "https://github.com/DanniDevv/best-movie",
    liveLink: "https://best-movie.com",
  },
  {
    id: 2,
    title: "Smart Parking",
    description:
      "This was a project created together in order to improve the shape of the parking lots.",
    image: smartparking,
    githubLink: "https://github.com/DanniDevv/Login-Smartparking.git",
    liveLink: "https://smart-parking.com",
  },
  {
    id: 3,
    title: "Library with Django",
    description:
      "This was a project carried out in a contest organized by the Tecsup Institute, since this gave a period of time to create an API using Django.",
    image: biblioteca,
    githubLink: "https://github.com/DanniDevv/BibliotecaDjangoV3.git",
    liveLink: "https://django-library.com",
  },
  {
    id: 4,
    title: "Landing Page CCIP",
    description:
      "This is one of the pages created for a company during my internship.",
    image: ccip,
    githubLink: "https://github.com/yourusername/ccip-landing",
    liveLink: "https://cciplus.ccip.com.pe/",
  },
  {
    id: 5,
    title: "Portfolio",
    description: "This is my first portfolio created with html, css and js.",
    image: portfolio,
    githubLink: "https://github.com/DanniDevv/Portafolio-DaniDev.git",
    liveLink: "https://danidev-folio.netlify.app/",
  },
];

function Proyects() {
  return (
    <>
      <NavBar />
      <div>
        <div className="project-title">
          <h1 className="pro-title">Proyectos</h1>
        </div>
        <div className="project-container">
          {projectsData.map((project) => (
            <motion.div
              key={project.id}
              className="project-card"
              whileHover={{ scale: 1 }}
              whileTap={{ scale: 0.9 }}
            >
              <img src={project.image} alt={`Proyecto ${project.id}`} />
              <div className="project-info">
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <div className="project-links">
                  <a
                    className="github-link"
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub />
                  </a>
                  <a
                    className="live-link"
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Proyects;
