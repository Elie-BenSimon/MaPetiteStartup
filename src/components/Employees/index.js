// == Imports
import DevCard from 'src/components/DevCard';
import FireButton from 'src/components/DevCard/FireButton';
import { useSelector } from 'react-redux';

// == Component
const Employees = () => {
  // retrievieng the list of employee
  const devList = useSelector((state) => state.dev.devList);

  // return each dev from devList
  return (
    <div className="recruitment">
      <h2>Employees list</h2>
      <ul>
        {devList.map((dev) => (
          <li key={dev.id}>
            <DevCard {...dev} />
            <FireButton {...dev} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Employees;
