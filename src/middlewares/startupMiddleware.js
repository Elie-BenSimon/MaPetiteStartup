import axios from 'axios';

import {
  SIGN_IN,
} from 'src/actions/user';

import {
  toggleFormStatus,
} from 'src/actions/homepage';

const startupMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    // user inscription
    case SIGN_IN:
      /*
      axios.post(
        'http://f-gahery-server.eddi.cloud/projet-08-ma-petite-startup-back/public/new/user',
        {
          email: store.getState().user.email,
          password: store.getState().user.password,
        },
      )
        .then((response) => {
          console.log(response);
          // if HTTP status code == 201
          // adding user to the database and store its informations in the state
          store.dispatch(saveUserId(response.data.id));
          // connecting user
          axios.post(
            'http://f-gahery-server.eddi.cloud/projet-08-ma-petite-startup-back/public/api/login_check',
            {
              username: store.getState().user.email,
              password: store.getState().user.password,
            },
          )
            // store token received from API
            .then(() => {
              store.dispatch(logIn(response.data.token));
              console.log(response);
            })
            // close creation user form, and open startup creation form
            .then(() => {
              store.dispatch(toggleFormStatus('creationUser', false));
              store.dispatch(toggleFormStatus('creationStartup', true));
            });
        })
        .catch((error) => {
          // TODO afficher l'erreur dans la modale avec message suivant le code d'erreur
          console.log(error);
        })
        .finally((response) => {
          console.log(response);
        });
        */
      break;
    default:
  }

  // on passe l'action au suivant (middleware suivant ou reducer)
  next(action);
};

export default startupMiddleware;
