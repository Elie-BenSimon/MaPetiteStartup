// == Imports
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { fireDev } from '../../../actions/dev';
import './employeesDevCard.scss';

// == Component
const RecruitableDevCard = ({ id, name, avatar, skill, salary }) => {
  const dispatch = useDispatch();
  return (
    <div className="devCard">
      <p>nom: {name}</p>
      <p>niveau de competence: {skill}</p>
      <p>salaire: {salary}</p>
      <button
        type="button"
        onClick={() => (
          dispatch(fireDev(id))
        )}
      >
        Licensier
      </button>
    </div>
  );
};
// Proptypes validation
RecruitableDevCard.propTypes = {
  name: PropTypes.string.isRequired,
  skill: PropTypes.number.isRequired,
  salary: PropTypes.number.isRequired,
};

export default RecruitableDevCard;
