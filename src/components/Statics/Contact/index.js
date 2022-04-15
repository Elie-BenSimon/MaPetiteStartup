// == Imports
import { useSelector } from 'react-redux';

import ClosePageButton from 'src/components/Statics/ClosePageButton';

import './contact.scss';

import elie from 'src/assets/img/team/elie.png';
import justine from 'src/assets/img/team/justine.png';
import abdel from 'src/assets/img/team/abdel.png';
import bryan from 'src/assets/img/team/bryan.png';
import fabien from 'src/assets/img/team/fabien.png';

// == Component
const Contact = () => {
  const startupId = useSelector((state) => state.startup.startupId);

  return (
    <div className="box contact">
      <div className="box__header contact__header">
        <h2 className="box__header__title">Contact</h2>
        {startupId === null && <ClosePageButton page="/" />}
      </div>
      <div className="contact__content">
        <div className="contact__content__form">
          <h3>Contactez-nous</h3>
          <p>Vous pourrez bientôt nous envoyer des mots doux!</p>
        </div>
        <div className="contact__content__team">
          <h3>Présentation de l'équipe</h3>
          <p><span className="bold">Ma Petite Startup</span> a été pensé et développé avec amour et café par:</p>
          <ul className="contact__content__team">
            <li>
              <img src={elie} alt="Elie's avatar" />
              <p><span className="bold">Elie Ben Simon</span></p>
              <p>Lead dev Front</p>
              <p>Product owner</p>
            </li>
            <li>
              <img src={justine} alt="Justine's avatar" />
              <p><span className="bold">Justine Gouaux</span></p>
              <p>Dev Front</p>
              <p>Référente design</p>
            </li>
            <li>
              <img src={abdel} alt="Abdel's avatar" />
              <p><span className="bold">Abdelmajid Dellas</span></p>
              <p>Lead dev Back</p>
            </li>
            <li>
              <img src={bryan} alt="Bryan's avatar" />
              <p><span className="bold">Bryan Mottais</span></p>
              <p>Dev Back</p>
            </li>
            <li>
              <img src={fabien} alt="Fabien's avatar" />
              <p><span className="bold">Fabien Gahery</span></p>
              <p>Dev Back</p>
            </li>
          </ul>
        </div>
      </div>
    </div>

  );
};

export default Contact;
