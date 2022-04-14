import axios from 'axios';

import {
  CREATE_PROJECT,
  saveProject,
  COMPLETE_PROJECT,
} from 'src/actions/project';

import {
  LOG_IN,
} from 'src/actions/user';

const projectMiddleware = (store) => (next) => (action) => {
  const config = {
    // header with JWT
    headers: {
      Authorization: `Bearer ${store.getState().user.token}`,
    },
  };

  switch (action.type) {
    case COMPLETE_PROJECT:
      console.log(`Bearer ${store.getState().user.token}`);
      // set a project completion to 100% in bdd
      axios.patch(
        `http://f-gahery-server.eddi.cloud/projet-08-ma-petite-startup-back/public/api/project/${action.projectId}`,
        {
          completion: 100,
        },
        {
          // header with JWT
          headers: {
            Authorization: `Bearer ${store.getState().user.token}`,
          },
        },
      )
        .then((response) => {
          console.log(response);
          // save project id
          action.test = 'toto';
        })
        .catch((error) => {
          console.log(error);
        });
      break;

    // create a new project
    case CREATE_PROJECT:
      console.log(store.getState().startup.startupId);
      axios.post(
        'http://f-gahery-server.eddi.cloud/projet-08-ma-petite-startup-back/public/api/project',
        {
          name: store.getState().project.newProjectName,
          description: store.getState().project.newProjectDescription,
          difficulty: parseInt(store.getState().project.newProjectDifficulty, 10) + 1,
          startup: store.getState().startup.startupId,
        },
        config,
      )
        .then((responseNewProject) => {
          console.log(responseNewProject);

          // store project id
          store.dispatch(saveProject(responseNewProject.data.id));
        })
        .catch((error) => {
          // TODO afficher l'erreur dans la modale avec message suivant le code d'erreur
          // console.log(error);
        });
      break;

    // case LOG_IN:
    default:
  }

  next(action);
};

export default projectMiddleware;
