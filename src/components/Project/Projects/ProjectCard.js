// == Imports
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import formatMoney from 'src/utils/formatMoney';

// == Component
const ProjectCard = ({
  id,
  name,
  description,
  difficulty,
  completion,
}) => {
  // retrieving from state every employee
  const devsList = useSelector((state) => state.dev.devList);

  // get dev on project
  const onProjectDevsList = devsList.filter((d) => d.projectId === id);

  return (
    <Link className="card" to={`/projects/${id}`}>
      <div className="card__project">
        <h2>{name}</h2>
        <p>{description}</p>
        <ul className="card__project__dev-list">
          Développeurs sur le projet:
          {onProjectDevsList.map((dev) => (
            <li key={dev.id}>
              {dev.name}
            </li>
          ))}
        </ul>
        <p>Difficulté: <span>{difficulty.level}</span></p>
        <p>Bénéfice: <span>{formatMoney(difficulty.profit)}$</span></p>
        <p>Complétion: {completion}/{difficulty.production}</p>
      </div>
    </Link>
  );
};

// Proptypes validation
ProjectCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  difficulty: PropTypes.shape({
    id: PropTypes.number.isRequired,
    level: PropTypes.number.isRequired,
    profit: PropTypes.number.isRequired,
    reputation: PropTypes.number.isRequired,
    production: PropTypes.number.isRequired,
  }).isRequired,
  completion: PropTypes.number.isRequired,
};

export default ProjectCard;
