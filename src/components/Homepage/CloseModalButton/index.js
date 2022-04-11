// == Imports
import { useDispatch } from 'react-redux';
import { toggleFormStatus } from 'src/actions/homepage';

import PropTypes from 'prop-types';

// == Component
const CloseButton = ({ modal }) => {
  const dispatch = useDispatch();

  return (
    <button
      type="button"
      className="button-close"
      onClick={() => {
        // Close the modal indicated as props
        dispatch(toggleFormStatus(`${modal}`, false));
      }}
    >
      <p>+</p>
    </button>
  );
};

// == Proptypes validation
CloseButton.propTypes = {
  modal: PropTypes.string.isRequired,
};

export default CloseButton;
