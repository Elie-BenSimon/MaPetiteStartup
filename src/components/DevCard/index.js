// == Imports
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { recruitDev } from '../../actions/dev';
import './devCard.scss';

// == Component
const DevCard = ({ id, name, avatar, skill, salary }) => {
  const dispatch = useDispatch();
  return (
    <div className="devCard">
      <p>nom: {name}</p>
      <p>niveau de competence: {skill}</p>
      <p>salaire: {salary}</p>
      <button
        type="button"
        onClick={() => (
          dispatch(recruitDev({
            id: id,
            name: name,
            code_project: null,
            avatar: name,
            skill: skill,
            salary: salary,
            lassitude: 0,
          }))
        )}
      >
        Recruter
      </button>
    </div>
  );
};
// Proptypes validation
DevCard.propTypes = {
  name: PropTypes.string.isRequired,
  skill: PropTypes.number.isRequired,
  salary: PropTypes.number.isRequired,
};

export default DevCard;
