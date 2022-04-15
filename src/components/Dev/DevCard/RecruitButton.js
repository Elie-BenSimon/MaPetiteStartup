// == Imports
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { requestDev } from 'src/actions/dev';
import './devCard.scss';

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
      className="button button-action1 card__button"
      type="button"
      onClick={() => (
        dispatch(requestDev(id))
      )}
    >
      Recruter
    </button>
  );
};

// == Proptypes validation
RecruitButton.propTypes = {
  id: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  skill: PropTypes.number.isRequired,
  salary: PropTypes.number.isRequired,
};

export default RecruitButton;
