// == Imports
import DevCard from 'src/components/Dev/DevCard';
import RecruitButton from 'src/components/Dev/DevCard/RecruitButton';
import { useSelector } from 'react-redux';

// == Component
const Recruitment = () => {
  // retrievieng the list of hireable devs
  const recruitableDevList = useSelector((state) => state.dev.recruitableDevList);

  // return each dev hireable from recruitableDevList
  return (
    <div className="recruitment">
      <h2>Recruitable list</h2>
      <ul>
        {recruitableDevList.map((dev) => (
          <li key={dev.id}>
            <DevCard {...dev} />
            <RecruitButton {...dev} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Recruitment;
