// == Import
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {
  updateActualDate,
  changeTimeSpeed,
  updateReferenceDate,
  updateIngameReferenceDate,
} from 'src/actions/startup';
import { getHours, getDate } from 'src/utils/formatTime';
import './timer.scss';

// == Component
const Timer = () => {
  // used to dispatch our actions
  const dispatch = useDispatch();

  // initialization of the time loop once after first render
  useEffect(() => {
    setInterval(() => dispatch(updateActualDate(Date.now())), 50);
  }, []);

  // retrieving actual real time
  const actualDate = useSelector((state) => state.startup.actualDate);

  // retrieving reference time used for calculation
  const referenceDate = useSelector((state) => state.startup.referenceDate);

  // retrieving ingame time reference for calculation
  const ingameReferenceDate = useSelector((state) => state.startup.ingameReferenceDate);

  // calculing ingame time with delta time between inital time and actual real time
  const timeSpeed = useSelector((state) => state.startup.timeSpeed);
  const ingameDate = ingameReferenceDate + ((actualDate - referenceDate) * timeSpeed);
  const ingameDateObject = new Date(ingameDate);

  // rendering of the component
  return (
    <div className="timer">
      <div className="timer__hours">
        ingame hours: {getHours(ingameDateObject)}
      </div>
      <div className="timer__date">
        ingame date: {getDate(ingameDateObject)}
      </div>
      <button
        type="button"
        className="timer__button timer__button--pause"
        onClick={() => {
          // pause the game if timespeed is superior to zero
          if (timeSpeed) {
            dispatch(changeTimeSpeed(0));
            dispatch(updateIngameReferenceDate(ingameDate));
          }
        }}
      >
        pause
      </button>
      <button
        type="button"
        className="timer__button timer__button--play"
        onClick={() => {
          // unpause the game if timespeed equal to zero
          if (!timeSpeed) {
            dispatch(updateReferenceDate());
            dispatch(changeTimeSpeed(2000));
          }
        }}
      >
        play
      </button>
    </div>
  );
};

export default Timer;
