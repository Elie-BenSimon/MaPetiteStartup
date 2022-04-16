import axios from 'axios';

import {
  LOG_IN,
} from 'src/actions/user';

import {
  toggleFormStatus,
} from 'src/actions/homepage';

import {
  CREATE_STARTUP,
  saveStartupId,
} from 'src/actions/startup';

const startupMiddleware = (store) => (next) => (action) => {
  // config for axios request
  const config = {
    // header with JWT
    headers: {
      Authorization: `Bearer ${store.getState().user.token}`,
    },
  };

  switch (action.type) {
    // startup creation
    case CREATE_STARTUP:
      console.log({
        name: store.getState().startup.name,
        slogan: store.getState().startup.slogan,
        logo: store.getState().startup.logoIndex,
        user: store.getState().user.userId,
        rent: store.getState().startup.rent,
        places: store.getState().dev.totalPlaces,
      });
      axios.post(
        'http://localhost:8000/api/startup',
        {
          name: store.getState().startup.name,
          slogan: store.getState().startup.slogan,
          logo: store.getState().startup.logoIndex,
          user: store.getState().user.userId,
          rent: store.getState().startup.rent,
          places: store.getState().dev.totalPlaces,
        },
        config,
      )
        .then((response) => {
          console.log(response);
          store.dispatch(saveStartupId(response.data.id));
          store.dispatch(toggleFormStatus('creationStartup', false));
        })
        .catch((error) => {
          // TODO afficher l'erreur dans la modale avec message suivant le code d'erreur
          console.log(error);
        });
      break;

    default:
  }

  // on passe l'action au suivant (middleware suivant ou reducer)
  next(action);
};

export default startupMiddleware;
