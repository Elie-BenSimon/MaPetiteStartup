import DevCard from 'src/components/DevCards/RecruitableDevCard';
import { useSelector } from 'react-redux';

const Recruitment = () => {
  const recruitableDevList = useSelector((state) => state.dev.recruitableDevList);
  return (
    <div className="recruitment">
      <h2>Recruitable list</h2>
      <ul>
        {recruitableDevList.map((dev) => (
          <DevCard key={dev.id} {...dev} />
        ))}
      </ul>
    </div>
  );
};

export default Recruitment;
