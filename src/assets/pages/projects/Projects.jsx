import "./Projects.css";
import Nav from "../../../components/nav/Nav";
import Footer from "../../../components/footer/Footer";

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
          <ul>
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
