// == Imports
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { fireDev } from '../../actions/dev';
import './devCard.scss';

// == Component
const FireButton = ({ id }) => {
  const dispatch = useDispatch();

  return (
    <button
      className="button button__fire"
      type="button"
      onClick={() => (
        dispatch(fireDev(id))
      )}
    >
      Licencier
    </button>
  );
};

// == Proptypes validation
FireButton.propTypes = {
  id: PropTypes.number.isRequired,
};

export default FireButton;
