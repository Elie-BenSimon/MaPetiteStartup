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
  changeName,
  changeSlogan,
  changeLogo,
  changeMoney,
  changeReputation,
  changeRent,
} from 'src/actions/startup';

import {
  setProjectsList,
  setDifficulties,
} from 'src/actions/project';

import {
  setDevlist,
} from 'src/actions/dev';

const userMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    // user inscription
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
          // console.log(response.data.id);
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
        })
        .catch((error) => {
          // TODO afficher l'erreur dans la modale avec message suivant le code d'erreur
          // console.log(error);
        });
      break;

    // user connection
    case LOG_IN:
      // console.log('user middleware');
      axios.post(
        'http://localhost:8000/api/login_check',
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
            'http://localhost:8000/login',
            {
              email: store.getState().user.email,
              password: store.getState().user.password,
            },
          )
            .then((responseLogin) => {
              // console.log(responseLogin);

              // stock user_id in state
              store.dispatch(saveUserId(responseLogin.data.id));

              // retrieve startuplist
              const config = {
                // header with JWT
                headers: {
                  Authorization: `Bearer ${store.getState().user.token}`,
                },
              };
              axios.get(
                `http://localhost:8000/public/api/user/${responseLogin.data.id}/startup-list`,
                config,
              )
                .then((responseStartupList) => {
                  console.log(responseStartupList);

                  // save projects in state
                  store.dispatch(setProjectsList(responseStartupList.data[0].projects));

                  // save devs
                  store.dispatch(setDevlist(responseStartupList.data[0].devs));

                  // stock startup_id in state
                  store.dispatch(saveStartupId(responseStartupList.data[0].id));

                  // retrieving startup data
                  axios.get(
                    `http://localhost:8000/api/startup/${responseStartupList.data[0].id}`,
                    config,
                  )
                    .then((responseStartupData) => {
                      // console.log(responseStartupData);

                      store.dispatch(changeName(responseStartupData.data.name));
                      store.dispatch(changeSlogan(responseStartupData.data.slogan));
                      store.dispatch(changeLogo(responseStartupData.data.logoIndex));
                      store.dispatch(changeMoney(responseStartupData.data.money));
                      store.dispatch(changeReputation(responseStartupData.data.reputation));
                      store.dispatch(changeRent(responseStartupData.data.rent));

                      // retrieving difficulties list
                      axios.get(
                        'localhost:8000/api/difficulty',
                        config,
                      )
                        .then((responseDifficulty) => {
                          // console.log(responseDifficulty);
                          store.dispatch(setDifficulties(responseDifficulty.data));
                        });
                    });
                })
                .catch((error) => {
                  // TODO afficher une erreur à l'utilisateur
                  // console.log(error);
                });
            });
        })
        .catch((error) => {
          // TODO afficher une erreur à l'utilisateur
          // console.log(error);
        });
      break;
    default:
  }

  next(action);
};

export default userMiddleware;
