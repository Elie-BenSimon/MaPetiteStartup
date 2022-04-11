// == Imports
import PropTypes from 'prop-types';
import './devCard.scss';
import arrayify from 'src/utils/arrayify';
import skillIcon from 'src/assets/img/skills.png';
import ProgressBar from 'src/components/Layouts/ProgressBar';

// == Component
const DevCard = ({
  name,
  avatar,
  skill,
  salary,
  lassitude,
  children,
}) => {
  const skillArray = arrayify(10, skill);
  console.log(lassitude);
  return (
    <div className="card devCard">
      <div className="card__wrapper devCard__wrapper">
        <img src={`https://avatars.dicebear.com/api/human/${avatar}.svg`} alt="" className="avatar card__avatar devCard__avatar" />
        <div className="card__infos devCard__infos">
          <p>Nom: {name}</p>
          <div className="devCard__skills">
            {skillArray.map((element) => (<img className={element ? 'skill-icon skill-icon--glow' : 'skill-icon skill-icon--dark'} src={skillIcon} alt="icon for a skill point" />))}
          </div>
          <p>Salaire: {salary}$/mois</p>
          <p>Lassitude:{Math.floor(lassitude)}</p>
          <ProgressBar
            value={lassitude}
            maxValue={100}
          />
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
};

DevCard.defaultProps = {
  children: null,
};

export default DevCard;
