// == Imports
import { Navigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AddDevOnProject from 'src/components/AddDevOnProject';
import difficultyData from 'src/data/difficulty';

// == Component
const IndividualProject = () => {
  // retrieving from URL id of current project
  const { id } = useParams();

  // retrieving from state corresponding project
  const projectsList = useSelector((state) => state.project.projectsList);
  const project = projectsList.find((p) => p.id === id);

  // if no project match with URL, redirect to project page
  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  // retrieving from state every employee
  const devsList = useSelector((state) => state.dev.devList);

  // get devs available
  const availableDevsList = devsList.filter((d) => d.code_project === null);

  // get total production point needed for completion
  const totalProd = difficultyData.find((difficultyObj) => (
    difficultyObj.level === project.difficulty)).production;

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
        <p>{project.completion}/{totalProd}</p>
      </div>
      <AddDevOnProject projectId={id} />
      <div className="individualProject__team">
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
