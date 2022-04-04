// == Imports
import { Link } from 'react-router-dom';
import './project.scss';

// == Component
const Projects = () => (
  <div className="projects">
    <ul>
      <li>projet1</li>
      <li>projet2</li>
      <li>projet3</li>
    </ul>
    <Link to="/projects/new">Nouveau projet</Link>
  </div>
);

export default Projects;
