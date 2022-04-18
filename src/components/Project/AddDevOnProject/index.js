// == Imports
import { useDispatch, useSelector } from 'react-redux';
import { changeProjectId, changeDeltaSkill } from 'src/actions/dev';
import PropTypes from 'prop-types';

// == Component
const AddDevOnProject = ({ projectId, projectDifficulty }) => {
  const dispatch = useDispatch();

  // retrieving from state every employee
  const devsList = useSelector((state) => state.dev.devList);

  // get dev on project
  const onProjectDevsList = devsList.filter((d) => d.code_project === projectId);

  // get devs available
  const availableDevsList = devsList.filter((d) => d.code_project === null);

  return (
    <div className="individualProject__team__devs">

      <select
        type="button"
        value="addNewDev"
        onChange={(event) => {
          dispatch(changeProjectId([parseInt(event.target.value, 10)], projectId));
          // TODO à déplacer et réparer
          console.log(event.target.value);
          dispatch(changeDeltaSkill(event.target.value, projectDifficulty));
        }}
      >
        <option value="addNewDev" disabled hidden key="-1">Ajouter un développeur au projet</option>
        {availableDevsList.map((dev) => (
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
        {onProjectDevsList.map((dev) => (
          <li key={dev.id}>
            {dev.name}
            skill:{dev.skill}
            lassitude:{Math.round(Math.round(dev.lassitude))}%
            salaire:{dev.salary}$/mois
            <button
              type="button"
              className="button button-close"
              value={dev.id}
              onClick={(event) => dispatch(changeProjectId([event.target.value], null))}
            >
              +
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
