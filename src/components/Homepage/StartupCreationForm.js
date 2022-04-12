// == Imports
import { useSelector, useDispatch } from 'react-redux';

import { changeFormField } from 'src/actions/homepage';
import { createStartup } from 'src/actions/startup';
import CloseModalButton from '../Layouts/Modal/CloseModalButton';

// == Component
const StartupCreationForm = () => {
  const nameValue = useSelector((state) => state.startup.name);
  const sloganValue = useSelector((state) => state.startup.slogan);

  const dispatch = useDispatch();

  return (
    <div className="modal">
      <div className="modal__content creation">

        <div className="modal__content__button-container">
          <CloseModalButton modal="creationStartup" />
        </div>

        <form
          className="creation__form"
          onSubmit={(event) => {
            event.preventDefault();
            dispatch(createStartup());
          }}
        >
          <div className="creation__form__element">
            <label htmlFor="startupName">Nom de ta startup*</label>
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

      </div>
    </div>
  );
};

export default StartupCreationForm;
