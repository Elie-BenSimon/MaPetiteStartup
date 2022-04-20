// == Imports
import { useSelector, useDispatch } from 'react-redux';
import { changeNewProjectField, createProject } from 'src/actions/project';
import { useNavigate } from 'react-router-dom';
import AddDevOnProject from 'src/components/Project/AddDevOnProject';
import formatMoney from 'src/utils/formatMoney';
import trophy from 'src/assets/img/trophy.png';
import coin from 'src/assets/img/coin.png';
import './newProject.scss';

// == Component
const NewProject = () => {
  const name = useSelector((state) => state.project.newProjectName);
  const description = useSelector((state) => state.project.newProjectDescription);
  const difficulty = useSelector((state) => state.project.newProjectDifficulty);
  const money = useSelector((state) => state.project.newProjectMoney);
  const reputation = useSelector((state) => state.project.newProjectReputation);

  // used to dispatch an action
  const dispatch = useDispatch();

  // used to redirect user
  const navigate = useNavigate();

  return (
    <div className="box newProject">

      <header className="box__header">
        <h2 className="box__header__title">Nouveau projet</h2>
      </header>

      <div className="box__content newProject__content">
        <form
          className="newProject__form"
          onSubmit={(event) => {
            event.preventDefault();
            dispatch(createProject());
            navigate('/projects');
          }}
        >

          <label htmlFor="name">Nom du projet</label>
          <input
            placeholder="Mon super projet"
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
            placeholder="Idée révolutionnaire d'appli indispensable"
            value={description}
            id="description"
            name="description"
            onChange={(event) => dispatch(
              changeNewProjectField(event.target.value, event.target.name),
            )}
          />

          <label htmlFor="addNewDev">Développeurs sur le projet</label>
          <AddDevOnProject
            projectId="newProject"
            projectDifficulty={difficulty}
          />

          <label htmlFor="difficulty">Difficulté</label>
          <input
            className="difficulty__range"
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

          <div className="newProject__benefits">
            <p className="newProject__benefits__title">Bénéfices</p>
            <div>
              <img src={trophy} alt="" />
              <p> {reputation} point(s) de réputation</p>
            </div>
            <div>
              <img src={coin} alt="" />
              <p> {formatMoney(money)} $</p>
            </div>
          </div>

          <button type="submit" className="button button-action1">
            Valider
          </button>
        </form>
      </div>

    </div>
  );
};

export default NewProject;
