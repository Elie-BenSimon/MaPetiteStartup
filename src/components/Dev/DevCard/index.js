// == Imports
import PropTypes from 'prop-types';
import arrayify from 'src/utils/arrayify';
import skillIcon from 'src/assets/img/skills.png';
import ProgressBar from 'src/components/Layouts/ProgressBar';
import { useSelector } from 'react-redux';

// == Component
const DevCard = ({
  name,
  avatar,
  skill,
  salary,
  lassitude,
  children,
  projectId,
}) => {
  const skillArray = arrayify(10, skill);
  const project = useSelector((state) => state.project.projectsList).find(
    (p) => p.id == projectId);

  return (
    <div className="card">
      <div className="card__dev__wrapper">
        <img src={`https://avatars.dicebear.com/api/human/${avatar}.svg`} alt="" className="avatar card__dev__avatar" />
        <div className="card__dev__infos">
          <p>Nom: {name}</p>
          <div className="card__dev__skills">
            {skillArray.map((element, index) => (<img key={index} className={element ? 'skill-icon skill-icon--glow' : 'skill-icon skill-icon--dark'} src={skillIcon} alt="icon for a skill point" />))}
          </div>
          <p>Salaire: {salary}$</p>
          {/* display when not on recruitment page */}
          { window.location.pathname !== '/recruitment' && (
            <>
              <p>Lassitude:</p>
              <ProgressBar
                value={lassitude}
                maxValue={100}
                // eslint-disable-next-line no-nested-ternary
                intensity={lassitude < 50 ? '' : lassitude < 75 ? '--medium' : '--strong'}
              />
              <p>Projet:</p>
              <p>{project ? project.name : 'aucun projet en cours'}</p>
            </>
          )}
        </div>
      </div>
      {children}
    </div>
  );
};
// Proptypes validation
DevCard.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  skill: PropTypes.number.isRequired,
  salary: PropTypes.number.isRequired,
  lassitude: PropTypes.number.isRequired,
  children: PropTypes.node,
  projectId: PropTypes.number,
};

DevCard.defaultProps = {
  children: null,
  projectId: null,
};

export default DevCard;
