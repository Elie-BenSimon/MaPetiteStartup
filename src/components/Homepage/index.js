/* eslint-disable max-len */

// == Imports
import { useSelector, useDispatch } from 'react-redux';

import { Link } from 'react-router-dom';

import { toggleFormStatus } from 'src/actions/homepage';

import dev from 'src/assets/img/dev.gif';

import Modal from 'src/components/Layouts/Modal';
import ConnectionForm from './ConnectionForm';
import UserCreationForm from './UserCreationForm';
import StartupCreationForm from './StartupCreationForm';

import './homepage.scss';

// == Components
const Homepage = () => {
  // form modals status
  const connectionIsOpen = useSelector((state) => state.homepage.connectionIsOpen);
  const creationUserIsOpen = useSelector((state) => state.homepage.creationUserIsOpen);
  const creationStartupIsOpen = useSelector((state) => state.homepage.creationStartupIsOpen);

  const dispatch = useDispatch();

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
          className="homepage__button homepage__button__connection"
          onClick={() => {
            dispatch(toggleFormStatus('creationUser', false));
            dispatch(toggleFormStatus('creationStartup', false));
            dispatch(toggleFormStatus('connection', true));
          }}
        >
          Connexion
        </button>
        {connectionIsOpen
          && (
            <Modal modalName="connection">
              <ConnectionForm />
            </Modal>
          )}
        <button
          type="button"
          className="homepage__button homepage__button__inscription"
          onClick={() => {
            dispatch(toggleFormStatus('connection', false));
            dispatch(toggleFormStatus('creationUser', true));
          }}
        >
          Inscription
        </button>
        {creationUserIsOpen
          && (
            <Modal modalName="creationUser">
              <UserCreationForm />
            </Modal>
          )}
        {creationStartupIsOpen
          && (
            <Modal modalName="creationStartup">
              <StartupCreationForm />
            </Modal>
          )}
        <button
          type="button"
          className="homepage__button homepage__button__rules"
        >
          <Link
            to="/rules"
            className="homepage__button__rules"
          >
            Règles du jeu
          </Link>
        </button>
      </div>
      <div className="homepage__picture">
        <img src={dev} alt="Pixelled devlopper typing" />
      </div>
    </div>
  );
};

export default Homepage;
