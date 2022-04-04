import DevCard from 'src/components/DevCard';
import RecruitButton from 'src/components/DevCard/RecruitButton';
import { useSelector } from 'react-redux';

const Recruitment = () => {
  const recruitableDevList = useSelector((state) => state.dev.recruitableDevList);

  // console.log(recruitableDevList);
  return (
    <div className="recruitment">
      <h2>Recruitable list</h2>
      <ul>
        {recruitableDevList.map((dev) => (
          <>
            <DevCard key={dev.id} {...dev} />
            <RecruitButton {...dev} />
          </>
        ))}
      </ul>
    </div>
  );
};

export default Recruitment;
