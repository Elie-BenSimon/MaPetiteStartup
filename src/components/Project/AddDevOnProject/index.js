// == Imports
import { useDispatch, useSelector } from 'react-redux';
import { changeProject, changeDeltaSkill, patchDev } from 'src/actions/dev';
import PropTypes from 'prop-types';

// == Component
const AddDevOnProject = ({ projectId, projectDifficulty }) => {
  const dispatch = useDispatch();

  // retrieving from state every employee
  const devList = useSelector((state) => state.dev.devList);

  // get dev on project
  const onProjectDevList = devList.filter((d) => d.projectId == projectId);

  // get devs available
  const availableDevsList = devList.filter((d) => d.projectId === null);

  return (
    <div className="individualProject__team__devs">

      <select
        type="button"
        value="addNewDev"
        onChange={(event) => {
          dispatch(changeProject([parseInt(event.target.value, 10)], projectId));
          dispatch(changeDeltaSkill(event.target.value, projectDifficulty));
          if (projectId !== 'newProject') {
            dispatch(patchDev(parseInt(event.target.value, 10), { project: projectId }));
          }
        }}
      >
        <option value="addNewDev" disabled hidden key="-1">Ajouter un développeur au projet</option>
        {availableDevsList.map((dev) => (
          <option
            value={dev.id}
            key={dev.id}
          >
            {dev.name}
            Compétences:{dev.skill}
            Salaire:{Math.round(dev.salary / 24 / 30.5)}$/h
            Lassitude:{Math.round(dev.lassitude)}%
          </option>
        ))}
      </select>

      <ul>
        {onProjectDevList.map((dev) => (
          <li key={dev.id}>
            <div className="newDev__infos">
              <p><span className="bold">{dev.name}</span></p>
              <p>Compétences:{dev.skill}</p>
              <p>Lassitude:{Math.round(Math.round(dev.lassitude))}%</p>
              <p>Salaire:{dev.salary}$</p>
            </div>
            <button
              type="button"
              className="button button-round button-round-close"
              value={dev.id}
              onClick={(event) => {
                dispatch(changeProject([event.target.value], null));
                dispatch(patchDev(event.target.value, { project: null }));
              }}
            >
              x
            </button>
          </li>
        ))}
      </ul>

    </div>
  );
};

// == Proptypes validation
AddDevOnProject.propTypes = {
  projectId: PropTypes.string.isRequired,
  projectDifficulty: PropTypes.string.isRequired,
};

export default AddDevOnProject;
