// == Imports
import './error.scss';

import stop from 'src/assets/img/stop.gif';

import { Link } from 'react-router-dom';

// == Component
const Error = () => (
  <div className="error">
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

export default Error;
