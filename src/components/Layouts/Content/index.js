// === Imports
import './content.scss';
import PropTypes from 'prop-types';

// == Component
const Content = ({ children }) => (
  <main className="content">
    {children}
  </main>
);

// == Proptypes validation
Content.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Content;
