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
  newProjectDifficulty: 0,
  projectsList: [{
    name: 'name test',
    description: 'descripion test',
    difficulty: 0,
    completion: 0,
    id: '0',
    complete: false,
  }],
  // temporary until api connection
  newProjectId: 0,
  difficultiesList: difficultyData,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case COMPLETE_PROJECT:
      return {
        ...state,
        projectsList: [...state.projectsList].map((project) => {
          if (project.id === action.projectId) {
            return {
              ...project,
              completion: state.difficultiesList.find(
                (difficultyObj) => difficultyObj.level === project.difficulty,
              ).production,
              complete: true,
            };
          }
          return project;
        }),
      };
    case UPDATE_COMPLETION:
      return {
        ...state,
        projectsList: [...state.projectsList].map((project) => {
          if (project.id === action.projectId) {
            return { ...project, completion: project.completion + action.completionToAdd };
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
