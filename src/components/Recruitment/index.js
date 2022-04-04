// == Imports
import DevCard from 'src/components/DevCard';
import RecruitButton from 'src/components/DevCard/RecruitButton';
import { useSelector } from 'react-redux';

// == Component
const Recruitment = () => {
  // retrievieng the list of hireable devs
  const recruitableDevList = useSelector((state) => state.dev.recruitableDevList);

  // return each dev hireable from recruitableDevList
  return (
    <div className="recruitment">
      <h2>Recruitable list</h2>
      {recruitableDevList.map((dev) => (
        <ul key={dev.id}>
          <DevCard {...dev} />
          <RecruitButton {...dev} />
        </ul>
      ))}
    </div>
  );
};

export default Recruitment;
