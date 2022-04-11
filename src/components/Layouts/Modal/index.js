// == Imports
import PropTypes from 'prop-types';

import CloseModalButton from './CloseModalButton';

import './modal.scss';

// == Component
const Modal = ({ children, modalName }) => (
  <div className="modal">
    <div className="modal__content">
      <div className="modal__content__button-container">
        <CloseModalButton modal={modalName} />
      </div>
      {children}
    </div>
  </div>
);

// == PropTypes validation
Modal.propTypes = {
  modalName: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;
