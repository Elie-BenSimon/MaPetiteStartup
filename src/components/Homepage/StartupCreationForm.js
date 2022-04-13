// == Imports
import { useSelector, useDispatch } from 'react-redux';

import { createStartup } from 'src/actions/startup';
import { toggleFormStatus, changeFormField } from 'src/actions/homepage';
import { logIn } from 'src/actions/user';

// == Component
const StartupCreationForm = () => {
  const nameValue = useSelector((state) => state.startup.name);
  const sloganValue = useSelector((state) => state.startup.slogan);

  const dispatch = useDispatch();

  return (
    <form
      className="creation__form"
      onSubmit={(event) => {
        event.preventDefault();
        dispatch(toggleFormStatus('creationStartup', false));
        dispatch(logIn(token));
      }}
    >
      <div className="creation__form__element">
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

      <div className="creation__form__element">
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
  );
};

export default StartupCreationForm;
