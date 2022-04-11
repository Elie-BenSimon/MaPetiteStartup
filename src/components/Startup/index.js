import './startup.scss';
import PropTypes from 'prop-types';
import formatMoney from 'src/utils/formatMoney';
import { useSelector } from 'react-redux';

const Startup = ({ totalSalary }) => {
  const totalPlaces = useSelector((state) => state.dev.totalPlaces);
  const totalPlacesArray = [];
  for (let i = 0; i < totalPlaces; i += 1) {
    totalPlacesArray[i] = 1;
  }
  const devList = useSelector((state) => state.dev.devList);

  return (
    <div className="box startup">
      <div className="box__header startup__header">
        <h2 className="box__header__title ">Ma super start-up</h2>
      </div>
      <div className="startup__content">
        <h3>Mes locaux</h3>
        <div className="startup__places">
          <div className="startup__places__number">
            <p>nombres de places: </p>
            {totalPlacesArray.map((dev, index) => (
              <div
                className={index < devList.length ? 'place place--occupied' : 'place'}
                key={dev.id}
              />
            ))}
          </div>
          <button className="button button--change-location" type="button">Déménager</button>
        </div>
        <h3>Mon équipe</h3>
        <ul className="startup__team">
          {devList.map((dev) => (
            <li className="startup__team__dev" key={dev.id}>
              <img src={`https://avatars.dicebear.com/api/human/${dev.avatar}.svg`} alt="" className="avatar card__avatar" />
              <div className="">
                <p>{dev.name}</p>
                <p>{dev.salary}$/mois</p>
                <p>lassitude: {dev.lassitude}</p>
              </div>
            </li>
          ))}
        </ul>
        <p>Total des salaires: {formatMoney(totalSalary)}$/mois</p>
      </div>
    </div>
  );
};

// Proptypes validation
Startup.propTypes = {
  totalSalary: PropTypes.number.isRequired,
};

export default Startup;
