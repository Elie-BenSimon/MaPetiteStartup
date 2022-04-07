// == Imports
import DevCard from 'src/components/Dev/DevCard';
import FireButton from 'src/components/Dev/DevCard/FireButton';
import { useSelector } from 'react-redux';
import './employees.scss';

// == Component
const Employees = () => {
  // retrievieng the list of employee
  const devList = useSelector((state) => state.dev.devList);

  // return each dev from devList
  return (
    <div className="recruitment">
      <div className="recruitment__header">
        <h2>Mes développeurs</h2>
      </div>
      <ul className="recruitment__cards">
        {devList.map((dev) => (
          <li
            className="recruitment__card"
            key={dev.id}
          >
            <DevCard {...dev} />
            <FireButton {...dev} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Employees;
