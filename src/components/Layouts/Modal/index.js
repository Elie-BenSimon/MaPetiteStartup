// == Imports
import PropTypes from 'prop-types';

import './modal.scss';

// == Component
const Modal = ({ children }) => (
  <div className="modal">
    <div className="modal__content">
      {children}
    </div>
  </div>
);

// == Proptypes validation
Modal.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Modal;
