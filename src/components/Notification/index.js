// == Imports
import { useSelector } from 'react-redux';

// == Component
const Notification = () => {
  const notificationsList = useSelector((state) => state.startup.notificationsList);

  return (
    <div className="box notification">
      <div className="box__header notification__header">
        <h2 className="box__header__title">Notifications</h2>
      </div>
      <div className="content notification__content">
        <h3>Développeurs ayant démissionés pour cause de burnout</h3>
      </div>
    </div>
  );
};

export default Notification;
