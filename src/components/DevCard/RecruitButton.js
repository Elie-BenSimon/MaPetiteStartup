// == Imports
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { recruitDev } from '../../actions/dev';

// == Component
const RecruitButton = ({
  id,
  name,
  avatar,
  skill,
  salary,
}) => {
  const dispatch = useDispatch();

  return (
    <button
      className="recruitButton"
      type="button"
      onClick={() => (
        dispatch(recruitDev({
          id: id,
          name: name,
          avatar: avatar,
          skill: skill,
          salary: salary,
        }))
      )}
    >
      Recruter
    </button>
  );
};

// == Proptypes validation
RecruitButton.propTypes = {
  id: PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  skill: PropTypes.number.isRequired,
  salary: PropTypes.number.isRequired,
};

export default RecruitButton;
