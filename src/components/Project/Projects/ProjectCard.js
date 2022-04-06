// == Imports
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

// == Component
const ProjectCard = ({
  name,
  description,
  difficulty,
  completion,
  id,
}) => {
  // retrieving from state every employee
  const devsList = useSelector((state) => state.dev.devList);

  // get dev on project
  const onProjectDevsList = devsList.filter((d) => d.code_project === id);

  return (
    <Link className="projectCard" to={`/projects/${id}`}>
      <h2>{name}</h2>
      <p>{description}</p>
      <ul>
        {onProjectDevsList.map((dev) => (
          <li key={dev.id}>
            {dev.name}
          </li>
        ))}
      </ul>
      <p>Difficulté</p>
      <p>{difficulty}</p>
      <p>Bénéfice: <span>100M$</span></p>
      <p>{completion}</p>
    </Link>
  );
};

// Proptypes validation
ProjectCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  difficulty: PropTypes.number.isRequired,
  completion: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
};

export default ProjectCard;
