// import { useState } from "react";
import projectsData from "./ProjectsData";
import { Link } from "react-router-dom";
import "./ProjectsGrid.css";

const ProjectsGrid = () => {
  // const [selected, setSelected] = useState(null);

  return (
    <>
      <ul className="projects">
        {projectsData.map((project) =>
          project.list.map((item, index) => (
            <li key={index} className="project-container">
              <figure className="project-logo">
                <img
                  src={item.imageUrl}
                  className="logo-client"
                  alt="Project-logo"
                />
              </figure>
              <div className="project-info">
                <h3 className="project-title">{item.name}</h3>
                <div className="links-container">
                  <Link
                    className="project-website"
                    target="_blank"
                    to={item.projectLink}
                  >
                    See project
                  </Link>
                  <Link
                    className="project-website"
                    target="_blank"
                    to={item.repositoryLink}
                  >
                    See Repository
                  </Link>
                </div>
              </div>
            </li>
          ))
        )}
      </ul>
    </>
  );
};

export default ProjectsGrid;
