// == Imports
import { Navigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Draggable from 'react-draggable';

// == Component
const IndividualProject = () => {
  const { id } = useParams();
  const projectsList = useSelector((state) => state.project.projectsList);
  const project = projectsList.find((p) => p.id == id);

  const devsList = useSelector((state) => state.dev.devList);
  const availableDevsList = devsList.filter((d) => d.code_project === null);
  const onProjectDevsList = devsList.filter((d) => d.code_project === id);
  console.log(devsList, availableDevsList);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

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
        </div>
        <div className="individualProject__team__availableDevs">
          <h2>Developpeurs disponibles</h2>
          <ul>
            {availableDevsList.map((dev) => (
              <Draggable
                axis="y"
              >
                <li key={dev.id}>
                  {dev.name} skill:{dev.skill} lassitude:{dev.lassitude} salary:{dev.salary}
                </li>
              </Draggable>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default IndividualProject;
