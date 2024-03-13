import "./Projects.css";
import unika from "../../img/projects/unika.png";
import Nav from "../../../components/nav/Nav";
import Footer from "../../../components/footer/Footer";
import { Link, NavLink } from "react-router-dom";

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
                <Link
                  className="project-website"
                  target="blank"
                  to="https://unikahr.com/"
                >
                  www.unikahr.com
                </Link>
              </div>
            </li>
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
                <a className="project-website" href="https://unikahr.com/">
                  www.unikahr.com
                </a>
              </div>
            </li>
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
                <a className="project-website" href="https://unikahr.com/">
                  www.unikahr.com
                </a>
              </div>
            </li>
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
                <a className="project-website" href="https://unikahr.com/">
                  www.unikahr.com
                </a>
              </div>
            </li>
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
                <Link
                  className="project-website"
                  target="blank"
                  href="https://unikahr.com/"
                >
                  www.unikahr.com
                </Link>
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
