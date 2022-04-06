// == Imports
import PropTypes from 'prop-types';
import './devCard.scss';

// == Component
const DevCard = ({ name, skill, salary }) => (
  <div className="devCard">
    <p>Nom: {name}</p>
    <p>Niveau de compétence: {skill}</p>
    <p>Salaire: {salary}</p>
  </div>
);

// Proptypes validation
DevCard.propTypes = {
  name: PropTypes.string.isRequired,
  skill: PropTypes.number.isRequired,
  salary: PropTypes.number.isRequired,
};

export default DevCard;
