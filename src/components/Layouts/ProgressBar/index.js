// == Imports
import './progress-bar.scss';
import arrayify from 'src/utils/arrayify';

// == Component
const ProgressBar = ({ value, maxValue, intensity='' }) => {
  const progressBarArray = arrayify(Math.round(value / maxValue * 20));

  return (
    <div className="progress-bar">
      {progressBarArray.map(() => (
        <div className={`progress-bar__notch progress-bar__notch${intensity}`} />
      ))}
    </div>
  );
};

export default ProgressBar;
