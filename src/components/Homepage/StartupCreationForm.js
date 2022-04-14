// == Imports
import { useSelector, useDispatch } from 'react-redux';

import { toggleFormStatus, changeFormField } from 'src/actions/homepage';
import { logIn } from 'src/actions/user';

import money from 'src/assets/img/logo/money.png';
import rocket from 'src/assets/img/logo/rocket.png';
import okay from 'src/assets/img/logo/okay.png';
import investment from 'src/assets/img/logo/investment.png';
import thunder from 'src/assets/img/logo/thunder.png';
import shaka from 'src/assets/img/logo/shaka.png';

import CloseModalButton from '../Layouts/Modal/CloseModalButton';

// == Component
const StartupCreationForm = () => {
  const nameValue = useSelector((state) => state.startup.name);
  const sloganValue = useSelector((state) => state.startup.slogan);
  const logoValue = useSelector((state) => state.startup.logo);

  const logoImages = [
    {
      id: 1,
      name: 'money',
      image: money,
      alt: 'Money bag logo',
    },
    {
      id: 2,
      name: 'rocket',
      image: rocket,
      alt: 'Rocket logo',
    },
    {
      id: 3,
      name: 'okay',
      image: okay,
      alt: 'Hand doing okay sign logo',
    },
    {
      id: 4,
      name: 'ivestment',
      image: investment,
      alt: 'Dollar flower growing on coins logo',
    },
    {
      id: 5,
      name: 'thunder',
      image: thunder,
      alt: 'Thunder logo',
    },
    {
      id: 6,
      name: 'shaka',
      image: shaka,
      alt: 'Shaking hand logo',
    },
  ];

  const dispatch = useDispatch();

  // fake token before connecting to API
  const token = Math.random();

  return (
    <div className="modal">
      <div className="modal__content creation startup">

        <div className="modal__content__button-container">
          <CloseModalButton modal="creationStartup" />
        </div>

        <form
          className="creation__form startup__form"
          onSubmit={(event) => {
            event.preventDefault();
            dispatch(toggleFormStatus('creationStartup', false));
            dispatch(logIn(token));
          }}
        >
          <div className="creation__form__element startup__form__element">
            <label htmlFor="strartupName">Nom de ta startup*</label>
            <input
              type="text"
              placeholder="La meilleure startup"
              value={nameValue}
              id="name"
              name="name"
              required
              onChange={(event) => dispatch(changeFormField(event.target.value, event.target.name))}
            />
          </div>

          <div className="creation__form__element startup__form__element">
            <label htmlFor="slogan">Slogan*</label>
            <input
              type="text"
              placeholder="Vers l'infini et la moulaga!"
              value={sloganValue}
              id="slogan"
              name="slogan"
              required
              onChange={(event) => dispatch(changeFormField(event.target.value, event.target.name))}
            />
          </div>

          <div className="creation__form__element startup__form__element">
            <label htmlFor="logo">Logo*</label>
            <ul>
              {logoImages.map((logo) => (
                <li key={logo.id}>
                  <input type="radio" id={logo.id} name={logo.name} value={logo.name} />
                  <label htmlFor={logo.id}><img src={logo.image} alt={logo.alt} className="logo" /></label>
                </li>
              ))}
            </ul>
          </div>

          <div className="modal__content__info">
            <p>*Information obligatoire</p>
          </div>

          <button
            type="submit"
            className="button modal__content__button"
          >
            Inscription (étape 2/2)
          </button>

        </form>

      </div>
    </div>
  );
};

export default StartupCreationForm;
