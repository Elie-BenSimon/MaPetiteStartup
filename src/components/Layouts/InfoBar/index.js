// == Import
import { useDispatch } from 'react-redux';

import { logOut } from 'src/actions/user';

import './infoBar.scss';
import PropTypes from 'prop-types';

// == Component
const InfoBar = ({ children }) => {
  const dispatch = useDispatch();

  return (
    <main className="info-bar">
      <button
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Déconnexion
      </button>
      {children}
    </main>
  );
};

// == Proptypes validation
InfoBar.propTypes = {
  children: PropTypes.node.isRequired,
};

export default InfoBar;
