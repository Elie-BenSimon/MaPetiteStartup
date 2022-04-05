/* eslint-disable max-len */

// == Imports
import ConnexionForm from './ConnexionForm';
import UserCreationForm from './UserCreationForm';
import StartupCreationForm from './StartupCreationForm';

import './homepage.scss';

// == Components
const Homepage = () => {
  // form modals status
  const connexionIsOpen = false;
  const creationUserIsOpen = false;
  const creationStartupIsOpen = false;

  return (
    <div className="homepage">
      <div className="homepage__text">
        <p>
          A toi d’investir le pactole fourni par tes Business Angels dans les projets les plus fancy et les développeurs les plus doués pour le faire fructifier et acquérir la meilleure réputation pour ta startup!
        </p>
      </div>
      <div className="homepage__buttons">
        <button
          type="button"
          className="homepage__button homepage__button__connexion"
        >
          Connexion
        </button>
        {connexionIsOpen && <ConnexionForm />}
        <button
          type="button"
          className="homepage__button homepage__button__inscription"
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
