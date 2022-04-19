// === Imports
import './wrapper.scss';
import PropTypes from 'prop-types';

// == Component
const Wrapper = ({ children }) => (
  <main className="wrapper">
    <div className="wrapper__content">
      {children}
    </div>
  </main>
);

// == Proptypes validation
Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Wrapper;
