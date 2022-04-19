// == Imports
import { useDispatch } from 'react-redux';
import { toggleFormStatus } from 'src/actions/homepage';

import PropTypes from 'prop-types';

// == Component
const CloseButton = ({ modal }) => {
  const dispatch = useDispatch();

  return (
    <div className="modal__content__button-container">
      <button
        type="button"
        className="button button-round button-round-close"
        onClick={() => {
          // Close the modal indicated as props
          dispatch(toggleFormStatus(`${modal}`, false));
        }}
      >
        <p>+</p>
      </button>
    </div>
  );
};

// == Proptypes validation
CloseButton.propTypes = {
  modal: PropTypes.string.isRequired,
};

export default CloseButton;
