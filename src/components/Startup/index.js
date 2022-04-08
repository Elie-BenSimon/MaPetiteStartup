import './startup.scss';
import Employees from 'src/components/Dev/Employees';

const Startup = () => (
  <div className="box startup">
    <div className="box__header startup__header">
      <h2 className="box__header__title ">Ma super start-up</h2>
    </div>
    <div>
      <Employees />
    </div>
  </div>
);

export default Startup;
