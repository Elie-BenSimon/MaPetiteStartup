// == Import
import { useDispatch } from 'react-redux';

import { logOut } from 'src/actions/user';

import './infoBar.scss';
import PropTypes from 'prop-types';

import trophy from 'src/assets/img/trophy.png';
import coin from 'src/assets/img/coin.png';
import team from 'src/assets/img/team.png';
import project from 'src/assets/img/project.png';

// == Component
const InfoBar = ({ children }) => {
  const dispatch = useDispatch();

  return (
    <main className="info-bar">
      <div className="info-bar__status">
        <h3>Ma super startup</h3>
        <button
          type="button"
          className="info-bar__status__button"
          onClick={() => dispatch(logOut())}
        >
          Déconnexion
        </button>
      </div>
      <div className="info-bar__infos">
        <div className="info-bar__infos__elt">
          <img src={trophy} alt="" />
          <div>
            <p>2K</p>
            <p>Pts</p>
          </div>
        </div>
        <div className="info-bar__infos__elt">
          <img src={coin} alt="" />
          <div>
            <p>5K</p>
            <p>$</p>
          </div>
        </div>
        <div className="info-bar__infos__elt">
          <img src={team} alt="" />
          <div>
            <p>0</p>
            <p>Devs</p>
          </div>
        </div>
        <div className="info-bar__infos__elt">
          <img src={project} alt="" />
          <div>
            <p>0</p>
            <p>Projets</p>
          </div>
        </div>
      </div>
      <div className="info-bar__timer">
        {children}
      </div>
    </main>
  );
};

// == Proptypes validation
InfoBar.propTypes = {
  children: PropTypes.node.isRequired,
};

export default InfoBar;
