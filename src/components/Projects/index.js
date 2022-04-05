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
      <ul>
        {projectsList.map((project) => (
          <li>
            <ProjectCard {...project} />
          </li>
        ))}
      </ul>
      <Link to="/projects/new">Nouveau projet</Link>
    </div>
  );
};

export default Projects;
