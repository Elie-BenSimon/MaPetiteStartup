// == Import
import { useDispatch, useSelector } from 'react-redux';

import { logOut } from 'src/actions/user';
import formatMoney from 'src/utils/formatMoney';

import './infoBar.scss';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import trophy from 'src/assets/img/trophy.png';
import coin from 'src/assets/img/coin.png';
import team from 'src/assets/img/team.png';
import project from 'src/assets/img/project.png';

// == Component
const InfoBar = ({ children }) => {
  const dispatch = useDispatch();
  const money = formatMoney(useSelector((state) => state.startup.money));
  const reputation = useSelector((state) => state.startup.reputation);
  const devNumber = useSelector((state) => state.dev.devList).length;
  const projectNumber = useSelector((state) => state.project.projectsList).length;

  return (
    <main className="info-bar">
      <div className="info-bar__status">
        <h2 className="info-bar__startup-name">Ma super startup</h2>
        <button
          type="button"
          className="info-bar__status__button"
          onClick={() => dispatch(logOut())}
        >
          <Link className="info-bar__status__button__link" to="/">
            Déconnexion
          </Link>
        </button>
      </div>
      <div className="info-bar__infos-n-time">
        <div className="info-bar__infos">
          <div className="info-bar__infos__elt">
            <img src={trophy} alt="" />
            <div className="info-bar__infos__elt__value">
              <p>{reputation}</p>
              <p>Pts</p>
            </div>
          </div>
          <div className="info-bar__infos__elt">
            <img src={coin} alt="" />
            <div className="info-bar__infos__elt__value">
              <p>{money}</p>
              <p>$</p>
            </div>
          </div>
          <div className="info-bar__infos__elt">
            <img src={team} alt="" />
            <div className="info-bar__infos__elt__value">
              <p>{devNumber}</p>
              <p>Devs</p>
            </div>
          </div>
          <div className="info-bar__infos__elt">
            <img src={project} alt="" />
            <div className="info-bar__infos__elt__value">
              <p>{projectNumber}</p>
              <p>Projets</p>
            </div>
          </div>
        </div>
        <div className="info-bar__timer">
          {children}
        </div>
      </div>
    </main>
  );
};

// == Proptypes validation
InfoBar.propTypes = {
  children: PropTypes.node.isRequired,
};

export default InfoBar;
