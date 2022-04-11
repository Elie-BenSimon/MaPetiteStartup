// == Imports
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import './error.scss';

import ClosePageButton from 'src/components/Statics/ClosePageButton';
import stop from 'src/assets/img/stop.gif';

// == Component
const Error = () => {
  const token = useSelector((state) => state.user.token);

  return (
    <div className="error box">
      <div className="error__button-close">
        {token === null && <ClosePageButton page="/" />}
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
};

export default Error;
