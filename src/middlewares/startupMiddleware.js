import axios from 'axios';

import {
  toggleFormStatus,
} from 'src/actions/homepage';

import {
  CREATE_STARTUP,
  PATCH_STARTUP,
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
      axios.post(
        'http://f-gahery-server.eddi.cloud/projet-08-ma-petite-startup-back/public/api/startup',
        {
          name: store.getState().startup.name,
          slogan: store.getState().startup.slogan,
          logo: parseInt(store.getState().startup.logoIndex, 10),
          user: store.getState().user.userId,
          rent: store.getState().startup.rent,
          places: store.getState().dev.totalPlaces,
        },
        config,
      )
        .then((response) => {
          store.dispatch(saveStartupId(response.data.id));
          store.dispatch(toggleFormStatus('creationStartup', false));
        })
        .catch((error) => {
          // TODO afficher l'erreur dans la modale avec message suivant le code d'erreur
          console.log(error);
        });
      break;

    // startup modification
    case PATCH_STARTUP: {
      console.log(action);
      const id = store.getState().startup.startupId;
      axios.patch(
        `http://f-gahery-server.eddi.cloud/projet-08-ma-petite-startup-back/public/api/startup/${id}`,
        action.data,
        config,
      )
        .catch((error) => {
          // TODO afficher l'erreur dans la modale avec message suivant le code d'erreur
          console.log(error);
        });
    }
      break;
    default:
  }

  // on passe l'action au suivant (middleware suivant ou reducer)
  next(action);
};

export default startupMiddleware;
