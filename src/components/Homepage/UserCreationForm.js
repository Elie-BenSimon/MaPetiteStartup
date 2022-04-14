// == Imports
import { useSelector, useDispatch } from 'react-redux';

import { changeFormField } from 'src/actions/homepage';
import { signIn } from 'src/actions/user';

// == Component
const UserCreationForm = () => {
  const emailValue = useSelector((state) => state.user.email);
  const passwordValue = useSelector((state) => state.user.password);

  const dispatch = useDispatch();

  return (
    <form
      className="creation__form"
      onSubmit={(event) => {
        event.preventDefault();
        dispatch(signIn());
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
  );
};

export default UserCreationForm;
