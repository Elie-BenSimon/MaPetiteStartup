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

import {
  saveStartupId,

} from 'src/actions/startup';

const userMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    // user inscription
    case SIGN_IN:
      axios.post(
        'http://f-gahery-server.eddi.cloud/projet-08-ma-petite-startup-back/public/new/user',
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
            'http://f-gahery-server.eddi.cloud/projet-08-ma-petite-startup-back/public/api/login_check',
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
        })
        .catch((error) => {
          // TODO afficher l'erreur dans la modale avec message suivant le code d'erreur
          console.log(error);
        });
      break;

    // user connection
    case LOG_IN:
      axios.post(
        'http://f-gahery-server.eddi.cloud/projet-08-ma-petite-startup-back/public/api/login_check',
        {
          username: store.getState().user.email,
          password: store.getState().user.password,
        },
      )
        .then((responseLoginCheck) => {
          // console.log(responseLoginCheck);

          // stock user token in state
          store.dispatch(saveToken(responseLoginCheck.data.token));
          store.dispatch(toggleFormStatus('connection', false));
        })
        .then(() => {
          // retrieve user_id
          axios.post(
            'http://f-gahery-server.eddi.cloud/projet-08-ma-petite-startup-back/public/login',
            {
              email: store.getState().user.email,
              password: store.getState().user.password,
            },
          )
            .then((responseLogin) => {
              // console.log(responseLogin);

              // stock user id in state
              store.dispatch(saveUserId(responseLogin.data.id));
              axios.get(
                `http://f-gahery-server.eddi.cloud/projet-08-ma-petite-startup-back/public/api/user/${responseLogin.data.id}/startup-list`,
                {
                  // header with JWT
                  headers: {
                    Authorization: `Bearer ${store.getState().user.token}`,
                  },
                },
              )
                .then((responseStartupList) => {
                  console.log(responseStartupList);

                  store.dispatch(saveStartupId(responseStartupList.data.id));
                  /*
                  store.dispatch(saveStartupName(responseStartupList.data.name));
                  store.dispatch(saveStartupSlogan(responseStartupList.data.slogan));
                  store.dispatch(saveStartupLogo(responseStartupList.data.logo));
                  store.dispatch(saveStartupMoney(responseStartupList.data.money));
                  store.dispatch(saveStartupReputation(responseStartupList.data.reputation));
                  store.dispatch(saveStartupRent(responseStartupList.data.rent));
                  */
                })
                .catch((error) => {
                  // TODO afficher une erreur à l'utilisateur
                  console.log(error);
                });
            });
        })
        .catch((error) => {
          // TODO afficher une erreur à l'utilisateur
          console.log(error);
        });
      break;
    default:
  }

  next(action);
};

export default userMiddleware;
