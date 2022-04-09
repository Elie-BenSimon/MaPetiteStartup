// === Imports
import './footer.scss';

import { NavLink } from 'react-router-dom';

import heart from 'src/assets/img/heart.png';
import coffeeCup from 'src/assets/img/coffeeCup.png';

// == Component
const Footer = () => (
  <footer className="footer">
    <div className="footer__content">
      <div className="footer__content__links">
        <NavLink
          className={({ isActive }) => (
            isActive ? 'footer__content__link footer__content__link__active' : 'footer__content__link'
          )}
          to="/contact"
        >
          Contact
        </NavLink>
        <NavLink
          className={({ isActive }) => (
            isActive ? 'footer__content__link footer__content__link__active' : 'footer__content__link'
          )}
          to="/legals"
        >
          Mentions légales
        </NavLink>
      </div>
      <div className="footer__content__text">
        <p>Fait avec</p>
        <img className="text-image" src={heart} alt="amour" />
        <p>&</p>
        <img className="text-image" src={coffeeCup} alt="café" />
        <p>| Copyright 2022</p>
      </div>
    </div>
  </footer>
);

export default Footer;
