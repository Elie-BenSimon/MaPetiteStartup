// == Imports
import './devCard.scss';
import PropTypes from 'prop-types';

// == Component
const DevCard = ({ name, skill, salary }) => (
  <div className="devCard">
    <p>nom: {name}</p>
    <p>niveau de competence: {skill}</p>
    <p>salaire: {salary}</p>
  </div>
);

// Proptypes validation
DevCard.propTypes = {
  name: PropTypes.string.isRequired,
  skill: PropTypes.number.isRequired,
  salary: PropTypes.number.isRequired,
};

export default DevCard;
