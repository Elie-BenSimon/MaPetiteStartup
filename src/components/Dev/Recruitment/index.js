// == Imports
import DevCard from 'src/components/Dev/DevCard';
import RecruitButton from 'src/components/Dev/DevCard/RecruitButton';
import { useSelector } from 'react-redux';
import './recruitment.scss';

// == Component
const Recruitment = () => {
  // retrievieng the list of hireable devs
  const recruitableDevList = useSelector((state) => state.dev.recruitableDevList);

  // return each dev hireable from recruitableDevList
  return (
    <div className="recruitment">
      <div className="recruitment__header">
        <h2>Recrutement</h2>
      </div>
      <ul className="recruitment__cards">
        {recruitableDevList.map((dev) => (
          <li
            className="recruitment__card"
            key={dev.id}
          >
            <DevCard {...dev} />
            <RecruitButton {...dev} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Recruitment;
