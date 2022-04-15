// == Imports
import { useDispatch, useSelector } from 'react-redux';
import { changeProject, changeDeltaSkill, patchDev } from 'src/actions/dev';
import PropTypes from 'prop-types';
import './addDevOnProject.scss';

// == Component
const AddDevOnProject = ({ projectId, projectDifficulty }) => {
  const dispatch = useDispatch();

  // retrieving from state every employee
  const devList = useSelector((state) => state.dev.devList);

  // get dev on project
  const onProjectDevList = devList.filter((d) => d.projectId == projectId);

  // get devs available
  const availableDevList = devList.filter((d) => d.projectId === null);

  return (
    <div className="individualProject__team__devs">
      <h3>Développeurs sur le projet</h3>
      <select
        type="button"
        value="addNewDev"
        onChange={(event) => {
          dispatch(changeProject([parseInt(event.target.value, 10)], projectId));
          dispatch(changeDeltaSkill(event.target.value, projectDifficulty));
          dispatch(patchDev(event.target.value, { project: projectId }));
        }}
      >
        <option value="addNewDev" disabled hidden key="-1">ajouter un developpeur sur le projet</option>
        {availableDevList.map((dev) => (
          <option
            value={dev.id}
            key={dev.id}
          >
            {dev.name}
            skill:{dev.skill}
            salaire:{Math.round(dev.salary / 24 / 30.5)}/h
            lassitude:{Math.round(dev.lassitude)}%
          </option>
        ))}
      </select>
      <ul>
        {onProjectDevList.map((dev) => (
          <li key={dev.id}>
            {dev.name}
            skill:{dev.skill}
            lassitude:{Math.round(Math.round(dev.lassitude))}%
            salaire:{dev.salary}$/mois
            <button
              type="button"
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
