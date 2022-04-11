// == Imports
import './startup.scss';
import formatMoney from 'src/utils/formatMoney';
import { useDispatch, useSelector } from 'react-redux';
import { changeNewPlaces, changePlaces } from 'src/actions/dev';
import { changeRent, modifyMoney } from 'src/actions/startup';
import { useNavigate } from 'react-router-dom';

// == Component
const Startup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const totalPlaces = useSelector((state) => state.dev.totalPlaces);
  const money = useSelector((state) => state.startup.money);
  const newTotalPlaces = useSelector((state) => state.dev.newTotalPlaces);
  const newRent = newTotalPlaces * 500;
  const relocateCost = totalPlaces * 1000;

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
      <p>{formatMoney(newRent)}$/mois</p>
      <p>Frais de déménagement :</p>
      {relocateCost > money
        ? <p className="red-text">{formatMoney(relocateCost)}$</p>
        : (
          <>
            <p>{formatMoney(relocateCost)}$</p>
            <button
              type="button"
              onClick={() => {
                dispatch(changeRent(newRent));
                dispatch(changePlaces());
                dispatch(modifyMoney(-relocateCost));
                navigate('/');
              }}
            >Déménager !
            </button>
          </>
        )}
    </div>
  );
};

export default Startup;
