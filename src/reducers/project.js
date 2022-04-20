import difficultyData from 'src/data/difficulty';

import {
  CHANGE_NEW_PROJECT_FIELD,
  UPDATE_COMPLETION,
  COMPLETE_PROJECT,
  REINITIALIZE_PROJECT_STATE,
  SAVE_PROJECT,
  SET_PROJECTS_LIST,
  SET_DIFFICULTIES,
  STOP_NOTIFICATION,
} from 'src/actions/project';

export const initialState = {
  newProjectName: '',
  newProjectDescription: '',
  newProjectDifficulty: '',
  newProjectMoney: difficultyData.find((d) => d.level === '1').profit,
  newProjectReputation: difficultyData.find((d) => d.level === '1').reputation,
  newProjectProduction: difficultyData.find((d) => d.level === '1').production,
  difficultiesList: [],
  projectsList: [],
  notificationsList: [],
  isNewNotification: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    // save an array of difficulties from db
    case SET_DIFFICULTIES:
      return {
        ...state,
        difficultiesList: action.data,
      };

    // save an array of projects in state
    case SET_PROJECTS_LIST:
      return {
        ...state,
        projectsList: action.data,
      };

    // save project with id send by database
    case SAVE_PROJECT: {
      return {
        ...state,
        projectsList: [...state.projectsList,
          {
            id: action.projectId,
            name: state.newProjectName,
            description: state.newProjectDescription,
            difficulty: state.difficultiesList.find(
              (difficulty) => difficulty.level == state.newProjectDifficulty,
            ),
            completion: 0,
          }],
        // reinitialization of inputs
        newProjectName: '',
        newProjectDescription: '',
        newProjectDifficulty: '',
      };
    }

    // completely reinitialize project state
    case REINITIALIZE_PROJECT_STATE:
      return {
        ...state,
        ...initialState,
      };

    // execute when a project is complete
    case COMPLETE_PROJECT:
      return {
        ...state,
        // set the notification content
        notificationsList: [
          { category: 'projectOver', message: action.projectName, date: 0 },
          ...state.notificationsList,
        ],
        // toggle the animation of notification icon on the Navbar
        isNewNotification: true,
        // receive an array of index and change projectId of all dev with an id in this array
        projectsList: [...state.projectsList].map((project) => {
          if (project.id == action.projectId) {
            return {
              ...project,
              complete: true,
            };
          }
          return project;
        }),
      };

    case STOP_NOTIFICATION:
      return {
        ...state,
        isNewNotification: false,
      };

    // change completion of a project
    case UPDATE_COMPLETION:
      return {
        ...state,
        projectsList: [...state.projectsList].map((project) => {
          if (project.id == action.projectId) {
            // check to not exceed maxCompletion
            if (project.completion + action.completionToAdd < project.difficulty.production) {
              return { ...project, completion: project.completion + action.completionToAdd };
            }
            return { ...project, completion: project.difficulty.production };
          }
          return project;
        }),
      };

    // action for controlled component of a new project form
    case CHANGE_NEW_PROJECT_FIELD:
      switch (action.name) {
        case 'name':
          return {
            ...state,
            newProjectName: action.value,
          };
        case 'description':
          return {
            ...state,
            newProjectDescription: action.value,
          };
        case 'difficulty': {
          const difficultyObj = state.difficultiesList.find((d) => d.level == action.value);
          return {
            ...state,
            newProjectDifficulty: action.value,
            newProjectReputation: difficultyObj.reputation,
            newProjectMoney: difficultyObj.profit,
            newProjectProduction: difficultyObj.production,
          };
        }
        default: return state;
      }
    default:
      return state;
  }
};

export default reducer;
