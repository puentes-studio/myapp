import "./Projects.css";
import Nav from "../../../components/nav/Nav";
import Footer from "../../../components/footer/Footer";
import ProjectsGrid from "../../../components/projectsGrid/ProjectsGrid";

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
          <ProjectsGrid />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Projects;
