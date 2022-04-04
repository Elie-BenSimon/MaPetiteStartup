import { CREATE_PROJECT, CHANGE_NEW_PROJECT_FIELD } from 'src/actions/project';

export const initialState = {
  newProjectName: 'nomTest',
  newProjectDescription: 'descriptionTest',
  newProjectDifficulty: 0,
  projectsList: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
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
      console.log(state.newProjectDifficulty);
      return {
        ...state,
        projectsList: [...state.projectsList,
          {
            name: state.newProjectName,
            description: state.newProjectDescription,
            difficulty: state.newProjectDifficulty,
          }],
        newProjectName: '',
        newProjectDescription: '',
        newProjectDifficulty: '',
      };
    default:
      return state;
  }
};

export default reducer;
