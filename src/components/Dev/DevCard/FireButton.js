// == Imports
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { fireDev, patchDev } from 'src/actions/dev';

// == Component
const FireButton = ({ id }) => {
  const dispatch = useDispatch();

  return (
    <button
      className="button button-action2 card__dev__button"
      type="button"
      onClick={() => {
        dispatch(fireDev(id));
        dispatch(patchDev(id, { code_startup: null, code_project: null }));
      }}
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
