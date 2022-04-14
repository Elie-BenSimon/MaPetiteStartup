// == Imports
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {
  updateActualDate,
  changeTimeSpeed,
  updateReferenceDate,
  updateIngameReferenceDate,
  updateIngameTime,
} from 'src/actions/timer';
import { getFormattedHours, getFormattedDate } from 'src/utils/formatTime';
import PropTypes from 'prop-types';
import './timer.scss';
import play from 'src/assets/img/play.png';
import pause from 'src/assets/img/pause.png';

// == Component
const Timer = ({
  newHour,
  newDay,
  newMonth,
  newYear,
}) => {
  // used to dispatch our actions
  const dispatch = useDispatch();

  // initialization of the time loop once after first render
  useEffect(() => {
    setInterval(() => dispatch(updateActualDate(Date.now())), 5000);
  }, []);

  // retrieving actual real time
  const actualDate = useSelector((state) => state.timer.actualDate);

  // retrieving reference time used for calculation
  const referenceDate = useSelector((state) => state.timer.referenceDate);

  // retrieving ingame time reference for calculation
  const ingameReferenceDate = useSelector((state) => state.timer.ingameReferenceDate);

  // calculing ingame time with delta time between inital time and actual real time
  const timeSpeed = useSelector((state) => state.timer.timeSpeed);
  const ingameDate = ingameReferenceDate + ((actualDate - referenceDate) * timeSpeed);
  const ingameDateObject = new Date(ingameDate);

  // check every new hour
  const lastIngameDateObject = new Date(useSelector((state) => state.timer.ingameTime));
  if (ingameDateObject.getHours() !== lastIngameDateObject.getHours()) {
    newHour();
  }
  // check every new day
  if (ingameDateObject.getDay() !== lastIngameDateObject.getDay()) {
    newDay();
  }
  // check every new month
  if (ingameDateObject.getMonth() !== lastIngameDateObject.getMonth()) {
    newMonth();
  }
  // check every new year
  if (ingameDateObject.getYear() !== lastIngameDateObject.getYear()) {
    newYear();
  }

  // update the state with the new ingame time
  dispatch(updateIngameTime(ingameDate));

  // rendering of the component
  return (
    <div className="timer">
      <div className="timer__date">
        <div className="timer__hours">
          {getFormattedHours(ingameDateObject)}
        </div>
        <div className="timer__days">
          {getFormattedDate(ingameDateObject)}
        </div>
      </div>
      <div className="timer__buttons">
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
          <img src={pause} alt="Pause button" />
        </button>
        <button
          type="button"
          className="timer__button timer__button--play"
          onClick={() => {
            // unpause the game only if timespeed equal to zero
            if (!timeSpeed) {
              dispatch(updateReferenceDate());
              dispatch(changeTimeSpeed(2000));
            }
          }}
        >
          <img src={play} alt="Play button" />
        </button>
      </div>
    </div>
  );
};

// Proptypes validation
Timer.propTypes = {
  newHour: PropTypes.func.isRequired,
  newDay: PropTypes.func.isRequired,
  newMonth: PropTypes.func.isRequired,
  newYear: PropTypes.func.isRequired,
};

export default Timer;
