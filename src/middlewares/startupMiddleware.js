import axios from 'axios';

import {
  toggleFormStatus,
} from 'src/actions/homepage';

import {
  CREATE_STARTUP,
  saveStartupId,
} from 'src/actions/startup';

const startupMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    // startup creation
    case CREATE_STARTUP:
      console.log(`Bearer ${store.getState().user.token}`);
      console.log(
        store.getState().startup.name,
        store.getState().startup.slogan,
        store.getState().startup.logo,
        store.getState().user.userId,
        store.getState().startup.rent,
        store.getState().dev.totalPlaces,
      );

      axios.post(
        'http://f-gahery-server.eddi.cloud/projet-08-ma-petite-startup-back/public/api/startup',
        {
          name: store.getState().startup.name,
          slogan: store.getState().startup.slogan,
          logo: store.getState().startup.logo,
          user_id: store.getState().user.userId,
          rent: store.getState().startup.rent,
          places: store.getState().dev.totalPlaces,
        },
        {
          headers: {
            Authorization: `Bearer ${store.getState().user.token}`,
          },
        },
      )
        .then((response) => {
          console.log(response);
          store.dispatch(saveStartupId(response.data.id));
          store.dispatch(toggleFormStatus('creationStartup', false));
        })
        .catch((error) => {
          // TODO afficher l'erreur dans la modale avec message suivant le code d'erreur
          console.log(error);
        })
        .finally((response) => {
          console.log(response);
        });
      break;
    default:
  }

  // on passe l'action au suivant (middleware suivant ou reducer)
  next(action);
};

export default startupMiddleware;
