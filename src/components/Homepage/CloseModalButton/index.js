// == Imports
import { useDispatch } from 'react-redux';
import { toggleFormStatus } from 'src/actions/homepage';

import PropTypes from 'prop-types';
import './closeButton.scss';

// == Component
const CloseButton = ({ modal }) => {
  const dispatch = useDispatch();

  return (
    <button
      type="button"
      className="button-close"
      onClick={() => {
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
