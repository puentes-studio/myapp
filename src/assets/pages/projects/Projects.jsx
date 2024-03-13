import "./Projects.css";
import unika from "../../img/projects/unika.png";
import puentesStudio from "../../img/projects/logo_puentes_studio.png";
import pokemon from "../../img/projects/pokemon.webp";
import drumpadd from "../../img/projects/DrumApp.png";
import Nav from "../../../components/nav/Nav";
import Footer from "../../../components/footer/Footer";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <>
      <Nav />
      <main className="main-projects">
        <header className="header-projects">
          <h2>/Work</h2>
          <p>Selected projects I've taken on in the past.</p>
        </header>
        <section className="work-container">
          <ul className="projects">
            <li className="project-container">
              {/* <NavLink
                to="/"
                target="_blank"
                className="project-link"
              ></NavLink> */}
              <figure className="project-logo">
                <img src={unika} className="logo-client" alt="Project-logo" />
              </figure>
              <div className="project-info">
                <h3 className="project-title">Unika HR</h3>
                <div className="links-container">
                  <Link
                    className="project-website"
                    target="blank"
                    to="https://unikahr.com/"
                  >
                    See project
                  </Link>
                  <Link className="project-website" target="blank" to="">
                    See Repository
                  </Link>
                </div>
              </div>
            </li>
            <li className="project-container">
              {/* <NavLink
                to="/"
                target="_blank"
                className="project-link"
              ></NavLink> */}
              <figure className="project-logo">
                <img
                  src={puentesStudio}
                  className="logo-client"
                  alt="Project-logo"
                />
              </figure>
              <div className="project-info">
                <h3 className="project-title">Puentes Studio</h3>
                <div className="links-container">
                  <Link
                    className="project-website"
                    target="blank"
                    to="https://puentesstudio.com/"
                  >
                    See project
                  </Link>
                  <Link className="project-website" target="blank" to="">
                    See Repository
                  </Link>
                </div>
              </div>
            </li>
            <li className="project-container">
              {/* <NavLink
                to="/"
                target="_blank"
                className="project-link"
              ></NavLink> */}
              <figure className="project-logo">
                <img src={pokemon} className="logo-client" alt="Project-logo" />
              </figure>
              <div className="project-info">
                <h3 className="project-title">Pokedesk</h3>
                <div className="links-container">
                  <Link
                    className="project-website"
                    target="blank"
                    to="https://pokemon-black-sable.vercel.app/"
                  >
                    See Project
                  </Link>
                  <Link
                    className="project-website"
                    target="blank"
                    to="https://github.com/puentes-studio/PokemonBlack"
                  >
                    See Repository
                  </Link>
                </div>
              </div>
            </li>
            <li className="project-container">
              {/* <NavLink
                to="/"
                target="_blank"
                className="project-link"
              ></NavLink> */}
              <figure className="project-logo">
                <img
                  src={drumpadd}
                  className="logo-client"
                  alt="Project-logo"
                />
              </figure>
              <div className="project-info">
                <h3 className="project-title">Drummpadd</h3>
                <div className="links-container">
                  <Link
                    className="project-website"
                    target="blank"
                    to="https://pokemon-black-sable.vercel.app/"
                  >
                    See Project
                  </Link>
                  <Link
                    className="project-website"
                    target="blank"
                    to="https://github.com/puentes-studio/PokemonBlack"
                  >
                    See Repository
                  </Link>
                </div>
              </div>
            </li>
            <li className="project-container">
              {/* <NavLink
                to="/"
                target="_blank"
                className="project-link"
              ></NavLink> */}
              <figure className="project-logo">
                <img
                  src={drumpadd}
                  className="logo-client"
                  alt="Project-logo"
                />
              </figure>
              <div className="project-info">
                <h3 className="project-title">Drummpadd</h3>
                <div className="links-container">
                  <Link
                    className="project-website"
                    target="blank"
                    to="https://pokemon-black-sable.vercel.app/"
                  >
                    See Project
                  </Link>
                  <Link
                    className="project-website"
                    target="blank"
                    to="https://github.com/puentes-studio/PokemonBlack"
                  >
                    See Repository
                  </Link>
                </div>
              </div>
            </li>
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Projects;
