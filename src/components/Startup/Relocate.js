// == Imports
import './startup.scss';
import formatMoney from 'src/utils/formatMoney';
import { useDispatch, useSelector } from 'react-redux';
import { changeNewPlaces } from 'src/actions/startup';

// == Component
const Startup = () => {
  const dispatch = useDispatch();
  const totalPlaces = useSelector((state) => state.dev.totalPlaces);
  const money = useSelector((state) => state.startup.money);
  const newTotalPlaces = useSelector((state) => state.startup.newTotalPlaces);
  const newRent = formatMoney(newTotalPlaces * 500);
  const relocateCost = formatMoney(totalPlaces * 1000);
  console.log(newTotalPlaces);
  return (
    <div className="box relocate">
      <div className="box__header relocate__header">
        <h2 className="box__header__title ">Déménager</h2>
      </div>
      <div className="relocate__content">
        <p>Nombres de place de vos nouveaux locaux :</p>
        <div className="relocate__select">
          <button
            type="button"
            onClick={() => dispatch(changeNewPlaces(newTotalPlaces - 1))}
          >-
          </button>
          <p>{newTotalPlaces}</p>
          <button
            type="button"
            onClick={() => dispatch(changeNewPlaces(newTotalPlaces + 1))}
          >+
          </button>
        </div>
      </div>
      <p>Nouveau loyer :</p>
      <p>{newRent}$/mois</p>
      <p>Frais de déménagement :</p>
      {relocateCost > money
        ? <p className="red-text">{relocateCost}</p>
        : (
          <>
            <p>{relocateCost}$</p>
            <button type="button">Déménager !</button>
          </>
        )}
    </div>
  );
};

export default Startup;
