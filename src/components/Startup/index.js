import './startup.scss';
import Employees from 'src/components/Dev/Employees';

const Startup = () => (
  <div className="startup">
    <div className="startup__header">
      <h2>Ma super start-up</h2>
    </div>
    <div>
      <Employees />
    </div>
  </div>
);

export default Startup;
