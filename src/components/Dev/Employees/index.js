// == Imports
import './employees.scss';
import DevCard from 'src/components/Dev/DevCard';
import FireButton from 'src/components/Dev/DevCard/FireButton';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

// == Component
const Employees = () => {
  // retrievieng the list of employee
  const devList = useSelector((state) => state.dev.devList);

  // return each dev from devList
  return (
    <div className="employees">
      <div className="recruitment__header">
        <h2>Employees list</h2>
      </div>
      <ul className="employees__devlist">
        {devList.map((dev) => (
          <li
            className="employees__dev_li"
            key={dev.id}
          >
            <DevCard {...dev}>
              <FireButton {...dev} />
            </DevCard>
          </li>
        ))}
      </ul>
      <Link
        className="employees__button employees__button--recruit button--hire"
        to="/recruitment"
      >
        Recruter des développeurs
      </Link>
    </div>
  );
};

export default Employees;
