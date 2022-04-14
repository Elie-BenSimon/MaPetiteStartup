import axios from 'axios';

import {
  CREATE_PROJECT,
  saveProjectId,
} from 'src/actions/project';

import {
  LOG_IN,
} from 'src/actions/user';

const projectMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case CREATE_PROJECT:
      /*
      axios.post(
        'http://f-gahery-server.eddi.cloud/projet-08-ma-petite-startup-back/public/api/project',
        {
          name: store.getState().project.newProjectName,
          description: store.getState().project.newProjectDescription,
          difficulty_id: parseInt(store.getState().project.newProjectDifficulty, 10) + 1,
          startup_id: store.getState().startup.startupId,
        },
        {
          // header with JWT
          headers: {
            Authorization: `Bearer ${store.getState().user.token}`,
          },
        },
      )
        .then((responseNewProject) => {
          // console.log(responseNewProject);

          // store project id
          store.dispatch(saveProjectId(responseNewProject.data.id));
        })
        .catch((error) => {
          // TODO afficher l'erreur dans la modale avec message suivant le code d'erreur
          console.log(error);
        });
        */
      break;

      // case LOG_IN:
    default:
  }

  next(action);
};

export default projectMiddleware;
