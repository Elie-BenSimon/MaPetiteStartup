// == Import
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {
  updateActualDate,
  changeTimeSpeed,
  updateReferenceDate,
  updateIngameReferenceDate,
} from 'src/actions/startup';

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

  // rendering of the component
  return (
    <div className="timer">
      <div>
        ingame date: {new Date(ingameDate).toString()}
      </div>
      <button
        type="button"
        className="timer__button timer__button--pause"
        onClick={() => {
          dispatch(changeTimeSpeed(0));
          dispatch(updateIngameReferenceDate(ingameDate));
        }}
      >
        pause
      </button>
      <button
        type="button"
        className="timer__button timer__button--play"
        onClick={() => {
          // only apply if timespeed equal to zero
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
