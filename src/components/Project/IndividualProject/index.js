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

  return (
    <div className="box individualProject">

      <div className="box__header individualProject__header">
        <h2 className="box__header__title ">{project.name}</h2>
      </div>

      <div className="box__content individualProject__infos">
        <p>
          <span className="pixel">
            Description:
          </span>
        </p>
        <p>{project.description}</p>
        <div className="individualProject__infos__elmt">
          <p>
            <span className="pixel">
              Niveau de difficulté:
            </span>
          </p>
          <p>{project.difficulty.level}</p>
        </div>
        <div className="individualProject__infos__elmt">
          <p>
            <span className="pixel">
              Récompenses:
            </span>
          </p>
          <p><img src={trophy} alt="" /> {project.difficulty.reputation} pts de réputation</p>
          <p><img src={coin} alt="" /> {formatMoney(project.difficulty.profit)}$</p>
        </div>
        <div className="individualProject__infos__elmt">
          <p>
            <span className="pixel">
              Avancement:
            </span>
          </p>
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
                  <div className="newDev__infos">
                    <p><span className="bold">{dev.name}</span></p>
                    <p>Compétences:{dev.skill}</p>
                    <p>Lassitude:{Math.round(Math.round(dev.lassitude))}%</p>
                    <p>Salaire:{dev.salary}$</p>
                  </div>
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
