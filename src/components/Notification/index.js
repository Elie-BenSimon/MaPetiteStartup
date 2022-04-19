// == Imports
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleNewNotification } from 'src/actions/startup';

// == Component
const Notification = () => {
  const dispatch = useDispatch();
  const notificationsList = useSelector((state) => state.startup.notificationsList);

  useEffect(() => {
    dispatch(toggleNewNotification(false));
  });

  return (
    <div className="box notification">
      <div className="box__header notification__header">
        <h2 className="box__header__title">Notifications</h2>
      </div>
      <div className="content notification__content">
        <h3>Développeurs ayant démissionés pour cause de burnout</h3>
        <div>
          {notificationsList.filter((notification) => notification.category === 'burnout').map((notification) => (
            <p>
              {notification.message} a démissioné pour cause de surmenage le {notification.date}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notification;
