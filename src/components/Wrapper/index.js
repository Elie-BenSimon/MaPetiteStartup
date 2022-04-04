// == Imports
import './wrapper.scss';
import PropTypes from 'prop-types';

// == Components
const Wrapper = ({ children }) => (
  <main className="wrapper">
    {children}
  </main>
);

// == Proptypes validation
Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Wrapper;
