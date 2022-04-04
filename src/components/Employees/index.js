import DevCard from 'src/components/DevCard';
import { useSelector } from 'react-redux';

const Employees = () => {
  const devList = useSelector((state) => state.dev.devList);
  return (
    <div className="recruitment">
      <h2>Employees list</h2>
      <ul>
        {devList.map((dev) => (
          <DevCard key={dev.id} {...dev} />
        ))}
      </ul>
    </div>
  );
};

export default Employees;
