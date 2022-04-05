// == Imports
import { useSelector, useDispatch } from 'react-redux';
import { changeNewProjectField, createProject } from 'src/actions/project';
import { useNavigate } from 'react-router-dom';
import './newProject.scss';

// == Component
const NewProject = () => {
  // values for controlled components
  const name = useSelector((state) => state.project.newProjectName);
  const description = useSelector((state) => state.project.newProjectDescription);
  const difficulty = useSelector((state) => state.project.newProjectDifficulty);

  // used to dispatch an action
  const dispatch = useDispatch();

  // used to redirect puser
  const navigate = useNavigate();

  return (
    <form
      className="newProject"
      onSubmit={(event) => {
        event.preventDefault();
        dispatch(createProject());
        navigate('/projects');
      }}
    >

      <label htmlFor="name">Nom du projet</label>
      <input
        value={name}
        type="text"
        id="name"
        name="name"
        onChange={(event) => dispatch(changeNewProjectField(event.target.value, event.target.name))}
      />

      <label htmlFor="description">Description</label>
      <textarea
        value={description}
        id="description"
        name="description"
        onChange={(event) => dispatch(changeNewProjectField(event.target.value, event.target.name))}
      />

      <h3>Développeurs sur le projet</h3>
      <select name="" id="">
        <option value="test">test</option>
        <option value="test2">test2</option>
      </select>

      <button
        type="button"
      >Ajouter un developpeur
      </button>

      <label htmlFor="difficulty">Difficulté</label>
      <input
        type="range"
        min="0"
        max="10"
        step="1"
        id="difficulty"
        name="difficulty"
        value={difficulty}
        onChange={(event) => dispatch(changeNewProjectField(event.target.value, event.target.name))}
      />

      <p>Bénéfice: beaucoup de $$$</p>

      <button type="submit">
        Valider
      </button>
    </form>
  );
};

export default NewProject;
