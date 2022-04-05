import difficultyData from 'src/data/difficulty';
import {
  CREATE_PROJECT,
  CHANGE_NEW_PROJECT_FIELD,
  UPDATE_COMPLETION,
  MODIFY_COMPLETION_RATE,
} from 'src/actions/project';

export const initialState = {
  newProjectName: 'nomTest',
  newProjectDescription: 'descriptionTest',
  newProjectDifficulty: 0,
  projectsList: [{
    name: 'name test',
    description: 'descripion test',
    difficulty: 5,
    completion: 0,
    id: '0',
    completionRate: 0,
  }],
  // temporary until api connection
  newProjectId: 0,
  difficultiesList: difficultyData,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case MODIFY_COMPLETION_RATE:
      return {
        ...state,
        projectsList: [...state.projectsList].map((project) => {
          if (project.id === action.projectId) {
            return { ...project, completionRate: project.completionRate + action.completionToAdd };
          }
          return project;
        }),
      };
    case UPDATE_COMPLETION:
      return {
        ...state,

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
        case 'difficulty':
          return {
            ...state,
            newProjectDifficulty: action.value,
          };
        default: return state;
      }

    // action when the new project form is submitted
    case CREATE_PROJECT:
      return {
        ...state,
        projectsList: [...state.projectsList,
          {
            name: state.newProjectName,
            description: state.newProjectDescription,
            difficulty: state.newProjectDifficulty,
            completion: 0,
            id: state.newProjectId,
          }],
        // reinitialization of inputs
        newProjectName: '',
        newProjectDescription: '',
        newProjectDifficulty: '',
        // temporary until api connection
        newProjectId: state.newProjectId + 1,
      };
    default:
      return state;
  }
};

export default reducer;
