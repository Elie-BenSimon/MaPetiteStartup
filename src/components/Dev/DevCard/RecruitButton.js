// == Imports
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { requestDev } from 'src/actions/dev';
import './devCard.scss';

// == Component
const RecruitButton = ({
  id,
}) => {
  const dispatch = useDispatch();
  const totalPlaces = useSelector((state) => state.dev.totalPlaces);
  const devNumber = useSelector((state) => state.dev.devList).length;

  return (
    <button
      className="button button-action1 card__button"
      type="button"
      onClick={() => {
        if (devNumber < totalPlaces) {
          dispatch(requestDev(id));
        }
      }}
    >
      Recruter
    </button>
  );
};

// == Proptypes validation
RecruitButton.propTypes = {
  id: PropTypes.string.isRequired,
};

export default RecruitButton;
