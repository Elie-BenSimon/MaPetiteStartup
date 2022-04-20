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
    <Link className="card projectCard" to={`/projects/${id}`}>
      <h2 className="projectCard__name">{name}</h2>
      <p className="projectCard__description">{description}</p>
      <ul className="projectCard__dev_list">
        {onProjectDevsList.map((dev) => (
          <li key={dev.id} className="projectCard__dev_li">
            {dev.name}
          </li>
        ))}
      </ul>
      <p className="projectCard__difficulty">Difficulté: <span>{difficulty.level}</span></p>
      <p className="projectCard__money_gain">Bénéfice: <span>{formatMoney(difficulty.profit)}$</span></p>
      <p className="projectCard__completion">Complétion: {completion}/{difficulty.production}</p>
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

