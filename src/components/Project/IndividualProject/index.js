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
  const project = projectsList.find((p) => p.id == id);
  // console.log(project);

  // if no project match with URL, redirect to project page
  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  // retrieving from state every employee
  const devsList = useSelector((state) => state.dev.devList);

  // get available devs
  const availableDevsList = devsList.filter((d) => d.projectId === null);
  console.log(availableDevsList);

  return (
    <div className="box individualProject">

      <div className="box__header individualProject__header">
        <h2 className="box__header__title ">{project.name}</h2>
      </div>

      <div className="box__content individualProject__infos">
        <p>Description:</p>
        <p>{project.description}</p>
        <div className="individualProject__infos__elmt">
          <p>Niveau de difficulté:</p>
          <p>{project.difficulty.level}</p>
        </div>
        <div className="individualProject__infos__elmt">
          <p>Récompenses:</p>
          <p><img src={trophy} alt="" /> {project.difficulty.reputation} pts de réputation</p>
          <p><img src={coin} alt="" /> {formatMoney(project.difficulty.profit)}$</p>
        </div>
        <div className="individualProject__infos__elmt">
          <p>Avancement:</p>
          <p>{project.completion}/{project.difficulty.production}</p>
        </div>
        <AddDevOnProject
          projectId={id}
          projectDifficulty={project.difficulty.level}
        />
        <div className="individualProject__team">
          <div className="individualProject__team__availableDevs">
            <h3>Developpeurs disponibles</h3>
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

    </div>
  );
};

export default IndividualProject;
