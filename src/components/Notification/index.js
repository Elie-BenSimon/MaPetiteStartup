// == Imports
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleNewNotification } from 'src/actions/startup';
import './notification.scss';

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

      <div className="box__content notification__content">
        <h3>Développeurs ayant démissionés</h3>
        <div>
          {notificationsList.filter((notification) => notification.category === 'burnout').map((notification) => (
            <div className="notification__content__element">
              <p>Le {notification.date} :</p>
              <p>
                <span className="bold">
                  {notification.message}
                </span>
                a démissioné après avoir atteint son taux maximum de lassitude
              </p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Notification;
