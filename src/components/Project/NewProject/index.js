// == Imports
import { useSelector, useDispatch } from 'react-redux';
import { changeNewProjectField, createProject } from 'src/actions/project';
import { modifyProjectId } from 'src/actions/dev';
import { useNavigate } from 'react-router-dom';
import AddDevOnProject from 'src/components/Project/AddDevOnProject';
import formatMoney from 'src/utils/formatMoney';
import './newProject.scss';

// == Component
const NewProject = () => {
  const id = String(useSelector((state) => state.project.newProjectId));
  const name = useSelector((state) => state.project.newProjectName);
  const description = useSelector((state) => state.project.newProjectDescription);
  const difficulty = useSelector((state) => state.project.newProjectDifficulty);
  const money = useSelector((state) => state.project.newProjectMoney);

  // return an array of dev id assiggned to the new project
  const devIdOnNewProject = useSelector((state) => state.dev.devList).filter((dev) => dev.code_project === 'newProject').map((dev) => dev.id);

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
        dispatch(modifyProjectId(devIdOnNewProject, id));
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

      <AddDevOnProject
        projectId="newProject"
        projectDifficulty={difficulty}
      />

      <label htmlFor="difficulty">Difficult??</label>
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

      <p>B??n??fice: {formatMoney(money)} $</p>

      <button type="submit">
        Valider
      </button>
    </form>
  );
};

export default NewProject;
