// == Import
import { useSelector, useDispatch } from 'react-redux';
import { updateTime } from 'src/actions/startup';

import './timer.scss';

// == Component
const Timer = () => {
  // used to dispatch our actions
  const dispatch = useDispatch();

  // the time loop
  setInterval((test) => {
    console.log(test);
    const actualTime = Date.now();
    dispatch(updateTime(actualTime));
  }, 50);

  // retrieving initial date
  const initialDate = useSelector((state) => state.startup.initialDate);
  // retrieving actual real time
  const actualDate = useSelector((state) => state.startup.actualDate);
  // calculing ingame time with delta time between inital time and actual real time
  const timeSpeed = useSelector((state) => state.startup.timeSpeed);
  const ingameDate = initialDate + ((actualDate - initialDate) * timeSpeed);

  // rendering of the component
  return (
    <div className="timer">
      <div>
        initial date: {new Date(initialDate).toString()}
      </div>
      <div>
        actual date: {new Date(actualDate).toString()}
      </div>
      <div>
        ingame date: {new Date(ingameDate).toString()}
      </div>
    </div>
  );
};

export default Timer;
