// == Imports
import PropTypes from 'prop-types';
import './devCard.scss';

// == Component
const DevCard = ({ name, skill, salary, children }) => (
  <div className="devCard">
    <div className="devCard__wrapper">
      <img src="" alt="" className="devCard__avatar" />
      <div className="devCard__infos">
        <p>Nom: {name}</p>
        <p>Niveau de compétence: {skill}</p>
        <p>Salaire: {salary}</p>
      </div>
    </div>
    {children}
  </div>
);

// Proptypes validation
DevCard.propTypes = {
  name: PropTypes.string.isRequired,
  skill: PropTypes.number.isRequired,
  salary: PropTypes.number.isRequired,
  children: PropTypes.node,
};

DevCard.defaultProps = {
  children: null,
};

export default DevCard;