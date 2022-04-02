// == Import
import { useSelector, useDispatch } from 'react-redux';
import { updateTime } from 'src/actions/startup';

import './timer.scss';

// == Component
const Timer = () => {
  // used to dispatch our actions
  const dispatch = useDispatch();

  // the time loop
  setInterval(() => {
    const actualTime = new Date(Date.now());
    dispatch(updateTime(actualTime));
  }, 50);

  // retrieving date from the state
  const date = useSelector((state) => state.startup.date);
  console.log(date);
  // rendering of the component
  return (
    <div className="timer">
      {date.toString()}
    </div>
  );
};

export default Timer;
