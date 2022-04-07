// == Imports
import { Navigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AddDevOnProject from 'src/components/Project/AddDevOnProject';
import './individualProject.scss';
import coin from 'src/assets/img/coin.png';
import trophy from 'src/assets/img/trophy.png';
import formatMoney from 'src/utils/formatMoney';

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

  // get available devs
  const availableDevsList = devsList.filter((d) => d.code_project === null);

  return (
    <div className="individualProject">
      <div className="individualProject__header">
        <h2>{project.name}</h2>
      </div>
      <div className="individualProject__infos">
        <div className="individualProject__infos__elmt">
          <p>Niveau de difficulté</p>
          <p>{project.difficulty}</p>
        </div>
        <div className="individualProject__infos__elmt">
          <p>Récompenses</p>
          <img src={trophy} alt="" />
          <p>{project.reputationGain} pts de réputation</p>
          <img src={coin} alt="" />
          <p>{formatMoney(project.moneyGain)}$</p>
        </div>
        <div className="individualProject__infos__elmt">
          <p>Avancement</p>
          <p>{project.completion}/{project.completionMax}</p>
        </div>
      </div>
      <AddDevOnProject
        projectId={id}
        projectDifficulty={project.difficulty}
      />
      <div className="individualProject__team">
        <div className="individualProject__team__availableDevs">
          <h2>Developpeurs disponibles</h2>
          <ul>
            {availableDevsList.map((dev) => (
              <li key={dev.id}>
                {dev.name}
                skill:{dev.skill}
                lassitude:{Math.round(dev.lassitude)}%
                salaire:{dev.salary}$/mois
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default IndividualProject;
