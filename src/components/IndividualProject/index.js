// == Imports
import { Navigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { modifyProjectId } from 'src/actions/dev';

// == Component
const IndividualProject = () => {
  const dispatch = useDispatch();

  // retrieving from URL id of current project
  const { id } = useParams();

  // retrieving from state corresponding project
  const projectsList = useSelector((state) => state.project.projectsList);
  const project = projectsList.find((p) => p.id == id);

  // if no project match with URL, redirect to project page
  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  // retrieving from state every employee
  const devsList = useSelector((state) => state.dev.devList);

  // get dev working on current project
  const availableDevsList = devsList.filter((d) => d.code_project === null);

  // get dev available
  const onProjectDevsList = devsList.filter((d) => d.code_project === id);

  return (
    <div className="individualProject">
      <h2>{project.name}</h2>
      <div className="individualProject__infos">
        <p>Niveau de difficulté</p>
        <p>{project.difficulty}</p>
        <p>Récompenses</p>
        <p>50000$</p>
        <p>250 pts de réputation</p>
        <p>Avancement</p>
        <p>{project.completion}</p>
      </div>

      <div className="individualProject__team">
        <div className="individualProject__team__devs">
          <h2>Equipe sur le projet</h2>
          <ul>
            {onProjectDevsList.map((dev) => (
              <li key={dev.id}>
                {dev.name} skill:{dev.skill} lassitude:{dev.lassitude} salary:{dev.salary}
              </li>
            ))}
          </ul>
          <select
            type="button"
            value="addNewDev"
            onChange={(event) => dispatch(modifyProjectId(event.target.value, id))}
          >
            <option value="addNewDev" disabled hidden key="-1">ajouter un developpeur sur le projet</option>
            {availableDevsList.map((dev) => (
              <option
                value={dev.id}
                key={dev.id}
              >
                {dev.name}
              </option>
            ))}
          </select>
        </div>
        <div className="individualProject__team__availableDevs">
          <h2>Developpeurs disponibles</h2>
          <ul>
            {availableDevsList.map((dev) => (
              <li key={dev.id}>
                {dev.name} skill:{dev.skill} lassitude:{dev.lassitude} salary:{dev.salary}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default IndividualProject;
