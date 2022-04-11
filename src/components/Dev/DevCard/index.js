// == Imports
import PropTypes from 'prop-types';
import './devCard.scss';
import arrayify from 'src/utils/arrayify';
import skillIcon from 'src/assets/img/skills.png';

// == Component
const DevCard = ({
  name,
  avatar,
  skill,
  salary,
  children,
}) => {
  const skillArray = arrayify(10, skill);
  console.log(skillArray);
  return (
    <div className="card devCard">
      <div className="card__wrapper devCard__wrapper">
        <img src={`https://avatars.dicebear.com/api/human/${avatar}.svg`} alt="" className="avatar card__avatar devCard__avatar" />
        <div className="card__infos devCard__infos">
          <p>Nom : {name}</p>
          <div className="devCard__skills">
            {skillArray.map((element) => (<img className={element ? 'skill-icon' : 'skill-icon skill-icon--dark'} src={skillIcon} alt="icon for a skill point" />))}
          </div>
          <p>Salaire: {salary}</p>
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
  children: PropTypes.node,
};

DevCard.defaultProps = {
  children: null,
};

export default DevCard;
