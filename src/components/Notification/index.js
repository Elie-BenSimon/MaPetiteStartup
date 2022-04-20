// == Imports
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleNewNotification } from 'src/actions/startup';
import { stopNotification } from 'src/actions/project';
import './notification.scss';

// == Component
const Notification = () => {
  const dispatch = useDispatch();
  const notificationsListStartup = useSelector((state) => state.startup.notificationsList);
  const notificationsListProject = useSelector((state) => state.project.notificationsList);

  useEffect(() => {
    dispatch(toggleNewNotification(false));
    dispatch(stopNotification());
  });

  return (
    <div className="box notification">

      <div className="box__header notification__header">
        <h2 className="box__header__title">Notifications</h2>
      </div>

      <div className="box__content notification__content">
        <h3>Développeurs ayant démissionés</h3>
        <div>
          {notificationsListStartup.filter((notification) => notification.category === 'burnout').map((notification) => (
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

        <h3>Projets terminés</h3>
        <div>
          {notificationsListProject.filter((notification) => notification.category === 'projectOver').map((notification) => (
            <div className="notification__content__element">
              <p>Le {notification.date} :</p>
              <p>
                Ton projet
                <span className="bold">
                  {notification.message}
                </span>
                est terminé et a rapporté XXX points de réputation et XXX $ !
              </p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Notification;
