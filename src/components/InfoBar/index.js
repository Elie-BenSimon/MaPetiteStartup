// == Import
import './infoBar.scss';
import PropTypes from 'prop-types';

// == Component
const InfoBar = ({ children }) => (
  <main className="info-bar">
    {children}
  </main>
);

// == Proptypes validation
InfoBar.propTypes = {
  children: PropTypes.node.isRequired,
};

export default InfoBar;
