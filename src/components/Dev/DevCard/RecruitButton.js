// == Imports
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { recruitDev } from 'src/actions/dev';
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
        dispatch(recruitDev({
          id: id,
          name: name,
          avatar: avatar,
          skill: skill,
          salary: salary,
          code_project: null,
          lassitude: 0,
        }))
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
