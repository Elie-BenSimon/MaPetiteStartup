// == Imports
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProjectCard from './ProjectCard';
import './project.scss';

// == Component
const Projects = () => {
  const projectsList = useSelector((state) => state.project.projectsList);

  return (
    <div className="projects">
      <div className="projects__header">
        <h3>Mes projets</h3>
      </div>
      <ul className="projects__cards">
        {projectsList.map((project) => (
          <li
            className="projects__card"
            key={project.id}
          >
            <ProjectCard {...project} />
          </li>
        ))}
      </ul>
      <Link
        className="projects__button"
        to="/projects/new"
      >
        Nouveau projet
      </Link>
    </div>
  );
};

export default Projects;
