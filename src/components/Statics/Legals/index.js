/* eslint-disable max-len */

// == Imports
import './legals.scss';

// == Component
const Legals = () => (
  <div className="legals">
    <div className="box-header legals__header">
      <h2>Mentions légales &#38; conditions d'utilisation</h2>
    </div>
    <div className="legals__content">
      <h3 className="legals__content__title">
        Mention légales
      </h3>
      <h4>Objectifs de Ma petite startup</h4>
      <p>
        Ma Petite Startup est un site de jeu en ligne à visée ludique.
      </p>

      <h4>Collecte et utilisation des données</h4>
      <p>
        En France, les données personnelles sont notamment protégées par la loi n° 78-87 du 6 janvier 1978, la loi n° 2004-801 du 6 août 2004, l’article L. 226-13 du Code pénal et la
        Directive Européenne du 24 octobre 1995.
      </p>
      <p>
        Ma Petite Startup ne recueille uniquement que l'adresse email de l'utilisateur.rice nécessaire à la création de son compte de joueur.se, et utilisée uniquement à cette fin.
      </p>
      <p>
        Celle-ci est stockée de manière sécurisée durant toute la durée d'activitée du compte de joueur.se. Elle n’est ni publiée à l’insu de l’utilisateur.rice, ni échangée, transférée, cédée ou vendue sur un support quelconque à des tiers.
      </p>

      <h4>Origines des illustrations</h4>
      <p>
        Toutes les illustrations présentes sur le site de Ma petite startup sont des images libres de droits.
      </p>
      <p>
        Elles sont issues de
        <ul>
          <li>
            <a href="https://www.flaticon.com/">Flaticon (icônes)</a>
            <ul> Auteurs:
              <li><a href="https://www.flaticon.com/authors/freepik">Freepik</a></li>
              <li><a href="https://www.flaticon.com/authors/dooder">Dooder</a></li>
            </ul>
          </li>
          <li>
            <a href="https://www.freepik.com">Freepik (images)</a>
            <ul> Auteurs:
              <li><a href="https://www.freepik.com/dooder">Dooder</a></li>
            </ul>
          </li>
        </ul>
      </p>

      <h3 className="legals__content__title">
        Conditions générales d'utilisation
      </h3>
      <p>
        L'utilisation de termes insultants ou discrimants est formellement interdite sur Ma Petite Startup.
      </p>
      <p>
        Les administateur.rices.s de Ma Petite Starup se réservent le droit de supprimer le compte d'un.e utilisateur.rice si les conditions générales d'utilisation sus-indiquées ne sont pas respectées.
      </p>
      <p>
        Toutefois, les administateur.rices.s ne peuvent pas êtres tenu.e.s pour responsables d'un comportement de joueur inadéquat.
      </p>

    </div>
  </div>

);

export default Legals;
