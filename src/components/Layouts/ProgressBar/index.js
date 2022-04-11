// == Imports
import './progress-bar.scss';
import arrayify from 'src/utils/arrayify';

// == Component
const ProgressBar = ({ value, maxValue }) => {
  const progressBarArray = arrayify(Math.round(value / maxValue * 20));

  return (
    <div className="progress-bar">
      {progressBarArray.map(() => (
        <div className="progress-bar__notch-container">
          <div className="progress-bar__notch" />
        </div>
      ))}
    </div>
  );
};

export default ProgressBar;
