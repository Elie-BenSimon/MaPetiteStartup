import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { fireDev } from '../../actions/dev';

const FireButton = ({ id }) => {
  const dispatch = useDispatch();

  return (
    <button
      className="fireButton"
      type="button"
      onClick={() => (
        dispatch(fireDev(id))
      )}
    >
      Licensier
    </button>
  );
};

// Proptypes validation
FireButton.propTypes = {
  id: PropTypes.number.isRequired,
};

export default FireButton;
