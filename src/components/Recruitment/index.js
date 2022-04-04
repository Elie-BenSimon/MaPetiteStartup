import DevCard from 'src/components/DevCard';
import recruitableDevList from '../../data/recruitableDevList';

const Recruitment = () => (
  <div className="recruitment">
    <h2>Recruitable list</h2>
    <ul>
      {recruitableDevList.map((dev) => (
        <DevCard key={dev.id} {...dev} />
      ))}
    </ul>
  </div>
);

export default Recruitment;
