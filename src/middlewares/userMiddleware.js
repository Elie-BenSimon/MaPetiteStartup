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
  changeNewPlaces,
} from 'src/actions/startup';

import {
  setProjectsList,
  setDifficulties,
} from 'src/actions/project';

import {
  setDevlist,
  changePlaces,
} from 'src/actions/dev';

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
                `http://f-gahery-server.eddi.cloud/projet-08-ma-petite-startup-back/public/api/user/${responseLogin.data.id}/startup-list`,
                config,
              )
                .then((responseStartupList) => {
                  // check if a project is complete
                  const projectsList = responseStartupList.data[0].projects.map((project) => {
                    if (project.completion >= project.difficulty.production) {
                      return { ...project, complete: true };
                    }
                    return { ...project, complete: false };
                  });

                  // save projects in state
                  store.dispatch(setProjectsList(projectsList));

                  // save "cleaned" devs
                  const devListCleaned = responseStartupList.data[0].devs.map(
                    (dev) => {
                      if (dev.project) {
                        return {
                          id: dev.id,
                          projectId: dev.project.id,
                          lassitude: dev.lassitude,
                          name: dev.name,
                          salary: dev.salary,
                          skill: dev.skill,
                          avatar: dev.avatar,
                        };
                      }
                      return {
                        id: dev.id,
                        projectId: null,
                        lassitude: dev.lassitude,
                        name: dev.name,
                        salary: dev.salary,
                        skill: dev.skill,
                        avatar: dev.avatar,
                      };
                    },
                  );
                  store.dispatch(setDevlist(devListCleaned));

                  // stock startup_id in state
                  store.dispatch(saveStartupId(responseStartupList.data[0].id));

                  // retrieving startup data
                  axios.get(
                    `http://f-gahery-server.eddi.cloud/projet-08-ma-petite-startup-back/public/api/startup/${responseStartupList.data[0].id}`,
                    config,
                  )
                    .then((responseStartupData) => {
                      const initialMoney = store.getState().startup.money;
                      store.dispatch(changeName(responseStartupData.data.name));
                      store.dispatch(changeSlogan(responseStartupData.data.slogan));
                      store.dispatch(changeLogo(responseStartupData.data.logo));
                      store.dispatch(changeMoney(responseStartupData.data.money - initialMoney));
                      store.dispatch(changeReputation(responseStartupData.data.reputation));
                      store.dispatch(changeRent(responseStartupData.data.rent));
                      store.dispatch(changePlaces(responseStartupData.data.places));
                      store.dispatch(changeNewPlaces(responseStartupData.data.places));

                      // retrieving difficulties list
                      axios.get(
                        'http://f-gahery-server.eddi.cloud/projet-08-ma-petite-startup-back/public/api/difficulty',
                        config,
                      )
                        .then((responseDifficulty) => {
                          store.dispatch(setDifficulties(responseDifficulty.data));
                        });
                    });
                })
                .catch((error) => {
                  console.log(error);
                });
            });
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    default:
  }

  next(action);
};

export default userMiddleware;
