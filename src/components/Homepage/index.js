/* eslint-disable max-len */

// == Imports
import { useSelector, useDispatch } from 'react-redux';

import { Link } from 'react-router-dom';

import { toggleFormStatus } from 'src/actions/homepage';

import dev from 'src/assets/img/dev.gif';

import Modal from 'src/components/Layouts/Modal';
import CloseModalButton from '../Layouts/Modal/CloseModalButton';
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
  const userId = useSelector((state) => state.user.userId);
  const startupId = useSelector((state) => state.startup.startupId);

  const dispatch = useDispatch();

  if (userId && !startupId) {
    dispatch(toggleFormStatus('creationUser', false));
    dispatch(toggleFormStatus('creationStartup', true));
    dispatch(toggleFormStatus('connection', false));
  }

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
          className="button button-active homepage__button"
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
              <CloseModalButton modal="connection" />
              <ConnectionForm />
            </Modal>
          )}
        <button
          type="button"
          className="button button-action1 homepage__button"
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
              <CloseModalButton modal="creationUser" />
              <UserCreationForm />
            </Modal>
          )}
        {creationStartupIsOpen
          && (
            <Modal modalName="creationStartup">
              <CloseModalButton modal="creationStartup" />
              <StartupCreationForm />
            </Modal>
          )}
        <Link
          to="/rules"
          className="button button-layout homepage__button"
        >
          Règles du jeu
        </Link>
      </div>
      <div className="homepage__picture">
        <img src={dev} alt="Pixelled developper typing" />
      </div>
    </div>
  );
};

export default Homepage;
