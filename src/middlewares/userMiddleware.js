import axios from 'axios';

import {
  SIGN_IN,
  LOG_IN,
  logIn,
  saveUserId,
  saveToken,
} from 'src/actions/user';

import {
  toggleFormStatus,
} from 'src/actions/homepage';

// import { fetchFavoritesRecipes } from '../actions/recipes';

const userMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SIGN_IN:
      axios.post(
        'http://localhost:8000/new/user',
        {
          email: store.getState().user.email,
          password: store.getState().user.password,
        },
      )
        .then((response) => {
          // console.log(response);
          // if HTTP status code == 201
          // adding user to the database and store its informations in the state
          store.dispatch(saveUserId(response.data.id));
          // connecting user
          axios.post(
            'http://localhost:8000/api/login_check',
            {
              username: store.getState().user.email,
              password: store.getState().user.password,
            },
          )
            // store token received from API
            .then(() => {
              store.dispatch(logIn(response.data.token));
              // console.log(response);
            })
            // close creation user form, and open startup creation form
            .then(() => {
              store.dispatch(toggleFormStatus('creationUser', false));
              store.dispatch(toggleFormStatus('creationStartup', true));
            });
          // store.dispatch(toggleFormStatus('creationStartup', true));
        })
        .catch((error) => {
          // TODO afficher l'erreur dans la modale avec message suivant le code d'erreur
          console.log(error);
        })
        .finally((response) => {
          console.log(response);
        });
      break;

    case LOG_IN:
      axios.post(
        'http://localhost:8000/api/login_check',
        {
          username: store.getState().user.email,
          password: store.getState().user.password,
        },
      )
        .then((response) => {
          console.log(response);

          // stock user token in state
          store.dispatch(saveToken(response.data.token));
          store.dispatch(toggleFormStatus('connection', false));
        })
        .catch((error) => {
          // TODO afficher une erreur à l'utilisateur
          console.log(error);
        });
      break;
    default:
  }

  // on passe l'action au suivant (middleware suivant ou reducer)
  next(action);
};

export default userMiddleware;
