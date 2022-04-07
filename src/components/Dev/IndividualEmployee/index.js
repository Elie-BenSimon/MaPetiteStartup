import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import FireButton from 'src/components/Dev/DevCard/FireButton';
import './individualEmployee.scss';

const IndividualEmployee = () => {
  const { id } = useParams();
  const dev = useSelector((state) => state.dev.devList).find((d) => d.id === id);

  return (
    <div className="individualEmployee">
      <img src="" alt="" className="individualEmployee__avatar" />
      <div className="individualEmployee__wrapper">
        <h2 className="individualEmployee__name">{dev.name}</h2>
        <p className="individualEmployee__salary">Salaire: {dev.salary}$/mois</p>
        <p className="individualEmployee__skill">Compétence: {dev.skill}</p>
        <p className="individualEmployee__lassitude">Lassitude: {dev.lassitude}</p>
        <FireButton id={dev.id} />
      </div>
    </div>
  );
};

export default IndividualEmployee;
