import "./Projects.css";
import unika from "../../img/unika.png";
import Nav from "../../../components/nav/Nav";
import Footer from "../../../components/footer/Footer";
import { NavLink } from "react-router-dom";

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
            <li>
              <NavLink
                to="/"
                target="_blank"
                className="project-link"
              ></NavLink>
              <figure className="project-logo">
                <img
                  src={unika}
                  className="logo-client"
                  alt="Home illustration"
                />
              </figure>
              <div className="project-info">
                <h3 className="project-title"></h3>
                <a href="http://"></a>
              </div>
            </li>
            <li>
              <a href="http://" target="_blank" rel="noopener noreferrer"></a>
              <figure className="project-logo"></figure>
              <div className="project-info">
                <h3 className="project-title"></h3>
                <a href="http://"></a>
              </div>
            </li>
            <li>
              <a href="http://" target="_blank" rel="noopener noreferrer"></a>
              <figure className="project-logo"></figure>
              <div className="project-info">
                <h3 className="project-title"></h3>
                <a href="http://"></a>
              </div>
            </li>
            <li>
              <a href="http://" target="_blank" rel="noopener noreferrer"></a>
              <figure className="project-logo"></figure>
              <div className="project-info">
                <h3 className="project-title"></h3>
                <a href="http://"></a>
              </div>
            </li>
            <li>
              <a href="http://" target="_blank" rel="noopener noreferrer"></a>
              <figure className="project-logo"></figure>
              <div className="project-info">
                <h3 className="project-title"></h3>
                <a href="http://"></a>
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
