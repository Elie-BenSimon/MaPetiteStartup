import difficultyData from 'src/data/difficulty';
import {
  CREATE_PROJECT,
  CHANGE_NEW_PROJECT_FIELD,
  UPDATE_COMPLETION,
  COMPLETE_PROJECT,
} from 'src/actions/project';

export const initialState = {
  newProjectName: 'nomTest',
  newProjectDescription: 'descriptionTest',
  newProjectDifficulty: '1',
  newProjectMoney: difficultyData.find((d) => d.level === '1').profit,
  newProjectReputation: difficultyData.find((d) => d.level === '1').reputation,
  newProjectProduction: difficultyData.find((d) => d.level === '1').production,
  difficultiesList: difficultyData,
  projectsList: [{
    name: 'name test',
    description: 'description test',
    difficulty: '0',
    moneyGain: 5000,
    reputationGain: 3,
    completion: 0,
    completionMax: 100,
    id: '0',
    complete: false,
  }],

  // temporary until api connection
  newProjectId: 1,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    // execute when a project is complete
    case COMPLETE_PROJECT:
      return {
        ...state,
        // receive an array of index and change code_project of all dev with an id in this array
        projectsList: [...state.projectsList].map((project) => {
          if (project.id === action.projectId) {
            return {
              ...project,
              complete: true,
            };
          }
          return project;
        }),
      };

    // change completion of a project
    case UPDATE_COMPLETION:
      return {
        ...state,
        projectsList: [...state.projectsList].map((project) => {
          if (project.id === action.projectId) {
            // check to not exceed maxCompletion
            if (project.completion + action.completionToAdd < project.completionMax) {
              return { ...project, completion: project.completion + action.completionToAdd };
            }
            return { ...project, completion: project.completionMax };
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
          const difficultyObj = state.difficultiesList.find((d) => d.level === action.value);
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

    // action when the new project form is submitted
    case CREATE_PROJECT: {
      const newId = String(state.newProjectId);
      return {
        ...state,
        projectsList: [...state.projectsList,
          {
            name: state.newProjectName,
            description: state.newProjectDescription,
            difficulty: state.newProjectDifficulty,
            completion: 0,
            completionMax: state.newProjectProduction,
            id: newId,
            moneyGain: state.newProjectMoney,
            reputationGain: state.newProjectReputation,
          }],
        // reinitialization of inputs
        newProjectName: '',
        newProjectDescription: '',
        newProjectDifficulty: '',
        // temporary until api connection
        newProjectId: state.newProjectId + 1,
      };
    }
    default:
      return state;
  }
};

export default reducer;
