// == Imports
import { useSelector, useDispatch } from 'react-redux';
import { changeNewProjectField, createProject } from 'src/actions/project';
import { useNavigate } from 'react-router-dom';
import AddDevOnProject from 'src/components/Project/AddDevOnProject';
import formatMoney from 'src/utils/formatMoney';
import './newProject.scss';

// == Component
const NewProject = () => {
  const name = useSelector((state) => state.project.newProjectName);
  const description = useSelector((state) => state.project.newProjectDescription);
  const difficulty = useSelector((state) => state.project.newProjectDifficulty);
  const money = useSelector((state) => state.project.newProjectMoney);

  // used to dispatch an action
  const dispatch = useDispatch();

  // used to redirect user
  const navigate = useNavigate();

  return (
    <form
      className="box newProject"
      onSubmit={(event) => {
        event.preventDefault();
        dispatch(createProject());
        navigate('/projects');
      }}
    >
      <header className="box__header">
        <h2 className="box__header__title">Nouveau projet</h2>
      </header>

      <div className="newProject__content">

        <label htmlFor="name">Nom du projet</label>
        <input
          value={name}
          type="text"
          id="name"
          name="name"
          onChange={(event) => dispatch(
            changeNewProjectField(event.target.value, event.target.name),
          )}
        />

        <label htmlFor="description">Description</label>
        <textarea
          value={description}
          id="description"
          name="description"
          onChange={(event) => dispatch(
            changeNewProjectField(event.target.value, event.target.name),
          )}
        />

        <AddDevOnProject
          projectId="newProject"
          projectDifficulty={difficulty}
        />

        <label htmlFor="difficulty">Difficulté</label>
        <input
          type="range"
          min="0"
          max="10"
          step="1"
          id="difficulty"
          name="difficulty"
          value={difficulty}
          onChange={(event) => dispatch(
            changeNewProjectField(event.target.value, event.target.name),
          )}
        />

        <p>Bénéfice: {formatMoney(money)} $</p>

        <button type="submit">
          Valider
        </button>
      </div>
    </form>
  );
};

export default NewProject;
