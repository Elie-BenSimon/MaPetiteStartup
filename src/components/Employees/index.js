import DevCard from 'src/components/DevCard';
import FireButton from 'src/components/DevCard/FireButton';
import { useSelector } from 'react-redux';

const Employees = () => {
  const devList = useSelector((state) => state.dev.devList);
  return (
    <div className="recruitment">
      <h2>Employees list</h2>
      <ul>
        {devList.map((dev) => (
          <>
            <DevCard key={dev.id} {...dev} />
            <FireButton {...dev} />
          </>
        ))}
      </ul>
    </div>
  );
};

export default Employees;
