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
      <h2 className="">{name}</h2>
      <p className="">{description}</p>
      <ul className="">
        {onProjectDevsList.map((dev) => (
          <li key={dev.id} className="">
            {dev.name}
          </li>
        ))}
      </ul>
      <p className="">Difficulté: <span>{difficulty.level}</span></p>
      <p className="">Bénéfice: <span>{formatMoney(difficulty.profit)}$</span></p>
      <p className="">Complétion: {completion}/{difficulty.production}</p>
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
