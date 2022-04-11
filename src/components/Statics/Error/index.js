// == Imports
import PropTypes from 'prop-types';

import './error.scss';

import stop from 'src/assets/img/stop.gif';

import { Link } from 'react-router-dom';

// == Component
const Error = ({ children }) => (
  <div className="error box">
    <div className="error__button-close">
      {children}
    </div>
    <h2>404</h2>
    <h3>C'est pas par là!</h3>
    <img src={stop} alt="Pixelled developper crossing arms" />
    <p>
      Le retour dans le droit chemin c'est
      <Link className="error__link" to="/">
        par ici
      </Link>
      !
    </p>
  </div>

);

// == Proptypes validation
Error.propTypes = {
  children: PropTypes.node,
};

Error.defaultProps = {
  children: null,
};

export default Error;
