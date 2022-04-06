/* eslint-disable max-len */

// == Imports
import { useSelector, useDispatch } from 'react-redux';

import { toggleFormStatus } from 'src/actions/homepage';

import ConnexionForm from './ConnexionForm';
import UserCreationForm from './UserCreationForm';
import StartupCreationForm from './StartupCreationForm';

import './homepage.scss';

// == Components
const Homepage = () => {
  // form modals status
  const connexionIsOpen = useSelector((state) => state.homepage.connexionIsOpen);
  const creationUserIsOpen = useSelector((state) => state.homepage.creationUserIsOpen);
  const creationStartupIsOpen = useSelector((state) => state.homepage.creationStartupIsOpen);

  const dispatch = useDispatch();

  return (
    <div className="homepage">
      {/* <div className="homepage__text">
        <p>
          A toi d’investir le pactole fourni par tes Business Angels dans les projets les plus fancy et les développeurs les plus doués pour le faire fructifier et acquérir la meilleure réputation pour ta startup!
        </p>
      </div> */}
      <div className="homepage__buttons">
        <button
          type="button"
          className="homepage__button homepage__button__connexion"
          onClick={() => {
            dispatch(toggleFormStatus('connexion', true));
          }}
        >
          Connexion
        </button>
        {connexionIsOpen && <ConnexionForm />}
        <button
          type="button"
          className="homepage__button homepage__button__inscription"
          onClick={() => {
            dispatch(toggleFormStatus('creationUser', true));
          }}
        >
          Inscription
        </button>
        {creationUserIsOpen && <UserCreationForm />}
        {creationStartupIsOpen && <StartupCreationForm />}
        <button
          type="button"
          className="homepage__button homepage__button__rules"
        >
          Règles du jeu
        </button>
      </div>
      <div className="homepage__picture" />
    </div>
  );
};

export default Homepage;
