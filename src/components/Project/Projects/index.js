// == Imports
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProjectCard from './ProjectCard';

// == Component
const Projects = () => {
  const projectsList = useSelector((state) => state.project.projectsList);
  const activeProjectsList = projectsList.filter((project) => !project.complete);

  return (
    <div className="box projects">

      <div className="box__header projects__header">
        <h2 className="box__header__title ">Mes projets</h2>
      </div>

      <div className="box__content projects__content">
        <ul className="cards__list projects__list">
          {activeProjectsList.map((project) => (
            <li
              className="cards__list__li projects__li"
              key={project.id}
            >
              <ProjectCard {...project} />
            </li>
          ))}
        </ul>
        <Link
          className="button button-action1 projects__button"
          to="/projects/new"
        >
          Nouveau projet
        </Link>
      </div>
    </div>
  );
};

export default Projects;
