// == Imports
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// == Component
const ProjectCard = ({
  name,
  description,
  difficulty,
  completion,
  id,
}) => (
  <Link className="projectCard" to={`/projects/${id}`}>
    <h2>{name}</h2>
    <p>{description}</p>
    <ul>
      <li>dev1</li>
      <li>dev2</li>
      <li>dev3</li>
    </ul>
    <p>Difficulté</p>
    <p>{difficulty}</p>
    <p>Bénéfice: <span>100M$</span></p>
    <p>{completion}</p>
  </Link>
);

// Proptypes validation
ProjectCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  difficulty: PropTypes.number.isRequired,
  completion: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
};

export default ProjectCard;
