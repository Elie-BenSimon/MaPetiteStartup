// == Imports
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import formatMoney from 'src/utils/formatMoney';

// == Component
const ProjectCard = ({
  name,
  description,
  difficulty,
  completion,
  completionMax,
  moneyGain,
  id,
}) => {
  // retrieving from state every employee
  const devsList = useSelector((state) => state.dev.devList);

  // get dev on project
  const onProjectDevsList = devsList.filter((d) => d.code_project === id);

  return (
    <Link className="projectCard" to={`/projects/${id}`}>
      <h2 className="projectCard__name">{name}</h2>
      <p className="projectCard__description">{description}</p>
      <ul className="projectCard__dev_list">
        {onProjectDevsList.map((dev) => (
          <li key={dev.id} className="projectCard__dev_li">
            {dev.name}
          </li>
        ))}
      </ul>
      <p className="projectCard__difficulty">Difficulté</p>
      <p className="projectCard__difficulty_value">{difficulty}</p>
      <p className="projectCard__money_gain">Bénéfice: <span>{formatMoney(moneyGain)}$</span></p>
      <p className="projectCard__completion">{completion}/{completionMax}</p>
    </Link>
  );
};

// Proptypes validation
ProjectCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  difficulty: PropTypes.string.isRequired,
  completion: PropTypes.number.isRequired,
  completionMax: PropTypes.number.isRequired,
  moneyGain: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
};

export default ProjectCard;
