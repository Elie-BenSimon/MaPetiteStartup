import axios from 'axios';

import {
  CREATE_PROJECT,
  saveProject,
  PATCH_PROJECT,
} from 'src/actions/project';

import {
  changeProject,
  changeDeltaSkill,
  patchDev,
} from 'src/actions/dev';

const projectMiddleware = (store) => (next) => (action) => {
  const config = {
    // header with JWT
    headers: {
      Authorization: `Bearer ${store.getState().user.token}`,
    },
  };

  switch (action.type) {
    case PATCH_PROJECT:
      // set a project completion to 100% in bdd
      axios.patch(
        `http://f-gahery-server.eddi.cloud/projet-08-ma-petite-startup-back/public/api/project/${action.projectId}`,
        action.data,
        config,
      )
        .catch((error) => {
          console.log(error);
        });
      break;

    // create a new project
    case CREATE_PROJECT: {
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
          // store project id
          store.dispatch(saveProject(responseNewProject.data.id));

          // create an array of dev on new project
          const devListOnNewProject = store.getState().dev.devList.filter((dev) => dev.projectId === 'newProject');
          // create an array of dev_id on new project
          const devIdOnNewProject = devListOnNewProject.map((dev) => dev.id);

          // change dev project_id according to database response
          store.dispatch(changeProject(devIdOnNewProject, responseNewProject.data.id));

          // retrieve newProject difficulty level
          const difficultyLevel = store.getState().project.projectsList.find(
            (project) => project.id === responseNewProject.data.id,
          ).level;

          devListOnNewProject.forEach(
            (dev) => {
              // calculation of delta skill for devs on new project
              store.dispatch(changeDeltaSkill(dev.id, difficultyLevel));
              // updating dev's project id in database
              store.dispatch(patchDev(dev.id, { project: responseNewProject.data.id }));
            },
          );
        })
        .catch((error) => {
          // TODO afficher l'erreur dans la modale avec message suivant le code d'erreur
          console.log(error);
        });
    }
      break;

    // case LOG_IN:
    default:
  }

  next(action);
};

export default projectMiddleware;
