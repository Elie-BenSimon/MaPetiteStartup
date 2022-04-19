// == Import
import { useDispatch, useSelector } from 'react-redux';

import { logOut } from 'src/actions/user';
import { reinitializeStartupState } from 'src/actions/startup';
import { reinitializeProjectState, patchProject } from 'src/actions/project';
import { reinitializeDevState, patchDev } from 'src/actions/dev';
import formatMoney from 'src/utils/formatMoney';

import './infoBar.scss';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import trophy from 'src/assets/img/trophy.png';
import coin from 'src/assets/img/coin.png';
import team from 'src/assets/img/navBar/team.png';
import project from 'src/assets/img/navBar/project.png';

// == Component
const InfoBar = ({ children }) => {
  const dispatch = useDispatch();

  const startupName = useSelector((state) => state.startup.name);
  const startupSlogan = useSelector((state) => state.startup.slogan);
  const startupLogos = useSelector((state) => state.startup.logos);
  const startupLogoIndex = useSelector((state) => state.startup.logoIndex);
  const money = formatMoney(useSelector((state) => state.startup.money));
  const reputation = useSelector((state) => state.startup.reputation);
  const devList = useSelector((state) => state.dev.devList);
  const devNumber = devList.length;
  const projectsList = useSelector((state) => state.project.projectsList);
  const projectNumber = projectsList.length;
  const totalPlaces = useSelector((state) => state.dev.totalPlaces);

  return (
    <main className="info-bar">
      <div className="info-bar__content">

        <div className="info-bar__status">
          <img src={startupLogos[startupLogoIndex]} alt="Startup logo" />
          <div className="info-bar__status__content">
            <h2 className="info-bar__status__content__name">{startupName}</h2>
            <h3 className="info-bar__status__content__slogan">{startupSlogan}</h3>
            <Link
              className="button button-layout info-bar__status__content__button"
              to="/"
              onClick={() => {
                devList.forEach((d) => dispatch(
                  patchDev(d.id, { lassitude: d.lassitude }),
                ));
                projectsList.forEach((p) => dispatch(
                  patchProject(p.id, { completion: p.completion }),
                ));
                dispatch(logOut());
                dispatch(reinitializeStartupState());
                dispatch(reinitializeProjectState());
                dispatch(reinitializeDevState());
              }}
            >
              Déconnexion
            </Link>
          </div>
        </div>

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
              <p>{devNumber}/{totalPlaces}</p>
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
