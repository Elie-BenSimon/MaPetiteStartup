import './startup.scss';
import PropTypes from 'prop-types';
import formatMoney from 'src/utils/formatMoney';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ProjectCard from 'src/components/Project/Projects/ProjectCard';
import arrayify from 'src/utils/arrayify';

const Startup = ({ totalSalary }) => {
  const rent = useSelector((state) => state.startup.rent);
  const totalPlaces = useSelector((state) => state.dev.totalPlaces);
  const totalPlacesArray = arrayify(totalPlaces);
  const devList = useSelector((state) => state.dev.devList);
  const projectsList = useSelector((state) => state.project.projectsList);
  const activeProjectsList = projectsList.filter((project) => !project.complete);

  return (
    <div className="box startup">
      <div className="box__header startup__header">
        <h2 className="box__header__title ">Ma super start-up</h2>
      </div>
      <div className="startup__content">
        <h3>Mes locaux</h3>
        <div className="startup__places">
          <p>nombres de places: </p>
          <div className="startup__places__number">
            {totalPlacesArray.map((place, index) => (
              <div
                key={index}
                className={index < devList.length ? 'place place--occupied' : 'place'}
              />
            ))}
          </div>
          <Link to="/relocate" className="button button--change-location">Déménager</Link>
        </div>
        <p>loyer: {rent}$/mois</p>
        <h3>Mon équipe</h3>
        <div className="startup__team">
          <ul className="startup__team__list">
            {devList.map((dev) => (
              <li key={dev.id} className="startup__team__list__dev">
                <img src={`https://avatars.dicebear.com/api/human/${dev.avatar}.svg`} alt="" className="avatar card__avatar" />
                <div className="">
                  <p>{dev.name}</p>
                  <p>{dev.salary}$/mois</p>
                  <p>lassitude: {dev.lassitude}</p>
                </div>
              </li>
            ))}
          </ul>
          <Link
            className="button employees__button employees__button--recruit button--hire"
            to="/recruitment"
          >
            Recruter des développeurs
          </Link>
          <p>Total des salaires: {formatMoney(totalSalary)}$/mois</p>
          <p>Total des charges: {totalSalary + rent}$/mois</p>
        </div>
        <h3>Mes projets</h3>
        <div className="startup__projects">
          <ul className="cards__list projects__list">
            {activeProjectsList.map((project) => (
              <li
                key={project.id}
                className="cards__list__li projects__li"
              >
                <ProjectCard {...project} />
              </li>
            ))}
          </ul>
          <Link
            className="button projects__button"
            to="/projects/new"
          >
            Nouveau projet
          </Link>
        </div>
      </div>
    </div>
  );
};

// Proptypes validation
Startup.propTypes = {
  totalSalary: PropTypes.number.isRequired,
};

export default Startup;
