// === Imports
import './navBar.scss';

import { NavLink } from 'react-router-dom';

import startup from 'src/assets/img/navBar/home.png';
import notification from 'src/assets/img/navBar/notification.png';
import notificationActive from 'src/assets/img/navBar/notification--active.png';
import team from 'src/assets/img/navBar/team.png';
import projects from 'src/assets/img/navBar/project.png';
import recruitment from 'src/assets/img/navBar/recruitment.png';
import rules from 'src/assets/img/navBar/rules.png';
import { useSelector } from 'react-redux';

// == Component
const NavBar = () => {
  const isNewNotification = useSelector((state) => state.startup.isNewNotification);

  const pages = [
    {
      name: 'Page Principale',
      icon: startup,
      slug: '/',
    },
    {
      name: 'Equipe',
      icon: team,
      slug: '/employees',
    },
    {
      name: 'Projets',
      icon: projects,
      slug: '/projects',
    },
    {
      name: 'Recrutement',
      icon: recruitment,
      slug: '/recruitment',
    },
    {
      name: 'Notifications',
      icon: isNewNotification ? notificationActive : notification,
      slug: '/notification',
    },
    {
      name: 'Règles de jeu',
      icon: rules,
      slug: '/rules',
    },
  ];
  return (
    <div className="navbar">
      {pages.map((page) => (
        <NavLink
          key={page.slug}
          className={({ isActive }) => (
            isActive ? 'navbar__element navbar__element__active' : 'navbar__element'
          )}
          to={page.slug}
        >
          <img className={page.icon === notificationActive ? 'icone navbar__element__icon shake' : 'icone navbar__element__icon'} src={page.icon} alt="" />
          <div className="navbar__element__name">
            <p>{page.name}</p>
          </div>
        </NavLink>
      ))}
    </div>
  );
};

export default NavBar;
