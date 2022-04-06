// == Imports
import { useDispatch, useSelector } from 'react-redux';
import { modifyProjectId } from 'src/actions/dev';
import PropTypes from 'prop-types';
import './addDevOnProject.scss';

// == Component
const AddDevOnProject = ({ projectId }) => {
  const dispatch = useDispatch();

  // retrieving from state every employee
  const devsList = useSelector((state) => state.dev.devList);

  // get dev on project
  const onProjectDevsList = devsList.filter((d) => d.code_project === projectId);

  // get devs available
  const availableDevsList = devsList.filter((d) => d.code_project === null);

  return (
    <div className="individualProject__team__devs">
      <h2>Développeurs sur le projet</h2>
      <ul>
        {onProjectDevsList.map((dev) => (
          <li key={dev.id}>
            {dev.name} skill:{dev.skill} lassitude:{dev.lassitude}% salaire:{dev.salary}$/mois
            <button
              type="button"
              value={dev.id}
              onClick={(event) => dispatch(modifyProjectId([event.target.value], null))}
            >
              x
            </button>
          </li>
        ))}
      </ul>
      <select
        type="button"
        value="addNewDev"
        onChange={(event) => dispatch(modifyProjectId([event.target.value], projectId))}
      >
        <option value="addNewDev" disabled hidden key="-1">ajouter un developpeur sur le projet</option>
        {availableDevsList.map((dev) => (
          <option
            value={dev.id}
            key={dev.id}
          >
            {dev.name}
            skill:{dev.skill}
            salary:{Math.round(dev.salary / 24 / 30.5)}/h
            lassitude:{dev.lassitude}%
          </option>
        ))}
      </select>
    </div>
  );
};

// == Proptypes validation
AddDevOnProject.propTypes = {
  projectId: PropTypes.string.isRequired,
};

export default AddDevOnProject;
