// === Imports
import './header.scss';
import PropTypes from 'prop-types';

// == Component
const Header = ({ children }) => (
  <header className="header">
    <div className="header__content">
      <h1 className="header__content__title">
        Ma petite
        <span className="header__content__title--red"> S</span>
        <span className="header__content__title--yellow">T</span>
        <span className="header__content__title--green">A</span>
        <span className="header__content__title--blue">R</span>
        <span className="header__content__title--red">T</span>
        <span className="header__content__title--yellow">U</span>
        <span className="header__content__title--green">P</span>
      </h1>
      {/* <p className="header__content__subtitle">
        Deviens le directeur de la startup la plus en vogue de la Silicon Valley
      </p> */}
    </div>
    {children}
  </header>
);

// == Proptypes validation
Header.propTypes = {
  children: PropTypes.node,
};

Header.default = {
  children: null,
};

export default Header;
