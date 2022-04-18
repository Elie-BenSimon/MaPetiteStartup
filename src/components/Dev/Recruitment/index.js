// == Imports
import DevCard from 'src/components/Dev/DevCard';
import RecruitButton from 'src/components/Dev/DevCard/RecruitButton';
import { useDispatch, useSelector } from 'react-redux';
import { getRecruitableDevList } from 'src/actions/dev';
import { useEffect } from 'react';

// == Component
const Recruitment = () => {
  // retrievieng from database the list of hireable devs
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRecruitableDevList());
  }, []);

  // retrievieng from state the list of hireable devs
  const recruitableDevList = useSelector((state) => state.dev.recruitableDevList);

  // return each dev hireable from recruitableDevList
  return (
    <div className="box recruitment">
      <div className="box__header recruitment__header">
        <h2 className="box__header__title ">Recrutement</h2>
      </div>
      <ul className="cards__list recruitment__dev__list">
        {recruitableDevList ? recruitableDevList.map((dev) => (
          <li key={dev.id} className="cards__list__li">
            <DevCard {...dev}>
              <RecruitButton {...dev} />
            </DevCard>
          </li>
        )) : <p>Pas de développeurs disponible</p>}
      </ul>
    </div>
  );
};

export default Recruitment;
