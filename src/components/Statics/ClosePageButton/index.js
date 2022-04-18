// == Imports
import { useNavigate } from 'react-router-dom';

import PropTypes from 'prop-types';

// == Component
const ClosePageButton = ({ page }) => {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      className="button button-round button-round-close"
      onClick={() => {
        // Redirection to the route given as props
        navigate(`${page}`);
      }}
    >
      <p>+</p>
    </button>
  );
};

// == Proptypes validation
ClosePageButton.propTypes = {
  page: PropTypes.string.isRequired,
};

export default ClosePageButton;
