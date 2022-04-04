// === Imports
import './navBar.scss';

import { NavLink } from 'react-router-dom';

import startup from 'src/assets/img/pagePrincipale.png';
import team from 'src/assets/img/equipe.png';
import projects from 'src/assets/img/projets.png';
import recruitment from 'src/assets/img/recrutement.png';
import rules from 'src/assets/img/regles.png';

// == Component
const NavBar = () => {
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
      slug: '/project',
    },
    {
      name: 'Recrutement',
      icon: recruitment,
      slug: '/recruitment',
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
          key={page.name}
          className={({ isActive }) => (
            isActive ? 'navbar__element navbar__element__active' : 'navbar__element'
          )}
          to={page.slug}
        >
          <img className="navbar__element__icon" src={page.icon} alt="" />
          <div className="navbar__element__name">
            <p>{page.name}</p>
          </div>
        </NavLink>
      ))}
    </div>
  );
};

export default NavBar;
