import axios from 'axios';

import {
  CREATE_PROJECT,
  saveProject,
  COMPLETE_PROJECT,
} from 'src/actions/project';

import {
  changeProjectId,
} from 'src/actions/dev';

const projectMiddleware = (store) => (next) => (action) => {
  const config = {
    // header with JWT
    headers: {
      Authorization: `Bearer ${store.getState().user.token}`,
    },
  };

  switch (action.type) {
    case COMPLETE_PROJECT:
      console.log(action.projectId);
      // set a project completion to 100% in bdd
      axios.patch(
        `http://f-gahery-server.eddi.cloud/projet-08-ma-petite-startup-back/public/api/project/${action.projectId}`,
        {
          completion: 100,
        },
        config,
      )
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
      break;

    // create a new project
    case CREATE_PROJECT: {
      // console.log(store.getState().startup.startupId);

      // storing difficulty object according to newProjectDifficulty value
      const difficultyObj = store.getState().project.difficultiesList.find((difficulty) => (
        difficulty.level == store.getState().project.newProjectDifficulty));

      axios.post(
        'http://f-gahery-server.eddi.cloud/projet-08-ma-petite-startup-back/public/api/project',
        {
          name: store.getState().project.newProjectName,
          description: store.getState().project.newProjectDescription,
          difficulty: difficultyObj.id,
          startup: store.getState().startup.startupId,
        },
        config,
      )
        .then((responseNewProject) => {
          // console.log(responseNewProject);

          // store project id
          store.dispatch(saveProject(responseNewProject.data.id));

          // create an array of dev_id on new project
          const devIdOnNewProject = store.getState().dev.devList.filter((dev) => dev.code_project === 'newProject').map((dev) => dev.id);

          // change dev project_id according to database response
          store.dispatch(changeProjectId(devIdOnNewProject, responseNewProject.data.id));
          // TODO calculer le delta skill ici peut être
        })
        .catch((error) => {
          // TODO afficher l'erreur dans la modale avec message suivant le code d'erreur
          // console.log(error);
        });
    }
      break;

    // case LOG_IN:
    default:
  }

  next(action);
};

export default projectMiddleware;
