// == Imports
import { useSelector, useDispatch } from 'react-redux';

import { toggleFormStatus, changeFormField } from 'src/actions/homepage';

// == Component
const UserCreationForm = () => {
  const emailValue = useSelector((state) => state.user.email);
  const passwordValue = useSelector((state) => state.user.password);

  const dispatch = useDispatch();

  return (
    <div className="modal">
      <div className="modal__content creation">

        <div className="modal__content__button-container">
          <button
            type="button"
            className="modal__content__button-close"
            onClick={() => {
              dispatch(toggleFormStatus('creationUser', false));
            }}
          >
            <p>+</p>
          </button>
        </div>

        <form
          className="creation__form"
          onSubmit={(event) => {
            event.preventDefault();
            dispatch(toggleFormStatus('creationUser', false));
            dispatch(toggleFormStatus('creationStartup', true));
          }}
        >
          <div className="creation__form__element">
            <label htmlFor="email">Email*</label>
            <input
              type="email"
              placeholder="moulaga4ever@mpsu.org"
              value={emailValue}
              id="email"
              name="email"
              required
              onChange={(event) => dispatch(changeFormField(event.target.value, event.target.name))}
            />
          </div>

          <div className="creation__form__element">
            <label htmlFor="password">Mot de passe*</label>
            <input
              type="password"
              placeholder="Sùp€rMot2Pass€!"
              value={passwordValue}
              id="password"
              name="password"
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
            Inscription (étape 1/2)
          </button>

        </form>

      </div>
    </div>
  );
};

export default UserCreationForm;
