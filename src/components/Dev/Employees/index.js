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
    <div className="box employees">
      <div className="box__header">
        <h2 className="box__header__title ">Liste des employées</h2>
      </div>
      <ul className="cards__list employees__list">
        {devList.map((dev) => (
          <li
            className="cards__list__li employees__list__li"
            key={dev.id}
          >
            <DevCard {...dev}>
              <FireButton {...dev} />
            </DevCard>
          </li>
        ))}
      </ul>
      <Link
        className="button employees__button"
        to="/recruitment"
      >
        Recruter des développeurs
      </Link>
    </div>
  );
};

export default Employees;
